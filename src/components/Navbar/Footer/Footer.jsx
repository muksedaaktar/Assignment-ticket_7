import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className="bg-black pt-6 px-4 overflow-x-hidden">
            <div className="w-full max-w-[1440px] mx-auto inter grid grid-cols-1  md:grid-cols-5 gap-4  text-white">
                
                
                <div>
                    <h1 className="font-bold text-[24px] mb-2">CS — Ticket System</h1>
                    <p className="text-[#A1A1AA] text-sm break-words">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>

            
                <div>
                    <h1 className="font-bold text-[24px] mb-2">Company</h1>
                    <p className="text-[#A1A1AA] text-sm">About Us</p>
                    <p className="text-[#A1A1AA] text-sm">Our Mission</p>
                    <p className="text-[#A1A1AA] text-sm">Contact Sales</p>
                </div>

                
                <div>
                    <h1 className="font-bold text-[24px] mb-2">Services</h1>
                    <p className="text-[#A1A1AA] text-sm">Customer Stories</p>
                    <p className="text-[#A1A1AA] text-sm">Download Apps</p>
                    <p className="text-[#A1A1AA] text-sm">Products & Services</p>
                </div>

                
                <div>
                    <h1 className="font-bold text-[24px] mb-2">Information</h1>
                    <p className="text-[#A1A1AA] text-sm">Privacy Policy</p>
                    <p className="text-[#A1A1AA] text-sm">Terms & Conditions</p>
                    <p className="text-[#A1A1AA] text-sm">Join Us</p>
                </div>

                
                <div>
                    <h1 className="font-bold text-[24px] mb-2">Social Links</h1>
                    <p className="text-[#A1A1AA]">
                        <FontAwesomeIcon icon={faXTwitter} className="mr-2 " />
                        CS — Ticket System
                    </p>
                    <p className="text-[#A1A1AA] ">
                        <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                        CS — Ticket System & Conditions
                    </p>
                    <p className="text-[#A1A1AA] ">
                        <FontAwesomeIcon icon={faFacebook} className="mr-2 " />
                        CS — Ticket System
                    </p>
                    <p className="text-[#A1A1AA]">
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                        support@cst.com
                    </p>
                </div>
            </div>

            
            <h1 className="text-center py-3 text-[#FAFAFA] text-sm border-t border-gray-700 mt-6">
                © 2025 CS — Ticket System. All rights reserved.
            </h1>
        </div>
    );
};

export default Footer;
