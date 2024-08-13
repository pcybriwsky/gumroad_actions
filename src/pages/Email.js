import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Email = () => {
    const location = useLocation();
    const { to: initialTo, subject: initialSubject, body: initialBody } = location.state || { to: '', subject: '', body: '' };
    const [to, setTo] = useState(initialTo);
    const [subject, setSubject] = useState(initialSubject);
    const [body, setBody] = useState(initialBody);
    const navigate = useNavigate();

    const handleSendEmail = (event) => {
        event.preventDefault();
        // Here you would add the logic to send the email or pass the data to the email sending service
        alert('Email sent successfully!');
        navigate('/');  // Navigate back to the win-back page after sending
    };

    return (
        <div className="email-container p-6">
            <h1 className="text-3xl font-bold mb-4">Compose Email</h1>
            <form onSubmit={handleSendEmail}>
                <div className="mb-4">
                    <label className="block text-lg font-medium mb-2">To:</label>
                    <input
                        type="text"
                        value={to}
                        onChange={(e) => setTo(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-lg font-medium mb-2">Subject:</label>
                    <input
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-lg font-medium mb-2">Body:</label>
                    <textarea
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        rows="10"
                        className="w-full p-2 border border-gray-300 rounded"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-pink text-black px-4 py-2 rounded hover:bg-pink-600"
                >
                    Send Email
                </button>
            </form>
        </div>
    );
};

export default Email;
