import axios from "axios";
import React, { useState, useEffect } from "react";
import {getData, listProduct} from "../../fetchers/admin";
const Products = () => {
  const [item, setItem] = useState(null);
  const [data, setData] = useState(null);
  async function handleClick() {
    console.log("how many products");
    setItem(Math.random());

    const listprod = await listProduct();

    console.log("list", listprod.data);
    //setData(datas);
  }
  useEffect(() => {
    console.log("clicked", item);

    console.log("getData", item, data);
  }, [item, data]);

  return (
    <div>
      Products
      <button onClick={() => handleClick()}>click me!</button>
      <div>{data !== null ? JSON.stringify(data) : "estamos Cargando..."}</div>
    </div>
  );
};

export default Products;
