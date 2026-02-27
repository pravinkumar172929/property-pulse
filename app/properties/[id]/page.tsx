"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchSingleProperty } from "@/utils/requests";

const PropertyDetailsPage = () => {
  const { id } = useParams();
  console.log("id => ", id);

  const [property, setProperty] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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

  return <div>PropertyDetailsPage</div>;
};

export default PropertyDetailsPage;
