import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request) {
  const jwt = request.cookies.get("usertkn");
  const jwtAdmin = request.cookies.get("adminToken");

  if (!jwtAdmin && !jwt) { return NextResponse.redirect(new URL("/", request.url));}

  // this condition avoid to show the login page if the user is logged in
  // if (typeof jwt === "string" || jwt instanceof String) {
  //   console.log("what happens here")
  //   if (request.nextUrl.pathname.includes("/login")) {
  //     try {
  //       await jwtVerify(jwt, new TextEncoder().encode("KEY_CLIENT"),{ 
  //         issuer: 'urn:none:unavailable',
  //      audience: 'urn:clients:everyone',
  //    });
  //       return NextResponse.redirect(new URL("/dashboard", request.url));
  //     } catch (error) {
  //       return NextResponse.next();
  //     }
  //   }
  // }

  try {
    const { payload } = await jwtVerify(
      jwt,
      new TextEncoder().encode("secret"),{}
    );
    console.log("payload", { payload });
    console.log("response", NextResponse.next())
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}


export const config = {
  // matcher: ["/dashboard/:path*", ],
  matcher: ["/json", ],
};
