import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import ReuseableTitle from "../components/ReuseableTitle";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AllVisasPage = () => {
    const loadedVisaInformation = useLoaderData();
    const [filterByVisaType, setFilterByVisaType] = useState("");
    const [sortOrder, setSortOrder] = useState("asc"); // "asc" for ascending, "desc" for descending

    const handleFilterBy = (e) => {
        setFilterByVisaType(e.target.value);
    };

    const handleSortOrder = () => {
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    };

    // Ensure loadedVisaInformation is an array before filtering and sorting
    const filteredVisas = Array.isArray(loadedVisaInformation)
        ? filterByVisaType
            ? loadedVisaInformation.filter(
                (visa) =>
                    visa.visaType &&
                    visa.visaType.toLowerCase() === filterByVisaType.toLowerCase()
            )
            : loadedVisaInformation
        : [];

    const sortedVisas = filteredVisas.sort((a, b) => {
        if (sortOrder === "asc") {
            return a.countryName.localeCompare(b.countryName);
        } else {
            return b.countryName.localeCompare(a.countryName);
        }
    });

    return (
        <div>
            <header className="max-w-7xl mx-auto ">
                <Navbar></Navbar>
            </header>
            <main className="min-h-[calc(100vh-500px)]">
                {/* Visa details is here */}
                <section className="bg-[#EDF5FF] pb-10 pt-20">
                    <div className="max-w-7xl mx-auto">

                        <div>
                            <ReuseableTitle
                                title={"All Visas"}
                                paragraph={
                                    "Here is available all kinds of and of countries visas. Visit which country you want to visit. Go to details for more about that country."
                                }
                            ></ReuseableTitle>
                        </div>
                        <div className="bg-white rounded-lg px-3 pb-10 pt-2">
                            <div className="flex justify-between items-center mb-2 flex-wrap gap-5">
                                {/* Filter dropdown */}
                                <div className="max-w-48 ">
                                    <select
                                        name="visaType"
                                        onChange={handleFilterBy}
                                        className="select w-full text-xs md:text-base bg-primary-color font-semibold text-white"
                                        defaultValue=""
                                    >
                                        <option className="bg-white text-gray-500" value="" disabled>
                                            Filter By Visa Type
                                        </option>
                                        <option className="bg-white text-gray-500" value="">All</option>
                                        <option className="bg-white text-gray-500" value="Tourist visa">Tourist visa</option>
                                        <option className="bg-white text-gray-500" value="Student visa">Student visa</option>
                                        <option className="bg-white text-gray-500" value="Official visa">Official visa</option>
                                        <option className="bg-white text-gray-500" value="Working Holiday Visa">Working Holiday Visa</option>
                                    </select>
                                </div>
                                {/* Sort button */}
                                <button
                                    onClick={handleSortOrder}
                                    className="px-5 py-2 text-xs md:text-base bg-primary-color text-white font-semibold rounded-lg shadow-md hover:bg-primary-color-dark"
                                >
                                    Sort: {sortOrder === "asc" ? "Ascending" : "Descending"}
                                </button>
                            </div>
                            <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                {sortedVisas.map((visaInfo) => (
                                    <div
                                        key={visaInfo._id}
                                        className="bg-[#EDF5FF] rounded-lg shadow-md overflow-hidden flex flex-col h-full"
                                    >
                                        <div className="p-3">
                                            <div className="p-2 rounded-lg bg-white flex justify-between items-center">
                                                <img
                                                    src={visaInfo.countryImage}
                                                    alt={`${visaInfo.country} flag`}
                                                    className="h-[150px] md:h-[150px] w-full rounded-lg object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="p-4 flex-1 space-y-1">
                                            <div>
                                                <h2 className="text-xl font-bold text-gray-800">
                                                    {visaInfo.countryName}
                                                </h2>
                                                <p className="text-gray-600">
                                                    <strong>Visa Type:</strong> {visaInfo.visaType}
                                                </p>
                                                <p className="text-gray-600">
                                                    <strong>Processing Time:</strong>{" "}
                                                    {visaInfo.processingTime}
                                                </p>
                                                <p className="text-gray-600">
                                                    <strong>Fee:</strong> {visaInfo.fee}$
                                                </p>
                                                <p className="text-gray-600">
                                                    <strong>Validity:</strong> {visaInfo.validity}
                                                </p>
                                                <p className="text-gray-600">
                                                    <strong>description:</strong> {visaInfo.description.slice(0, 40)} ...<span className="link-hover">see more</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="p-4 mt-auto">
                                            <Link to={`/visa_details/${visaInfo._id}`}>
                                                <button className="px-7 py-3 font-semibold text-primary-color border-primary-color border-2 rounded-lg hover:text-white hover:bg-primary-color w-full">
                                                    See Details
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AllVisasPage;
