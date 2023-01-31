import React, { useEffect, useState } from "react";
import AppBarStore from "components/appbar";
import Footer from "components/footer";

function Layout({ children }) {
  const [item, setItem] = useState("");
useEffect(()=>{
  console.log("how many mounts");
}, [])
  return (
    <>
      {<AppBarStore /> }
        {children}
      { <Footer /> }
    </>
  );
}

export default Layout;
