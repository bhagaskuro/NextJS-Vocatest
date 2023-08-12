import { NextResponse } from "next/server";

export default function middleware(req) {
  let verify = req.cookies.get("loggedIn");
  let url = req.url;

  if (!verify && url.includes("/profile")) {
    return NextResponse.redirect("http://localhost:3000/login");
  }
  if (!verify && url.includes("/edit")) {
    return NextResponse.redirect("http://localhost:3000/login");
  }
  if (!verify && url.includes("/change-password")) {
    return NextResponse.redirect("http://localhost:3000/login");
  }

  if (verify && url.includes("/login")) {
    return NextResponse.redirect("http://localhost:3000/profile");
  }
}