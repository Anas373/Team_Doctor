import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import Link from rea
import { doctors } from './infomedcin'; // Ensure the import is correct
import { FaPhoneAlt } from 'react-icons/fa'; // Importing phone icon from react-icons

const Reservation = () => {
  const { id } = useParams(); // Access the dynamic 'id' parameter from the URL
  const navigate = useNavigate(); // Initialize navigate
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [rating, setRating] = useState(0); // State to track the rating

  // Fetch the selected doctor based on the id parameter
  useEffect(() => {
    const doctor = doctors.find((doc) => doc.id === parseInt(id)); // Find the doctor by id
    setSelectedDoctor(doctor);
  }, [id]);

  // If doctor is not found, show an error message
  if (!selectedDoctor) {
    return <div className="text-center text-red-500">Doctor not found</div>;
  }

  // Redirect to the sidebar or dashboard (where further actions can happen)
  const handleAccept = () => {
    // Navigate to the doctor's dashboard or any page after making a reservation
    navigate(`/Dashborde/${selectedDoctor.id}`);
  };

  // Handle rating change
  const handleRating = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Section d'information sur le médecin */}
          <div className="flex flex-col space-y-6 h-full">
            {/* Image du médecin avec une hauteur fixe mais proportionnelle */}
            <div className="relative flex-1">
              <img
                src={selectedDoctor.image}
                alt={selectedDoctor.name}
                className="rounded-lg shadow-lg transition-all duration-300 transform group-hover:scale-105"
                style={{
                  width: '100%',
                  height: '460px',
                  objectFit: 'cover',
                  boxShadow: '4px 4px 12px rgba(0, 0, 0, 0.1)',
                }}
              />
            </div>

            {/* Nom du médecin */}
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Doctor: <span className="text-blue-600">{selectedDoctor.name}</span>
            </h2>

            {/* Informations sur le médecin */}
            <h3 className="text-lg font-medium text-gray-700">{selectedDoctor.info}</h3>

            {/* Icône téléphone et numéro */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center bg-blue-600 text-white rounded-full p-4 shadow-lg">
                <FaPhoneAlt className="text-white" style={{ width: '20px', height: '20px' }} />
              </div>
              <p
                className="font-medium text-white bg-blue-700 rounded-full px-4 py-2 hover:bg-blue-800 cursor-pointer flex items-center justify-center transition duration-300"
                style={{ boxShadow: '4px 4px 12px black', width: '250px', height: '50px' }}
              >
                {selectedDoctor.telephone}
              </p>
            </div>

            {/* Carte de localisation */}
            <iframe
              src={selectedDoctor.localisation}
              width="100%"
              height="300px"
              style={{ border: 0, boxShadow: '4px 4px 12px rgba(0, 0, 0, 0.1)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map"
            ></iframe>
          </div>

          {/* Section de réservation */}
          <div
            className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 flex flex-col"
            style={{
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', 
              minHeight: '700px', // Augmentation de la hauteur minimale ici
            }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Make a Reservation</h3>
            <form className="space-y-4 flex-1">
              {/* Nom du patient */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Patient Name
                </label>
                <input
                  id="name"
                  placeholder="Enter your full name"
                  required
                  className="w-full px-3 py-3 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                  style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
                />
              </div>

              {/* Date */}
              <div className="space-y-2">
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                  Date
                </label>
                <div className="flex">
                  <input
                    id="date"
                    type="date"
                    required
                    className="flex-1 px-3 py-3 border rounded-l-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                    style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
                  />
                  <button
                    type="button"
                    className="px-3 py-2 bg-gray-100 border border-l-0 rounded-r-md hover:bg-gray-200 focus:outline-none focus:ring focus:ring-blue-300"
                  >
                    <span className="sr-only">Select Date</span>
                  </button>
                </div>
              </div>

              {/* Heure */}
              <div className="space-y-2">
                <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                  Time
                </label>
                <input
                  id="time"
                  type="time"
                  required
                  className="w-full px-3 py-3 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                  style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
                />
              </div>

              {/* Type de consultation */}
              <div className="space-y-2">
                <label htmlFor="consultationType" className="block text-sm font-medium text-gray-700">
                  Consultation Type
                </label>
                <select
                  id="consultationType"
                  className="w-full px-3 py-3 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                  required
                  style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
                >
                  <option value="visitor">Visiteur</option>
                  <option value="waitingList">Liste d'attente</option>
                </select>
              </div>

              {/* Star Rating Section */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Rating</label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      onClick={() => handleRating(star)}
                      xmlns="http://www.w3.org/2000/svg"
                      fill={star <= rating ? 'yellow' : 'gray'}
                      viewBox="0 0 20 20"
                      width="24"
                      height="24"
                      className="cursor-pointer"
                    >
                      <path
                        d="M10 15.27L16.18 19l-1.64-7.03L19 8.24l-7.19-.61L10 2 8.19 7.63 1 8.24l5.46 3.73L3.82 19z"
                      />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={handleAccept}
                  className="w-full bg-blue-600 text-white px-4 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
                  style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
                >
                  Accept
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const confirmCancel = window.confirm(
                      "Are you sure you want to cancel the reservation?"
                    );
                    if (confirmCancel) {
                      alert("You have canceled the reservation.");
                      navigate("/"); // Redirect to home or another page if needed
                    }
                  }}
                  className="w-full bg-red-600 text-white px-4 py-3 rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Reservation;
