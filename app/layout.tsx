import React from "react";
import "@/assets/styles/globals.css";
import type { RootLayoutProps } from "./types";

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
