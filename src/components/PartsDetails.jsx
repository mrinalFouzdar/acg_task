import React from "react";
import SinglePartsDetailsComponent from "./SinglePartsDetailsComponent";
import useFetch from "../hooks/useFetch";

const PartsDetails = () => {
  const { data, isLoading, error } = useFetch(
    `${process.env.REACT_APP_API_URL}/partsDetailsData`
  );
  // console.log({ data });

  if (isLoading) return <div>Loading...</div>;
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!data) return;

  return (
    <div className="d-flex">
      {data.map((singlePartData) => (
        <SinglePartsDetailsComponent
          data={singlePartData}
          key={singlePartData.id}
        />
      ))}
    </div>
  );
};

export default PartsDetails;
