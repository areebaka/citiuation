import "./globals.css";
import { Inter } from "next/font/google";
import ThemeRegistry from "../components/ThemeRegistry";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Citiuation",
  description: "Compare cost of living between cities",
    icons: {
    icon: "/favicon.png", 
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <ThemeRegistry>
          <Navbar />
          <main>{children}</main>
        </ThemeRegistry>
      </body>
    </html>
  );
}
