import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import superfansData from '../../sampleData/customerData'
import CustomBarChart from '../diagrams/BarChart';




const CrossSell = () => {
    const [coursePairs, setCoursePairs] = useState([]);
    const [visiblePairs, setVisiblePairs] = useState([]);
    const [showDismissDialog, setShowDismissDialog] = useState(false);
    const [showApplyDialog, setShowApplyDialog] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        analyzeCourses(superfansData);
    }, []);

    const analyzeCourses = (data) => {
        const coursePairsCount = {};
        const courseOnlyCount = {};

        // Step 1: Analyze the data to find the most commonly paired courses
        data.forEach((user) => {
            // Filter out users who are on the "Do Not Contact" list
            const filteredHistory = user.history.filter(purchase => purchase.doNotContact === 0);

            const courses = filteredHistory.map((purchase) => purchase.itemName);

            courses.forEach((course, index) => {
                for (let i = index + 1; i < courses.length; i++) {
                    const pair = [course, courses[i]].sort().join(' & ');
                    coursePairsCount[pair] = (coursePairsCount[pair] || 0) + 1;
                }
            });

            // Count individual courses for step 2
            courses.forEach((course) => {
                courseOnlyCount[course] = (courseOnlyCount[course] || { users: 0, otherCourses: {} });
                courseOnlyCount[course].users += 1;
                courses.forEach((otherCourse) => {
                    if (course !== otherCourse) {
                        courseOnlyCount[course].otherCourses[otherCourse] = (courseOnlyCount[course].otherCourses[otherCourse] || 0) + 1;
                    }
                });
            });
        });

        // Step 2: Identify users who have only taken one of the two paired courses
        const suggestionsArray = Object.keys(coursePairsCount)
            .filter((pair) => {
                const [courseA, courseB] = pair.split(' & ');
                const totalPaired = coursePairsCount[pair];
                const onlyCourseA = courseOnlyCount[courseA].users - courseOnlyCount[courseA].otherCourses[courseB];
                const onlyCourseB = courseOnlyCount[courseB].users - courseOnlyCount[courseB].otherCourses[courseA];

                // Only highlight if paired over 10 times and more than 5 students have taken one but not the other
                return totalPaired > 10 && (onlyCourseA > 5 || onlyCourseB > 5);
            })
            .map((pair) => {
                const [courseA, courseB] = pair.split(' & ');
                const totalPaired = coursePairsCount[pair];
                const onlyCourseA = courseOnlyCount[courseA].users - courseOnlyCount[courseA].otherCourses[courseB];
                const onlyCourseB = courseOnlyCount[courseB].users - courseOnlyCount[courseB].otherCourses[courseA];

                return {
                    courseA,
                    courseB,
                    totalPaired,
                    onlyCourseA,
                    onlyCourseB,
                    suggestionA: `Email ${onlyCourseA} Customers with a Promotion`,
                    suggestionB: `Email ${onlyCourseB} Customers with a Promotion`,
                };
            });

        setCoursePairs(suggestionsArray);
        setVisiblePairs(suggestionsArray); // Initialize with the first two suggestions
    };

    const dismissSuggestion = (index) => {
        const updatedPairs = [...visiblePairs];
        updatedPairs.splice(index, 1); // Remove the dismissed suggestion

        setVisiblePairs(updatedPairs);
    };

    const handleNavigateToEmail = (courseA, courseB, totalPairs) => {
        navigate('/email', {
            state: {
                to: `${totalPairs} customers`,
                subject: `Take advantage of this exclusive offer on ${courseA}`,
                body: `Dear Customer,\n\nWe noticed that you have purchased ${courseB}. We are excited to offer you a special promotion on ${courseA}. Use the discount code OFFER2024 to get a 20% discount!\n\nBest regards,\nYour Company`,
            },
        });
    };

    const handleDismissAll = () => {
        setShowDismissDialog(false);
        setVisiblePairs([]);
    };

    const handleApplyAll = () => {
        setShowApplyDialog(false);
    };

    const closeDialog = () => {
        setShowDismissDialog(false);
        setShowApplyDialog(false);
    }




    return (
        <div className="actions-container">
            <div className="flex flex-col lg:flex-row justify-between items-center mb-6 space-y-4 lg:space-y-0 lg:space-x-4">
                <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0">
                    <h1 className="text-3xl font-bold mb-2 lg:mb-0 lg:mr-4 text-center lg:text-left">Cross-Sell Opportunities</h1>
                    <div className="bg-pink text-black px-3 py-1 text-center rounded-full border-solid border-[1px] border-black">
                        {visiblePairs.length} Actions Available
                    </div>
                </div>
                {visiblePairs.length > 0 && (
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

            <p className="mb-6">We’ve identified products frequently purchased together by customers and highlighted opportunities to cross-sell to those who have bought one but not the other.</p>
            <p className="mb-6 italic">Note: We are only highlighting customers who are contactable and who have not been sent a promotion email in the last 7-days</p>

            {visiblePairs.length > 0 ? (
                visiblePairs.map((pair, index) => {
                    const barChartData = [
                        {
                            name: "Customers Counts",
                            CustomerBoth: pair.totalPaired,
                            BoughtProductA: pair.onlyCourseA,
                            BoughtProductB: pair.onlyCourseB
                        }
                    ];

                    return (
                        <div key={index} className="insight-section mb-8 bg-white p-[10px] rounded border-dashed border-2 border-black">
                            <div className="flex justify-between items-center">
                                <p className='text-sm font-bold'>Products</p>
                                <button
                                    onClick={() => dismissSuggestion(index)}
                                    className="text-gray hover:text-white hover:bg-red border border-black rounded w-6 y-6 transform transition-transform duration-200"
                                >
                                    &#10005;
                                </button>
                            </div>
                            <h2 className="text-xl font-semibold mb-4">Cross-Sell Opportunities for {pair.courseA} & {pair.courseB}</h2>

                            {/* Bar Chart */}
                            <div className="flex justify-center">
                                <CustomBarChart data={barChartData} courseA={pair.courseA} courseB={pair.courseB} />
                            </div>
                            <h2 className="text-xl font-semibold my-2">Take Action!</h2>
                            <div className="flex flex-col gap-4 lg:flex-row justify-around">
                                <div className="suggested-action-section bg-black rounded flex flex-col space-y-4 my-4 w-[50%] mx-auto">
                                    <button onClick={() => handleNavigateToEmail(pair.courseA, pair.courseB, pair.onlyCourseA)} className="relative h-full w-full bg-pink border-solid border-black border-[1px] text-black px-4 py-2 rounded transform transition-transform duration-200 hover:-translate-y-1 hover:-translate-x-1">
                                        {pair.suggestionA} for {pair.courseB}
                                    </button>
                                </div>

                                <div className="suggested-action-section bg-black rounded flex flex-col space-y-4 my-4 w-[50%] mx-auto">
                                    <button onClick={() => handleNavigateToEmail(pair.courseB, pair.courseA, pair.onlyCourseB)} className="relative h-full w-full bg-gold border-solid border-black border-[1px] text-black px-4 py-2 rounded transform transition-transform duration-200 hover:-translate-y-1 hover:-translate-x-1">
                                        {pair.suggestionB} for {pair.courseA}
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })
            ) : (
                <p>No cross-sell opportunities found.</p>
            )}


            {/* Dismiss All Confirmation Dialog */}
            {showDismissDialog && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-8 rounded border-solid border-black border-2">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold mb-4">Dismiss All</h2>
                            <button
                                onClick={closeDialog}
                                className="text-gray hover:text-white hover:bg-red border border-black rounded w-6 y-6 transform transition-transform duration-200"
                            >
                                &#10005;
                            </button>
                        </div>
                        <p className="mb-6">Are you sure you want to dismiss all cross-sell opportunities?</p>
                        <div className="bg-black mx-auto w-[50%]">
                            <button
                                onClick={handleDismissAll}
                                className="relative w-full border-solid border-black border-[1px] bg-red text-white px-4 py-2 rounded transform transition-transform duration-200 hover:-translate-y-1 hover:-translate-x-1"
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Apply All Confirmation Dialog */}
            {showApplyDialog && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-8 rounded border-solid border-black border-2">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold rounded mb-4">Apply All</h2>
                            <button
                                onClick={closeDialog}
                                className="text-gray hover:text-white hover:bg-red border border-black rounded w-6 y-6 transform transition-transform duration-200"
                            >
                                &#10005;
                            </button>
                        </div>
                        <p className="mb-6">Are you sure you want to apply all cross-sell opportunities?</p>
                        <p className="mb-6">Note: customers appearing across multiple cross-sell opportunities will only be sent one email to limit flooding their inbox.</p>
                        <div className="bg-black mx-auto rounded w-[50%]">
                            <button
                                onClick={handleApplyAll}
                                className="relative w-full border-solid border-black border-[1px] bg-pink text-black px-4 py-2 rounded transform transition-transform duration-200 hover:-translate-y-1 hover:-translate-x-1"
                            >
                                Apply Cross-Sell Opportunities
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CrossSell;
