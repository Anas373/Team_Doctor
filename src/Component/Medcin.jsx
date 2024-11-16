import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { doctors } from './infomedcin';

const Medcin = () => {
  return (
    <div className="w-4/5 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {doctors.slice(0, 10).map((item, index) => (
          <div 
            key={index} 
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition-shadow duration-300 text-center"
          >
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-24 h-24 mx-auto rounded-full border border-gray-300 shadow-sm mb-4" 
            />
            <p className="text-green-500 font-semibold text-sm mb-2">Available</p>
            <p className="font-bold text-lg text-gray-800">{item.name}</p>
            <p className="text-blue-500 text-sm font-medium">{item.specialization}</p>
            {/* Link to the Reservation page with the doctor's ID */}
            <Link to={`./Reserver/${item.id}`} className="text-orange-500 text-xs">Reserve</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Medcin;
