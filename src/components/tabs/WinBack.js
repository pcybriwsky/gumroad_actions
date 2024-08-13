import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import superfansData from '../../sampleData/customerData';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const WinBack = () => {
    const [inactiveCustomers, setInactiveCustomers] = useState([]);
    const [purchaseData, setPurchaseData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        identifyInactiveCustomers(superfansData);
        preparePurchaseData(superfansData);
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

    const preparePurchaseData = (data) => {
        const monthlyData = Array(12).fill(0).map((_, index) => {
            const date = new Date();
            date.setMonth(date.getMonth() - index);
            return {
                month: date.toLocaleString('default', { month: 'short' }) + ' ' + date.getFullYear(),
                customers: 0,
                recentCustomers: 0,
            };
        }).reverse();

        data.forEach((user) => {
            let hasRecentPurchase = false;
            let lastPurchaseDate = null;

            user.history.forEach((purchase) => {
                const purchaseDate = new Date(purchase.purchaseDate);

                // Check if the purchase was made within the last 3 months
                if (purchaseDate >= new Date().setMonth(new Date().getMonth() - 3)) {
                    hasRecentPurchase = true;
                }

                // Update last purchase date
                if (!lastPurchaseDate || purchaseDate > lastPurchaseDate) {
                    lastPurchaseDate = purchaseDate;
                }
            });

            // If the last purchase was within the last 12 months, update the data
            if (lastPurchaseDate && lastPurchaseDate >= new Date().setMonth(new Date().getMonth() - 12)) {
                for (let i = 0; i < 12; i++) {
                    const startDate = new Date();
                    startDate.setMonth(startDate.getMonth() - (11 - i));
                    startDate.setDate(1);
                    startDate.setHours(0, 0, 0, 0);

                    if (lastPurchaseDate >= startDate) {
                        monthlyData[i].customers += 1;
                        if (!hasRecentPurchase) {
                            monthlyData[i].recentCustomers += 1;
                        }
                    }
                }
            }
        });

        setPurchaseData(monthlyData);
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
                emailSequence: ['Offer 10% Discount on Advanced Techniques in P5.js', 'Highlight latest course'],
            },
        });
    };

    return (
        <div className="win-back-container">
            <h1 className="text-3xl font-bold mb-6">Win-Back Campaign</h1>
            <p className="mb-6">We’ve taken a look at your customers' activity trends in the past year. Offer inactive customers a time-sensitive discount or inform them about new courses.</p>



            {inactiveCustomers.length > 0 ? (
                <div className="insight-section mb-8 bg-white p-[10px] rounded border-dashed border-2 border-black">
                    {purchaseData.length > 0 && (
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">Customer Purchase Activity Over the Last Year</h2>
                            <div className="line-chart-container mx-auto">
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart data={purchaseData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="customers" name='Cumlative Customer to Purchase Since' stroke="#FE91E8" activeDot={{ r: 8 }} />
                                    {/* <Line type="monotone" dataKey="recentCustomers" stroke="#82ca9d" /> */}
                                </LineChart>
                            </ResponsiveContainer>
                            </div>
                        </div>
                    )}
                    <p className="mb-2">
                        <span className="font-semibold">{inactiveCustomers.length} of your customers</span> haven't made a purchase in the last 6 months and are contactable.
                    </p>

                    <div className="suggested-action-section bg-black rounded flex flex-col space-y-4 my-4 w-[50%] mx-auto">
                        <button
                            onClick={handleNavigateToDiscount}
                            className="relative bg-pink border-solid border-black border-[1px] text-black px-4 py-2 rounded transform transition-transform duration-200 hover:-translate-y-1 hover:-translate-x-1"
                        >
                            Offer a 10% discount Valid for the Next 7 Days
                        </button>
                    </div>

                    <div className="suggested-action-section bg-black rounded flex flex-col space-y-4 my-4 w-[50%] mx-auto">
                        <button
                            onClick={handleNavigateToEmail}
                            className="relative bg-pink border-solid border-black border-[1px] text-black px-4 py-2 rounded transform transition-transform duration-200 hover:-translate-y-1 hover:-translate-x-1"
                        >
                            Highlight the Latest Course: "Advanced Techniques in P5.js"
                        </button>
                    </div>

                    <div className="dismiss-section mt-4 flex bg-black items-center mx-auto rounded w-[50%]">
                        <button
                            onClick={handleNavigateToWorkflow}
                            className="w-full relative border-solid border-black border-[1px] bg-gold text-black px-4 py-2 rounded transform transition-transform duration-200 hover:-translate-y-1 hover:-translate-x-1"
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
