import { useGetPropertiesQuery } from "@/state/api";
import { useAppSelector } from "@/state/redux";
import GuestCard from "@/components/GuestCard";
import React from "react";

const GuestListings = () => {
  const filters = useAppSelector((state) => state.global.filters);
  const {
    data: properties,
    isLoading,
    isError,
  } = useGetPropertiesQuery(filters);

  if (isLoading) return <>Loading...</>;
  if (isError || !properties) return <div>Failed to fetch properties</div>;

  return (
    <div className="w-full">
      <h3 className="text-sm px-4 font-bold">
        {properties.length}{" "}
        <span className="text-gray-700 font-normal">
          Places in {filters.location}
        </span>
      </h3>
      <div className="flex">
        <div className="p-4 w-full">
          {properties?.map((property) => (
            <GuestCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GuestListings; 