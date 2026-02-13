import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/features/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Servd - AI Recipes Platform",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <Header/>
        <main className="min-h-screen">{children}</main>
        <footer className="py-4 px-4 border-t"> {/* Corrected here */}
          <div className="max-w-6xl mx-auto flex justify-center items-center">
            <p className="text-stone-500 text-sm">made with 💖 by JScoder</p>
          </div>
        </footer> {/* Corrected here */}
      </body>
    </html>
  );
}
