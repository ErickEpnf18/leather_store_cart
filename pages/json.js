import data from "public/data/women/makeup.json";
import { useEffect, useState } from "react";
import {
  createItem,
  updateItem,
  getItems,
  getItemsByCondition,
  getItemById,
  deleteItem,
  getArrayFromCollection,
  getItemsByConditionAll,
  getUser,
  setNewDoc,
} from "service/api";
import { storage } from "firebase-config.js";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { getAdditionalUserInfo, onAuthStateChanged } from "firebase/auth";
import { auth } from "firebase-config";
import { setConstantValue } from "typescript";

const Json = () => {
  const [isLogged, setIsLogged] = useState(false);
  // useEffect(() => {
  //   // (async () => {
  //   //   await onAuthStateChanged(auth, (currentUser) => {
  //   //     console.log("auth", auth);
  //   //     if (currentUser) {
  //   //       console.log("user", currentUser);
  //   //       const uid = currentUser.uid;
  //   //       setIsLogged(true);
  //   //     } else {
  //   //       console.log("No user logged");
  //   //       setIsLogged(false);
  //   //     }
  //   //     // setUser(currentUser);
  //   //   });
  //   // })();
  // }, []);
  // useEffect(() => {
  //     onAuthStateChanged(auth, user => {
  //         if (user) {
  //             console.log('user', user);
  //             const uid = user.uid;
  //             setIsLogged(true);
  //         } else {
  //             console.log("No user logged");
  //                 setIsLogged(false);
  //         }
  //     });
  // }, []);
  // useEffect(() => {
  //   (() => {
  //     let dataAux = [];
  //     let obj = {};
  //     let num = 0;
  //     let numPrice = 0;
  //     data.forEach((i) => {
  //       numPrice = +i.price;
  //       if (numPrice<= 5) {
  //           num = getRndInteger(2, 1);
  //         }
  //       if (numPrice <= 8 && numPrice> 5) {
  //           num = getRndInteger(4, 2);
  //         }
  //         if (numPrice > 8 && numPrice < 20) {
  //           num = getRndInteger(7, 4);
  //         }
  //       if (numPrice >= 20 && numPrice < 40) {
  //           num = getRndInteger(8, 5);
  //         }
  //       if (numPrice >= 40 && numPrice < 60) {
  //           num = getRndInteger(20, 8);
  //       }
  //       if (numPrice>= 60) {
  //           num = getRndInteger(30, 11);
  //       }
  //       obj["discount"] = num;
  //       console.log("obj:", obj, "price:", numPrice)
  //       dataAux.push(Object.assign({}, obj, i, { price: numPrice })); // +convertir automatically to integer from str
  //       //delete i.price;
  //     });

  //     function getRndInteger(max, min) {
  //       return Math.floor(Math.random() * (max - min + 1)) + min;
  //     }
  //   //   console.log(JSON.stringify(dataAux))
  //     console.log(JSON.stringify(dataAux))
  //   //   console.log(dataAux);
  //   })();
  // }, []);
  const [data, setData] = useState(null);
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [percent, setPercent] = useState(0);
  const handlecreateItem = () => {
    createItem({ name: "erick" });
  };
  const handleupdateItem = async () => {
    const item = await getItemById("MVnmJ3SLtU1l8AoIB1ub");
    // const data = await item.json()

    console.log("item", item);

    const allItems = await getItemsByConditionAll();
    console.log("All items", allItems);
    updateItem("MVnmJ3SLtU1l8AoIB1ub", { name: "Dejan" });
  };

  const handleDelete = async () => {
    deleteItem("MVnmJ3SLtU1l8AoIB1ub");
    const allItems = await getItemsByConditionAll();
    console.log("All items", allItems);
  };
  // const handleGET = () => {
  //   getArrayFromCollection("items");
  // };
  const handlegetItemById = () => {
    createItem({ name: "erick" });
  };
  const handleGetItem = () => {
    createItem({ name: "erick" });
  };
  let nameCol = "makeup";
  // useEffect(() => {
  //   const getProducts = async () => {
  //     const response = await fetch(`/data/women/${nameCol}.json`);
  //     const res = await response.json();
  //     console.log(res.length);
  //     // setProduct(data);
  //     // console.log("res",res)
  //     // createItem({data}, "coats")
  //     setData(res);
  //   };

  //   getProducts();
  // }, []);
  const handleCreate = async () => {
    // console.log("first", ...data)
    const res = await createItem({ data }, nameCol);
    const allItems = await getItemsByConditionAll(nameCol);
    console.log("All items", allItems);
  };
  const handleGetIteration = async () => {
    const allItems = await getItemsByConditionAll(nameCol);
    allItems[0].data.forEach((i, index) => {
      console.log("i:", i.title);
      console.log("index", index);
    });
    console.log("item", getUser());
  };
  const handleGetUser = async () => {
    const allItems = await getItemsByConditionAll("users");
    const itemIs = allItems.filter(
      (i, index) => i.id === "4oeD4YEgZnBp7J05RvJ3"
    );
    console.log("Item: ", itemIs);
    console.log(await getUser("users"));
  };
  const registerNewUser = (e) => {
    e.preventDefault();
    const item = e.currentTarget;
    const i = item[0].value;

    setName(i);
    // id, obj, col
    // setNewDoc(i, {name: i}, "users")
  };

  return (
    <div>
      json
      {/* <button onClick={handlecreateItem}>Add item</button> */}
      {/* <button onClick={handleupdateItem}>get item and update by id</button> */}
      {/* <button onClick={handleCreate}>send data</button> */}
      {/* <button onClick={handleGetIteration}>iteration data</button> */}
      <button onClick={handleGetUser}>get users</button>
      <form onSubmit={registerNewUser}>
        <input type="text" />
        <button type="submit">Create user</button>
      </form>
      Name: {name}
      {/* <button onClick={handleGET}>get by id</button> */}
    </div>
  );
};

export default Json;
