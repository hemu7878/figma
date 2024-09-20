import React from "react";
import ChooseCard from "./ChooseCard";

function ChooseList() {
  return (
    <section className="py-14 bg-background p-10">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-primary">
          Why <span className="text-purple-600"> choose us? </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <ChooseCard
            icon="📦"
            title="Huge collection"
            description="A collection of 890 unique Nerkos built to go beyond the digital space"
          />
          <ChooseCard
            icon="✅"
            title="High quality"
            description="The nerko's collection includes dozens of rare costumes and colorways of artist's"
          />
          <ChooseCard
            icon="🍽️"
            title="Top resource"
            description="Tasty design resources made with care for each pixel. NFTs and game resources"
          />
          <ChooseCard
            icon="👥"
            title="Big community"
            description="Be part of a community of nerko owners and create user-generated items"
          />
        </div>
      </div>
    </section>
  );
}

export default ChooseList;
