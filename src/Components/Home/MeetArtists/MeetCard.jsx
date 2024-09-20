import React from "react";

function MeetCard({ name, role, image, socialIcons }) {
  return (
    <div className="bg-card rounded-lg p-4 shadow-lg w-64">
      <img
        aria-hidden="true"
        alt={name}
        src={image}
        className="rounded-full mb-2"
      />
      <h3 className="font-semibold">{name}</h3>
      <p className="text-muted-foreground">{role}</p>
      <div className="flex justify-center space-x-2 mt-2">
        {socialIcons.map((icon, index) => (
          <a key={index} href="#" className="text-primary hover:text-primary/80">
            {icon}
          </a>
        ))}
      </div>
    </div>
  );
}

export default MeetCard;

