import { serialize } from "cookie";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

const getVerifyCookie = async (jwt) => {
  try {
    const { payload } = await jwtVerify(
      jwt,
      new TextEncoder().encode("secret"),{}
    );
    if (payload) return true
  } catch (error) {
    
  }
  return false
}
const cleanToken = async (res) => {
  const serialized = serialize("usertkn", null, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 0,
    path: "/",
  });
  res.setHeader("Set-Cookie", serialized);
}

export default async function logoutHandler(req, res) {
  const { usertkn, adminToken } = req.cookies;

  const usert = getVerifyCookie(usertkn);
  const admint = getVerifyCookie(adminToken);
  if (usert) { cleanToken(res);  // return NextResponseesponse.redirect(new URL("/", request.url));
   return res.status(200).json({message: "Logout successful and clean", });}
  if (admint) { cleanToken(res);   //return NextResponse.redirect(new URL("/", request.url)); 
  return res.status(200).json({message: "Logout successful and clean", });}


  if (!usertkn && !adminToken) {
    console.log("Invalid mytokenname", usertkn)
    //return NextResponse.redirect(new URL("/", request.url));
    return res.status(401).json({ error: "Not logged in" });
  }
}
