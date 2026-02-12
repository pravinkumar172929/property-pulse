import React from "react";
import "@/assets/styles/globals.css";
import type { RootLayoutProps } from "./types";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "PropertyPulse | Find the Perfect Rental",
  description: "Find your dream rental property",
  keywords: "rentals, find rentals, find properties",
};

const MainLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <div className="bg-red-500 text-white">Test</div>
        <div className="bg-green-500 text-white p-10 text-3xl">
          Tailwind Working
        </div>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
