"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchSingleProperty } from "@/utils/requests";
import PropertyHeaderImage from "@/components/PropertyHeaderImage";
import { Property } from "@/app/types";

const PropertyDetailsPage = () => {
  const params = useParams();
  console.log("params =>", params);

  const { id } = useParams();
  console.log("id => ", id);

  const [property, setProperty] = useState<Property | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  console.log("property", property);

  useEffect(() => {
    const fetchPropertyData = async () => {
      if (!id) {
        return;
      }
      try {
        const property = await fetchSingleProperty(id);
        setProperty(property);
      } catch (error) {
        console.error("Error fetching property", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (property === null) {
      fetchPropertyData();
    }
  }, [id, property]);

  if (!property && !isLoading) {
    return (
      <h1 className="text-center text-2xl font-bold mt-10">
        Property Not Found
      </h1>
    );
  }

  return (
    <>{!isLoading && property && <PropertyHeaderImage property={property} />}</>
  );
};

export default PropertyDetailsPage;
