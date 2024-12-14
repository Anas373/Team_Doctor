import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [model, setModel] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false); // State to toggle the menu
    const [isLoginMode, setIsLoginMode] = useState(true);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [userType, setUserType] = useState('regular');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const toggleModel = () => setModel(!model);

    const toggleMode = () => {
        setIsLoginMode(!isLoginMode);
        setMessage('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        if (!isLoginMode && password !== passwordConfirmation) {
            setMessage('Les mots de passe ne correspondent pas.');
            setIsLoading(false);
            return;
        }

        if (!userType) {
            setMessage('Please select a user type.');
            setIsLoading(false);
            return;
        }

        const endpoint = isLoginMode
            ? 'http://localhost:8000/api/login'
            : 'http://localhost:8000/api/register';

        try {
            const response = await axios.post(endpoint, {
                email,
                name,
                password,
                password_confirmation: passwordConfirmation,
                role: userType,
            });
            setMessage(response.data.message);
            if (response.data.success) {
                navigate('/dashboard');
            }
        } catch (error) {
            setMessage(
                error.response?.data?.message ||
                "Une erreur s'est produite, veuillez réessayer."
            );
        } finally {
            setIsLoading(false);
        }
    };

   











    const handleLogout = async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/logout', {}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
    
            if (response.data.success) {
                localStorage.removeItem('token');
                navigate('/login');
            } else {
                console.error(response.data.message);
                // Optionally handle the failure here
            }
        } catch (error) {
            if (error.response?.status === 401) {
                console.error('Session expired or token invalid');
                localStorage.removeItem('token');
            } else {
                console.error('Logout error:', error);
            }
        }
    };
    
    const handleForgotPassword = () => {
        navigate('./Forgetpass');
    };

    const Menu = [
        { id: 1, name: "Home" },
        { id: 2, name: "Spécialité" },
        { id: 3, name: "Réservation" },
        { id: 4, name: "Contact Us" }
    ];

    return (
        <header className="w-full bg-white shadow-md py-4">
            <div className="container mx-auto flex justify-between items-center px-6">
                <h1 className="text-2xl font-semibold">
                    Medicle <span className="font-bold text-blue-500">Team</span>
                </h1>

                {/* Responsive Nav (Desktop) */}
                <div className="md:flex md:items-center md:gap-10 hidden">
                    <nav className="flex-1 flex justify-center">
                        <ul className="flex gap-10">
                            {Menu.map((item) => (
                                <li key={item.id} className="hover:text-blue-500 cursor-pointer transition-colors duration-200">
                                    <a>{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <button
                        type="button"
                        onClick={toggleModel}
                        className="flex items-center gap-2 px-4 py-2 border border-blue-500 rounded hover:bg-blue-500 hover:text-white transition-colors duration-200"
                    >
                        <FontAwesomeIcon icon={faUser} /> Login
                    </button>

                    <button
                        type="button"
                        onClick={handleLogout}
                        className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-200"
                    >
                        Log Out
                    </button>

                    {/* Hamburger menu button for mobile view */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden text-black"
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white shadow-md p-4">
                    <nav>
                        <ul className="flex flex-col gap-4">
                            {Menu.map((item) => (
                                <li key={item.id} className="hover:text-blue-500 cursor-pointer transition-colors duration-200">
                                    <a>{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            )}

            {model && (
                <div className="fixed top-4 right-4 max-w-[300px] bg-white p-4 rounded-lg shadow-lg z-50">
                    <button
                        onClick={toggleModel}
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                    >
                        <FontAwesomeIcon icon={faXmark} />
                    </button>

                    <div className="sm:mx-auto sm:w-full">
                        <h2 className="mt-4 text-center text-lg font-bold tracking-tight text-gray-900">
                            {isLoginMode ? 'Sign in to your account' : 'Create an account'}
                        </h2>
                    </div>

                    <div className="mt-4">
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            {!isLoginMode && (
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-900">Full Name</label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        className="block w-full rounded-md border-gray-300 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600"
                                    />
                                </div>
                            )}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email address</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="block w-full rounded-md border-gray-300 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600"
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-900">Password</label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="block w-full rounded-md border-gray-300 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600"
                                />
                            </div>

                            {!isLoginMode && (
                                <div>
                                    <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-900">Confirm Password</label>
                                    <input
                                        id="password_confirmation"
                                        name="password_confirmation"
                                        type="password"
                                        value={passwordConfirmation}
                                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                                        required
                                        className="block w-full rounded-md border-gray-300 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600"
                                    />
                                </div>
                            )}

                            {!isLoginMode && (
                                <div>
                                    <label htmlFor="user_type" className="block text-sm font-medium text-gray-900">User Type</label>
                                    <select
                                        id="user_type"
                                        name="user_type"
                                        value={userType}
                                        onChange={(e) => setUserType(e.target.value)}
                                        required
                                        className="block w-full rounded-md border-gray-300 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600"
                                    >
                                        <option value="patient">Regular User</option>
                                        <option value="doctor">Doctor</option>
                                    </select>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full rounded-md bg-indigo-600 px-3 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                            >
                                {isLoading ? 'Loading...' : isLoginMode ? 'Sign in' : 'Register'}
                            </button>

                            <p
                                onClick={handleForgotPassword}
                                className="text-indigo-600 hover:text-indigo-500 font-semibold cursor-pointer"
                            >
                                Forgot Password?
                            </p>
                        </form>

                        <p className="mt-4 text-center text-xs text-gray-500">
                            {isLoginMode ? (
                                <a
                                    onClick={toggleMode}
                                    className="text-indigo-600 hover:text-indigo-500 font-semibold cursor-pointer"
                                >
                                    Create an account?
                                </a>
                            ) : (
                                <a
                                    onClick={toggleMode}
                                    className="text-indigo-600 hover:text-indigo-500 font-semibold cursor-pointer"
                                >
                                    Already have an account?
                                </a>
                            )}
                        </p>
                        {message && (
                            <p className="mt-2 text-center text-sm text-red-500">
                                {message}
                            </p>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
