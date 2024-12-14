import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const [showModal, setShowModal] = React.useState(false);
    const [submitted, setSubmitted] = React.useState(false);

    const handleModalToggle = () => {
        setShowModal(!showModal);
        setSubmitted(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const bugDescription = event.target.elements.bugDescription.value;

        // Prepare the payload
        const payload = {
            bugDescription,
            contactEmail: "ichanas867@gmail.com", // Votre email fixe
        };

        // Send the form to Formspree
        fetch("https://formspree.io/f/abcd1234", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        })
            .then((response) => {
                if (response.ok) {
                    setSubmitted(true); // Affiche le message de succès
                } else {
                    alert("Something went wrong. Please try again.");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("Network error. Please try again later.");
            });
    };

    const handleCancel = () => {
        setShowModal(false);
    };

    return (
        <footer id = 'Contact Us' style={{ 
            backgroundColor: '#2f6690', 
            color: 'white', 
            padding: '40px 20px', 
            marginTop: '20px',
            fontFamily: "'Arial', sans-serif"
        }}>
            <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                padding: '0 20px',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                {/* Quick Links */}
                <div style={{ flex: 1, marginRight: '20px' }}>
                    <h2 style={{ 
                        fontSize: '20px', 
                        fontWeight: '700', 
                        marginBottom: '15px',
                        letterSpacing: '0.5px'
                    }}>Quick Links</h2>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        {["Home", "Spécialité", "Réservation", "Contact Us"].map((link) => (
                            <li key={link} style={{ marginBottom: '10px' }}>
                                <a 
                                    href="#" 
                                    style={{ 
                                        color: 'white', 
                                        textDecoration: 'none',
                                        transition: 'opacity 0.3s ease',
                                        opacity: 0.9
                                    }}
                                    onMouseOver={(e) => e.target.style.opacity = '1'}
                                    onMouseOut={(e) => e.target.style.opacity = '0.9'}
                                    onClick={link === 'Contact Us' ? handleModalToggle : undefined}
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Information */}
                <div style={{ flex: 1, marginRight: '20px' }}>
                    <h2 
                        style={{ 
                            fontSize: '20px', 
                            fontWeight: '700', 
                            marginBottom: '15px',
                            letterSpacing: '0.5px',
                            cursor: 'pointer'
                        }} 
                        onClick={handleModalToggle}
                    >
                        Contact Us
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <p><FontAwesomeIcon icon={faPhone} style={{ marginRight: '10px' }} /> +1 234 567 890</p>
                        <p><FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '10px' }} /> support@medicleteam.com</p>
                        <p>123 Medical St., Health City, Country</p>
                    </div>
                </div>

                {/* Social Media */}
                <div style={{ flex: 1 }}>
                    <h2 style={{ 
                        fontSize: '20px', 
                        fontWeight: '700', 
                        marginBottom: '15px',
                        letterSpacing: '0.5px'
                    }}>Follow Us</h2>
                    <div style={{ display: 'flex', gap: '15px' }}>
                        {[faFacebook, faTwitter, faInstagram].map((icon, index) => (
                            <a 
                                key={index} 
                                href="#" 
                                style={{ 
                                    color: 'white', 
                                    fontSize: '24px',
                                    transition: 'transform 0.3s ease',
                                    display: 'inline-block'
                                }}
                                onMouseOver={(e) => e.target.style.transform = 'scale(1.2)'}
                                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                            >
                                <FontAwesomeIcon icon={icon} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div style={{ 
                textAlign: 'center', 
                marginTop: '30px', 
                fontSize: '14px',
                opacity: 0.7,
                borderTop: '1px solid rgba(255,255,255,0.2)',
                paddingTop: '20px'
            }}>
                &copy; {new Date().getFullYear()} Medicle Team. All rights reserved.
            </div>

            {/* Modal for Reporting a Bug */}
            {showModal && !submitted && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 119, 182, 0.8)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 1000
                }}>
                    <div style={{
                        backgroundColor: '#ffffff',
                        padding: '30px',
                        borderRadius: '8px',
                        width: '400px',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                        position: 'relative'
                    }}>
                        <h1 style={{
                            margin: '0 0 20px',
                            color: '#333',
                            fontWeight: '600',
                            textAlign: 'center'
                        }}>
                            Report a Bug
                        </h1>
                        <button onClick={handleModalToggle} style={{
                            background: 'none',
                            border: 'none',
                            fontSize: '24px',
                            position: 'absolute',
                            right: '15px',
                            top: '15px',
                            cursor: 'pointer',
                            color: 'red'
                        }}>×</button>
                        <form onSubmit={handleSubmit}>
                            <div style={{ marginBottom: '15px' }}>
                                <label htmlFor="bugDescription" style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Bug Description :</label>
                                <textarea
                                    id="bugDescription"
                                    rows="4"
                                    style={{
                                        width: '100%',
                                        padding: '10px',
                                        borderRadius: '4px',
                                        border: '1px solid #ccc',
                                        color: '#333',
                                        fontSize: '14px',
                                        resize: 'none'
                                    }}
                                    placeholder="Describe the bug..."
                                    required
                                />
                            </div>

                            <div style={{ marginBottom: '20px' }}>
                                <label htmlFor="contactEmail" style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Your Email :</label>
                                <input
                                    type="email"
                                    id="contactEmail"
                                    value="ichanas86@gmail.com"
                                    style={{
                                        width: '100%',
                                        padding: '10px',
                                        borderRadius: '4px',
                                        border: '1px solid #ccc',
                                        color: '#333',
                                        fontSize: '14px',
                                    }}
                                    readOnly
                                />
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <button
                                    type="submit"
                                    style={{
                                        backgroundColor: '#007BFF',
                                        color: 'white',
                                        padding: '10px 15px',
                                        border: 'none',
                                        borderRadius: '4px',
                                        cursor: 'pointer',
                                        fontSize: '16px',
                                        transition: 'background-color 0.3s'
                                    }}
                                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
                                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007BFF'}
                                >
                                    Submit Bug Report
                                </button>

                                <button
                                    type="button"
                                    onClick={handleCancel}
                                    style={{
                                        backgroundColor: '#f0f0f0',
                                        color: '#333',
                                        padding: '10px 15px',
                                        border: 'none',
                                        borderRadius: '4px',
                                        cursor: 'pointer',
                                        fontSize: '16px',
                                        transition: 'background-color 0.3s'
                                    }}
                                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e0e0e0'}
                                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#f0f0f0'}
                                >
                                    Cancel
                                </button>
                            </div>
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
                    width: '70%',
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