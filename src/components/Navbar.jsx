import { Tooltip } from 'react-tooltip'
import { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaCircleUser } from "react-icons/fa6";

// eslint-disable-next-line react/prop-types
const Navbar = ({ toggleTheme }) => {
    const location = useLocation()
    const { user, logOut } = useContext(AuthContext)

    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/all_visas'}>All visas</NavLink></li>
        {user && <>
            <li><NavLink to={'/add_visa'}>Add visa</NavLink></li>
            <li><NavLink to={'/my_added_visas'}>My added visas</NavLink></li>
            <li><NavLink to={'/my_visa_application'}>My Visa applications</NavLink></li>
        </>}


    </>


    return (
        <div className="navbar max-w-7xl mx-auto fixed top-2 bg-[#EDF5FF] bg-opacity-40  rounded-lg ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-primary-color"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow *:text-gray-700">
                        {links}
                    </ul>
                </div>
                <a className={`btn btn-ghost p-1 text-xl md:text-2xl text-primary-color font-bold  hidden sm:flex`}>VISA_NAVIGATOR</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold text-primary-color">
                    {links}
                </ul>
            </div>
            <div className="navbar-end ">
                {location &&
                    <button
                        onClick={toggleTheme}
                        className="mr-4"
                    >
                        <input type="checkbox" className="toggle" defaultChecked />
                    </button>}
                {
                    user && user?.email ?
                        <div className="flex items-center gap-3">
                            <div data-tooltip-id="my-tooltip-border" data-tooltip-content={`${user?.displayName ? user.displayName : `Display name isn't available for user ${user?.email}`}`}>
                                {
                                    user?.photoURL ?
                                        <img className="h-[35px] w-[35px] rounded-full" src={user?.photoURL} alt="" />
                                        : <FaCircleUser className="text-[35px]"></FaCircleUser>
                                }
                                <Tooltip id="my-tooltip-border" border="1px solid red" />

                            </div>
                            <button onClick={logOut} className=" font-semibold text-lg px-3 sm:px-5 py-2 rounded-xl  hover:bg-black bg-primary-color text-white">LogOut</button>
                        </div>
                        :
                        <Link to={'/authentication'} className=" font-semibold text-lg px-3 sm:px-5 py-2 rounded-xl hover:bg-black bg-primary-color text-white">Login</Link>
                }
            </div>




        </div >
    );
};

export default Navbar;