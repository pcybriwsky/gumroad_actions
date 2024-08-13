import React, { useState } from 'react';

const About = () => {
    const [activeTab, setActiveTab] = useState('DemoDetails');

    const renderTabContent = () => {
        switch (activeTab) {
            case 'DemoDetails':
                return (
                    <div className='bg-white border-black border-dashed border-2 rounded p-4'>
                        <h2 className='text-4xl my-2'>Gumroad Dashboard Actions Tab Demo</h2>

                        <p className='mb-2'>This project is a demo for the Gumroad Design Engineer position, showcasing a proposed "Actions" tab on the Gumroad dashboard. The goal of this feature is to help users quickly gain insights from their data and take actions that can lead to increased sales. </p>

                        <p> By highlighting opportunities based on user data, this feature enables sellers to make better use of existing capabilities such as checkout discounts, workflow automation, and email campaigns with just one click. Ultimately, it will lead to more sales for sellers and revenue for Gumroad.</p>
                        <ol>
                            <li className='mt-2'>
                                <strong>Purpose:</strong> This demo addresses the challenge users face in understanding and acting upon their analytics. The "Actions" tab is designed to provide quick insights and actionable steps to help users optimize their sales strategies on Gumroad.
                            </li>
                            <li className='mt-2'>
                                <strong>Features:</strong> The demo highlights a feature to help Gumroad sellers identify and execute Cross-Sell, Seasonal, and Win-Back promotions to better engage with their customers, leading to increased sales.
                                <ul className='list-disc ml-6'>
                                    <li className='mt-2'><strong>Cross-Sell:</strong> Identify products frequently purchased together and target users who have only purchased one of the products.</li>
                                    <li className='mt-2'><strong>Seasonal Promotions:</strong> Recommend product promotions based on past sales and trends data.</li>
                                    <li className='mt-2'><strong>Win-Back Campaigns:</strong> Identify inactive customers and recommend actions to re-engage them with targeted promotions or information about a new product for sale.</li>
                                </ul>
                                The feature set will leverage existing Gumroad features like emails, workflows, amd discounts.
                            </li>
                            <li className='mt-2'>
                                <strong>Site Structure:</strong> This demo recreates the Gumroad site to showcase the "Actions" tab and a few supporting click-through pages. All other pages are either dead links or redirect to this About page.
                            </li>
                            <li className='mt-2'>
                                <strong>Data Source:</strong> The data used in the demo was randomly generated and is structured in the same format as the Gumroad Sales Export CSV. That said, a feature like this can be launched with Gumroad's existing data collection.
                            </li>
                            <li className='mt-2'>
                                <strong>Future Features:</strong> As users engage with the feature and provide feedback, Gumroad can expand the use cases of the "Actions" tab. This could include analyzing different and newly collected types of data, identifying more scenarios for user actions, and enabling A/B testing based on past performance. Additional support from a data scientist could be leveraged to build out more robust recommendations and projections in the future as well.
                            </li>
                            <li className='mt-2'>
                                <strong>Technologies Used in this Demo:</strong> React, Tailwind CSS, and deployed on Vercel.
                            </li>
                        </ol>

                        <div className="suggested-action-section bg-black rounded flex flex-col space-y-4 my-4 w-[50%] mx-auto">
                            <a href="https://github.com/pcybriwsky/gumroad_actions" className="relative bg-pink border-solid border-black border-[1px] text-black px-4 py-2 rounded text-center transform transition-transform duration-200 hover:-translate-y-1 hover:-translate-x-1">
                                Link to the Github Repo
                            </a>
                        </div>
                    </div>
                );

            case 'AboutMe':
                return (
                    <div className='bg-white border-black border-dashed border-2 rounded p-4'>
                        <h2 className='text-4xl my-2'>About Me</h2>
                        <p className='mb-4'>I'm Pete, a designer and software engineer out of New York.</p>
                        <p className='mb-4'>I spent some time doing product marketing and design consulting before starting <a href="https://ngenart.com" target="_blank" className="text-pink underline hover:opacity-80 transition-opacity ease-linear">n-gen</a>, a solo design studio turning data into 1:1 art and visualizations. The application connects to APIs from Strava and Spotify and allows users to sign-in and create art directly from their data. To-date, the application has had over 9M users.</p>
                        <p className='mb-4'>Over the past few months, I've begun to work with companies on small projects as well to build experiences natively into their platforms. n-gen and associated projects have been built on React, Node.js, and Tailwind. I've served as both designer and engineer.</p>

                        <p className='mb-4'>I'm passionate about the opportunity to work as a Design Engineer at Gumroad. It's a chance to leverage my design and technical chops to create a better experience for solo creators and entrepreneurs, something I've experienced first-hand to be extremely difficult.</p>

                        <p className='mb-4'>Thanks for checking out the demo! If you'd like to chat or have any questions, click the button below to send me an email!</p>
                        <div className="suggested-action-section bg-black rounded flex flex-col space-y-4 my-4 w-[50%] mx-auto">
                            <a href="mailto:pete@ngenart.com?subject=Hey%20Pete!%20Let's%20Chat" className="relative bg-pink border-solid border-black border-[1px] text-black px-4 py-2 rounded text-center transform transition-transform duration-200 hover:-translate-y-1 hover:-translate-x-1">
                                Chat with Pete!
                            </a>
                        </div>

                        <p className='mb-4'>In the spirit of making great decisions in one click, if you think I should be hired, there is a button for that too.</p>

                        <div className="suggested-action-section bg-black rounded flex flex-col space-y-4 my-4 w-[50%] mx-auto">
                            <a href="mailto:pete@ngenart.com?subject=The%20Button%20Worked,%20You're%20Hired" className="relative bg-gold border-solid border-black border-[1px] text-black px-4 py-2 rounded text-center transform transition-transform duration-200 hover:-translate-y-1 hover:-translate-x-1">
                                Hire Pete Right Now!
                            </a>
                        </div>
                    </div>
                );
            default:
                return <div>Select a tab to view content.</div>;
        }
    };

    return (
        <div className="about-container">
            <h1 className='text-black text-4xl my-2'>Welcome to the demo! 👋</h1>
            <p className='text-md my-2'>The primary focus of the demo is the <a href="/" style={{ color: 'pink' }} className='font-bold hover:opacity-80 transition-smooth ease-linear'>action tab</a> for users to take immediate actions based on their data.</p>

            <p className='text-md my-2'>This is a placeholder page for the real dashboard, since it's not part of the demo. Click the tabs below to get the gist of the ReadMe and learn about me</p>

            <div className="tabs mb-6">
                <button
                    className={`px-4 rounded-full py-2 mr-2 hover:border-[1px] hover:border-black ${activeTab === 'DemoDetails' ? 'bg-white border-black border-[1px]' : ''}`}
                    onClick={() => setActiveTab('DemoDetails')}
                >
                    Demo Details
                </button>

                <button
                    className={`px-4 rounded-full py-2 mr-2 hover:border-[1px] hover:border-black ${activeTab === 'AboutMe' ? 'bg-white border-black border-[1px]' : ''}`}
                    onClick={() => setActiveTab('AboutMe')}
                >
                    About Me
                </button>
            </div>
            <div className="tab-content">
                {renderTabContent()}
            </div>
        </div>
    );
};

export default About;
