import { Button } from "flowbite-react";
import React from "react";

function NFTMintingComponent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-2">
      <h1 className="text-4xl font-bold text-primary  mb-4">Let's start</h1>
      <h1 className="text-5xl font-extrabold text-purple-600  mb-2">minting</h1>
      <p className="text-lg  text-muted-foreground text-center mb-6">
        Invest and manage all your NFTs at one place.
      </p>
      <Button>Get started →</Button>
    </div>
  );
}

export default NFTMintingComponent;
