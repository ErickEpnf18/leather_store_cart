import { ConstructionOutlined } from "@mui/icons-material";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, fetchProducts } from "../redux/reducers/productSlice";
import store from "../redux/store";
import { useGetAllProductsQuery } from "../features/productsApi";
import Card from "../components/card";
import { addItemToCart } from "../features/cartSlice";
import { ToastContainer, toast } from 'react-toastify';
//import 'react-toastify/dist/react-toastify.esm.mjs';


const Querys = () => {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetAllProductsQuery();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const datas = useSelector((state) => state.products.items);
  const cart = useSelector((state) => state.cart.cartItems);
  console.log(cart, "cart")
  //console.log("data extern: ", datas, "data", data);
  //console.log("error extern: ", error);
  console.log("isloading extern: ", isLoading);
  const handleAddItemToCard = (product) => {
    console.log("do something", product)
    dispatch(addItemToCart(product));
      };

  return (
      <Container fluid>

        <Row className="">
          {data ? (
            data.map((item, index) => <Card data={item} key={index} index={index} on_submit={handleAddItemToCard}/>)
          ) : (
            <p>Loading...</p>
          )}
        </Row>
                <ToastContainer/>
      </Container>
  );
};

export default Querys;
