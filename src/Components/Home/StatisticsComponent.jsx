import React from "react";

function StatisticsComponent({ number, description }) {
  return (
    <div className="text-center ml-[6%] p-8 ">
      <h2 className="text-4xl font-bold text-foreground">{number}</h2>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

export default StatisticsComponent;
