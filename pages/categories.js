import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { capitalize, productInfo, outputWithSpace } from "utils/";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import styles from "./styles/Categories.module.css";
import Image from "next/image";
import { Grid, Pagination } from "@mui/material";
import { getItemsByConditionAll } from "service/api";
import Footer from "components/footer";
import AppBarStore from "@/components/appbar";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Layout from "@/components/layout";

const Categories = (props) => {
  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(1);
  const [lengthPage, setLengthPage] = useState(0);
  const [rangeProduct, setRangeProduct] = useState({ min: 0, max: 10 });
  const [nameCol, setNameCol] = useState("jeans");
  const router = useRouter();
  const gender = router.query.gender;
  const type = router.query.type;
  const karts = useSelector((state) => state.karts);
  /////NOTMOVE/////
  const coats = useSelector((state) => state.coats);
  const dresses = useSelector((state) => state.dresses);
  const formalshirts = useSelector((state) => state.formalshirts);
  const jeans = useSelector((state) => state.jeans);
  const makeup = useSelector((state) => state.makeup);
  const sportswear = useSelector((state) => state.sportswear);
  /////NOTMOVE/////
  useEffect(() => {
      let max = page * 10;
      let min = max - 10;

      if (type === "coats") {
        setLengthPage(Math.round(coats.items[0]?.data.length / 10));
        setProduct(coats.items[0]?.data);
      }
      if (type === "dresses") {
        setLengthPage(Math.round(dresses.items[0]?.data.length / 10));
        setProduct(dresses.items[0]?.data);
      }
      if (type === "formalshirts") {
        setLengthPage(Math.round(formalshirts.items[0]?.data.length / 10));
        setProduct(formalshirts.items[0]?.data);
      }
      if (type === "jeans") {
        setLengthPage(Math.round(jeans.items[0]?.data.length / 10));
        setProduct(jeans.items[0]?.data);
      }
      if (type === "makeup") {
        setLengthPage(Math.round(makeup.items[0]?.data.length / 10));
        setProduct(makeup.items[0]?.data);
      }
      if (type === "sportswear") {
        setLengthPage(Math.round(sportswear.items[0]?.data.length / 10));
        setProduct(sportswear.items[0]?.data);

      }
      // const response = await fetch(`/data/${gender}/${type}.json`);
      // const data = await response.json();

      // product.slice(min, max).map((i) => console.log("i:", i.title));
      // console.log("data", data.length, min);
      // setProduct(data);
      // setLengthPage(Math.round(data.length / 10));
  }, [coats.items, formalshirts, jeans, makeup, page, sportswear, type]);
  const handlePag = (event, value) => {
    setPage(value);
    if (value) {
      let max = value * 10;
      let min = max - 10;
      let obj = {
        min: min,
        max: max,
      };
      setRangeProduct(obj);
    }
  };

  return (
    <Layout>
    <>

      <Container className={styles.overalContainer}>
        <Grid className={styles.containerPagination}>
          <Pagination
            count={lengthPage}
            onChange={handlePag}
            color="primary"
            size="small"
          />
        </Grid>
        <Row className={styles.categoryContainer}>
          {typeof(product) !== "undefined" ? product.length !== 0 ?
          
          product.slice(rangeProduct.min, rangeProduct.max).map((i, index) => (
            <Col xs={6} sm={6} md={4} lg={3} key={index}>
              <Link
                onClick={() =>{toast(`${i.title.substring(0, 15)}.. buena elección 😉`, {
                  position: "top-right",
                  limit: 3,
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: false,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });}}
                href={{
                  pathname: "/buying",
                  query: {
                    keyword: outputWithSpace(i.title),
                    type: type,
                    indexSelected: parseInt(index),
                  },
                }}
              >
                <Card
                  style={{ width: "18rem" }}
                  className={styles.container_card}
                >
                  <Card.Img
                    variant="top"
                    src={i.image}
                    width={80}
                    height={300}
                  ></Card.Img>
                  <Card.Body className={styles.cardBody}>
                    <Card.Text className={styles.cardText}>
                      Añadir al Carrito
                      <p>S&nbsp;X&nbsp;L&nbsp;XL&nbsp;XLL</p>
                    </Card.Text>
                    <Card.Text className={styles.cardTextTitle}>
                      {i.title}
                    </Card.Text>
                    <Card.Title>
                      <span className={styles.textPrice}>${i.price}</span>{" "}
                      &nbsp;
                      <span style={{ color: "red" }}>
                        ${i.price - i.discount}
                      </span>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))
          :  "estamos cargando los datos" : "estamos cargando los datos"
          }
        </Row>
        <Grid className={styles.containerPagination}>
          <Pagination
            count={lengthPage}
            onChange={handlePag}
            color="primary"
            size="small"
          />
        </Grid>
      </Container>
    </>
                </Layout>
  );
};

export default Categories;
