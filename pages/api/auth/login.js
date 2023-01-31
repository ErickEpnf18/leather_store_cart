import { sign } from "jsonwebtoken";
import { serialize } from "cookie";
import { auth } from "../../../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

const createToken = (name_token = "usertkn", key_client = "secret", email, type_user) => {
  // expire in 30 days
  const token = sign(
    {
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
      email,
      type_user: type_user,
    },
    key_client
  );
  const serialized = serialize(name_token, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 1000 * 60 * 60 * 24 * 30,
    path: "/",
  });
  return serialized;
};

export default async function loginHandler(req, res) {
  const { email, password } = req.body;

  if (email === "admin@admin" && password === "admin") {
    console.log("pasther admin");
    const serializedTkn = createToken("usertkn", "secret", email, "admin");
    res.setHeader("Set-Cookie", serializedTkn);
    return await res.status(200).json({
      role: "admin",
      message: "Login Admin successful",
      tkn: JSON.stringify(serializedTkn),
      user: email,
    });
  } else {
    //firebase auth login
    let user = {};
    (async () => {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
        .then((userCredential) => {
          user = userCredential.user;
          console.log("login succesful", user);
          return { user: user };
        })
        .catch((error) => {
          const { code, message } = error;
          return { error: message };
        });
      if (userCredentials?.error) {
        return await res
          .status(401)
          .json({
            error: "Invalid credentials due to " + userCredentials.error,
          });
      }
      if (userCredentials?.user) {
        const serializedTkn = createToken("usertkn", "secret", user.email, "user");
        res.setHeader("Set-Cookie", serializedTkn);
        return await res
          .status(200)
          .json({
            role: "user",
            message: "Login Fire User successful",
            tkn: JSON.stringify(serializedTkn),
            user: user,
          });
      } else {
        return await res.status(500).json({ error: "failed to load data" });
      }
    })();
  }
}
