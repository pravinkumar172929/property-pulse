import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { LoadingPageProps } from "./types";

const override = {
  display: "block",
  margin: "100px auto",
};

const LoadingPage = ({ loading }: LoadingPageProps) => {
  return (
    <ClipLoader
      color="#3b82f6"
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinners"
    />
  );
};

export default LoadingPage;
