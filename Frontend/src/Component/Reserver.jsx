import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams for dynamic routing
import { doctors } from './infomedcin'; // Ensure the import is correct

const Reservation = () => {
  const { id } = useParams(); // Access the dynamic 'id' parameter from the URL
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedRequestType, setSelectedRequestType] = useState('visit'); // Valeur par défaut
  // Fetch the selected doctor based on the id parameter
  useEffect(() => {
    const doctor = doctors.find((doc) => doc.id === parseInt(id)); // Find the doctor by id
    setSelectedDoctor(doctor);
  }, [id]);

  // If doctor is not found, show an error message
  if (!selectedDoctor) {
    return <div className="text-center text-red-500">Doctor not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Section d'information sur le médecin */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Doctor: <span className="text-blue-600">{selectedDoctor.name}</span>
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Easy, fast, and convenient scheduling for your health needs.
            </p>
            <img
              src={selectedDoctor.image}
              alt={selectedDoctor.name}
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Section de réservation */}
          <div className="w-full max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Make a Reservation</h3>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Patient Name
                </label>
                <input
                  id="name"
                  placeholder="Enter your full name"
                  required
                  className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>



              <div>
                  <label htmlFor="requestType" className="block text-sm font-medium text-gray-700">Type de demande</label><br/>
                  <select id="requestType"  className="flex-1 px-3 py-2 border rounded-l-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"  name="requestType" value={selectedRequestType} onChange={(e) => setSelectedRequestType(e.target.value)}>
                  <option value="visit">Visite</option>
                  <option value="consultation">Consultation</option>
                  <option value="waitingList">Liste d'attente</option>
                 </select>
                </div>
                    
                   



              <div className="space-y-2">
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                  Date
                </label>
                <div className="flex">
                  <input
                    id="date"
                    type="date"
                    required
                    className="flex-1 px-3 py-2 border rounded-l-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                  />
                  <button
                    type="button"
                    className="px-3 py-2 bg-gray-100 border border-l-0 rounded-r-md hover:bg-gray-200 focus:outline-none focus:ring focus:ring-blue-300"
                  >
                    <span className="sr-only">Select Date</span>
                    📅
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                  Time
                </label>
                <input
                  id="time"
                  type="time"
                  required
                  className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>

              {/* Buttons */}
              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
                >
                  Accept
                </button>
                <a href='./Dashborde'
                  type="submit"
                  className="w-full bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-300"
                >
                  Cancel
                </a>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Reservation;