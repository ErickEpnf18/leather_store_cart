import React, { useEffect, useState } from "react";
import AppBarStore from "components/appbar";
import Footer from "components/footer";

function Layout({ children, data }) {
  const [item, setItem] = useState("");
useEffect(()=>{
  console.log("how many mounts");
}, [])
  return (
    <>
      {data.view ? <AppBarStore /> : <></>}
      {children}
      {data.view ? <Footer /> : <></>}
    </>
  );
}

export default Layout;
