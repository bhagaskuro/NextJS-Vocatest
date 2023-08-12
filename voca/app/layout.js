"use client";
import "./styles/globals.css";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import reduxStore from "../redux/store";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "VocaGame | Technical Test",
  description: "VocaGame Technical Test",
};

export default function RootLayout({ children }) {
  return (
    <Provider store={reduxStore}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </Provider>
  );
}
