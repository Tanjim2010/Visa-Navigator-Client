import { Link } from "react-router-dom";
import ReuseableTitle from "./ReuseableTitle";
import { FaArrowRight } from "react-icons/fa6";
import { useEffect, useState } from "react";

const LatestVisas = () => {
    const [loadedVisaInformation, setLoadedVisaInformation]= useState([])
    const visaInformation = loadedVisaInformation?.slice((loadedVisaInformation.length - 6),loadedVisaInformation?.length)?.reverse()

    useEffect(()=>{
        fetch('https://visa-navigator-server-side.vercel.app/visas')
        .then(res =>res.json())
        .then(data => {
            setLoadedVisaInformation(data)
        })
    })


    return (
        <div className="max-w-7xl mx-auto">
            <div>
                <ReuseableTitle title={"Latest Visas"} paragraph={"Some Latest visas are here. To see more click on “See all visas” button."}></ReuseableTitle>
            </div>
            <div className="bg-white rounded-lg px-3 pb-3 pt-10">
                <div className="grid  gap-5   md:grid-cols-2 lg:grid-cols-3">
                    {
                        visaInformation.map(visaInfo => <div
                            key={visaInfo._id}
                            className="bg-[#EDF5FF] rounded-lg shadow-md overflow-hidden flex flex-col h-full"
                        >
                            <div className="p-3">
                                <div className="p-2 rounded-lg bg-white flex justify-between items-center">
                                    <img
                                        src={visaInfo.countryImage}
                                        alt={`${visaInfo.country} flag`}
                                        className="h-[150px] md:h-[200px] w-full rounded-lg object-cover"
                                    />
                                    
                                </div>
                            </div>
                            <div className="p-4 flex-1 space-y-1">
                                <div>
                                    <h2 className="text-xl font-bold text-gray-800">{visaInfo.countryName}</h2>
                                    <p className="text-gray-600">
                                        <strong>Visa Type:</strong> {visaInfo.visaType}
                                    </p>
                                    <p className="text-gray-600">
                                        <strong>Processing Time:</strong> {visaInfo.processingTime}
                                    </p>
                                    <p className="text-gray-600">
                                        <strong>Fee:</strong> {visaInfo.fee}$
                                    </p>
                                    <p className="text-gray-600">
                                        <strong>Validity:</strong> {visaInfo.validity}
                                    </p>
                                    <p className="text-gray-600">
                                        <strong>Application Method:</strong> {visaInfo.applicationMethod}
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
                        )
                    }
                </div>
                <div className="mt-5">
                    <Link to={'/all_visas'}>
                        <button className="px-7 py-3 font-semibold text-primary-color border-primary-color border-2 rounded-lg hover:text-white hover:bg-primary-color flex items-center gap-2">See all visas <FaArrowRight></FaArrowRight></button>
                        
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LatestVisas;