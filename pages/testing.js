import axios from 'axios'
import { useEffect, useState } from 'react'
import { getDatabase, ref, onValue, set} from "firebase/database";

const db = getDatabase();
const starCountRef = ref(db, 'users/' +"user");


const Testing = () => {
 const [first, setFirst] = useState([]);

useEffect(() => {
  onValue(starCountRef, (snapshot) => {
    let records = [];
    snapshot.forEach(childSnapshot => {
      let data = childSnapshot.val();
      console.log(typeof(data), data);
      records.push(data);
    })
    setFirst(records);
  })
  set(ref(db, 'users/' + "user"),{
    username: "test",
    email: "test@test.com",
    profile: "test",
    gender: "male",
  })
}, [])

    const handleGetDocRTDB = async (e) => {
      e.preventDefault();

      const getDocRTDB = await axios.post("/api/firebase/db/realtime")
        // console.log('getDocRTDB', getDocRTDB)
    }
  return (
    <div className='flex items-center justify-center'>
        <div>
            <h1>Testing</h1>
            <p>pulling data</p>
            <p>{first}</p>
            <button type="text" onClick={(e)=>{handleGetDocRTDB(e)}}>GETDATA</button>
        </div>
    </div>
  )
}

export default Testing