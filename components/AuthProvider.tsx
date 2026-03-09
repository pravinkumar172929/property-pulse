import React from "react";
import { SessionProvider } from "next-auth/react";
import { AuthProviderPros } from "@/app/types";

const AuthProvider = ({ children }: AuthProviderPros) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
