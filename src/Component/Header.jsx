import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons'; // Corrected import

const Header = () => {
    const [model, setModel] = useState(false);

    const toggleModel = () => {
      setModel(!model);
    };
  
    // const handleLoginClick = (e) => {
    //   e.preventDefault();
    //   toggleModel();
    // };

    const Menu = [
        { id: 1, name: "Home" },
        { id: 2, name: "Spécialité" },
        { id: 3, name: "Réservation" },
        { id: 4, name: "Contact Us" }
    ];

    return (
        <header className="w-full bg-white shadow-md py-4">
            <div className="container mx-auto flex justify-between items-center px-6">
                <div className="flex items-center gap-4">
                    <h1 className="text-2xl font-semibold">
                        Medicle <span className='font-bold text-blue-500'>Team</span>
                    </h1>
                </div>
                <nav className="flex-1 flex justify-center">
                    <ul className="flex gap-10">
                        {Menu.map((item) => (
                            <li 
                                key={item.id} 
                                className="hover:text-blue-500 cursor-pointer transition-colors duration-200"
                            >
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </nav>
                <button 
                    type="button" 
                    onClick={toggleModel}
                    className="flex items-center gap-2 px-4 py-2 border border-blue-500 rounded hover:bg-blue-500 hover:text-white transition-colors duration-200"
                >
                    <FontAwesomeIcon icon={faUser} /> Login
                </button>
            </div>

            {model && (
                <div className="fixed top-4 right-4 max-w-[250px] bg-white p-4 rounded-lg shadow-lg z-50">
                    {/* Close button */}
                    <button
                        onClick={toggleModel}
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                    >
                        <FontAwesomeIcon icon={faXmark} />
                    </button>

                    <div className="sm:mx-auto sm:w-full">
                        <h2 className="mt-4 text-center text-lg font-bold tracking-tight text-gray-900">Sign in to your account</h2>
                    </div>

                    <div className="mt-4">
                        <form className="space-y-4" action="#" method="POST">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email address</label>
                                <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-gray-300 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600" />
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-900">Password</label>
                                <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-gray-300 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600" />
                            </div>

                            <button type="submit" className="w-full rounded-md bg-indigo-600 px-3 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">Sign in</button>
                        </form>

                        <p className="mt-4 text-center text-xs text-gray-500">
                            <a href="./Inscription" className="text-indigo-600 hover:text-indigo-500 font-semibold">Create account?</a><br />
                            <a href="#" className="text-indigo-600 hover:text-indigo-500 font-semibold">Forget password?</a>
                        </p>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
