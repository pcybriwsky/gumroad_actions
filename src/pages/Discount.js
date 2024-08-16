import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Discount = () => {
    const location = useLocation();
    const [promotionName, setPromotionName] = useState(location.state?.promotionName || '');
    const [productName, setProductName] = useState(location.state?.productName || ''); // Take in the product name
    const [discountCode, setDiscountCode] = useState(location.state?.discountCode || '');
    const [discountType, setDiscountType] = useState('percentage');
    const [discountValue, setDiscountValue] = useState(location.state?.discountValue || '');
    const [validityPeriod, setValidityPeriod] = useState({ start: '', end: '' });
    const [limitQuantity, setLimitQuantity] = useState(false);
    const [limitValidity, setLimitValidity] = useState(false);
    const [minQualifyingAmount, setMinQualifyingAmount] = useState('');
    const [minQuantity, setMinQuantity] = useState('');

    const navigate = useNavigate();

    const handleCreateDiscount = () => {
        // Logic for creating the discount and navigating back to promotions
        console.log('Discount Created:', {
            promotionName,
            productName,
            discountCode,
            discountType,
            discountValue,
            validityPeriod,
            limitQuantity,
            limitValidity,
            minQualifyingAmount,
            minQuantity,
        });

        // Redirect back to the Seasonal Promotions or any other component
        navigate('/');
    };

    return (
        <div className="discount-container p-8 bg-white rounded border-solid border-2 border-black">
            <h1 className="text-3xl font-bold mb-6">Create Discount</h1>
            <div className="mb-4">
                <label className="block text-lg font-medium mb-2">Promotion Name</label>
                <input
                    type="text"
                    value={promotionName}
                    onChange={(e) => setPromotionName(e.target.value)}
                    placeholder="Black Friday"
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-lg font-medium mb-2">Product Name</label>
                <input
                    type="text"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    placeholder="Product to which this discount will apply"
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-lg font-medium mb-2">Discount code</label>
                <input
                    type="text"
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                    placeholder="md2fvOc"
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-lg font-medium mb-2">Type</label>
                <div className="flex items-center">
                    <label className="inline-flex items-center mr-4">
                        <input
                            type="radio"
                            value="percentage"
                            checked={discountType === 'percentage'}
                            onChange={() => setDiscountType('percentage')}
                            className="form-radio"
                        />
                        <span className="ml-2">Percentage</span>
                    </label>
                    <label className="inline-flex items-center">
                        <input
                            type="radio"
                            value="fixed"
                            checked={discountType === 'fixed'}
                            onChange={() => setDiscountType('fixed')}
                            className="form-radio"
                        />
                        <span className="ml-2">Fixed amount</span>
                    </label>
                </div>
                <input
                    type="number"
                    value={discountValue}
                    onChange={(e) => setDiscountValue(e.target.value)}
                    className="mt-2 w-20 p-2 border border-gray-300 rounded"
                    placeholder="0"
                />
            </div>
            <div className="mb-4">
                <h2 className="text-lg font-medium mb-2">Settings</h2>
                <label className="inline-flex items-center mb-2">
                    <input
                        type="checkbox"
                        checked={limitQuantity}
                        onChange={() => setLimitQuantity(!limitQuantity)}
                        className="form-checkbox"
                    />
                    <span className="ml-2">Limit quantity</span>
                </label>
                <label className="inline-flex items-center mb-2">
                    <input
                        type="checkbox"
                        checked={limitValidity}
                        onChange={() => setLimitValidity(!limitValidity)}
                        className="form-checkbox"
                    />
                    <span className="ml-2">Limit validity period</span>
                </label>
                <div className="flex space-x-4">
                    <input
                        type="date"
                        value={validityPeriod.start}
                        onChange={(e) => setValidityPeriod({ ...validityPeriod, start: e.target.value })}
                        className="mt-2 w-full p-2 border border-gray-300 rounded"
                        placeholder="Start Date"
                    />
                    <input
                        type="date"
                        value={validityPeriod.end}
                        onChange={(e) => setValidityPeriod({ ...validityPeriod, end: e.target.value })}
                        className="mt-2 w-full p-2 border border-gray-300 rounded"
                        placeholder="End Date"
                    />
                </div>
                <input
                    type="text"
                    value={minQualifyingAmount}
                    onChange={(e) => setMinQualifyingAmount(e.target.value)}
                    className="mt-2 w-full p-2 border border-gray-300 rounded"
                    placeholder="Set a minimum qualifying amount"
                />
                <input
                    type="text"
                    value={minQuantity}
                    onChange={(e) => setMinQuantity(e.target.value)}
                    className="mt-2 w-full p-2 border border-gray-300 rounded"
                    placeholder="Set a minimum quantity"
                />
            </div>
            <div className="flex justify-end">
                <button
                    onClick={handleCreateDiscount}
                    className="bg-pink text-black px-4 py-2 rounded transform transition-transform duration-200 hover:-translate-y-1 hover:-translate-x-1"
                >
                    Add discount
                </button>
            </div>
        </div>
    );
};

export default Discount;
