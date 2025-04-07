import { useEffect, useState } from "react";
import Navbar from "./Navbar";

// eslint-disable-next-line react/prop-types
const Banner = ({toggleTheme}) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            image: "https://i.ibb.co/jZZLwt5/waterfall-2301249-960-720.jpg",
            title: "Simplifying Your Visa Journey With Expertise and care",
        },
        {
            id: 2,
            image: "https://i.ibb.co/k0szBnW/lake-3962018-960-720.jpg",
            title: "Simplifying Your Visa Journey With Expertise and care",
        },
        {
            id: 3,
            image: "https://i.ibb.co/bWwSJpB/banner-bg.jpg",
            title: "Simplifying Your Visa Journey With Expertise and care",
        },
        {
            id: 4,
            image: "https://i.ibb.co/XtR5Kvy/the-scenery-5216660-960-720.jpg",
            title: "Simplifying Your Visa Journey With Expertise and care",
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
            <div className="absolute inset-0 z-50 *:text-white max-w-7xl mx-auto">
                <Navbar toggleTheme={toggleTheme} />
            </div>

            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-700"
                style={{
                    backgroundImage: `
                        linear-gradient(to bottom, rgba(0, 0, 0, 0.6), transparent),
                        url(${slides[currentSlide].image})
                    `,
                }}
            ></div>

            <div className="absolute inset-0 flex flex-col justify-center px-3 items-start max-w-7xl mx-auto  text-white">
                <h2 className="text-3xl md:text-5xl lg:text-7xl md:w-2/3 lg:w-1/2 mb-5 mt-5 font-bold">{slides[currentSlide].title}</h2>
                <button className="z-50 px-7 py-3 font-semibold text-primary-color border-primary-color border-2 rounded-lg hover:text-white hover:bg-primary-color">Get Started</button>
            </div>

            <div className="absolute inset-x-0 bottom-4 flex justify-center space-x-2 z-30">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full ${
                            currentSlide === index ? "bg-white" : "bg-gray-400"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Banner;
