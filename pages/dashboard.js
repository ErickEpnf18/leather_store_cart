import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Carrousel from "@/components/carrousel";

import { Accordion, AccordionDetails, AccordionSummary, Box, Collapse, Container, Divider, Grid, IconButton, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import image from "imgs/jackOseaOprey.jpg";
import Categories from "./categories";
// import Footer from "components/footer";
import { Card, Col, Row } from "react-bootstrap";
import Link from "next/link";
import { useEffect, useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const imageSport =
  "https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/224x336/403704.jpg?X56";
const imageCoat =
  "https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/224x336/525517.jpg?X56";
const image33 =
  "https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/224x336/L26457.jpg?X56";
import { useSelector, useDispatch } from 'react-redux'
import Layout from "@/components/layout";




const Home = () => {
  const [expanded, setExpanded] = useState(false);
  const [value, setValue] = useState(false);


  const data_auth = useSelector((state) => state.auth);
  const karts = useSelector((state) => state.karts);
  const coats = useSelector((state) => state.coats);
  const dresses = useSelector((state) => state.dresses);
  const formalshirts = useSelector((state) => state.formalshirts);
  const jeans = useSelector((state) => state.jeans);
  const makeup = useSelector((state) => state.makeup);
  const sportswear = useSelector((state) => state.sportswear);
  // console.log("data_auth", data_auth)
  // console.log("karts", karts)
  // console.log("coats", coats)
  // console.log("dresses", dresses)
  // console.log("formalshirts", formalshirts)
  // console.log("jeans", jeans)
  // console.log("makeup", makeup)
  // console.log("sportswear", sportswear)
  
  const handleChange = (panel) => (event, isExpanded) => {
    // event and isExpanded are callback functions
    setExpanded(isExpanded ? panel : false);
    console.log('panel is expanded', panel);
  };
  return (
    <>
    <Layout>

      <Carrousel />
      <Grid container spacing={2} s className={styles.container}>
        <div className={styles.container_title}>
          <Typography
            variant="h6"
            // noWrap
            component="div"
            align="left"
          >
            Venta de Temporada
          </Typography>
          <Typography
            variant="subtitle2"
            // noWrap={false }
            paragraph
            component="div"
            align="left"
          >
            Compra ahora
          </Typography>
        </div>
        <Grid
          container
          columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}
          // columnSpacing={{ xs: 12, sm: 10, md: 20 }}
        >
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Grid className={styles.grid}>
              <Link
                href={{
                  pathname: "/categories",
                  query: { type: "sportswear", gender: "men" },
                }}
              >
                <div style={{ cursor: "pointer" }}>
                  <Image
                    src={imageSport}
                    alt="leather jacket"
                    width={300}
                    height={300}
                  />
                  <Container className={styles.container_card}>
                    <Typography
                      variant="subtitle2"
                      noWrap
                      component="div"
                      align="left"
                    >
                      Ropa Deportiva
                    </Typography>
                  </Container>
                </div>
              </Link>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3}>
            <div className={styles.container_card}>
              <Link
                href={{
                  pathname: "/categories",
                  query: { type: "coats", gender: "men" },
                }}
              >
                <div style={{ cursor: "pointer" }}>
                  <Image
                    src={imageCoat}
                    alt="leather jacket"
                    width={300}
                    height={300}
                  />
                  <Container className={styles.container_card}>
                    <Typography
                      variant="subtitle2"
                      noWrap
                      component="div"
                      align="left"
                    >
                      Chaquetas
                    </Typography>
                  </Container>
                </div>
              </Link>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <div className={styles.container_card}>
              <Link
                href={{
                  pathname: "/categories",
                  query: { gender: "women", type: "dresses" },
                }}
              >
                <div style={{ cursor: "pointer" }}>
                  <Image
                    src="https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/224x336/R31875.jpg"
                    alt="leather jacket"
                    width={300}
                    height={300}
                  />
                  <Container className={styles.container_card}>
                    <Typography
                      variant="subtitle2"
                      noWrap
                      component="div"
                      align="left"
                    >
                      Vestidos
                    </Typography>
                  </Container>
                </div>
              </Link>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <div className={styles.container_card}>
              <Link
                href={{
                  pathname: "/categories",
                  query: { gender: "women", type: "jeans" },
                }}
              >
                <div style={{ cursor: "pointer" }}>
                  <Image
                    src="https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/224x336/473833.jpg?X56"
                    alt="leather jacket"
                    width={300}
                    height={300}
                  />
                  <Container className={styles.container_card}>
                    <Typography
                      variant="subtitle2"
                      noWrap
                      component="div"
                      align="left"
                    >
                      Jeans
                    </Typography>
                  </Container>
                </div>
              </Link>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid container  className="flex align-items-center justify-content-center mt-4 mb-3 ">
      <Typography variant="h4" gutterBottom align="left" paragraph component="div">
      Preguntas frecuentes
      </Typography>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ width: { xs: "95%", md: "90%" }}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          focusVisibleClassName='m5'
          aria-controls="panel1bh-content"
          id="id_panel1"
        >
          <Typography sx={{ flexShrink: 0, fontWeight: expanded === 'panel1'? 'bold':''}}>
          ¿Qué es la facturación electrónica?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: 'text.secondary' }}>
          Una factura electrónica es un documento digital de índole fiscal: se expide y se recibe en formato electrónico estando condicionado a su destinatario, y tiene su origen en las legislaciones latinoamericanas que surgieron entre los años 2000 a 2005. 
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{ width: { xs: "95%", md: "90%" }}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          focusVisibleClassName='m5'
          aria-controls="panel1bh-content"
          id="id_panel2"
        >
          <Typography sx={{ flexShrink: 0, fontWeight: expanded === 'panel2'? 'bold':''}}>
          ¿Cuánto tiempo se demora en llegar la factura a mi correo?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: 'text.secondary' }}>
          Después de llenar el formulario y confirmar su compra, inmediatamente se enviara a su correo la compra de sus productos en un lapso de 20 minutos.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{ width: { xs: "95%", md: "90%" }}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          focusVisibleClassName='m5'
          aria-controls="panel1bh-content"
          id="id_panel3"
        >
          <Typography sx={{ flexShrink: 0, fontWeight: expanded === 'panel3'? 'bold':''}}>
          ¿Existe mejores descuentos para mayoristas?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: 'text.secondary' }}>
          Si, dependiendo del monto y de cuantos existan en Stock puede realizar su consulta en contactos.
          Si, dependiendo del monto y de cuantos existan en Stock puede realizar su consulta en contactos.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion  expanded={expanded === 'panel4'} onChange={handleChange('panel4')} sx={{ width: { xs: "95%", md: "90%" }}}
