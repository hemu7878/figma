import React from "react";

function NfthubCollection({ nfts }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={nfts.imageUrl}
        alt={nfts.altText}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{nfts.title}</h2>
        <p className="text-zinc-500">By {nfts.creator}</p>
      </div>
    </div>
  );
}

export default NfthubCollection;
