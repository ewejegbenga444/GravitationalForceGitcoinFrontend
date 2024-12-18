import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Gravitational Force",
  description: "Intelligent tutoring system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
      <header className="bg-white shadow-sm fixed w-full z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">

            <Link href="/" className="text-2xl font-bold text-primary">
            
            <img
                src="../../logo.PNG"
                alt="Student learning"
                width={100}
                height={100}
                className="rounded-full relative z-10 mx-auto"
            />

            </Link>
            
            <nav className="hidden md:flex space-x-8">
              {/* <Link href="#features" className="text-gray-600 hover:text-primary">Features</Link> */}
              <Link href="#about" className="text-gray-600 hover:text-primary">About</Link>
              <Link href="/gravitational" className="text-gray-600 hover:text-primary">Gravitational</Link>
            </nav>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      <div>
        {children}
      </div>

      <footer className="bg-[#002699] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Gravitational</h3>
              <p className="text-sm text-gray-400">Empowering learners worldwide</p>
            </div>
            <nav className="flex space-x-4">
              <Link href="#" className="hover:text-primary">Privacy Policy</Link>
              <Link href="#" className="hover:text-primary">Terms of Service</Link>
              <Link href="#" className="hover:text-primary">Contact</Link>
            </nav>
          </div>
          <div className="mt-8 text-center text-sm text-gray-400">
            &copy; 2024 Dec. gravitational. All rights reserved.
          </div>
        </div>
      </footer>

      </body>
    </html>
  );
}
