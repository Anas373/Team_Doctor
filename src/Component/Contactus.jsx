// import { useState } from 'react';

// function ContactForm() {
//   // Utilisation de l'état pour stocker le commentaire et savoir s'il est affiché
//   const [comment, setComment] = useState('');
//   const [showComment, setShowComment] = useState(false);

//   // Fonction pour ajouter un commentaire et basculer l'affichage
//   const toggleComment = () => {
//     setShowComment(!showComment);
//   };

//   // Fonction pour gérer les changements dans le champ de saisie
//   const handleChange = (e) => {
//     setComment(e.target.value);
//   };

//   // Fonction pour soumettre le commentaire
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     toggleComment();
//   };

//   return (
//     <>
//       {/* Champ de saisie pour le commentaire */}
//       <form onSubmit={handleSubmit} className="mb-4">
//         <input
//           type="text"
//           value={comment}
//           onChange={handleChange}
//           placeholder="Ajoutez un commentaire"
//           className="border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-300"
//         />
//         {/* Bouton pour soumettre le commentaire */}
//         <button
//           type="submit"
//           className="mt-2 p-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition duration-200"
//         >
//           Ajouter le commentaire
//         </button>
//       </form>

//       {/* Affichage du commentaire si 'showComment' est true */}
//       {showComment && (
//         <h1 className="text-lg font-semibold text-gray-800 mt-4">Commentaire : {comment}</h1>
//       )}
//     </>
//   );
// }

// export default ContactForm;
