import { NextResponse } from "next/server";

export default function middleware(req) {
  let verify = req.cookies.get("loggedIn");
  let url = req.url;
  const uri = "https://vocatest-delta.vercel.app/";

  if (!verify && url.includes("/profile")) {
    return NextResponse.redirect(uri + "/login");
  }
  if (!verify && url.includes("/edit")) {
    return NextResponse.redirect(uri + "/login");
  }
  if (!verify && url.includes("/change-password")) {
    return NextResponse.redirect(uri + "/login");
  }

  if (verify && url.includes("/login")) {
    return NextResponse.redirect(uri + "/profile");
  }
}
