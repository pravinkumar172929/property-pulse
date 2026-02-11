"use client";
import React from "react";
import { useRouter } from "next/navigation";

const PropertyPage = () => {
  const router = useRouter();

  return (
    <div>
      <h1>PropertyPage</h1>
      <button onClick={() => router.push("/")}>go home</button>
    </div>
  );
};

export default PropertyPage;
