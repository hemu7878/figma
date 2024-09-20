import React from "react";
import MeetCard from "./MeetCard";

const artistData = [
  {
    name: "Steps Jobs",
    role: "Artist",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/004/899/680/small/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg",
    socialIcons: ["🐦", "💬", "📸"],
  },
  {
    name: "Andry Moray",
    role: "Blockchain",
    image:
      "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1726704000&semt=ais_hybrid",
    socialIcons: ["🐦", "💬", "📸"],
  },
  {
    name: "Zaid Ed",
    role: "Developer",
    image:
      "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1726704000&semt=ais_hybrid",
    socialIcons: ["🐦", "💬", "📸"],
  },
  {
    name: "Laila Ed",
    role: "Marketing",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/004/899/680/small/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg",
    socialIcons: ["🐦", "💬", "📸"],
  },
];

function MeetList() {
  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-primary">
          Meet <span className="text-purple-600">the artists</span>
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {artistData.map((artist, index) => (
          <MeetCard key={index} {...artist} />
        ))}
      </div>
    </div>
  );
}

export default MeetList;


