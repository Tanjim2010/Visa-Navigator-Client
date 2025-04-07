
const VisaHighlights = () => {
    return (
        <div className="bg-white text-primary-color py-16 px-2">
            <div className="max-w-7xl mx-auto">

                {/* Visa Highlights Section */}
                <div className="text-center text-black mb-16">
                    <h2 className="text-4xl font-bold">Visa Highlights</h2>
                    <p className="text-lg mt-4">
                        Discover why our visa services stand out. Here are some of our key features.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
                    {/* Fast Processing */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center text-white">
                        <div className="text-5xl mb-4">
                            <i className="bi bi-clock"></i>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Fast Processing</h3>
                        <p>Get your visa processed within 48 hours for selected countries.</p>
                    </div>

                    {/* Affordable Fees */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center text-white">
                        <div className="text-5xl mb-4">
                            <i className="bi bi-cash"></i>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Affordable Fees</h3>
                        <p>We offer competitive pricing with no hidden costs.</p>
                    </div>

                    {/* Global Coverage */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center text-white">
                        <div className="text-5xl mb-4">
                            <i className="bi bi-globe"></i>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Global Coverage</h3>
                        <p>Apply for visas to over 100+ countries from one platform.</p>
                    </div>

                    {/* 24/7 Support */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center text-white">
                        <div className="text-5xl mb-4">
                            <i className="bi bi-headset"></i>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                        <p>
                            Our customer support team is available around the clock to assist
                            you.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisaHighlights;