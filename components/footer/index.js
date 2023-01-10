import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import styles from "./Footer.module.css";
import Paper from "@mui/material/Paper";
import { indigo } from '@mui/material/colors';
// #0d6efd
console.log(indigo[900])
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Footer() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }} className={styles.container} style={{backgroundColor: `#1976d2`}}>
        <Grid
          container
          rowSpacing={{ xs: 3, sm: 4 }}
          columnSpacing={{ xs: 12, sm: 10, md: 20 }}
          columns={{ xs: 12, sm: 12 }}
        >
          {Array.from(
            Array(
              "La tienda contiene confecciones de algodon con las mas finas texturas y ligeramente escogido entre los mas telas del mercado",
              "Ahora en epoca de verano se viene la ropa con Cuello clásico con Marnga Corta con Bolsillo desplegables que hace lucir los mejores estilos",
              "Apoya los productos nacionales y sostenibles. Atraves de la elaboración de productos de origen artesanal y comercial"
            )
          ).map((_, index) => (
            <Grid item xs={12} sm={4} md={4} key={index}>
              <Item>{_}</Item>
            </Grid>
          ))}
        </Grid>
        <Typography variant="subtitle2" display="block" align="center" style={{marginTop: "1rem"}}>
          Created by University Project
        </Typography>
      </Box>
    </>
  );
}

export default Footer;
