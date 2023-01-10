import { serialize } from "cookie";
import jwt from "jsonwebtoken";

export default function logoutHandler(req, res) {
  const { usertkn, adminToken } = req.cookies;
  if (!usertkn && !adminToken) {
    console.log("Invalid mytokenname", usertkn)
    return res.status(401).json({ error: "Not logged in" });
  }
  //let valueToken = myTokenName ? myTokenName : adminToken
  
  //const { email,value } = jwt.verify(adminToken, "secret");

  const serialized = serialize("usertkn", null, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 0,
    path: "/",
  });

  res.setHeader("Set-Cookie", serialized);
  return res.status(200).json({
    message: "Logout successful",
  });
}
