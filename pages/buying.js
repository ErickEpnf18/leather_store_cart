import React from "react";
import styles from "./styles/Categories.module.css";
import { Card, Carousel, Col, Container, Row } from "react-bootstrap";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { pink } from "@mui/material/colors";
import { Box, Chip, Divider, IconButton, Snackbar } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import AlertTitle from "@mui/material/AlertTitle";
import { Alert, Stack, Collapse } from "@mui/material";
import { outputWithSpace } from "utils/";
import Footer from "components/footer";
import AppBarStore from "@/components/appbar";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "firebase-config";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addItem } from "../redux/reducers/kartsSlice";
import axios from "axios";
import { createSelector } from "@reduxjs/toolkit";
import Layout from "@/components/layout";

const Buying = () => {
  const [product, setProduct] = useState([]);
  const [allData, setAllData] = useState([]);
  const [kartItems, setKartItems] = useState(null);
  const [stateToKard, setStateToKard] = useState(0);
  const [lengthData, setLengthData] = useState(2);
  const [indexation, setIndexation] = useState();
  const [openAlert, setOpenAlert] = useState(false);
  const [openAlertHeart, setOpenAlertHeart] = useState(false);

  // const matchesAux = useMediaQuery('(max-width:600px)');
  const router = useRouter();
  const { type, keyword, indexSelected } = router.query;

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();

  const pro = [
    {
      image:
        "https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/224x336/249158.jpg",
      title: "Navy Funnel Neck Coat",
      price: "£99",
    },
  ];
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
  const setKartToFirebase = async () => {
    
    if(product.length !== 0 && stateToKard !== 0){
      console.log("many kart", karts.items)

      const filteritems = karts.items.filter((item)=> typeof(item.cartQuantity) === "number");
      if(stateToKard !== 0){
      window.localStorage.setItem("kartItems", JSON.stringify(karts.items));  
      
    //let kart__ = JSON.parse(window.localStorage.getItem("kartItems"));
    let user__ = JSON.parse(window.localStorage.getItem("currentUser"))
    const res = await axios.post("/api/firebase/kart", {items: filteritems , current_product: product,  user: user__, state: stateToKard});         
    console.log("res", res.data)     
   
    if (res.status !== 200) {
    toast.error('🦄 Ocurrio un error al añadir el producto!' + err, {
      position: "bottom-right",
      autoClose: 1900,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
}
}
}
  console.log("what times", karts)
  setKartToFirebase()
},[karts, product, stateToKard])  

useEffect(() => {setKartItems(karts)}, [kartItems, karts])
  useEffect(() => {
    const getProducts = async () => {
      let data = null;
      if (type) {
        if (type === "coats") {
          data = coats.items[0]?.data.slice();
          setAllData(data);
        }
        if (type === "dresses") {
          data = dresses.items[0]?.data.slice();
          setAllData(data);
        }
        if (type === "formalshirts") {
          data = formalshirts.items[0]?.data.slice();
          setAllData(data);
        }
        if (type === "jeans") {
          data = jeans.items[0]?.data.slice();
          setAllData(data);
        }
        if (type === "makeup") {
          data = makeup.items[0]?.data.slice();
          setAllData(data);
        }
        if (type === "sportswear") {
          data = sportswear.items[0]?.data.slice();
          setAllData(data);
        }
        if (data) {
          let indexaux = parseInt(indexSelected);
          const newItem = data.filter((i, index_) => index_ === indexaux);
          setProduct(...newItem);
          let leng = data.length;
          setLengthData(leng);
        }
      }
    };

    getProducts();
  }, [
    coats.items,
    dresses.items,
    formalshirts.items,
    indexSelected,
    jeans.items,
    keyword,
    makeup.items,
    sportswear.items,
    type,
  ]);
  useEffect(() => {
    if (allData) {
      let leng = allData.length;
      setIndexation({
        i1: getRndInteger(leng, 1),
        i2: getRndInteger(leng, 1),
        i3: getRndInteger(leng, 1),
        i4: getRndInteger(leng, 1),
      });
      setLengthData(leng);
    }
  }, [lengthData, allData]);
  function getRndInteger(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  //console.log("EVERYTHING:", type, keyword, product);
  const handleAlert = async () => {
    setOpenAlert(true);
    handlePushProductCart(karts, product);
    
    await setTimeout(() => {
      // miliseconds set the show value to false
      setOpenAlert(false);
    }, 1900);
  };
  const handleAlertHeart = async () => {
    setOpenAlertHeart(true);
    handlePushProductFavorites();
    await setTimeout(() => {
      // miliseconds set the show value to false
      setOpenAlertHeart(false);
    }, 1900);
  };
  const handlePushProductCart = async (_kart, _product) => {
    dispatch(addItem(product));
    setStateToKard(Math.random() + 1)
  };
  const handlePushProductFavorites = async () => {};
  const handleChangeProduct = (title) => {
    toast(`${title.substring(0, 15)}.. es buena elección🦄`, {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return (
    <>
    <Layout>
      <Container className={styles.overalContainer}>
        <Row>
          <Col xs={12} sm={6} md={6} className="d-flex justify-content-center">
            <Card style={{ width: "18rem" }}>
              {product.length !== 0 ? (
                <>
                  <Card.Header>
                    <Card.Subtitle className="mb-2 text-muted text-center">
                      {product.title}
                    </Card.Subtitle>
                  </Card.Header>

                  <Card.Text className={styles.cardTextTitle}></Card.Text>
                  <Card.Img
                    variant="top"
                    src={product.image}
                    width={80}
                    height={300}
                  ></Card.Img>
                </>
              ) : (
                "Cargando.."
              )}
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} className="text-left">
            <Card border="light">
              {product.length !== 0 ? (
                <>
                  <Card.Header className="text-center">
                    {product.title}
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>
                      <span className={styles.textPrice}>${product.price}</span>{" "}
                      &nbsp;
                      <span style={{ color: "red" }}>
                        ${product.price - product.discount}
                      </span>
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted text-center">
                      <div className={styles.containerBorderSize}>
                        <span className={styles.borderSize}>S</span>&nbsp;
                        <span className={styles.borderSize}>X</span>&nbsp;
                        <span className={styles.borderSize}>L</span>&nbsp;
                        <span className={styles.borderSize}>XL</span>&nbsp;
                        <span className={styles.borderSize}>XLL</span>&nbsp;
                      </div>
                    </Card.Subtitle>
                    <Card.Subtitle className="bg-grey">
                      <Button variant="outline-primary" onClick={handleAlert}>
                        Añadir al carrito
                      </Button>
                      &nbsp;
                      <Button
                        variant="outline-danger"
                        onClick={handleAlertHeart}
                      >
                        <FavoriteIcon />
                      </Button>
                      <Snackbar
                        open={openAlertHeart}
                        autoHideDuration={2000}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "center",
                        }}
                      >
                        <Box sx={{ width: "100%" }}>
                          <Alert action={<AlertTitle />}>
                            Añadido a la <strong>lista de deseos!</strong>
                          </Alert>
                        </Box>
                      </Snackbar>
                      <Snackbar
                        open={openAlert}
                        autoHideDuration={2000}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "center",
                        }}
                      >
                        <Box sx={{ width: "100%" }}>
                          <Collapse in={openAlert}>
                            <Alert
                              onClick={handleAlert}
                              action={
                                <IconButton onClick={handleAlert}>
                                  <AlertTitle />
                                </IconButton>
                              }
                            >
                              Producto agregado <strong>al carrito!</strong>
                            </Alert>
                          </Collapse>
                        </Box>
                      </Snackbar>
                    </Card.Subtitle>
                    <Card.Text>
                      <br />
                      <span>Notas: </span>
                      <br />
                      <span>
                        De inspiración militar con detalles clásicos. La camisa
                        Shimo está confeccionada en algodón con una textura
                        ligeramente cepillada. Dos bolsillos en el pecho y
                        cuadros listos para la primavera: es un elemento
                        esencial para las capas. Cierre con botón Cuello clásico
                        Manga larga Dos bolsillos en el pecho Textura
                        ligeramente cepillada Estilo chaquetón Leather Clothes
                        apoya un cultivo de cuero del mas fino posible para la
                        elaboración y sostenibilidad. Buen de balance de masa
                      </span>
                      <br />
                      <br />
                      <span>Detalles: </span>
                      <br />
                      <span>
                        Forma relajada y rockera 100% cuero Lavar a maquina al
                        revés.
                      </span>
                    </Card.Text>
                  </Card.Body>
                </>
              ) : (
                ""
              )}
            </Card>
          </Col>
        </Row>
        <Row className={styles.overalContainer}>
          <Col lg={12}>
            <Divider>
              <Chip label="También te puede gustar" />
            </Divider>

            <Row>
              {product.length !== 0 ? (
                <Col lg={12}>
                  <Carousel activeIndex={index} onSelect={handleSelect}>
                    {/* <Carousel.Item>
                <Row className={styles.carrouselOverlay}>
                  <Col
                    xs={12}
                    sm={4}
                    md={3}
                    className={styles.colcarrouselItemVisible}
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
                          <span className={styles.textPrice}>{i.price}</span>{" "}
                          &nbsp;
                          <span style={{ color: "red" }}>{i.price}</span>
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col
                    xs={12}
                    sm={4}
                    md={3}
                    className={styles.colcarrouselItem}
                    style={{display: matches?"none":"flex"}}
                    
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
                          <span className={styles.textPrice}>{i.price}</span>{" "}
                          &nbsp;
                          <span style={{ color: "red" }}>{i.price}</span>
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col
                    xs={12}
                    sm={4}
                    md={3}
                    className={styles.colcarrouselItem}
                    style={{display: matches?"none":"flex"}}                    
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
                          <span className={styles.textPrice}>{i.price}</span>{" "}
                          &nbsp;
                          <span style={{ color: "red" }}>{i.price}</span>
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col
                    xs={12}
                    sm={4}
                    md={3}
                    className={styles.colcarrouselItem}
                    style={{display: matches?"none":"flex"}}
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
                          <span className={styles.textPrice}>{i.price}</span>{" "}
                          &nbsp;
                          <span style={{ color: "red" }}>{i.price}</span>
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Carousel.Item> */}

                    <Carousel.Item>
                      <Row className={styles.carrouselOverlay}>
                        {typeof allData !== "undefined"
                          ? allData
                              .filter((i, index) => index === indexation.i1)
                              .map((i, index) => (
                                <Col
                                  key={index}
                                  xs={12}
                                  sm={4}
                                  md={3}
                                  className={styles.colcarrouselItem}
                                >
                                  <Link
                                    onClick={() => handleChangeProduct(i.title)}
                                    href={{
                                      pathname: "/buying",
                                      query: {
                                        keyword: outputWithSpace(i.title),
                                        type: type,
                                        indexSelected: parseInt(indexation.i1),
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
                                          {/* Añadir al Carrito */}
                                          Pincha aqui
                                          <p>
                                            S&nbsp;X&nbsp;L&nbsp;XL&nbsp;XLL
                                          </p>
                                        </Card.Text>
                                        <Card.Text
                                          className={styles.cardTextTitle}
                                        >
                                          {i.title}
                                        </Card.Text>
                                        <Card.Title>
                                          <span className={styles.textPrice}>
                                            ${i.price}
                                          </span>{" "}
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
                          : "Loading..."}
                        {typeof allData !== "undefined"
                          ? allData
                              .filter((i, index) => index === indexation.i2)
                              .map((i, index) => (
                                <Col
                                  key={index}
                                  xs={12}
                                  sm={4}
                                  md={3}
                                  className={styles.colcarrouselItem}
                                >
                                  <Link
                                    onClick={() => handleChangeProduct(i.title)}
                                    href={{
                                      pathname: "/buying",
                                      query: {
                                        keyword: outputWithSpace(i.title),
                                        type: type,
                                        indexSelected: parseInt(indexation.i2),
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
                                          {/* Añadir al Carrito */}
                                          Pincha aqui
                                          <p>
                                            S&nbsp;X&nbsp;L&nbsp;XL&nbsp;XLL
                                          </p>
                                        </Card.Text>
                                        <Card.Text
                                          className={styles.cardTextTitle}
                                        >
                                          {i.title}
                                        </Card.Text>
                                        <Card.Title>
                                          <span className={styles.textPrice}>
                                            ${i.price}
                                          </span>{" "}
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
                          : "Loading..."}
                        {typeof allData !== "undefined"
                          ? allData
                              .filter((i, index) => index === indexation.i3)
                              .map((i, index) => (
                                <Col
                                  key={index}
                                  xs={12}
                                  sm={4}
                                  md={3}
                                  className={styles.colcarrouselItem}
                                >
                                  <Link
                                    onClick={() => handleChangeProduct(i.title)}
                                    href={{
                                      pathname: "/buying",
                                      query: {
                                        keyword: outputWithSpace(i.title),
                                        type: type,
                                        indexSelected: parseInt(indexation.i3),
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
                                          {/* Añadir al Carrito */}
                                          Pincha aqui
                                          <p>
                                            S&nbsp;X&nbsp;L&nbsp;XL&nbsp;XLL
                                          </p>
                                        </Card.Text>
                                        <Card.Text
                                          className={styles.cardTextTitle}
                                        >
                                          {i.title}
                                        </Card.Text>
                                        <Card.Title>
                                          <span className={styles.textPrice}>
                                            ${i.price}
                                          </span>{" "}
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
                          : "Loading..."}
                        {typeof allData !== "undefined"
                          ? allData
                              .filter((i, index) => index === indexation.i4)
                              .map((i, index) => (
                                <Col
                                  key={index}
                                  xs={12}
                                  sm={4}
                                  md={3}
                                  className={styles.colcarrouselItem}
                                >
                                  <Link
                                    onClick={() => handleChangeProduct(i.title)}
                                    href={{
                                      pathname: "/buying",
                                      query: {
                                        keyword: outputWithSpace(i.title),
                                        type: type,
                                        indexSelected: parseInt(indexation.i4),
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
                                          {/* Añadir al Carrito */}
                                          Pincha aqui
                                          <p>
                                            S&nbsp;X&nbsp;L&nbsp;XL&nbsp;XLL
                                          </p>
                                        </Card.Text>
                                        <Card.Text
                                          className={styles.cardTextTitle}
                                        >
                                          {i.title}
                                        </Card.Text>
                                        <Card.Title>
                                          <span className={styles.textPrice}>
                                            ${i.price}
                                          </span>{" "}
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
                          : "Loading..."}
                        {typeof allData !== "undefined"
                          ? allData
                              .filter((i, index) => index === indexation.i1)
                              .map((i, index) => (
                                <Col
                                  key={index}
                                  xs={12}
                                  sm={4}
                                  md={3}
                                  className={styles.colcarrouselItem}
                                >
                                  <Link
                                    onClick={() => handleChangeProduct(i.title)}
                                    href={{
                                      pathname: "/buying",
                                      query: {
                                        keyword: outputWithSpace(i.title),
                                        type: type,
                                        indexSelected: parseInt(indexation.i1),
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
                                          {/* Añadir al Carrito */}
                                          Pincha aqui
                                          <p>
                                            S&nbsp;X&nbsp;L&nbsp;XL&nbsp;XLL
                                          </p>
                                        </Card.Text>
                                        <Card.Text
                                          className={styles.cardTextTitle}
                                        >
                                          {i.title}
                                        </Card.Text>
                                        <Card.Title>
                                          <span className={styles.textPrice}>
                                            ${i.price}
                                          </span>{" "}
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
                          : "Loading..."}

                        {/* <Col
                          xs={12}
                          sm={4}
                          md={3}
                          className="d-flex justify-content-center"
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
                                <span className={styles.textPrice}>
                                  ${i.price}
                                </span>{" "}
                                &nbsp;
                                <span style={{ color: "red" }}>
                                  ${i.price - i.discount}
                                </span>
                              </Card.Title>
                            </Card.Body>
                          </Card>
                        </Col>
                        <Col
                          xs={12}
                          sm={4}
                          md={3}
                          className="d-flex justify-content-center"
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
                                <span className={styles.textPrice}>
                                  ${i.price}
                                </span>{" "}
                                &nbsp;
                                <span style={{ color: "red" }}>
                                  ${i.price - i.discount}
                                </span>
                              </Card.Title>
                            </Card.Body>
                          </Card>
                        </Col>
                        <Col
                          xs={12}
                          sm={4}
                          md={3}
                          className="d-flex justify-content-center"
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
                                <span className={styles.textPrice}>
                                  $ {i.price}
                                </span>{" "}
                                &nbsp;
                                <span style={{ color: "red" }}>
                                  ${i.price - i.discount}
                                </span>
                              </Card.Title>
                            </Card.Body>
                          </Card>
                        </Col> */}
                      </Row>
                    </Carousel.Item>
                    {/* <Carousel.Item>
                <Row className={styles.carrouselOverlay}>
                  <Col
                    xs={12}
                    sm={4}
                    md={3}
                    className={styles.colcarrouselItem}

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
                          <span className={styles.textPrice}>{i.price}</span>{" "}
                          &nbsp;
                          <span style={{ color: "red" }}>{i.price}</span>
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col
                    xs={12}
                    sm={4}
                    md={3}
                    className="d-flex justify-content-center"
                    style={{display: matches?"none":"flex"}}
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
                          <span className={styles.textPrice}>{i.price}</span>{" "}
                          &nbsp;
                          <span style={{ color: "red" }}>{i.price}</span>
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col
                    xs={12}
                    sm={4}
                    md={3}
                    className="d-flex justify-content-center"
                    style={{display: matches?"none":"flex"}}
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
                          <span className={styles.textPrice}>{i.price}</span>{" "}
                          &nbsp;
                          <span style={{ color: "red" }}>{i.price}</span>
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col
                    xs={12}
                    sm={4}
                    md={3}
                    className="d-flex justify-content-center"
                    style={{display: matches?"none":"flex"}}
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
                          <span className={styles.textPrice}>{i.price}</span>{" "}
                          &nbsp;
                          <span style={{ color: "red" }}>{i.price}</span>
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Carousel.Item> */}
                  </Carousel>
                </Col>
              ) : (
                "Cargando.."
              )}
            </Row>
          </Col>
        </Row>
      </Container>
      </Layout>
    </>
  );
};

export default Buying;
