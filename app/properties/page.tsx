"use client";
import React from "react";
import { useRouter, useParams } from "next/navigation";

const PropertyPage = () => {
  const router = useRouter();
  const { id } = useParams();

  return (
    <div>
      <h1>PropertyPage</h1>
      <button onClick={() => router.push("/")}>go home + {id}</button>
    </div>
  );
};

export default PropertyPage;
