import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "VocaGame | Profile",
  description: "VocaGame Technical Test",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>Header</div>
        {children}
        <div>Footer</div>
      </body>
    </html>
  );
}
