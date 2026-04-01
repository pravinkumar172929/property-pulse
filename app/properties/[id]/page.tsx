"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchSingleProperty } from "@/utils/requests";
import PropertyHeaderImage from "@/components/PropertyHeaderImage";
import { Property } from "@/app/types";
import PropertyImages from "@/components/PropertyImages";

const PropertyDetailsPage = () => {
  const { id } = useParams() as { id: string };

  const [property, setProperty] = useState<Property | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPropertyData = async () => {
      try {
        const data = await fetchSingleProperty(id);
        setProperty(data);
      } catch (error) {
        console.error("Error fetching property", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPropertyData();
  }, [id]);

  if (isLoading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (!property) {
    return (
      <h1 className="text-center text-2xl font-bold mt-10">
        Property Not Found
      </h1>
    );
  }

  return (
    <>
      <PropertyHeaderImage property={property} />
      <PropertyImages images={property.images} />
    </>
  );
};

export default PropertyDetailsPage;
