import React from "react";
import "@/assets/styles/globals.css";
import type { RootLayoutProps } from "./types";

export const metadata = {
  title: "PropertyPulse | Find the Perfect Rental",
};

const MainLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
