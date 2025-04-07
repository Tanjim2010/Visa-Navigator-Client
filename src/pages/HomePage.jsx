import { useState, useEffect } from "react";
import { FaAffiliatetheme, FaAlgolia, FaAmazon, FaFacebook, FaGoogle, FaInstagram, FaMicrosoft, FaTwitter, FaAirbnb } from "react-icons/fa6";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import LatestVisas from "../components/LatestVisas";
import VisaProcess from "../components/VisaProcess";
import VisaHighlights from "../components/VisaHighlights";

const HomePage = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme')|| "light");

    // Toggle between light and dark themes
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme); // Save the theme to localStorage
    };

    useEffect(() => {
        // Load the saved theme from localStorage (if available)
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
    }, []);

    useEffect(() => {
        // Apply the theme by setting the `data-theme` attribute on the HTML document's root
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <div>
            <header className="flex justify-between items-center   bg-base-100">
                <Banner toggleTheme={toggleTheme} />
                
            </header>
            <main className="min-h-[calc(100vh-1039px)]">
                {/* Latest visas section */}
                <section className="bg-[#EDF5FF] py-10">
                    
                    <LatestVisas />
                </section>
                <section className="bg-[#EDF5FF] ">
                    <VisaProcess></VisaProcess>
                </section>
                <section className="bg-[#EDF5FF] pb-10">
                    <VisaHighlights></VisaHighlights>
                </section>
                {/* Trusted by Leading Companies */}
                <section className="bg-[#EDF5FF] py-10">
                    <div className="text-center text-primary-color max-w-7xl mx-auto">
                        <h2 className="text-4xl font-bold text-black">Trusted by Leading Companies</h2>
                        <div className="flex flex-wrap justify-center items-center gap-8 mt-8 text-5xl">
                            <FaFacebook />
                            <FaInstagram />
                            <FaTwitter />
                            <FaAmazon />
                            <FaGoogle />
                            <FaMicrosoft />
                            <FaAirbnb />
                            <FaAffiliatetheme />
                            <FaAlgolia />
                        </div>
                    </div>
                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default HomePage;
