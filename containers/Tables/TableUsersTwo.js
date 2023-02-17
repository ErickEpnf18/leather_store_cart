import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses }  from "@mui/material/TableCell";
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
} from "@mui/material";
import * as locales from "@mui/material/locale";
import { Box } from "@mui/system";
import { styled } from '@mui/material/styles';

import * as ic from "../../utils/icons";
import { pink, blue } from "@mui/material/colors";

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
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.selected,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


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

/////////// here is for the data
const data = [
  {
    name: "India",
    code: "IN",
    population: 1324171354,
    size: 3287263,
    density: 1324171354 / 3287263,
  },
  {
    name: "China",
    code: "IN",
    population: 1324171354,
    size: 3287263,
    density: 1324171354 / 3287263,
  },
  {
    name: "Italy",
    code: "IN",
    population: 1324171354,
    size: 3287263,
    density: 1324171354 / 3287263,
  },
  {
    name: "India",
    code: "IN",
    population: 1324171354,
    size: 3287263,
    density: 1324171354 / 3287263,
  },
  {
    name: "India",
    code: "IN",
    population: 1324171354,
    size: 3287263,
    density: 1324171354 / 3287263,
  },
  {
    name: "India",
    code: "IN",
    population: 1324171354,
    size: 3287263,
    density: 1324171354 / 3287263,
  },
  {
    name: "India",
    code: "IN",
    population: 1324171354,
    size: 3287263,
    density: 1324171354 / 3287263,
  },
  {
    name: "India",
    code: "IN",
    population: 1324171354,
    size: 3287263,
    density: 1324171354 / 3287263,
  },
  {
    name: "India",
    code: "IN",
    population: 1324171354,
    size: 3287263,
    density: 1324171354 / 3287263,
  },
  {
    name: "India",
    code: "IN",
    population: 1324171354,
    size: 3287263,
    density: 1324171354 / 3287263,
  },
  {
    name: "India",
    code: "IN",
    population: 1324171354,
    size: 3287263,
    density: 1324171354 / 3287263,
  },
];

import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [locale, setLocale] = React.useState("zhCN");

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

  const theme = useTheme();

  const themeWithLocale = React.useMemo(
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
  // console.log("rows: " + rows)
  // console.log("type: " + rows.length)
  // console.log("creadadata: ",  createData('Brazil', 'BR', 210147125, 8515767))
  // console.log("rowsPerPage", rowsPerPage);
  // console.log("page", page);
  // console.log("locales", locales);
  // console.log("themeWithLocale", themeWithLocale);
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <StyledTableCell></StyledTableCell>
              {columns.map((column) => (
                <StyledTableCell
                  key={column.id}
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
              .map((row) => {
                return (
                  <StyledTableRow
                    onClick={() => console.log("cart")}
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.code}
                  >
                    <TableCell>
                      <Tooltip title="Eliminar" >
                        <IconButton
                          aria-label="Example"
                          sx={{ color: pink[500] }}
                        >
                          {ic.icon_delete_item}
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Editar" arrow>
                        <IconButton
                          aria-label="Example"
                          sx={{ color: blue["A400"] }}
                        >
                          {ic.icon_edit_item}
                        </IconButton>
                      </Tooltip>
                    </TableCell>

                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
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
  );
}
