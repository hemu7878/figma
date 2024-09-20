import React from "react";
import RoadmapCard from "./RoadmapCard";

const phaseData = [
  { title: "PHASE 01", progress: "0%", heading: "Planning" },
  { title: "PHASE 02", progress: "25%", heading: "Production" },
  { title: "PHASE 03", progress: "50%", heading: "Launch" },
  { title: "PHASE 04", progress: "75%", heading: "Minting" },
  { title: "PHASE 05", progress: "95%", heading: "New Nfts" },
  { title: "PHASE 06", progress: "100%", heading: "Metaverse" },
];
function RoadmapList() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-center text-purple-600">
        Nfthub's <span className="text-black">Roadmap</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-12">
        {phaseData.map((phase, index) => (
          <RoadmapCard
            key={index}
            title={phase.title}
            progress={phase.progress}
            heading={phase.heading}
          />
        ))}
      </div>
    </div>
  );
}

export default RoadmapList;
