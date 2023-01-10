import { collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, setDoc, where } from "firebase/firestore";
import { db } from 'firebase-config.js';





// CREATE
export const createItem = async(obj, col) => {
    const colRef = collection(db, col);
    const data = await add(colRef, obj)
    return data.id;
}

// UPDATE
export const updateItem = async (id, obj, col) => {
    const colRef = collection(db, col);
    await updateDoc(doc(colRef, id), obj)
}
// SETDOC
export const setNewDoc = async (id, obj, col) => {
    await setDoc(doc(db, col, id), obj);
}


// READ
export const getItems= async (col="items")  => {
    const colRef = collection(db, col);
    const result = await getDocs(query(colRef));
    return getArrayFromCollection(result);
}

// READ WITH WHERE
// Tener en cuenta que el tipo de dato de la condición debe coincidir con el tipo de dato que hay en Firebase o no obtendré un dato de respuesta
export const getItemsByCondition = async (value) => {
    const colRef = collection(db, 'items');
    const result = await getDocs(query(colRef, where('age', '==', value)));
    return getArrayFromCollection(result);
}
export const getItemsByConditionAll = async (nameCol) => {
    const colRef = collection(db, nameCol);
    const result = await getDocs(query(colRef));
    return getArrayFromCollection(result);
}

export const getItemById = async (id) => {
    const colRef = collection(db, 'items');
    const result = await getDoc(doc(colRef, id));
    return result.data();
}

// DELETE
export const deleteItem = async (id) => {
    const colRef = collection(db, 'items');
    await deleteDoc(doc(colRef, id));
}

export const getArrayFromCollection = (collection) => {
    return collection.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
    });
}

//function Users
export const getUser = async (nameCol) => {
    const colRef = collection(db, nameCol);
    const result = await getDocs(query(colRef));
    return  getArrayFromCollection(result)
    
}