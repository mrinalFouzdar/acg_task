import React from "react";
import SingleOverallOEETrackerComponent from "./SingleOverallOEETrackerComponent";
import useFetch from "../hooks/useFetch";

const OverallOEETrackerComponent = () => {
  const { data, isLoading, error } = useFetch(

    `${process.env.REACT_APP_API_URL}/OverallOEETrackerData`
  );
  if (isLoading) return <div>Loading...</div>;
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!data) return;
  return (
    <div className="d-flex">
      {data.map((singleOverallOeeTrackerData) => (
        <SingleOverallOEETrackerComponent
          data={singleOverallOeeTrackerData}
          key={singleOverallOeeTrackerData.id}
        />
      ))}
    </div>
  );
};

export default OverallOEETrackerComponent;
