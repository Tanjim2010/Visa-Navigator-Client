import { useLoaderData } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const VisaDetailsPage = () => {
    const {user} = useContext(AuthContext);
    const singleVisa = useLoaderData();
    console.log(singleVisa)

    const handleApplySubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const firstName = formData.get('firstName');
        const lastName = formData.get('lastName');
        const fullName = firstName + ' ' + lastName;
        const email = formData.get('email');
        const appliedDate = formData.get('appliedDate');
        const fee = formData.get('fee');
        const appliedUserForVisa ={firstName,lastName, fullName, email, appliedDate, fee, visaInfo:singleVisa}
        console.log(appliedUserForVisa)
        fetch('https://visa-navigator-server-side.vercel.app/appliedVisas',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(appliedUserForVisa)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <div>
            <header className="max-w-7xl mx-auto">
                <Navbar></Navbar>
            </header>
            <main className="min-h-[calc(100vh-500px)]">

                {/* Visa details is here */}
                <section className="bg-[#EDF5FF] pb-10 pt-20 px-2">
                    <h1 className="text-center font-semibold text-2xl md:text-3xl lg:text-4xl mb-3">Details for {singleVisa.countryName} visa</h1>
                    <div className="max-w-7xl mx-auto bg-white p-5 rounded-lg">
                        <div className="flex flex-col lg:flex-row gap-5">
                            <div className="lg:w-1/2 w-full">
                                <img
                                    src={singleVisa.countryImage}
                                    className="rounded-lg w-full "
                                    alt="Country Image" />
                            </div>
                            <div >
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">{singleVisa.countryName}</h2>
                                <div className="font-medium text-sm md:text-base">
                                    <p>Visa Type: {singleVisa.visaType}</p>
                                    <p>Processing Time: {singleVisa.processingTime}</p>
                                    <p>Age Restriction: {singleVisa.ageRestriction}</p>
                                    <p>Validity: {singleVisa.validity}</p>
                                    <p>Fee: ${singleVisa.fee}</p>

                                    <p>Application Method: {singleVisa.applicationMethod}</p>
                                    <p>Description: {singleVisa.description}</p>
                                    <div>
                                        <h3 className="text-lg mt-2">Required Documents:</h3>
                                        <ul className="list-disc *:ml-4 *:text-gray-600">
                                            {
                                                singleVisa.requiredDocuments.map((visa, index) => <li key={index}>{visa}</li>)
                                            }
                                        </ul>
                                    </div>
                                    <button
                                        onClick={() => document.getElementById('my_modal_1').showModal()}
                                        className="px-7 py-3 font-semibold  bg-primary-color  rounded-lg text-white hover:bg-black mt-5">Apply for the visa</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* modal starts  */}
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Visa Application</h3>
                        <form onSubmit={handleApplySubmit} className="space-y-4">
                            {/* Email Field  */}
                            <div>
                                <label className="block text-sm font-medium">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    defaultValue={user.email}
                                    className="input input-bordered w-full"
                                />
                            </div>

                            {/* First Name Field */}
                            <div>
                                <label className="block text-sm font-medium">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    required
                                    className="input input-bordered w-full"
                                />
                            </div>

                            {/* Last Name Field */}
                            <div>
                                <label className="block text-sm font-medium">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    required
                                    className="input input-bordered w-full"
                                />
                            </div>

                            {/* Applied Date Field  */}
                            <div>
                                <label className="block text-sm font-medium">Applied Date</label>
                                <input
                                    type="text"
                                    name="appliedDate"
                                    value={ new Date().toISOString().split("T")[0]}
                                    className="input input-bordered w-full"
                                />
                            </div>

                            {/* Fee Field */}
                            <div>
                                <label className="block text-sm font-medium">Fee</label>
                                <input
                                    type="number"
                                    name="fee"
                                    value={singleVisa.fee}
                                    required
                                    className="input input-bordered w-full"
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="modal-action">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    onClick={() => document.getElementById("my_modal_1").close()}
                                >
                                    Apply
                                </button>
                                <button
                                    type="button"
                                    className="btn"
                                    onClick={() => document.getElementById("my_modal_1").close()}
                                >
                                    Close
                                </button>
                            </div>
                        </form>
                    </div>
                </dialog>
                {/* modal ends  */}
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default VisaDetailsPage;