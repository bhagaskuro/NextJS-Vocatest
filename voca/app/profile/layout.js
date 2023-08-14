"use client";
import { Inter } from "next/font/google";
import Footer from "../components/footer";
import Header from "../components/header";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "VocaGame | Profile",
//   description: "VocaGame Technical Test",
// };

export default function ProfileLayout({ children }) {
  return (
    <>
      <Header />
      <div className="px-20 py-10">{children}</div>
      <Footer />
    </>
  );
}
