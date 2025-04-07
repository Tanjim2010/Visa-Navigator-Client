import { useContext, useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { AuthContext } from "../provider/AuthProvider";
import ReuseableTitle from "../components/ReuseableTitle";
import Swal from "sweetalert2";
import { FaTableList } from "react-icons/fa6";
import { FaTableCellsLarge } from "react-icons/fa6";
const MyAddedVisasPage = () => {
    const { user } = useContext(AuthContext)
    const [visas, setVisas] = useState([])
    const [visa, setVisa] = useState({})
    const [dataView, setDataView] = useState(true)
    useEffect(() => {
        fetch(`https://visa-navigator-server-side.vercel.app/visas/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setVisas(data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [user?.email])




    const handleUpdateSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const countryName = formData.get("countryName")
        const countryImage = formData.get("countryImage")
        const visaType = formData.get("visaType")
        const processingTime = formData.get("processingTime")
        const requiredDocuments = formData.getAll("requiredDocuments");
        const description = formData.get("description")
        const ageRestriction = formData.get("ageRestriction")
        const fee = formData.get("fee")
        const validity = formData.get("validity")
        const applicationMethod = formData.get("applicationMethod")



        const updatedVisa = { _id: visa._id, countryName, countryImage, visaType, processingTime, requiredDocuments, description, ageRestriction, fee, validity, applicationMethod, addByEmail: user?.email }

        console.log(updatedVisa)

        fetch(`https://visa-navigator-server-side.vercel.app/visa`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedVisa)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setVisas((prevVisas) => prevVisas.map((v) => v._id === updatedVisa._id ? { ...v, ...updatedVisa } : v));
                if (data.modifiedCount) {
                    console.log('successfully updated');
                    Swal.fire({
                        title: 'Success!',
                        text: 'Visa Details updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    });
                }
            })
    }


    // delete a visa
    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://visa-navigator-server-side.vercel.app/visa/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        const remaining = visas.filter(visa => visa._id !== _id);
                        setVisas(remaining)
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    })
                    .catch(error => {
                        console.log(error)
                    })


            }
        });
    }

    return (
        <div>
            <header className="max-w-7xl mx-auto">
                <Navbar></Navbar>
            </header>
            <main className="">

                {/* Visa details is here */}
                <section className="bg-[#EDF5FF] py-10 pt-20 min-h-[calc(100vh-500px)]">
                    <div className="max-w-7xl mx-auto">
                        <div>
                            <ReuseableTitle title={`Welcome ${user?.displayName || user?.email}`} paragraph={`Here are some visa information that you added to our website.You can also delete and Update your added visas information . Thanks for adding visas in our website ${user?.displayName || user?.email}.`}></ReuseableTitle>
                        </div>
                        <div className="bg-white rounded-lg px-3 pb-3 pt-5">




                            {/* toggle view button */}
                            <div className="flex justify-end">
                                <span className="mr-2">View Mode :</span> <button className="pr-5 text-2xl text-primary-color" onClick={() => setDataView(!dataView)}> {dataView ? <FaTableCellsLarge /> : <FaTableList/>}</button>
                            </div>



                            {/* for table view */}
                            {
                                dataView ?
                                    <div className="overflow-x-auto ">
                                        <table className="table w-full">
                                            {/* head */}
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th>image</th>
                                                    <th>name</th>
                                                    <th>update</th>
                                                    <th>delete</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    visas.map((visaInfo, index) => <tr key={visaInfo._id} className="bg-[#EDF5FF]">
                                                        <th>{index + 1}</th>
                                                        <td><img
                                                            className="h-[50px] lg:h-[70px] w-[50px] lg:w-[70px] object-cover rounded-xl"
                                                            src={visaInfo.countryImage} alt="" /></td>
                                                        <td>{visaInfo.countryName}</td>
                                                        <td>
                                                            <button
                                                                onClick={() => {
                                                                    setVisa(visaInfo)
                                                                    document.getElementById('my_modal_2').showModal()
                                                                }}
                                                                className="btn font-semibold  rounded-lg text-white bg-green-500 hover:bg-black">
                                                                Update
                                                            </button>
                                                        </td>
                                                        <td>
                                                            <button onClick={() => handleDelete(visaInfo._id)} className="px-7 py-3 font-semibold rounded-lg text-white bg-red-500 hover:bg-black ">
                                                                Delete
                                                            </button>
                                                        </td>
                                                    </tr>)
                                                }

                                            </tbody>
                                        </table>
                                    </div>
                                    :
                                    <div className="grid  gap-5 md:grid-cols-2 lg:grid-cols-3">
                                        {
                                            visas.map(visaInfo => <div
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
                                                <div className="p-4 mt-auto flex  gap-5">
                                                    <button
                                                        onClick={() => {
                                                            setVisa(visaInfo)
                                                            document.getElementById('my_modal_2').showModal()
                                                        }}
                                                        className="px-7 py-3 font-semibold border-2 rounded-lg text-white bg-green-500 hover:bg-black w-full">
                                                        Update
                                                    </button>
                                                    <button onClick={() => handleDelete(visaInfo._id)} className="px-7 py-3 font-semibold border-2 rounded-lg text-white bg-red-500 hover:bg-black w-full">
                                                        Delete
                                                    </button>


                                                </div>
                                            </div>
                                            )
                                        }
                                    </div>
                            }

                            {/* for card view */}

                        </div>
                    </div>







                    {/* modal for update visa info */}
                    <dialog id="my_modal_2" className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-2xl text-center">Update visa</h3>
                            <div className="divider"></div>
                            <form onSubmit={handleUpdateSubmit} className="space-y-4">
                                <div>
                                    {/* Country name */}
                                    <div className="w-full">
                                        <label className="label">
                                            <span className="label-text font-semibold text-lg">Country name</span>
                                        </label>
                                        <input type="text"
                                            placeholder="Enter country name"
                                            className="input w-full"
                                            required
                                            name='countryName'
                                            defaultValue={visa.countryName}
                                        />
                                    </div>
                                    {/* country image */}
                                    <div className="w-full">
                                        <label className="label">
                                            <span className="label-text font-semibold text-lg ">Country image</span>
                                        </label>
                                        <input type="text"
                                            placeholder="Enter image URL"
                                            className="input w-full"
                                            required
                                            name='countryImage'
                                            defaultValue={visa.countryImage}
                                        />
                                    </div>
                                    {/* visa type optional input */}
                                    <div className="w-full ">
                                        <label className="label">
                                            <span className="label-text font-semibold text-xl ">Visa Type</span>
                                        </label>
                                        <select name="visaType" className="select w-full">
                                            <option disabled selected>Choose a visa type</option>
                                            <option>Tourist visa</option>
                                            <option>Student visa</option>
                                            <option>Official visa</option>
                                            <option>Working Holiday Visa</option>

                                        </select>
                                    </div>
                                    {/* processing time. */}
                                    <div className="w-full">
                                        <label className="label">
                                            <span className="label-text font-semibold text-xl">Processing Time</span>
                                        </label>
                                        <input type="text"
                                            placeholder="Enter processing time"
                                            className="input w-full"
                                            required
                                            name='processingTime'
                                            defaultValue={visa.processingTime}
                                        />
                                    </div>
                                    {/* Required documents */}
                                    <div className="w-full">
                                        <label className="label">
                                            <span className="label-text font-semibold text-xl ">Required Documents</span>
                                        </label>
                                        <div className="flex  justify-between flex-col sm:flex-row gap-3">
                                            <div className="flex flex-col gap-3">
                                                <label className="flex items-center">
                                                    <input
                                                        type="checkbox"
                                                        className="checkbox mr-2"
                                                        name="requiredDocuments"
                                                        value="Valid Passport"
                                                        defaultChecked
                                                    />
                                                    Valid Passport
                                                </label>
                                                <label className="flex items-center">
                                                    <input
                                                        className="checkbox mr-2"
                                                        type="checkbox"
                                                        name="requiredDocuments"
                                                        value="Visa Application Form"
                                                        defaultChecked
                                                    />
                                                    Visa Application Form
                                                </label>
                                            </div>
                                            <div className="flex flex-col gap-3">
                                                <label className="flex items-center">
                                                    <input
                                                        className="checkbox mr-2"
                                                        type="checkbox"
                                                        name="requiredDocuments"
                                                        value="Recent Passport-sized Photograph"
                                                        defaultChecked
                                                    />
                                                    Recent Passport-sized Photograph
                                                </label>
                                                <label className="flex items-center">
                                                    <input
                                                        className="checkbox mr-2"
                                                        type="checkbox"
                                                        name="requiredDocuments"
                                                        value="Medical examination report"
                                                        defaultChecked
                                                    />
                                                    Medical examination report
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    {/* description */}
                                    <div className="w-full">
                                        <label className="label">
                                            <span className="label-text font-semibold text-xl">Description</span>
                                        </label>
                                        <textarea
                                            required
                                            name="description"
                                            placeholder="Write description here.."
                                            className="textarea textarea-bordered textarea-lg w-full"
                                            defaultValue={visa.description}></textarea>
                                    </div>
                                    {/* Age Restriction */}
                                    <div className="w-full">
                                        <label className="label">
                                            <span className="label-text font-semibold text-xl ">Age Restriction</span>
                                        </label>
                                        <input
                                            type="number"
                                            placeholder="Age restriction in years"
                                            className="input w-full"
                                            name='ageRestriction'
                                            defaultValue={visa.ageRestriction}
                                        />
                                    </div>
                                    {/* Fee */}
                                    <div className="w-full">
                                        <label className="label">
                                            <span className="label-text font-semibold text-xl">Visa Fee</span>
                                        </label>
                                        <input
                                            required type="number"
                                            placeholder="Visa fee"
                                            className="input w-full"
                                            name='fee'
                                            defaultValue={visa?.fee}
                                        />
                                    </div>
                                    {/* validity */}
                                    <div className="w-full">
                                        <label className="label">
                                            <span className="label-text font-semibold text-xl ">Validity</span>
                                        </label>
                                        <input
                                            required type="text"
                                            placeholder="Enter visa validity time"
                                            className="input w-full"
                                            name='validity'
                                            defaultValue={visa.validity}
                                        />
                                    </div>
                                    {/* application method */}
                                    <div className="w-full">
                                        <label className="label">
                                            <span className="label-text font-semibold text-xl">Application Method</span>
                                        </label>
                                        <input
                                            required type="text"
                                            placeholder="Enter application method"
                                            className="input w-full"
                                            name='applicationMethod'
                                            defaultValue={visa.applicationMethod}

                                        />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="modal-action justify-start">
                                    <button
                                        type="submit"
                                        className="px-7 py-3 font-semibold border-2 rounded-lg text-white bg-green-500 hover:bg-black w-full"
                                        onClick={() => document.getElementById("my_modal_2").close()}
                                    >
                                        Update Info
                                    </button>
                                    <button
                                        type="button"
                                        className="px-7 py-3 font-semibold border-2 rounded-lg text-white bg-red-500 hover:bg-black w-full"
                                        onClick={() => {
                                            document.getElementById("my_modal_2").close()
                                        }}
                                    >
                                        cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </dialog>
                </section>

            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MyAddedVisasPage;