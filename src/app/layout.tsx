import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import ThemeRegistry from "../components/ThemeRegistry";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Citiuation",
  description: "Compare cost of living between cities",
    icons: {
    icon: "/favicon.svg", 
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <ThemeRegistry>
          <Header />
          <main>{children}</main>
        </ThemeRegistry>
      </body>
    </html>
  );
}
