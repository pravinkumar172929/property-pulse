import React from "react";
import propertiesData from "@/properties.json";
import { PropertyCard } from "./PropertyCard";
import { Property } from "@/app/types";

const properties = propertiesData as Property[];

const HomeProperty = () => {
  const recentRandomProperties = properties
    .sort(() => Math.random() - Math.random())
    .slice(0, 3);

  console.log("recentRandomProperties", recentRandomProperties);

  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
          Recent Properties
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentRandomProperties.length === 0 ? (
            <p>No Properties Found</p>
          ) : (
            recentRandomProperties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeProperty;
