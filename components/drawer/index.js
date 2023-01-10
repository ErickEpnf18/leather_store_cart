import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import DialogFormInvoice from "components/dialogFormInvoice";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {
  Collapse,
  Paper,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Container,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { getItemsByConditionAll } from "service/api";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import style from "./Drawer.module.css";

const drawerBleeding = 56;

const Root = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor:
    theme.palette.mode === "light"
      ? grey[100]
      : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));

function SwipeableEdgeDrawer(props) {
  const { window, toggleDrawer, open } = props;
  //   const [open, setOpen] = React.useState(true);
  //table
  const [rows, setRows] = useState([]);
  const [array, setArray] = useState(null);
  const [openDialogForm, setOpenDialogForm] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      let str = `/data/women/jeans.json`;
      console.log(str, "str");
      //firebase
      // console.log("data", allItems[0].data);

      const allItems = await getItemsByConditionAll("jeans");
      // const response = await fetch(`/data/men/jackets.json`);
      // const data = await response.json();
      // console.log("data", allItems[0].data);
      if (allItems[0].data) {
        // name,
        // price,
        // discount,
        // stock,
        // size,
        // amount,
        const newItems = allItems[0].data.map((item) =>
          createData(item.title, item.price, 159, 6.0, 24, 4.0, 3.99)
        );
        // console.log("ultra data: ", newItems);
        const array = newItems.filter((i, index) => index < 15);
        setArray(array)
        setRows(newItems);
      }
    };
    getProducts();
  }, []);
  //table

  // This is used only for the example
  const container =
    window !== undefined ? () => window().document.body : undefined;
  const handlerOpen = (value) => {
    setOpenDialogForm(value);
  };
  const handlerDelete = (value) => {
    const newRows = array.filter((i) => i.name !== value);
    // debugger;
    setArray(newRows);
  };

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(80% - ${drawerBleeding}px)`,
            overflow: "visible",
          },
        }}
      />
      {/* <Box sx={{ textAlign: 'center', pt: 1 }}>
        <Button onClick={toggleDrawer(true)}>Open</Button>
      </Box> */}
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            px: 4,
            pb: 2,
            height: "100%",
            overflow: "auto",
          }}
        >
          <StyledBox
            sx={{
              position: "absolute",
              top: -drawerBleeding,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              visibility: open ? "visible" : "hidden",
              right: 0,
              left: 0,
            }}
          >
            <Puller />
            <Typography sx={{ p: 2, color: "text.secondary" }}>
              {array ? array.length: "?"} resultados en el carrito
            </Typography>
            <Container className={style.containerGenerateInvoice}>
              <Button
                variant="contained"
                size="small"
                startIcon={<HistoryEduIcon />}
                onClick={() => setOpenDialogForm(true)}
              >
                Generar Factura
              </Button>
              <DialogFormInvoice open={openDialogForm} handlerOpen={handlerOpen} data={array} />
            </Container>
          </StyledBox>
          <TableContainer component={Paper} className={style.containerTable}>
            <Table aria-label="collapsible table">
              <TableHead>
                <TableRow>
                  <TableCell />
                  <TableCell>Nombre</TableCell>
                  <TableCell align="right">Precio</TableCell>
                  <TableCell align="right">Descuento</TableCell>
                  <TableCell align="right">Stock</TableCell>
                  <TableCell align="right">Medidas</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {array ?
                array.map((row, index) => (
                  <Row key={index} row={row} handlerDelete={handlerDelete}/>
                )) : <></>}
              </TableBody>
            </Table>
          </TableContainer>
          <Skeleton variant="rectangular" height="10%" />
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}

SwipeableEdgeDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
  toggleDrawer: PropTypes.func,
  open: PropTypes.bool,
};

// table
function createData(name, price, discount, stock, size, amount) {
  return {
    name,
    price,
    discount,
    stock,
    size,
    amount,
    history: [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous",
        amount: 1,
      },
    ],
  };
}
function Row(props) {
  const { row, handlerDelete } = props;
  const [open, setOpen] = React.useState(false);
  const handlerDeleteAndClose = (val) => {
    handlerDelete(val)
    setOpen(false);
  }
  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.price}</TableCell>
        <TableCell align="right">{row.discount}</TableCell>
        <TableCell align="right">{row.stock}</TableCell>
        <TableCell align="right">{row.size}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Button variant="contained" startIcon={<DeleteForeverIcon/>} onClick={()=>handlerDeleteAndClose(row.name)}>
                Eliminar Producto
              </Button>
            </Box>
            {/* <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Fecha de compra</TableCell>
                    <TableCell>Clientes</TableCell>
                    <TableCell align="right">Cantidad</TableCell>
                    <TableCell align="right">Precio total ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box> */}
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
// table

Row.propTypes = {
  row: PropTypes.shape({
    stock: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired,
  }).isRequired,
  handlerDelete: PropTypes.func,
};

export default SwipeableEdgeDrawer;
