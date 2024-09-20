import React from "react";
import { nft } from "../../../Data/Data";
import NfthubCollection from "./NfthubCollection";

function NfthubCollectionList() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center text-purple-600">
        Nfthub's <span className="text-black">collection</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {nft.map((value) => {
          return <NfthubCollection key={value.id} nfts={value} />;
        })}
      </div>
      <div className="mt-10 text-center">
        <a
          href="#"
          className="bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-700 transition "
        >
          View collection ➔
        </a>
      </div>
    </div>
  );
}

export default NfthubCollectionList;
