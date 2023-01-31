import { Unstable_TrapFocus } from '@mui/material';
import { getDocsRTBS } from '../../../../service/api'
       // Notes notesAll
       const notesAll = [
            {
                "name": "user1",
                "race": "human"
            },
            {
                "name": "user2",
                "race": "human"
            },
            {
                "name": "user3",
                "race": "human"
            },
            {
                "name": "user4",
                "race": "human"
            },
            {
                "name": "user5",
                "race": "human"
            }
       ]
export default async function realtimeHandler (req, res, next) {
    const docGet = getDocsRTBS();
    const data = {
        testing: "testing",
        email: "testing@gmail.com",
        Unstable_TrapFocus: "unstable"
    }
    const url = "https://mobileapp-88de9-default-rtdb.firebaseio.com/testing.json"
    const doc = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "aplplication/json"
        },
        body: JSON.stringify({
            name: "erick",
            lastname: "andrade"
        })
    })


    res.status(200).json({data: docGet, doc: doc});
}