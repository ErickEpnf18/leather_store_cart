import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Carrousel from "@/components/carrousel";

import { Container, Divider, Grid, Typography } from "@mui/material";
import image from "imgs/jackOseaOprey.jpg";
import Categories from "./categories";
// import Footer from "components/footer";
import { Card, Col, Row } from "react-bootstrap";
import Link from "next/link";
import { useEffect } from "react";
const imageSport =
  "https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/224x336/403704.jpg?X56";
const imageCoat =
  "https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/224x336/525517.jpg?X56";
const image33 =
  "https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/224x336/L26457.jpg?X56";

const Home = (props) => {
  const {handlerBack} = props;
  useEffect(()=> {
    handlerBack({view: true})
  },[])
  return (
    <>
      <Carrousel />
      <Grid container spacing={2} s className={styles.container}>
        <div className={styles.container_title}>
          <Typography
            variant="subtitle1"
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
      <Divider />
      <Grid container></Grid>
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
