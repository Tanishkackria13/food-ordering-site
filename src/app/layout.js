import { Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";

const roboto = Roboto({ subsets: ["latin"], weight: ['400', '500', '700'] });

export const metadata = {
  title: "Food ordering",
  description: "now food at your doorstep",
};

export default function RootLayout({ children }) {
  const year=new Date().getFullYear()
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="max-w-4xl mx-auto  p-4 ">
          <Header />
          {children}
          <footer className="border-t p-8 text-center text-grb mt-16">
            &copy; {year} All Right Reserved
          </footer>
        </main>
      </body>
    </html>
  );
}
