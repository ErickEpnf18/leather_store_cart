import { sign } from "jsonwebtoken";
import { serialize } from "cookie";
import {auth} from "../../../config/firebaseConfig"
import { signInWithEmailAndPassword } from "firebase/auth";

const createToken = (name_token="usertkn", key_client="secret", email) => {
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

  if (email === "user@user" && password === "user") {
    console.log("pasther user");
    // expire in 30 days
    const token = sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
        email,
        username: "clients",
      },
      "KEY_CLIENT",
      {  issuer: 'urn:none:unavailable',
      audience: 'urn:clients:everyone'}

    );

    const serialized = serialize("myTokenName", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 1000 * 60 * 60 * 24 * 30,
      path: "/",
    });

    res.setHeader("Set-Cookie", serialized);
    return res.status(200).json({
      message: "Login successful",
      data: JSON.stringify(serialized),
      type_user: "myTokenName",
    });
  }
  if (email === "admin@admin" && password === "admin") {
    console.log("pasther admin");

    // expire in 30 days
    const token = sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
        email,
        value: "over there",
        username: "superadmin",
      },
      "secret"
    );

    const serialized = serialize("adminToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 1000 * 60 * 60 * 24 * 30,
      path: "/",
    });

    res.setHeader("Set-Cookie", serialized);
    res.setHeader("grl", "Diana Almeida");
    return res.status(200).json({
      message: "Login successful",
      user: JSON.stringify(serialized),
      type_user: "adminToken",
    });
  }
//firebase auth login
let user = {};
  (async () => {
    const userCredentials = await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      user = userCredential.user;
      console.log("login succesful", user)
      return {user: user}
    })
    .catch((error) => {
      const {code, message }= error;
      return {error: message}
    });
    if (userCredentials?.error){
      return res.status(401).json({ error: "Invalid credentials due to " + userCredentials.error });
  }
    if(userCredentials?.user){
      const serializedTkn = createToken("usertkn", "secret", user.email)
      res.setHeader("Set-Cookie", serializedTkn);
      return res.status(200).json({message: "Created Fire User successful", tkn: JSON.stringify(serializedTkn), user: user});
    }else{
      res.status(500).json({ error: 'failed to load data' })}
  })();

}
