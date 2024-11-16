import React from 'react';
import Medcin from "../Component/Medcin";
import Dent from "../assets/dentiste.png";
import yeux from "../assets/yeux.png"
import poumon from "../assets/poumon.png"
import os from "../assets/os.png"
import couer from "../assets/couer.jpg"
const Specialiter = () => {
  const menuItems = [
    { label: 'Ophtalmologue', link: '#',icon:yeux },
    { label: 'Pneumologue', link: '#',icon :poumon },
    { label: 'Orthopédiste', link: '#',icon: os },
    { label: 'Cardiologue', link: '#',icon: couer },
    { label: 'Dentiste', link: '#', icon: Dent },
  ];

  return (
    <>
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-48 flex-col justify-between border-e bg-white">
          <div className="px-4 py-6">
            <ul className="mt-6 space-y-1">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
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
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Content area (Doctors List) */}
        <div className="flex-1 p-6">
          <Medcin />
        </div>
        
      </div>
    </>
  );
};

export default Specialiter;
