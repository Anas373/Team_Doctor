import React from 'react';
import logohomme from "../assets/homme.png";

const Homme = () => {
  return (
    <div className='flex justify-between items-center py-7 px-6 mt-9'>
      <div className='flex-1 pl-28'>
        <h1 className='text-4xl font-bold mb-6'>
          Find & <span className='text-blue-500'>Book</span> your Fav <span className='text-blue-500'>Doctors</span>
        </h1>
        <p className='text-lg'>
          Lorem ipsum, dolor sit amet consectetur <br />adipisicing elit. Accusamus suscipit eligendi
          nobis fuga quisquam!
        </p><br />
        <button className='bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300'>
          Voir Plus
        </button>
      </div>
      
     <div  className='pr-16'  >
     <img 
        src={logohomme} 
        alt="Homme" 
        className='w-96   rounded-lg shadow-lg border-4 mr-8'  
      />
     </div>
      
    </div>
  );
};

export default Homme;
