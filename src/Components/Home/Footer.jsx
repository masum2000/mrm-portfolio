import React from 'react';
import { FaFacebook, FaInstagram,  FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='mt-16'>
            <footer className="bg-violet-500 text-white">
                {/* <div className=" px-4 py-8 md:py-12 lg:py-16 flex flex-wrap justify-between">
                    <div className="w-full text-center md:w-1/5 mb-4 md:mb-0">
                        <img className='h-20 mx-auto' src="https://i.ibb.co/LtWBKJg/sports-Zonelogo-preview.png"></img>
                    </div>
                    <div className="w-full text-center md:w-1/5 mb-4 md:mb-0">
                        <h4 className="text-white text-lg font-bold mb-4">About Us</h4>
                        <p>"SportsZone Academy: Dive into a summer of athletic exploration as students learn a variety of sports, igniting their passion for active living and fostering a lifelong love for physical activity."</p>
                    </div>
                    <div className="w-full text-center md:w-1/5 mb-4 md:mb-0">
                        <h4 className="text-white text-lg font-bold mb-4">Support</h4>
                        <p>Help Desk</p>
                        <p>Daily Sales</p>
                        <p>Become a Partner</p>
                        <p>Developers</p>
                    </div>
                    <div className="w-full text-center md:w-1/5 mb-4 md:mb-0">
                        <h4 className="text-white text-lg font-bold mb-4">Contact Us</h4>
                        <p>West Shewrapara</p>
                        <p>Mirpur Dhaka, Bangladesh</p>
                        <p>Phone: +880-1780999575</p>
                        <p>Email: sportszone@gmail.com</p>
                    </div>
                    <div className="w-full  md:w-1/5">
                        <h4 className="text-white text-center text-lg font-bold mb-4">Follow Us</h4>
                        <div className="flex items-center justify-center">
                        <a href="https://www.linkedin.com/in/mizanur-rahman-masum-083179194/" className="ml-4  hover:text-black transition duration-500 ease-in-out"><FaLinkedinIn/></a>
                            <a href="https://www.facebook.com/mizanurmasum2000" className="ml-4  hover:text-black transition duration-500 ease-in-out"><FaFacebook/></a>
                            <a href="https://www.instagram.com/mizanur_._masum/" className="ml-4  hover:text-black transition duration-500 ease-in-out"><FaInstagram></FaInstagram></a>
                            <a href="https://twitter.com/Mizanur24366727" className="ml-4  hover:text-black transition duration-500 ease-in-out"><FaTwitter></FaTwitter></a>
                        </div>
                    </div>
                </div> */}
                <div className="bg-gray-800 py-4">
                    <div className="container mx-auto px-4 flex justify-between">
                        <p className="text-sm text-[#F56539]">© 2023. All rights reserved.</p>
                        <p className="text-sm text-[#F56539]">Developed by Mizanur Rahman Masum</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;