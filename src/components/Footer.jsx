import {  FaFacebook, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-neutral text-neutral-content">
            {/* Newsletter Section */}
            <div className="bg-orange-500 text-white py-8">
                <div className="max-w-7xl mx-auto px-4 text-center space-y-4">
                    <h2 className="text-2xl font-bold">Stay Informed With Our Newsletter</h2>
                    <p>Get updated information, news, insight or promotions.</p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <input
                            type="email"
                            placeholder="Type Your Email"
                            className="input input-bordered w-full text-black sm:w-auto max-w-xs"
                        />
                        <button className="btn btn-dark">Subscribe</button>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="py-12">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo and Description */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-primary-color">Visa_Navigator</h3>
                        <p className="text-sm">
                            Thanks for visiting our page hopefully this website fullfil your requirement.you can give us your feedback by subscribing us.
                        </p>
                        <div className='flex flex-wrap gap-4 py-5'>
                            <a
                                href="https://www.facebook.com/danger.ahaed.sstanbir.001/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-primary-color"
                            >
                                <FaFacebook className="text-3xl " />
                            </a>
                            <a
                                href="https://github.com/mdtanbirhosen"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-primary-color"
                            >
                                <FaGithub className="text-3xl " />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/md-tanbir-hosen-669056251/"
                                target="_blank"
                                className="hover:text-primary-color"
                                title="Visit My LinkedIn!"
                            >
                                <FaLinkedin className="text-3xl  opacity-50 cursor-not-allowed" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li className="link-hover"><Link to={'/'}>Home</Link></li>
                            <li className="link-hover"><Link to={'/all_visas'}>All visas</Link></li>

                        </ul>
                    </div>

                    {/* Visa Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Visa</h4>
                        <ul className="space-y-2">
                            <li className="link-hover"><Link to={'/add_visa'}>Add visa</Link></li>
                            <li className="link-hover"><Link to={'/my_added_visas'}>My added visas</Link></li>
                            <li className="link-hover"><Link to={'/my_visa_application'}>My Visa applications</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Contact Us</h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center space-x-2">
                                <FaMapMarkerAlt />
                                <span>Savar, Dhaka, Bangladesh.</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <FaEnvelope />
                                <span>mdtanbirhosen912@gmail.com</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <FaPhoneAlt />
                                <span>+8801888156886</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="bg-neutral-content py-4">
                <div className="max-w-7xl mx-auto px-4 text-center text-sm text-neutral">
                    <p>Copyright © 2024 All rights reserved.</p>
                    <div className="mt-2">
                        <Link to="/terms" className="hover:underline mx-2">
                            Terms and Conditions
                        </Link>
                        <Link to="/privacy" className="hover:underline mx-2">
                            Privacy Policy
                        </Link>
                        <Link to="/cookies" className="hover:underline mx-2">
                            Cookies Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
