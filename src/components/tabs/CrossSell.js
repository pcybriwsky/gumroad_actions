import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import superfansData from '../../sampleData/customerData'

const CrossSell = () => {
    const [coursePairs, setCoursePairs] = useState([]);
    const [visiblePairs, setVisiblePairs] = useState([]);
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
                    suggestionA: `Email ${onlyCourseA} users with a promotion.`,
                    suggestionB: `Email ${onlyCourseB} users with a promotion.`,
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
                to: `${totalPairs} users`,
                subject: `Take advantage of this exclusive offer on ${courseA}`,
                body: `Dear Customer,\n\nWe noticed that you have purchased ${courseB}. We are excited to offer you a special promotion on ${courseA}. Use the discount code OFFER2024 to get a 20% discount!\n\nBest regards,\nYour Company`,
            },
        });
    };

    return (
        <div className="actions-container">
            <div className="flex items-center mb-6">
                <h1 className="text-3xl font-bold mr-4">Cross-Sell Opportunities</h1>
                <div className="bg-pink text-black px-3 py-1 text-center rounded-full border-solid border-[1px] border-black">
                    {visiblePairs.length} actions available
                </div>
            </div>     
            <p className="mb-6">We’ve identified products frequently purchased together by customers and highlighted opportunities to cross-sell to those who have bought one but not the other.</p>
            <p className="mb-6 italic">Note: We are only highlighting users who are contactable</p>

            {visiblePairs.length > 0 ? (
                visiblePairs.map((pair, index) => (
                    <div key={index} className="insight-section mb-8 bg-white p-[10px] rounded border-dashed border-2 border-black">
                        <p className='text-sm font-bold'>Products</p>
                        <h2 className="text-2xl font-semibold mb-4">{pair.courseA} & {pair.courseB}</h2>
                        <p className="mb-2">
                            <span className="font-semibold">{pair.totalPaired} users</span> have purchased both products
                        </p>
                        <p className="mb-2">
                            <span className='font-semibold'>{pair.onlyCourseA} users</span> have purchased <span className="italic">{pair.courseA}</span> but not <span className="italic">{pair.courseB}</span>
                        </p>
                        <div className="suggested-action-section bg-black rounded flex flex-col space-y-4 my-4 w-[50%] mx-auto">
                            <button onClick={() => handleNavigateToEmail(pair.courseA, pair.courseB, pair.onlyCourseA)} className="relative border-solid border-black border-[1px] bg-pink text-black px-4 py-2 rounded transform transition-transform duration-200 hover:-translate-y-1 hover:-translate-x-1">
                                {pair.suggestionA}
                            </button>
                        </div>

                        <p className="my-2">
                            <span className='font-semibold'>{pair.onlyCourseB} users</span> have purchased <span className="italic">{pair.courseB}</span> but not <span className="italic">{pair.courseA}</span>
                        </p>
                        <div className="suggested-action-section bg-black rounded flex flex-col space-y-4 my-4 w-[50%] mx-auto">
                            <button onClick={() => handleNavigateToEmail(pair.courseB, pair.courseA, pair.onlyCourseB)} className="relative bg-pink border-solid border-black border-[1px] text-black px-4 py-2 rounded transform transition-transform duration-200 hover:-translate-y-1 hover:-translate-x-1">
                                {pair.suggestionB}
                            </button>
                        </div>
                        <div className="dismiss-section mt-4 flex bg-black items-center mx-auto rounded w-[50%]">
                            <button
                                onClick={() => dismissSuggestion(index)}
                                className="w-full relative border-solid border-black border-[1px] bg-red text-white px-4 py-2 rounded transform transition-transform duration-200 hover:-translate-y-1 hover:-translate-x-1"
                            >
                                Dismiss Recommendation
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <p>No cross-sell opportunities found.</p>
            )}
        </div>
    );
};

export default CrossSell;
