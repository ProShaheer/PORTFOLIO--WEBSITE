import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/general/navbar/Navbar";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300","400","500","600","700"]
});

export const metadata: Metadata = {
  title: "Shaheer's PortFolio Website",
  description: "Shaheer's portFolio website",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.className} antialiased bg-slate-950`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar/>
        {children}</body>
    </html>
  );
}
