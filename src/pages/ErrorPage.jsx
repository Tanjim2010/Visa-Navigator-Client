import { FaUserAstronaut } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="bg-gradient-to-r from-primary-color to-red-600 flex items-center justify-center min-h-screen">
            <div className="w-2/3 lg:max-w-2xl bg-white shadow-2xl p-5 md:p-8 lg:p-10 rounded-lg animate-fadeIn">
                <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10">
                    <div className="text-7xl md:text-9xl text-primary-color animate-bounce">
                        <FaUserAstronaut />
                    </div>
                    <div className="text-center">
                        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-800 animate-pulse">
                            404
                        </h1>
                        <p className="my-3 text-lg text-gray-600 italic">
                            ~ Page Not Found ~
                        </p>
                        <Link to="/">
                            <button className="px-7 py-3 font-semibold text-white bg-primary-color rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out">
                                Back to Home
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
