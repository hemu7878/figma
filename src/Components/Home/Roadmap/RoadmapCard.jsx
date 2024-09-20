import React from "react";

function RoadmapCard({ title, progress, heading }) {
  return (
    <div className="bg-card p-4 rounded-lg  shadow-lg">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-purple-600">{title}</h3>
        <span className="text-xl font-bold text-accent">{progress}</span>
      </div>
      <h4 className="text-2xl font-bold mt-2">{heading}</h4>
      <p className="text-muted-foreground mt-2">
        Quality comes first. We took our time to plan out everything and build
        our production pipeline for a good quality artworks.
      </p>
      <div className="mt-4">
        <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 w-full p-2 rounded">
          Release website and logo
        </button>
        <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 w-full p-2 rounded mt-2">
          Grow community
        </button>
        <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 w-full p-2 rounded mt-2">
          Launch the project
        </button>
      </div>
    </div>
  );
}

export default RoadmapCard;
