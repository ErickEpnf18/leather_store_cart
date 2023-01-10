import { sign } from "jsonwebtoken";
import { serialize } from "cookie";
import {auth} from "../../../config/firebaseConfig"
import { createUserWithEmailAndPassword } from "firebase/auth";

const createToken = (name_token="user", key_client="secret", email) => {
     // expire in 30 days
     const token = sign(
        {
          exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
          email,
          type_user: "client"
        },
        key_client,
      );
      const serialized = serialize(name_token, token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 1000 * 60 * 60 * 24 * 30,
        path: "/",
      });
    return serialized;
}


export default async function loginHandler(req, res) {
  const { email, password } = req.body;
//firebase auth login
let user = {};
  (async () => {
     const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      user = userCredential.user;
      return {user: user,}
    })
    .catch((error) => {
      const {code, message }= error;
      return {error: message}
    });
    if (userCredentials?.error){
        //console.log("+********++++++++++++++", userCredentials)
        return res.status(401).json({ error: "Invalid credentials due to " + userCredentials.error });
    }
    if(userCredentials?.user){
        // console.log("+********++++++++++++++", userCredentials)
        const serializedTkn = createToken("user", "secret", user.email)
        res.setHeader("Set-Cookie", serializedTkn);
        return res.status(200).json({message: "Created Fire User successful", tkn: JSON.stringify(serializedTkn), user: user});
    }else{
        res.status(500).json({ error: 'failed to load data' })
    }
})();

}

