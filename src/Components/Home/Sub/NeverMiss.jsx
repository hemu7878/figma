import { Button } from "flowbite-react";
import React from "react";

function NeverMiss() {
  return (
    <div className="bg-white dark:bg-card rounded-lg shadow-lg p-6 max-w-3xl mx-auto flex flex-col items-center">
      <h2 className="text-3xl font-bold text-primary">
        Never <span className="text-purple-500">miss a drop!</span>
      </h2>
      <p className="text-muted-foreground text-center mb-4">
        Subscribe to our super-rare and exclusive drops & collectibles.
      </p>
      <div className="flex w-full">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 border border-muted rounded-l-lg p-2 focus:outline-none focus:ring focus:ring-primary"
        />
        <Button className="rounded-full ml-2 bg-slate-400">Subscribe</Button>
      </div>
    </div>
  );
}

export default NeverMiss;
