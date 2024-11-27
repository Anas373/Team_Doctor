import React, { useState } from "react";
import Medcin from "../Component/Medcin";
import Dent from "../assets/dentiste.png";
import yeux from "../assets/yeux.png";
import poumon from "../assets/poumon.png";
import os from "../assets/os.png";
import couer from "../assets/couer.jpg";

const Specialiter = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState("");

  const menuItems = [
    { label: "Tous", link: "#", icon: null }, // Nouvelle option pour afficher tous les médecins
    { label: "Ophtalmologue", link: "#", icon: yeux },
    { label: "Pneumologue", link: "#", icon: poumon },
    { label: "Orthopédiste", link: "#", icon: os },
    { label: "Cardiologue", link: "#", icon: couer },
    { label: "Dentiste", link: "#", icon: Dent },
  ];

  const handleClick = (specialty) => {
    setSelectedSpecialty(specialty === "Tous" ? "" : specialty);
  };

  return (
    <div className="flex h-screen ">
      {/* Sidebar */}
      <div className="w-48 flex-col justify-between border-e bg-white">
        <div className="px-4 py-6">
          <ul className="mt-6 space-y-1">
            {menuItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => handleClick(item.label)}
                  className="flex items-center rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  {item.icon && (
                    <img
                      src={item.icon}
                      alt={item.label}
                      className="w-14" // Adjust the size of the icon
                    />
                  )}
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Content area (Doctors List) */}
      <div className=" h-48 mb-80">
        <Medcin selectedSpecialty={selectedSpecialty} />
      </div>
    </div>
  );
};

export default Specialiter;