>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          focusVisibleClassName='m5'
          aria-controls="panel1bh-content"
          id="id_panel4"
        >
          <Typography sx={{ flexShrink: 0, fontWeight: expanded === 'panel4'? 'bold':''}}>
          ¿Qué ocurre si cancelo mi pedido o devuelvo algo?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: 'text.secondary' }}>
          Si cancelas tu pedido o devuelves los productos, el sitio web rechazará la transacción y se cancelará automáticamente cualquier tipo de compra relacioanada.
          </Typography>
        </AccordionDetails>
      </Accordion>

      
      </Grid>
    </Layout>
    </>
  );
};

export default Home;
// type --> jackets, handbags, shoes
export const pages = [
  {
    href: "/categories",
    icon: "shirtOutline",
    component: "Categories",
    default: true,
    isTab: true,
  },
  {
    href: "/categories/:category/:type",
    component: "ProductType",
    default: false,
    isTab: false,
  },
  {
    href: "/categories/:category",
    icon: "shirtOutline",
    component: "Category",
    default: true,
    isTab: false,
  },
  {
    href: "/favourites",
    icon: "heartOutline",
    component: "Favourites",
    default: false,
    isTab: true,
  },
  {
    href: "/shopping",
    icon: "heartOutline",
    component: "Favourites",
    default: false,
    isTab: true,
  },
];

/*
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
*/
