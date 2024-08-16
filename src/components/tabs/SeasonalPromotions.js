import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import superfansData from '../../sampleData/customerData';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const SeasonalPromotions = () => {
    const [seasonalBundles, setSeasonalBundles] = useState([]);
    const [visibleBundles, setVisibleBundles] = useState([]);
    const [showDismissDialog, setShowDismissDialog] = useState(false);
    const [showApplyDialog, setShowApplyDialog] = useState(false);
    const currentMonth = new Date().toLocaleString('default', { month: 'long' });
    const navigate = useNavigate();

    useEffect(() => {
        analyzeSeasonalPurchases(superfansData);
    }, []);

    const analyzeSeasonalPurchases = (data) => {
        const purchaseCounts = {};
        const currentMonthIndex = new Date().getMonth();

        data.forEach((user) => {
            const canBeContacted = user.history.every((purchase) => purchase.doNotContact === 0);
            if (!canBeContacted) return;

            user.history.forEach((purchase) => {
                const purchaseMonthIndex = new Date(purchase.purchaseDate).getMonth();

                if (purchaseMonthIndex === currentMonthIndex) {
                    if (!purchaseCounts[purchase.itemName]) {
                        purchaseCounts[purchase.itemName] = 0;
                    }
                    purchaseCounts[purchase.itemName]++;
                }
            });
        });

        const bundlesArray = Object.keys(purchaseCounts)
            .filter((item) => purchaseCounts[item] >= 4)
            .map((item) => {
                return {
                    itemName: item,
                    purchaseCount: purchaseCounts[item],
                    suggestion: `Launch a Seasonal Promotion for ${item} during ${currentMonth}!`,
                };
            });

        setSeasonalBundles(bundlesArray);
        setVisibleBundles(bundlesArray);
    };

    const dismissBundle = (index) => {
        const updatedBundles = [...visibleBundles];
        updatedBundles.splice(index, 1);
        setVisibleBundles(updatedBundles);
    };

    const handleNavigateToDiscount = (itemName) => {
        const promotionName = `Seasonal Promotion for ${itemName} - ${currentMonth}`;
        navigate('/discount', {
            state: {
                promotionName,
                productName: itemName,
                discountCode: `SP${itemName.toUpperCase().slice(0, 3)}2024`,
            },
        });
    };

    const handleDismissAll = () => {
        setShowDismissDialog(false);
        setVisibleBundles([]);
    };

    const handleApplyAll = () => {
        setShowApplyDialog(false);
        setVisibleBundles([]);
        // Logic to apply all promotions goes here, if applicable
    };

    const closeDialog = () => {
        setShowDismissDialog(false);
        setShowApplyDialog(false);
    };

    const prepareMonthlySalesData = (itemName, data) => {
        const monthlySales = Array.from({ length: 12 }, (_, index) => {
            const monthName = new Date(0, index).toLocaleString('default', { month: 'short' });
            return {
                month: monthName,
                sales: 0,
            };
        });

        data.forEach((user) => {
            user.history.forEach((purchase) => {
                if (purchase.itemName === itemName) {
                    const purchaseMonthIndex = new Date(purchase.purchaseDate).getMonth();
                    monthlySales[purchaseMonthIndex].sales += 1;
                }
            });
        });

        return monthlySales;
    };



    return (
        <div className="seasonal-promotions-container">
            <div className="flex flex-col lg:flex-row justify-between items-center mb-6 space-y-4 lg:space-y-0 lg:space-x-4">
                <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0">
                    <h1 className="text-3xl font-bold mb-2 lg:mb-0 lg:mr-4 text-center lg:text-left">
                        Seasonal Promotions for {currentMonth}
                    </h1>
                    <div className="bg-pink text-black px-3 py-2 text-center rounded-full border-solid border-[1px] border-black">
                        {visibleBundles.length} Actions Available
                    </div>
                </div>
                {visibleBundles.length > 0 && (
                    <div className="flex flex-col lg:flex-row justify-center lg:justify-start space-y-4 lg:space-y-0 lg:space-x-4">
                        <div className="bg-black text-white text-center rounded">
                            <button
                                onClick={() => setShowApplyDialog(true)}
                                className="relative w-full border-solid border-black border-[1px] bg-pink text-black px-4 py-2 rounded transform transition-transform duration-200 hover:-translate-y-1 hover:-translate-x-1"
                            >
                                Apply All
                            </button>
                        </div>
                        <div className="bg-black text-white text-center rounded">
                            <button
                                onClick={() => setShowDismissDialog(true)}
                                className="relative w-full border-solid border-black border-[1px] bg-red text-white px-4 py-2 rounded transform transition-transform duration-200 hover:-translate-y-1 hover:-translate-x-1"
                            >
                                Dismiss All
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <p className="mb-6">We’ve identified products that were popular during {currentMonth} last year and highlighted them for a seasonal promotion.</p>

            {visibleBundles.length > 0 ? (
                visibleBundles.map((bundle, index) => {
                    const monthlySalesData = prepareMonthlySalesData(bundle.itemName, superfansData);

                    return (
                        <div key={index} className="insight-section mb-8 bg-white p-[10px] rounded border-solid border-2 border-black relative">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-2xl font-semibold">Promotion Opportunity for {bundle.itemName}</h2>
                                <div className='bg-black rounded'>
                                    <button
                                        onClick={() => dismissBundle(index)}
                                                                               className="text-gray bg-white w-6 y-6"
                                    >
                                        &#10005;
                                    </button>
                                </div>
                            </div>

                            {/* Bar Chart */}
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={monthlySalesData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="sales" fill="#ff90e8" stroke="#000000" />
                                </BarChart>
                            </ResponsiveContainer>

                            <p className="mb-2">
                                <span className="font-semibold">{bundle.purchaseCount} customers</span> purchased this product during the month of {currentMonth}. It might be worth running a promotion for this product at this time or other hot times of the year!
                            </p>
                            <div className="suggested-action-section bg-black rounded flex flex-col space-y-4 my-4 w-[50%] mx-auto">
                                <button
                                    onClick={() => handleNavigateToDiscount(bundle.itemName)}
                                    className="relative border-solid border-black border-[1px] bg-pink text-black px-4 py-2 rounded transform transition-transform duration-200 hover:-translate-y-1 hover:-translate-x-1"
                                >
                                    {bundle.suggestion}
                                </button>
                            </div>
                        </div>
                    );
                })
            ) : (
                <p>No seasonal promotions found for {currentMonth}.</p>
            )}


            {/* Dismiss All Confirmation Dialog */}
            {showDismissDialog && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-black rounded border-solid border-black">
                        <div className="bg-white p-8 rounded border-solid border-black border-2 transform transition-transform -translate-y-2 -translate-x-2">
                            <div className="flex justify-between items-center">
                                <h2 className="text-2xl font-bold mb-4">Dismiss All</h2>
                                <div className='bg-black rounded'>
                                    <button
                                        onClick={closeDialog}
                                                                               className="text-gray bg-white w-6 y-6"
                                    >
                                        &#10005;
                                    </button>
                                </div>
                            </div>
                            <p className="mb-6">Are you sure you want to dismiss all seasonal promotion suggestions?</p>
                            <div className="bg-black mx-auto rounded w-[50%]">
                                <button
                                    onClick={handleDismissAll}
                                    className="relative w-full border-solid border-black border-[1px] bg-red text-white px-4 py-2 rounded transform transition-transform duration-200 hover:-translate-y-1 hover:-translate-x-1"
                                >
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Apply All Confirmation Dialog */}
            {showApplyDialog && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-black rounded border-solid border-black">
                        <div className="bg-white p-8 rounded border-solid border-black border-2 transform transition-transform -translate-y-2 -translate-x-2">
                            <div className="flex justify-between items-center">
                                <h2 className="text-2xl font-bold mb-4">Apply All</h2>
                                <div className='bg-black rounded'>
                                    <button
                                        onClick={closeDialog}
                                                                               className="text-gray bg-white w-6 y-6"
                                    >
                                        &#10005;
                                    </button>
                                </div>
                            </div>
                            <p className="mb-6">Are you sure you want to apply all seasonal promotion suggestions?</p>
                            <div className="bg-black rounded mx-auto w-[50%]">
                                <button
                                    onClick={handleApplyAll}
                                    className="relative w-full border-solid border-black border-[1px] bg-pink text-black px-4 py-2 rounded transform transition-transform duration-200 hover:-translate-y-1 hover:-translate-x-1"
                                >
                                    Apply Seasonal Promotions
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SeasonalPromotions;
