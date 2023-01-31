import {
  collection,
  getDocs,
  query,
  doc,
  getDoc,
  addDoc,
  deleteDoc,
  updateDoc,
  setDoc,
  where,
} from "firebase/firestore";
import { database, db } from "firebase-config.js";
//////////REALTIMEDATABSE////////////////////////////////
import { getDatabase, ref, onValue, child, get} from "firebase/database";


// CREATE
export const createItem = async (obj, col) => {
  const colRef = collection(db, col);
  const data = await add(colRef, obj);
  return data.id;
};

// UPDATE
export const updateItem = async (col, id, obj) => {
  const colRef = collection(db, col);
  await updateDoc(doc(colRef, id), obj);
};
// SETDOC
// pathSegment:pathSegment-email, obj: obj, col:path-"users"
export const setNewDoc = async (id, obj, col) => {
  await setDoc(doc(db, col, id), obj);
};
// UPDATE KART
export const updateKart = async (path, pathSegment, obj) => {
  const colRef = collection(db, path);
  return await updateDoc(doc(colRef, pathSegment), obj);
};
export const setNewKart = async (id, obj, col) => {
  await setDoc(doc(db, ...id.split("/")), obj);
};
//////////////////for testing //////////////////
export const setTestAdd = async (col) => {
  const citiesRef = collection(db, col);
  await setDoc(doc(citiesRef, "SF"), {
    name: "San Francisco", state: "CA", country: "USA",
    capital: false, population: 860000,
    regions: ["west_coast", "norcal"] });
await setDoc(doc(citiesRef, "LA"), {
    name: "Los Angeles", state: "CA", country: "USA",
    capital: false, population: 3900000,
    regions: ["west_coast", "socal"] });
await setDoc(doc(citiesRef, "DC"), {
    name: "Washington, D.C.", state: null, country: "USA",
    capital: true, population: 680000,
    regions: ["east_coast"] });
await setDoc(doc(citiesRef, "TOK"), {
    name: "Tokyo", state: null, country: "Japan",
    capital: true, population: 9000000,
    regions: ["kanto", "honshu"] });
await setDoc(doc(citiesRef, "BJ"), {
    name: "Beijing", state: null, country: "China",
    capital: true, population: 21500000,
    regions: ["jingjinji", "hebei"] });
};
export const getTestSomething= async (conditional, validator) =>{
  const citiesRef = collection(db, "cities");
  const q = query(citiesRef, where(conditional, "==", validator));
  const querySnapshot = await getDocs(q)
  const data = querySnapshot.docs.map((doc)=> {
    return {...doc.data()};
  })
  return data;
}

  ////////////for testing add kart //////////////////
  export const setNewItemKart = async (col,documentIndex, obj) => {
    const ref = collection(db, col);
    const {title, } = {obj}
    await setDoc(doc(ref, documentIndex),  
    {
    //  title: title, ...obj
    ...obj
    }
      );
  }; 
  export const addFieldDocTest = async () => {
    const docRef = await addDoc(collection(db, "testing"), {
      name: "Tokyo",
      country: "Japan"
    });
    console.log("Document written with ID: ", docRef.id);
    const ref = collection(db, "testing").doc("any").collection(db, "collection");
    await setDoc(doc(ref, documentIndex),  {
      name: "Beijing", state: null, country: "China",
      capital: true, population: 21500000,
      regions: ["jingjinji", "hebei"] } );

    db.collection("restaurants")
    .doc("arinell-pizza")
    .collection("ratings")
    .get();
    }; 
  export const updateNewItemKart = async (col,documentIndex, obj) => {
    const ref = collection(db, col);
    await setDoc(doc(ref, documentIndex),);
  }; 

  export const getItemsByContional= async (col, conditional, validator) =>{
    const ref = collection(db, col);
    const q = query(ref, where(conditional, "==", validator));
    const querySnapshot = await getDocs(q)
    const data = querySnapshot.docs.map((doc)=> {
      return {...doc.data()};
    })
    return data;
  }
  ////////////for testing add kart //////////////////

// READ
export const getItems = async (col) => {
  const colRef = collection(db, col);
  const result = await getDocs(query(colRef));
  return await getArrayFromCollection(result);
};
export const getItemsWithPathLong = async (col, val1, val2 ) => {
  const colRef = collection(db, col );
  const result = await getDocs(query(colRef, col, val1, val2));
  return docSnap;
};

// GETALLUSERS
export const getUsers = async (col = "users") => {
  const colRef = collection(db, col);
  const result = await getDocs(query(colRef));
  return await getArrayFromCollection(result);
};

// GETALLOFONECOLLECTION
export const getCategory = async (nameCategory) => {
    const colRef = collection(db, nameCategory);
    const result = await getDocs(query(colRef));
    return await getArrayFromCollection(result);
};

// READ WITH WHERE
// Tener en cuenta que el tipo de dato de la condición debe coincidir con el tipo de dato que hay en Firebase o no obtendré un dato de respuesta
export const getTitle = async (condition, path) => {
  const titleRef = collection(db, path);
  const q = query(titleRef, where("title", "==", condition));
  return q;
};
export const getItemsByConditionAll = async (nameCol) => {
  const colRef = collection(db, nameCol);
  const result = await getDocs(query(colRef));
  return getArrayFromCollection(result);
};

export const getItemById = async (id) => {
  const colRef = collection(db, "items");
  const result = await getDoc(doc(colRef, id));
  return result.data();
};

// DELETE
export const deleteItem = async (id) => {
  const colRef = collection(db, "items");
  await deleteDoc(doc(colRef, id));
};

export const getArrayFromCollection = (collection) => {
  return collection.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
};

//function Users
export const getUser = async (nameCol) => {
  const colRef = collection(db, nameCol);
  const result = await getDocs(query(colRef));
  return getArrayFromCollection(result);
};

////////////////REALTIME DATABASE //////////////////////////////////
export const getDocsRTBS = async (nameCol) => {
  const dbRef = ref(getDatabase());
    onValue(ref(dbRef, 'users/' + "user"), (snapshot) => {
      const username = (snapshot.val() && snapshot.val().name) || 'Anonymous';
      console.log(username)
    }, {
      onlyOnce: false
    });
}





