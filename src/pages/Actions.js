import React, { useState } from 'react';
import CrossSell from '../components/tabs/CrossSell';
import SeasonalPromotions from '../components/tabs/SeasonalPromotions';
import WinBack from '../components/tabs/WinBack';

const Actions = () => {
    const [activeTab, setActiveTab] = useState('CrossSell');

    const renderTabContent = () => {
        switch (activeTab) {
            case 'CrossSell':
                return <CrossSell />;
            case 'SeasonalPromotions':
                return <SeasonalPromotions />;
            case 'WinBack':
                return <WinBack />;
            // Add more cases for other tabs like 'WinBack', 'PopularCourses', etc.
            default:
                return <CrossSell />;
        }
    };

    return (
        <div className="actions-container">
            <h1 className="text-3xl hidden lg:block font-bold mb-6">Actions</h1>
            <div className="tabs mb-6">
                <button
                    className={`px-4 rounded-full py-2 mr-2 hover:border-[1px] hover:border-black ${activeTab === 'CrossSell' ? 'bg-white border-black border-[1px]' : ''}`}
                    onClick={() => setActiveTab('CrossSell')}
                >
                    Cross-Sell
                </button>

                <button
                    className={`px-4 rounded-full py-2 mr-2 hover:border-[1px] hover:border-black ${activeTab === 'SeasonalPromotions' ? 'bg-white border-black border-[1px]' : ''}`}
                    onClick={() => setActiveTab('SeasonalPromotions')}
                >
                    Promote
                </button>

                <button
                    className={`px-4 rounded-full py-2 mr-2 hover:border-[1px] hover:border-black ${activeTab === 'WinBack' ? 'bg-white border-black border-[1px]' : ''}`}
                    onClick={() => setActiveTab('WinBack')}
                >
                    Win-Back
                </button>
            </div>
            <div className="tab-content">
                {renderTabContent()}
            </div>
        </div>
    );
};

export default Actions;
