import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../lotties/84584-contact-us.json';
import Typewriter from 'typewriter-effect';

const Contact = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <div className='container mx-auto'>
            
            <p className='text-center text-4xl font-semibold text-[#F56539] my-16'>
                <Typewriter
                    options={{
                        strings: ['Contact with Me'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </p>

            <div className='grid md:grid-cols-2'>
                <div>
                    <Lottie
                        options={defaultOptions}
                        height={400}
                        width={400}
                    />
                </div>
                <div className=' md:px-0 px-6'>
                    <form className="mx-auto">
                        <div className="mb-4">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-[#ABB2BF]">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="block w-full px-4 py-2 border text-[#282C33] border-[#F56539] focus:outline-none focus:ring-[#F56539] focus:border-[#F56539] sm:text-sm"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block  mb-2 text-sm font-medium text-[#ABB2BF]">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="block w-full px-4 py-2 border text-[#282C33] border-[#F56539]  focus:outline-none focus:ring-[#F56539] focus:border-[#F56539] sm:text-sm"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-[#ABB2BF]">
                                Phone
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"

                                className="block w-full px-4 py-2 border text-[#282C33] border-[#F56539]  focus:outline-none focus:ring-[#F56539] focus:border-[#F56539]  sm:text-sm"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-[#ABB2BF]">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className="block w-full px-4 py-2 text-[#282C33] border  border-[#F56539] focus:outline-none focus:ring-[#F56539] focus:border-[#F56539]  sm:text-sm"
                                required
                            />
                        </div>
                        <div className="text-center">
                            <a className="border-2 border-[#F56539] font-semibold mt-4  p-2 rounded-md  text-[#F56539] hover:bg-gray-700 hover:text-white" href="">Send Message</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;