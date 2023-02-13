import axios from "axios";
import React, { useState, useEffect } from "react";
import {getData, listProduct} from "../../fetchers/admin";
import {TableUsers} from "../Tables/TableUsers";


const ProductsAdm = () => {
  const [item, setItem] = useState(null);
  const [data, setData] = useState(null);
  async function handleClick() {
    console.log("how many products");
    setItem(Math.random());

    const listprod = await listProduct();

    console.log("list", listprod.data);
    setData(listprod.data);
  }
  useEffect(() => {
    console.log("clicked", item);

  }, []);

  useEffect(() => {
    (async ()=>{
      const listprod = await listProduct();
      setData(listprod.data);
    })();
  },[]);

  return (
    <div>
      Products
      <button onClick={() => handleClick()}>click me!</button>
      <div>{data !== null ? JSON.stringify(data) : "estamos Cargando..."}</div>
      <TableUsers />
    </div>
  );
};

export default ProductsAdm;
