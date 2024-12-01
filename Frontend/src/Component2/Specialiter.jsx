import React, { useState } from "react";
import Medcin from "../Component/Medcin";
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
  const [searchQuery, setSearchQuery] = useState(""); // Added state for search query

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
      {/* Sidebar */}
      <div className="w-50 flex-col justify-between border-e bg-white">
        <div className="px-4 py-6">
          <ul className="mt-8 space-y-1">
            {menuItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => handleClick(item.label)}
                  className="flex items-center justify-center rounded-lg w-full h-16 px-6 text-sm font-medium text-gray-600 hover:bg-blue-500 hover:text-white"
                >
                  {item.icon && (
                    <img
                      src={item.icon}
                      alt={item.label}
                      className="w-8 h-8"
                    />
                  )}
                  <span className="ml-4">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Content area */}
      <div className="flex-1 flex flex-col">
        {/* Search Bar */}
        <div className="w-full flex justify-center mt-12">
          <div className="relative w-full max-w-2xl">
            <div className="absolute left-3 top-1/2 transform -translate-y-2.5">
              <svg
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 4a6 6 0 100 12 6 6 0 000-12zm10 10l-4.35-4.35"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search For a Doctor"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-3 pl-10 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
        </div>

        {/* Doctors List */}
        <div className="flex-1 overflow-y-auto mb-8">
          <Medcin selectedSpecialty={selectedSpecialty} searchQuery={searchQuery} />
        </div>
      </div>
    </div>
  );
};

export default Specialiter;