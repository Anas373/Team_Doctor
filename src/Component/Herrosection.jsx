import React from 'react';
import  Medcin from "./Specialiter"

const HeroSection = () => {
  return (
    <div className="text-center p-6 mt-40">
    <h1 className="text-5xl font-bold mb-4">
      Search <span className="text-blue-500">Doctors</span>
    </h1>
    <div className="relative inline-block w-full max-w-md">
      <input
        type="text"
        name="search-bar"
        id="search-bar"
        placeholder="Chercher un médecin"
        className="text-center w-full p-4 mb-4  mt-5 bg-white border border-gray-300 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button className="absolute right-2 top-2 mt-5 text-white bg-blue-500 py-2 px-4 font-bold rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
        Chercher
      </button>
    </div>
    <Medcin/>
  </div>

  /* cette section c  est pour les image des dotor est les spicialiter*/ 
     
  );
};

export default HeroSection;
