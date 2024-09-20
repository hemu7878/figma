import React from "react";

function ChooseCard({ icon, title, description }) {
  return (
    <div className="bg-card p-8 rounded shadow-lg">
      <div className="flex items-center justify-center mb-4">
        <img
          aria-hidden="true"
          alt="icon"
          src={`https://openui.fly.dev/openui/24x24.svg?text=${icon}`}
        />
      </div>
      <h3 className="text-xl font-semibold text-primary">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

export default ChooseCard;
