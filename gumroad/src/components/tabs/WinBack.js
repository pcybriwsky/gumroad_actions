import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import superfansData from '../../sampleData/customerData';

const WinBack = () => {
    const [inactiveCustomers, setInactiveCustomers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        identifyInactiveCustomers(superfansData);
    }, []);

    const identifyInactiveCustomers = (data) => {
        const inactiveList = data.filter((user) => {
            // Check if the user can be contacted
            const canBeContacted = user.history.every((purchase) => purchase.doNotContact === 0);
            if (!canBeContacted) return false;

            const lastPurchaseDate = new Date(user.history[user.history.length - 1].purchaseDate);
            const sixMonthsAgo = new Date();
            sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

            return lastPurchaseDate < sixMonthsAgo;
        });

        setInactiveCustomers(inactiveList);
    };

    const handleNavigateToEmail = () => {
        navigate('/email', {
            state: {
                to: `${inactiveCustomers.length} inactive customers`,
                subject: 'We miss you!',
                body: `Hi there,\n\nWe noticed that it's been a while. We want to share our latest course, "Advanced Techniques in P5.js", with you. We believe it would be perfect for you!\n\nBest regards,\nPete`,
            },
        });
    };

    const handleNavigateToDiscount = () => {
        navigate('/discount', {
            state: {
                promotionName: 'Win-Back Campaign Discount',
                productName: 'Advanced Techniques in P5.js', // Passing the specific product name
                discountType: 'Percentage',
                discountValue: 10,
                validityPeriod: 'Next 7 Days',
            },
        });
    };

    const handleNavigateToWorkflow = () => {
        navigate('/workflow', {
            state: {
                name: 'We Miss You',
                trigger: '6-month inactivity',
                emailSequence: ['Offer 10% discount on Advanced Techniques in P5.js', 'Highlight latest course'],
            },
        });
    };

    return (
        <div className="win-back-container">
            <h1 className="text-3xl font-bold mb-6">Win-Back Campaign</h1>
            <p className="mb-6">We’ve identified customers who haven't made a purchase in the last 6 months. Offer them a time-sensitive discount or inform them about new courses.</p>

            {inactiveCustomers.length > 0 ? (
                <div className="insight-section mb-8 bg-white p-[10px] rounded border-dashed border-2 border-black">
                    <h2 className="text-2xl font-semibold mb-4">Inactive Customers</h2>
                    <p className="mb-2">
                        <span className="font-semibold">{inactiveCustomers.length} customers</span> haven't made a purchase in the last 6 months.
                    </p>

                    <div className="suggested-action-section bg-black rounded flex flex-col space-y-4 my-4 w-[50%] mx-auto">
                        <button 
                            onClick={handleNavigateToDiscount}
                            className="relative bg-pink border-solid border-black border-[1px] text-black px-4 py-2 rounded transform transition-transform duration-200 hover:-translate-y-1 hover:-translate-x-1"
                        >
                            Offer a 10% discount valid for the next 7 days
                        </button>
                    </div>
                    
                    <div className="suggested-action-section bg-black rounded flex flex-col space-y-4 my-4 w-[50%] mx-auto">
                        <button 
                            onClick={handleNavigateToEmail}
                            className="relative bg-pink border-solid border-black border-[1px] text-black px-4 py-2 rounded transform transition-transform duration-200 hover:-translate-y-1 hover:-translate-x-1"
                        >
                            Highlight the latest course: "Advanced Techniques in P5.js"
                        </button>
                    </div>

                    <div className="dismiss-section mt-4 flex bg-black items-center mx-auto rounded w-[50%]">
                        <button
                            onClick={handleNavigateToWorkflow}
                            className="w-full relative border-solid border-black border-[1px] bg-white text-black px-4 py-2 rounded transform transition-transform duration-200 hover:-translate-y-1 hover:-translate-x-1"
                        >
                            Add 6-month "Win-Back Customers" to Workflow
                        </button>
                    </div>
                </div>
            ) : (
                <p>No inactive customers found.</p>
            )}
        </div>
    );
};

export default WinBack;
