import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import {useState, useEffect} from 'react'
const Product = () => {
    const [products, setProducts] = useState([])
useEffect(() =>{
    const collectionRef = collection(db, "products");
    const q = query(collectionRef, orderBy("timestamp", "desc"))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setProducts(querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id, timestamp: doc.data(). timestamp?.toDate().getTime() })))
    })
return unsubscribe;
},[]);
	
    return (
    <div>{products.map(i=> <div key={i.id}>{i.title}</div>)}</div>
  )
}

export default Product