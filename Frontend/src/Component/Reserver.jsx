import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import Link from react-router-dom
import { doctors } from './infomedcin'; // Ensure the import is correct

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
            <form className="space-y-4">
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
                {/* Accept Button - Redirect to the dashboard */}
                <button
                  type="button"
                  onClick={handleAccept} // Navigate to the sidebar or dashboard
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
                >
                  Accept
                </button>

                {/* Cancel Button */}
              {/* Cancel Button */}
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
                      className="w-full bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-300"
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
