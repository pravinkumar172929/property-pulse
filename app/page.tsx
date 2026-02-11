import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <>
      <h1 className="text-3xl">HomePage</h1>
      <Link href="/properties">Go to properties</Link>
    </>
  );
};

export default HomePage;
