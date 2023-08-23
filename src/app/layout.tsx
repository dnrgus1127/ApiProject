import Header from "@/components/header/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MyPortFolio",
  description: "Generated by create next app",
};

export default function RootLayout(props: {
  children: React.ReactNode;
  name: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className + "font-sans bg-[#121212]  py-16 "}>
        <Header />
        <div className='fixed -z-10 right-0 top-0 w-side h-[100vh] bg-white'></div>
        {props.children}
      </body>
    </html>
  );
}
