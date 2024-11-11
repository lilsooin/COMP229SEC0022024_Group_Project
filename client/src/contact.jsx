import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        contactNumber: '',
        email: '',
        message: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add functionality to handle form data (e.g., send to a server)
        console.log('Form Data:', formData);
        // Redirecting to Home Page after form submission
        navigate('/');
    };

    return (
        <>
            <header>
                <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
                    <div className="contact-info" style={{ marginBottom: '20px' }}>
                        <h2>Contact Information</h2>
                        <p><strong>Email:</strong> lilesooin@gmail.com</p>
                        <p><strong>Phone:</strong> +1 416-272-9102</p>
                        <p><strong>Location:</strong> Toronto, Canada</p>
                    </div>

                    <div className="contact-form">
                        <h2>Send a Message</h2>
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <label>First Name:</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                    style={{ flex: '1', padding: '5px', marginLeft: '10px' }}
                                />
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <label>Last Name:</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                    style={{ flex: '1', padding: '5px', marginLeft: '10px' }}
                                />
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <label>Contact Number:</label>
                                <input
                                    type="text"
                                    name="contactNumber"
                                    value={formData.contactNumber}
                                    onChange={handleChange}
                                    style={{ flex: '1', padding: '5px', marginLeft: '10px' }}
                                />
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <label>Email Address:</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    style={{ flex: '1', padding: '5px', marginLeft: '10px' }}
                                />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <label>Message:</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    style={{ padding: '10px', minHeight: '100px', resize: 'none' }}
                                />
                            </div>
                            <button type="submit" style={{ padding: '10px', backgroundColor: '#007BFF', color: 'white', border: 'none', cursor: 'pointer' }}>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </header>
        </>
    );
}