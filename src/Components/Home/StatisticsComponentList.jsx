import React from "react";
import StatisticsComponent from "./StatisticsComponent";

function StatisticsComponentList() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-6 bg-background">
      <StatisticsComponent number="400k+" description="Wallets Connected" />
      <StatisticsComponent number="20k+" description="Wallets Connected" />
      <StatisticsComponent number="230+" description="Creative artists" />
      <StatisticsComponent number="2.5x" description="Estimated value" />
    </div>
  );
}

export default StatisticsComponentList;
