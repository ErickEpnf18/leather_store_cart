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
import {
  createItem,
  getItemsByConditionAll,
  getUser,
  setNewDoc,
  updateItem,
} from "../service/api";
import { outputWithSpace } from "utils/";
import Footer from "components/footer";
import AppBarStore from "@/components/appbar";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "firebase-config";
import Link from "next/link";

const Buying = (props) => {
  const { data } = props;
  console.log("Dtafromodfasd", data);
  const [product, setProduct] = useState([]);
  const [allData, setAllData] = useState([]);
  const [lengthData, setLengthData] = useState(2)
  const [indexation, setIndexation] = useState();
  const [openAlert, setOpenAlert] = useState(false);
  const [openAlertHeart, setOpenAlertHeart] = useState(false);

  // const [matches, setMatches] = useState(false);
  // const matchesAux = useMediaQuery('(max-width:600px)');
  // console.log(matchesAux)
  const router = useRouter();
  const { type, keyword, indexSelected } = router.query;

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const [index, setIndex] = useState(0);

  const pro = [
    {
      image:
        "https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/224x336/249158.jpg",
      title: "Navy Funnel Neck Coat",
      price: "£99",
    },
  ];
  const i = allData[0];
  useEffect(() => {
    const getProducts = async () => {
      if (type) {
        const allItems = await getItemsByConditionAll(type);
        // console.log(allItems);
        // setProduct(allItems[0].data);
        //get data firebase
        // const response = await fetch(`/data/men/coats.json`);
        // const data = await response.json();
        // setProducts(data);
        // setFilteredProducts(data);
        // console.log("data", data);
        if (allItems[0].data) {
          // const newItem = allItems[0].data.filter(
          //   (i) => outputWithSpace(i.title) === keyword
          // );
          let dAux = allItems[0].data;
          let indexaux = parseInt(indexSelected);
          const newItem = dAux.filter((i, index_) => index_ === indexaux);
          setProduct(...newItem)
          setAllData(dAux);
          let leng = dAux.length;
          setLengthData(leng)

          // num = getRndInteger(dAuz.length, 4);
          // allDaux.push(Object.assign({}, obj, i, { price: numPrice }));
          // const newRandomsProds = dAux.setProduct(newItem);

          // const allDaux = dAux.slice(1, rangeProduct.max).map((i) => i);
        }
      }
      
      //
      //get data firebase

      // catch from _app

      // c
      // catch from _app
      // setMatches(matchesAux);
    };

    getProducts();
  }, [keyword, type]);
  useEffect(() => {
    if(allData){
      let leng = allData.length;
      setIndexation({
        i1: getRndInteger(leng, 1),
        i2: getRndInteger(leng, 1),
        i3: getRndInteger(leng, 1),
        i4: getRndInteger(leng, 1),
      })
      setLengthData(leng)
    }
  },[lengthData, allData])
  function getRndInteger(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  console.log("EVERYTHING:", type, keyword, product);
  const handleAlert = async () => {
    setOpenAlert(true);
    handlePushProductCart();
    console.log(product);
    await setTimeout(() => {
      // After 3 seconds set the show value to false
      setOpenAlert(false);
    }, 2000);
  };
  const handleAlertHeart = async () => {
    setOpenAlertHeart(true);
    handlePushProductFavorites();
    await setTimeout(() => {
      // After 3 seconds set the show value to false
      setOpenAlertHeart(false);
    }, 2000);
  };
  const handlePushProductCart = async () => {
    //     let nameUserEmail = "";
    //     await onAuthStateChanged(auth, (currentUser) => {
    //       nameUserEmail = currentUser.email;
    //       console.log(currentUser);
    //     });
    //     const users = await getUser("users");
    //     const user = users.filter((i) => i.email === nameUserEmail);
    //     console.log(user, "user");
    //     let id_ ={ id: user[0].id};
    //     let obj = { ...product[0], ...id_ };
    //     const item = await getUser("carts");
    //     let isValue = item.filter((i) => i.id === user[0].email);
    //     delete isValue[0].id;
    //     console.log("isValue", isValue)
    //     let testing = {}
    // let arr = []
    //     if (isValue.length === 0) {
    //       arr.push(obj)
    //       console.log("arr0", arr)
    //       // updateItem(user[0].id, {...obj}, "carts")
    //       setNewDoc(user[0].email, {...arr}, "carts");
    //       // console.log("new");
    //     } else {
    //       arr.push(obj, ...isValue)
    //       console.log("arr1", arr)
    //       updateItem(user[0].email, {...arr}, "carts")
    //   }
    // const itemsReNew = await getUser("carts")
    // console.log("here")
    // itemsReNew.forEach((i, index) =>{
    //   console.log(i.title)
    // })
  };
  const handlePushProductFavorites = async () => {};

  return (
    <>
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
                      <span className={styles.textPrice}>${i.price}</span>{" "}
                      &nbsp;
                      <span style={{ color: "red" }}>
                        ${i.price - i.discount}
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
                        {allData
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
                              </Link>
                            </Col>
                          ))}
                        {allData
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
                              </Link>
                            </Col>
                          ))}
                        {allData
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
                              </Link>
                            </Col>
                          ))}
                        {allData
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
                              </Link>
                            </Col>
                          ))}
                        {allData
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
                              </Link>
                            </Col>
                          ))}

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
    </>
  );
};

export default Buying;
