import { NextResponse } from "next/server";

export async function middleware(req) {
  try {
    const { pathname } = req.nextUrl;

    if (pathname === "/admin") {
      return NextResponse.next();
    }

    const token = req.cookies.get("auth_cookie");
    if (!token) {
      return NextResponse.redirect(new URL("/", req.url));
    }
    const url = process?.env?.URL;
    const res = await fetch(url + "/api/user/check", {
      headers: {
        token: token.value,
      },
    });

    const { user } = await res.json();

    if (user) {
      return NextResponse.next();
    }

    return NextResponse.redirect(new URL("/", req.url));
  } catch (error) {
    return NextResponse.redirect(new URL("/", req.url));
  }
}

export const config = {
  matcher: ["/admin/:path*"],
};
