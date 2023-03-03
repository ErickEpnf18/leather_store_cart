import { useState, useEffect, useMemo } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import {
  ThemeProvider,
  useTheme,
  createTheme,
  SpeedDialIcon,
  SpeedDial,
  SpeedDialAction,
  IconButton,
  Tooltip,
  Container,
} from "@mui/material";
import * as locales from "@mui/material/locale";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";

import * as ic from "../../utils/icons";
import { pink, blue } from "@mui/material/colors";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {
  addProduct,
  deleteProduct,
  listProducts,
  updateProduct,
} from "../../fetchers/admin";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { Modal } from "react-bootstrap";
import { Button, Col, Row } from "react-bootstrap";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Button as ButtonMUI } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.selected,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const columns_products = [
  { id: "productoCod", label: "Codigo Producto", minWidth: 150 },
  { id: "productoDescripcion", label: "Descripcción", minWidth: 170 },
  { id: "img", label: "Imagen", minWidth: 20 },
  { id: "categoria", label: "Categoria", minWidth: 50 },
  { id: "descuento", label: "Descuento", minWidth: 60 },
  { id: "productoEstado", label: "Estado", minWidth: 60 },
  { id: "productoValor", label: "Valor", minWidth: 60 },
  { id: "productoCantidad", label: "Cantidad", minWidth: 60 },
  { id: "productoIva", label: "Iva", minWidth: 40 },
];
// Id	FkEmpresa	ProductoCod	ProductoDescripcion	Img	Categoria	Descuento	ProductoEstado	ProductoValor	ProductoCantidad	ProductoIva

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
  {
    id: "population",
    label: "Population",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Size\u00a0(km\u00b2)",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "Density",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];
const rows = [
  createData("India", "IN", 1324171354, 3287263),
  createData("China", "CN", 1403500365, 9596961),
  createData("Italy", "IT", 60483973, 301340),
  createData("United States", "US", 327167434, 9833520),
  createData("Canada", "CA", 37602103, 9984670),
  createData("Australia", "AU", 25475400, 7692024),
  createData("Germany", "DE", 83019200, 357578),
  createData("Ireland", "IE", 4857000, 70273),
  createData("Mexico", "MX", 126577691, 1972550),
  createData("Japan", "JP", 126317000, 377973),
  createData("France", "FR", 67022000, 640679),
  createData("United Kingdom", "GB", 67545757, 242495),
  createData("Russia", "RU", 146793744, 17098246),
  createData("Nigeria", "NG", 200962417, 923768),
  createData("Brazil", "BR", 210147125, 8515767),
];
function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

export default function StickyHeadTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [locale, setLocale] = useState("zhCN");
  const [show, setShow] = useState(false);
  const [titleModal, setTitleModal] = useState({title:'', event:'', titleBtn: ''} );

  const [editID, setEditID] = useState("");
  const [editProductCod, setEditProductCod] = useState("");
  const [editProductDescription, setEditProductDescription] = useState("");
  const [editImg, setEditImg] = useState("");
  const [editCategory, setEditCategory] = useState("");
  const [editDiscount, setEditDiscount] = useState(0);
  const [editProductState, setEditProductState] = useState(0);
  const [editProductValue, setEditProductValue] = useState(0);
  const [editProductQuantity, setEditProductQuantity] = useState(0);
  const [editProductIva, setEditProductIva] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const theme = useTheme();

  const themeWithLocale = useMemo(
    () => createTheme(theme, locales["esES"]),
    [locale, theme]
  );

  const handleChangePage = (event, newPage) => {
    console.log("new page", newPage);
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [data, setData] = useState([]);

  ///functions to .net

  const getdatas = async () => {
    const res = await listProducts();
    setData(res.data);
  };
  useEffect(() => {
    getdatas();
  }, []);

  async function handleDeleteItem(item) {
    if (
      window.confirm(`Esta seguro de eliminar ${item.productoDescripcion}`) ===
      true
    ) {
      await deleteProduct(item.id)
        .then((res) => {
          if (res.status === 200) {
            getdatas();
            toast.success("Producto borrado");
          }
        })
        .catch((err) => {
          toast.error(err);
        });
    }
  }

  async function handleAddItem(item) {
    setTitleModal({
      title:"Agregar un producto",
      titleBtn:"Agregar",
      event:"add"
      })
    setShow(true);
  }
  async function handleEditItem(item) {
    setTitleModal({
      title:`Modificar el producto ${item.productoDescripcion}`,
      titleBtn:"Actualizar",
      event:"update"
      })
    setEditID(item.id);
    setShow(true);
  }

  const handleEditProductState = (target) => {
    if (target.checked) {
      setEditProductState(1);
    } else {
      setEditProductState(0);
    }
  };
  const handleEditProductIva = (target) => {
    if (target.checked) {
      setEditProductIva(1);
    } else {
      setEditProductIva(0);
    }
  };
  async function handleTriggerProduct(ev) {
    if(ev === 'update'){
      const obj = {
        id: editID,
        fkEmpresa: 6,
        productoCod: editProductCod,
        productoDescripcion: editProductDescription,
        img: editImg,
        categoria: editCategory,
        descuento: editDiscount,
        productoEstado: editProductState === 1 ? true : false, ///????
        productoValor: editProductValue,
        productoCantidad: editProductQuantity,
        productoIva: editProductIva === 1 ? true : false,
      };
      // const sam = {
      //   id: 10,
      //   fkEmpresa: 6,
      //   productoCod: "string",
      //   productoDescripcion: "string",
      //   img: "string",
      //   categoria: "string",
      //   descuento: 0,
      //   productoEstado: true,
      //   productoValor: 0,
      //   productoCantidad: 0,
      //   productoIva: true,
      // };
  
      await updateProduct(editID, obj)
      .then((res) => {
        if (res.status === 200) {
          getdatas();
          toast.success("Producto actualizado");
          setShow(false);
        }
      })
      .catch((err) => {
        toast.error(err);
      });
      clear();

    }
    if(ev === 'add'){
      const obj = {
        "kEmpresa": 6,
        "productoCod": editProductCod,
        "productoDescripcion": editProductDescription,
        "img": editProductDescription,
        "categoria": editCategory,
        "descuento": editDiscount,
        "productoEstado": editProductState === 1 ? true : false, ///????
        "productoValor": editProductValue,
        "productoCantidad": editProductQuantity,
        "productoIva": editProductIva === 1 ? true : false,
      }
      try{

        await addProduct(obj)
        toast.success("Producto agregado");
        setShow(false);
      }catch(err){
        toast.error(err);

      }
    }

  }

  function clear() {
    setEditID("");
    setEditProductCod("");
    setEditProductDescription("");
    setEditImg("");
    setEditCategory("");
    setEditDiscount(0);
    setEditProductState(0);
    setEditProductValue(0);
    setEditProductState(0);
    setEditProductQuantity(0);
    setEditProductState(0);
    setEditProductIva(0);
  }
  return (
    <div className="me-3 pe-3">
      <ButtonMUI
        id="id_btn_add_product"
        variant="contained"
        size="small"
        className="my-3"
        startIcon={<AddCircleOutlineIcon />}
        onClick={() => handleAddItem() }
      >
        Agregar producto
      </ButtonMUI>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <ToastContainer />

        {/* <DialogEdit
          openDialog={openDialog}
          handlerOpen={handlerOpenDialog}
          handlerUpdate={handlerAddProduct}
          data={valuesEmpties}
          index={0}
        /> */}

        <TableContainer sx={{ maxHeight: 500 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <StyledTableCell></StyledTableCell>
                {columns_products.map((column, inx) => (
                  <StyledTableCell
                    key={column.id + `${inx}`}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <StyledTableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={index}
                    >
                      <TableCell>
                        <Tooltip title="Eliminar" placement="right">
                          <IconButton
                            onClick={() => handleDeleteItem(row)}
                            id={`id_btn_delete_${index}`}
                            sx={{ color: pink[500] }}
                          >
                            {ic.icon_delete_item}
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Editar" placement="right">
                          <IconButton
                            onClick={() => handleEditItem(row)}
                            id={`id_btn_edit_${index}`}
                            sx={{ color: blue["A400"] }}
                          >
                            {ic.icon_edit_item}
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                      {/* <TableCell key={row.ProductoCod} align={45}>
                        {row.format(row.ProductoCod)}
                        </TableCell> */}
                      {columns_products.map((column, inx) => {
                        const value = row[column.id];
                        return (
                          <TableCell
                            key={column.id + `${inx}`}
                            align={column.align}
                          >
                            {/* {column.format && typeof value === "number"
                            ? column.format(value)
                            : value} */}
                            {typeof value === "boolean"
                              ? value === true
                                ? 1
                                : 0
                              : value}
                          </TableCell>
                        );
                      })}
                    </StyledTableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>{titleModal.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col className="col-sm-4 mb-3">
                <label>Producto Codigo</label>
                <input
                  id={`id_input_pro_state`}
                  type="text"
                  className="form-control"
                  placeholder="Codigo"
                  value={editProductCod}
                  onChange={({ target }) => setEditProductCod(target.value)}
                />
              </Col>

              <Col className="col-sm-4 mb-3">
                <label>Descripccion</label>
                <input
                  id={`id_input_pro_description`}
                  type="text"
                  className="form-control"
                  placeholder="Descripcción"
                  value={editProductDescription}
                  onChange={({ target }) =>
                    setEditProductDescription(target.value)
                  }
                />
              </Col>

              <Col className="col-sm-4 mb-3">
                <label>Imagen</label>
                <input
                  id={`id_input_pro_img`}
                  type="text"
                  className="form-control"
                  placeholder="Imagen"
                  value={editImg}
                  onChange={({ target }) => setEditImg(target.value)}
                />
              </Col>

              <Col className="col-sm-4 mb-3">
                <label>Categoria</label>
                <input
                  id={`id_input_pro_category`}
                  type="text"
                  className="form-control"
                  placeholder="Categoria"
                  value={editCategory}
                  onChange={({ target }) => setEditCategory(target.value)}
                />
              </Col>

              <Col className="col-sm-4 mb-3">
                <label>Descuento</label>
                <input
                  id={`id_input_pro_discount`}
                  type="number"
                  className="form-control"
                  placeholder="Descuento"
                  value={editDiscount}
                  onChange={({ target }) =>
                    setEditDiscount(parseInt(target.value))
                  }
                />
              </Col>

              <Col className="col-sm-4 mb-3">
                <input
                  id={`id_input_pro_state`}
                  type="checkbox"
                  checked={editProductState === 1 ? true : false}
                  onChange={({ target }) => handleEditProductState(target)}
                  value={editProductState}
                />
                <label>Estado del Producto</label>
              </Col>

              <Col className="col-sm-4 mb-3">
                <label>Valor</label>
                <input
                  id={`id_input_pro_value`}
                  type="number"
                  className="form-control"
                  placeholder="Valor"
                  value={editProductValue}
                  onChange={({ target }) =>
                    setEditProductValue(parseInt(target.value))
                  }
                />
              </Col>

              <Col className="col-sm-4 mb-3">
                <label>Cantidad</label>
                <input
                  id={`id_input_pro_quantity`}
                  type="number"
                  className="form-control"
                  placeholder="Cantidad"
                  value={editProductQuantity}
                  onChange={({ target }) =>
                    setEditProductQuantity(parseInt(target.value))
                  }
                />
              </Col>

              <Col className="col-sm-4 mb-3">
                <input
                  id={`id_input_pro_iva`}
                  type="checkbox"
                  checked={editProductIva === 1 ? true : false}
                  onChange={({ target }) => handleEditProductIva(target)}
                  value={editProductIva}
                />
                <label>Contiene IVA</label>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => handleClose()}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={() => handleTriggerProduct(titleModal.event)}>
            {titleModal.titleBtn}
            </Button>
          </Modal.Footer>
        </Modal>
        <ThemeProvider theme={themeWithLocale}>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </ThemeProvider>
      </Paper>
    </div>
  );
}
