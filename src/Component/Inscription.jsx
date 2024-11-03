import { useState } from 'react';
// import logomed from "../assets/medcinlogo"

function Inscription() {
  const [userType, setUserType] = useState(null);

  const handleUserTypeSelection = (type) => {
    setUserType(type);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Créer un compte</h2>
      
      <div className="flex space-x-4 mb-8">
        <button
          onClick={() => handleUserTypeSelection('user')}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Utilisateur
        </button>
        <button
          onClick={() => handleUserTypeSelection('doctor')}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Médecin
        </button>
      </div>

      {userType === 'user' && (
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Formulaire pour Utilisateur</h3>
          {/* Ajouter les champs de formulaire ici */}
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Créer un compte utilisateur
          </button>
        </div>
      )}

      {userType === 'doctor' && (
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Formulaire pour Médecin</h3>
          {/* Ajouter les champs de formulaire ici */}
          <input
            type="text"
            placeholder="Nom du médecin"
            className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="text"
            placeholder="Specialiter"
            className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button className="w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
            Créer un compte médecin
          </button>
        </div>
      )}
    </div>
  );
}

export default Inscription;
