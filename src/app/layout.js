import Navbar from "@/Components/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProviders from "@/Services/AuthProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Car Doctor",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProviders>
          <Navbar></Navbar>
          {children}
        </AuthProviders>
      </body>
    </html>
  );
}
