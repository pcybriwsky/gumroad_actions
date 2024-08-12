import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import superfansData from '../../sampleData/customerData';

const SeasonalPromotions = () => {
    const [seasonalBundles, setSeasonalBundles] = useState([]);
    const [visibleBundles, setVisibleBundles] = useState([]);
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
                    suggestion: `Launch a seasonal promotion for ${item} in ${currentMonth}!`,
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
                productName: itemName, // Passing the product name here
                discountCode: `SP${itemName.toUpperCase().slice(0, 3)}2024`,
            },
        });
    };

    return (
        <div className="seasonal-promotions-container">
            <div className="flex items-center mb-6">
                <h1 className="text-3xl font-bold mr-4">Seasonal Promotions for {currentMonth}</h1>
                <div className="bg-pink text-black px-3 py-1 text-center rounded-full border-solid border-[1px] border-black">
                    {visibleBundles.length} actions available
                </div>
            </div>
            <p className="mb-6">We’ve identified products that were popular during {currentMonth} last year and bundled them for a seasonal promotion.</p>

            {visibleBundles.length > 0 ? (
                visibleBundles.map((bundle, index) => (
                    <div key={index} className="insight-section mb-8 bg-white p-[10px] rounded border-dashed border-2 border-black">
                        <p className='text-sm font-bold'>Product</p>
                        <h2 className="text-2xl font-semibold mb-4">{bundle.itemName}</h2>
                        <p className="mb-2">
                            <span className="font-semibold">{bundle.purchaseCount} users</span> purchased this product in {currentMonth} last year.
                        </p>
                        <div className="suggested-action-section bg-black rounded flex flex-col space-y-4 my-4 w-[50%] mx-auto">
                            <button
                                onClick={() => handleNavigateToDiscount(bundle.itemName)}
                                className="relative border-solid border-black border-[1px] bg-pink text-black px-4 py-2 rounded transform transition-transform duration-200 hover:-translate-y-1 hover:-translate-x-1"
                            >
                                {bundle.suggestion}
                            </button>
                        </div>
                        <div className="dismiss-section mt-4 flex bg-black items-center mx-auto rounded w-[50%]">
                            <button
                                onClick={() => dismissBundle(index)}
                                className="w-full relative border-solid border-black border-[1px] bg-red text-white px-4 py-2 rounded transform transition-transform duration-200 hover:-translate-y-1 hover:-translate-x-1"
                            >
                                Dismiss Recommendation
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <p>No seasonal promotions found for {currentMonth}.</p>
            )}
        </div>
    );
};

export default SeasonalPromotions;
