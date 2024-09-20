import React from "react";

function NFTComponent() {
  return (
    <div
      className="flex flex-col   items-center justify-center h-screen bg-[#fff4eb]  p-6" //min-h-screen
    >
      <h1 className="text-4xl font-bold text-center text-primary ">
        High Quality NFT Collection
      </h1>
      <p className="mt-4 text-lg text-center text-muted-foreground ">
        A 890 piece custom Nfthub's collection is joining the NFT space on
        Opensea.
      </p>
      <a
        href="#"
        className="mt-6 bg-secondary text-secondary-foreground hover:bg-secondary/80 px-6 py-3 rounded-lg transition duration-200"
      >
        View in OPENSEA →
      </a>
      <div className="mt-8 flex items-center ">
        <img
          src="https://placehold.co/24x24"
          alt="Community members"
          className={`rounded-full`}
        />
        <span className="ml-2 text-lg text-muted-foreground ">
          47k+ Community members
        </span>
      </div>
      <div className="mt-8 flex space-x-4">
        <img
          src="https://placehold.co/100x100"
          alt="NFT Artwork 1"
          className="rounded-lg shadow-lg"
        />
        <img
          src="https://placehold.co/100x100"
          alt="NFT Artwork 2"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}

export default NFTComponent;

// const bgGradient = "bg-gradient-to-r from-purple-300 to-blue-300";
