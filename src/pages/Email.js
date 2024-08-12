import React from 'react';
import { useLocation } from 'react-router-dom';

const Email = () => {
    const location = useLocation();
    const { to, subject, body } = location.state || { to: '', subject: '', body: '' };

    const handleSendEmail = () => {
        // Here you would add the logic to send the email or pass the data to the email sending service
        console.log("Sending email to:", to);
        console.log("Subject:", subject);
        console.log("Body:", body);
        // Add your email sending logic here
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
                        readOnly
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-lg font-medium mb-2">Subject:</label>
                    <input
                        type="text"
                        value={subject}
                        readOnly
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-lg font-medium mb-2">Body:</label>
                    <textarea
                        value={body}
                        readOnly
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
