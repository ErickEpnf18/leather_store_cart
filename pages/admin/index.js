import { useState, useEffect } from "react";
import React from "react";
import NavBarAdmin from "components/navbarAdmin";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { outputWithSpace } from "utils/";
import {
  BottomNavigation,
  BottomNavigationAction,
  Button,
  Container,
} from "@mui/material";
import SplitButton from "components/splitbutton";
import style from "./Admin.module.css";
import { getItemsByConditionAll } from "service/api";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import SaveIcon from "@mui/icons-material/Save";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DialogEdit from "components/dialog";
import SettingsIcon from "@mui/icons-material/Settings";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

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
        date: new Date().toLocaleString(),
        customerId: "Eddison Fuentes",
        amount: 3,
      },
      {
        date: new Date().toLocaleString(),
        customerId: "Marco Carrera",
        amount: 3,
      },
      {
        date: new Date().toLocaleString(),
        customerId: "Maria Cifuentes",
        amount: 1,
      },
    ],
  };
}
function Row(props) {
  const { row, handlerDelete, handlerUpdate, index} = props;
  const [open, setOpen] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);
  const actions = [
    {
      icon: <DeleteForeverIcon />,
      name: "Eliminar",
      click: () => {
        setOpen(false);
        handlerDelete(row.name);
      },
    },
    { icon: <EditIcon />, name: "Editar", click: () => setOpenDialog(true) },
  ];
  const handlerOpen = (boolean) => {
    setOpenDialog(boolean);
    setOpen(false);
  };
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
        <TableCell align="right">${row.price}</TableCell>
        <TableCell align="right">${row.discount}</TableCell>
        <TableCell align="right">{row.stock}</TableCell>
        <TableCell align="right">{row.size}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
                <div
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    width: "100%",
                  }}
                >
                  <span>
                    <Box
                      sx={{
                        height: 35,
                        transform: "translateZ(0px)",
                        flexGrow: 1,
                      }}
                    >
                      <SpeedDial
                        ariaLabel="SpeedDial basic example"
                        sx={{ position: "absolute", bottom: 16, right: 16 }}
                        icon={<SpeedDialIcon />}
                      >
                        {actions.map((action) => (
                          <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            onClick={action.click}
                          />
                        ))}
                      </SpeedDial>
                    </Box>
                  </span>
                </div>
              </Typography>
              <DialogEdit
                openDialog={openDialog}
                handlerOpen={handlerOpen}
                handlerUpdate={handlerUpdate}
                data={row}
                index={index}
              />

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
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
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
  handlerUpdate: PropTypes.func,
  key: PropTypes.number,
};

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 3.99),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 4.99),
  createData("Eclair", 262, 16.0, 24, 6.0, 3.79),
  createData("Cupcake", 305, 3.7, 67, 4.3, 2.5),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 1.5),
];

export default function Admin() {
  const [rows, setRows] = useState([]);
  const [nameCol, setNameCol] = useState({ category: "women", type: "jeans" });
  const [openDialog, setOpenDialog] = React.useState(false);

  useEffect(() => {
    const getProducts = async () => {
      // const response = await fetch(`/data/women/jeans.json`);
      let str = `/data/${nameCol.category}/${nameCol.type}.json`;
      //firebase
      const allItems = await getItemsByConditionAll(nameCol.type);
      // setProduct(allItems[0].data);
      //firebase

      // const response = await fetch(str);
      // const data = await response.json();

      // setProducts(data);
      // setFilteredProducts(data);
      if (allItems[0].data) {
        // name,
        // price,
        // discount,
        // stock,
        // size,
        // amount,
        const newItems = allItems[0].data.map((item) =>
          // createData(item.title, item.price, 159, 6.0, 24, 4.0, 3.99)
          createData(item.title, item.price, 159, 6.0, 25, 4.0)
        );
        setRows(newItems);
      }
    };

    getProducts();
  }, [nameCol]);
  const handleItemSelected = (value) => {
    let str = "";
    switch (value.index) {
      case 0:
        str = "coats";
        break;
      case 1:
        str = "formal_shirts";
        break;
      case 2:
        str = "sportswear";

        break;
      case 3:
        str = "formal_shirts";

        break;
      case 4:
        str = "jeans";
        break;
      case 5:
        str = "makeup";
        break;
      default:
        break;
    }
    if (value.index <= 2) {
      let obj = { category: "men", type: str };
      setNameCol(obj);
    } else {
      let obj = { category: "woman", type: str };
      setNameCol(obj);
    }
  };
  const handlerOpenDialog = (boolean) => {
    setOpenDialog(boolean);
  };
  const handlerDelete = (value) => {
    const newRows = rows.filter((i) => i.name !== value);
    setRows(newRows);
  };
  const handlerUpdate = (row) => {
    const newRows = rows.filter((i, index) => index !== row.index);
    newRows.splice(row.index, 0, row); // to put in the same index of the array
    const newItems = newRows.map((item) =>
      createData(
        item.name,
        item.price,
        item.discount,
        item.stock,
        item.size,
        4.0
      )
    );
    setRows(newItems);
  };
  const handlerAddProduct = (newPro) => {
    const newRows = rows;
    newRows.splice(0, 0, newPro);
    const newItems = newRows.map((item) =>
    createData(
      item.name,
      item.price,
      item.discount,
      item.stock,
      item.size,
      4.0
    )
  );
  setRows(newItems);
  };
  const valuesEmpties = {
    name: " ",
    price: " ",
    discount: " ",
    stock: " ",
    size: " ",
    amount: " ",
  };

  return (
    <>
      <NavBarAdmin />
      <Container className={style.containerSplitButton}>
        <SplitButton itemSelected={handleItemSelected} />
      </Container>
      <Container className={style.containerAddProduct}>
        <Button
          variant="contained"
          size="small"
          startIcon={<AddCircleOutlineIcon />}
          onClick={() => setOpenDialog(true)}
        >
          Agregar producto
        </Button>
        <DialogEdit
          openDialog={openDialog}
          handlerOpen={handlerOpenDialog}
          handlerUpdate={handlerAddProduct}
          data={valuesEmpties}
          index={0}
        />
      </Container>

      <TableContainer component={Paper}>
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
            {rows.map((row, index) => (
              <Row
                key={index}
                index={index}
                row={row}
                handlerDelete={handlerDelete}
                handlerUpdate={handlerUpdate}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
