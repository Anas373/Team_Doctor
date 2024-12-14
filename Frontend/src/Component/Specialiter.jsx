import React, { useState } from "react";
import Medcin from "./Medcin";
import Dent from "../assets/dentist.png";
import yeux from "../assets/yeux.png";
import poumon from "../assets/poumon.png";
import os from "../assets/os.png";
import couer from "../assets/heart.png";
import family from "../assets/family.png";
import brain from "../assets/brain.png";
import Emergency from "../assets/ambulance.png";

const Specialiter = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState("");

  const menuItems = [
    { label: "Tous", link: "#", icon: null },
    { label: "Emergency", link: "#", icon: Emergency },
    { label: "Pulmonology", link: "#", icon: poumon },
    { label: "Orthopedics", link: "#", icon: os },
    { label: "Cardiology", link: "#", icon: couer },
    { label: "Dentiste", link: "#", icon: Dent },
    { label: "Family Medicine", link: "#", icon: family },
    { label: "Ophthalmology", link: "#", icon: yeux },
    { label: "Psychology", link: "#", icon: brain },
  ];

  const handleClick = (specialty) => {
    setSelectedSpecialty(specialty === "Tous" ? "" : specialty);
  };

  return (
    <div className="flex h-screen">
      <div className="w-50 flex-col justify-between border-e bg-white">
        <div className="px-4 py-6">
          <ul className="mt-8 space-y-1">
            {menuItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => handleClick(item.label)}
                  className={`flex items-center justify-center rounded-lg w-full h-16 px-6 text-sm font-medium text-gray-600 hover:bg-blue-500 hover:text-white ${selectedSpecialty === item.label ? "bg-blue-500 text-white" : ""}`}
                >
                  {item.icon && <img src={item.icon} alt={item.label} className="w-8 h-8" />}
                  <span className="ml-4">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex-1 overflow-y-auto mb-8">
          <Medcin selectedSpecialty={selectedSpecialty} />
        </div>
      </div>
    </div>
  );
};

export default Specialiter;
