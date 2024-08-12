import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Workflow = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { name, trigger, emailSequence } = location.state || {};

    const handleSaveWorkflow = () => {
        // Logic to save the workflow goes here
        alert('Workflow saved successfully!');
        navigate('/');  // Navigate back to the win-back page after saving
    };

    return (
        <div className="workflow-container p-6">
            <h1 className="text-3xl font-bold mb-6">Create Workflow</h1>

            <div className="bg-white p-4 rounded border-dashed border-2 border-black">
                <div className="mb-4">
                    <label className="block font-semibold mb-2" htmlFor="workflow-name">
                        Workflow Name
                    </label>
                    <input
                        type="text"
                        id="workflow-name"
                        className="w-full p-2 border border-gray-400 rounded"
                        value={name || ''}
                        readOnly
                    />
                </div>

                <div className="mb-4">
                    <label className="block font-semibold mb-2" htmlFor="workflow-trigger">
                        Trigger
                    </label>
                    <input
                        type="text"
                        id="workflow-trigger"
                        className="w-full p-2 border border-gray-400 rounded"
                        value={trigger || ''}
                        readOnly
                    />
                </div>

                <div className="mb-4">
                    <label className="block font-semibold mb-2">
                        Email Sequence
                    </label>
                    <ul className="list-disc pl-5">
                        {emailSequence?.map((email, index) => (
                            <li key={index} className="mb-2">{email}</li>
                        ))}
                    </ul>
                </div>

                <div className="mt-6 flex justify-center">
                    <button
                        onClick={handleSaveWorkflow}
                        className="relative bg-pink border-solid border-black border-[1px] text-black px-4 py-2 rounded transform transition-transform duration-200 hover:-translate-y-1 hover:-translate-x-1"
                    >
                        Save Workflow
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Workflow;
