import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const [showModal, setShowModal] = React.useState(false);
    const [submitted, setSubmitted] = React.useState(false);

    const handleModalToggle = () => {
        setShowModal(!showModal);
        setSubmitted(false); // Reset submission state when modal is opened
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true); // Set submission state to true
    };

    const handleCancel = () => {
        setShowModal(false); // Close the modal without submitting the form
    };

    return (
        <footer style={{ backgroundColor: '#007BFF', color: 'white', padding: '20px', marginTop: '20px' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Report a Bug in Our Website</h1>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 20px' }}>
                {/* Quick Links */}
                <div style={{ flex: 1 }}>
                    <h2 style={{ fontSize: '18px', fontWeight: 'bold' }}>Quick Links</h2>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
                        <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Spécialité</a></li>
                        <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Réservation</a></li>
                        <li><a href="#" onClick={handleModalToggle} style={{ color: 'white', textDecoration: 'none' }}>Contact Us</a></li>
                    </ul>
                </div>

                {/* Contact Information */}
                <div style={{ flex: 1 }}>
                    <h2 style={{ fontSize: '18px', fontWeight: 'bold', cursor: 'pointer' }} onClick={handleModalToggle}>Contact Us</h2>
                    <p><FontAwesomeIcon icon={faPhone} /> +1 234 567 890</p>
                    <p><FontAwesomeIcon icon={faEnvelope} /> support@medicleteam.com</p>
                    <p>123 Medical St., Health City, Country</p>
                </div>

                {/* Social Media */}
                <div style={{ flex: 1 }}>
                    <h2 style={{ fontSize: '18px', fontWeight: 'bold' }}>Follow Us</h2>
                    <div>
                        <a href="#" style={{ color: 'white', marginRight: '10px' }}>
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="#" style={{ color: 'white', marginRight: '10px' }}>
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="#" style={{ color: 'white' }}>
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '12px' }}>
                &copy; {new Date().getFullYear()} Medicle Team. All rights reserved.
            </div>

            {/* Custom Modal for Reporting a Bug */}
            {showModal && !submitted && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 1000
                }}>
                    <div style={{
                        backgroundColor: 'white',
                        padding: '20px',
                        borderRadius: '5px',
                        width: '400px',
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
                    }}>
                        <h1 style={{ margin: '0 0 10px', color: 'black', fontWeight: 'bold' }}>Report a Bug in Our Website</h1>
                        <button onClick={handleModalToggle} style={{
                            background: 'none',
                            border: 'none',
                            fontSize: '20px',
                            position: 'absolute',
                            right: '10px',
                            top: '10px',
                            cursor: 'pointer'
                        }}>×</button>
                        <form onSubmit={handleSubmit}>
                            <div style={{ marginBottom: '10px' }}>
                                <label htmlFor="bugDescription">Bug Description</label>
                                <textarea
                                    id="bugDescription"
                                    rows="4"
                                    style={{
                                        width: '100%',
                                        padding: '8px',
                                        borderRadius: '4px',
                                        border: '1px solid #ccc',
                                        color: 'black',
                                    }}
                                    placeholder="Describe the bug..."
                                    required
                                />
                            </div>
                            <div style={{ marginBottom: '10px' }}>
                                <label htmlFor="contactEmail">Your Email</label>
                                <input
                                    type="email"
                                    id="contactEmail"
                                    value="aminocx333f@gmail.com" // Auto-filled email
                                    style={{
                                        width: '100%',
                                        padding: '8px',
                                        borderRadius: '4px',
                                        border: '1px solid #ccc',
                                        color: 'black',
                                    }}
                                    readOnly // Makes the field read-only to prevent editing
                                />
                            </div>

                            <button
                                type="submit"
                                style={{
                                    backgroundColor: '#007BFF',
                                    color: 'white',
                                    padding: '10px 15px',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    marginRight: '10px'  // Space between buttons
                                }}
                            >
                                Submit Bug Report
                            </button>

                            {/* Cancel Button */}
                            <button
                                type="button" // Prevent form submission
                                onClick={handleCancel}
                                style={{
                                    backgroundColor: '#ccc',
                                    color: 'white',
                                    padding: '10px 15px',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: 'pointer'
                                }}
                            >
                                Cancel
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Submission Confirmation Message */}
            {submitted && (
                <div style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: '#ffffff',
                    padding: '30px',
                    borderRadius: '10px',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                    zIndex: 1000,
                    textAlign: 'center',
                    maxWidth: '450px',
                    width: '100%',
                }}>
                    <h1 style={{
                        margin: '0 0 15px',
                        fontSize: '36px',
                        fontWeight: '700',
                        color: '#28a745',
                    }}>
                        Done
                    </h1>
                    <p style={{
                        margin: '0 0 25px',
                        fontSize: '16px',
                        color: '#555',
                        lineHeight: '1.6',
                    }}>
                        Your report has been sent. Thanks for that!
                    </p>
                    <button
                        onClick={handleModalToggle}
                        style={{
                            backgroundColor: '#007BFF',
                            color: 'white',
                            padding: '12px 20px',
                            fontSize: '14px',
                            fontWeight: '500',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s ease',
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
                        onMouseOut={(e) => e.target.style.backgroundColor = '#007BFF'}
                    >
                        Close
                    </button>
                </div>
            )}

        </footer>
    );
};

export default Footer;
