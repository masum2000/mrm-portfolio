import React from 'react';
import Typewriter from 'typewriter-effect';
import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';


const Banner = () => {
  return (
    <div className="container max-h-screen mx-auto my-10">
      <div className="grid grid-cols-1 md:grid-cols-2  align-items-center justify-items-center">
        {/* Left Side Div */}
        <div className="flex flex-col md:justify-center md:text-start text-center  ">
          <h1 className="text-4xl font-bold mb-4 text-[#F56539]">Hello! I'm </h1>
          <h1 className="text-4xl font-bold mb-4 ">Mizanur Rahman Masum</h1>
          

          <p className='text-2xl mb-4'>
          <Typewriter
                options={{

                    strings: ['MERN Stack Developer', 'Junior Font-end Developer','Web Designer'],
                    autoStart: true,
                    loop: true,
                    cursor:'✍️'
                }}
            />
          </p>

          <div className='mb-6 space-x-3'>
            <button className="border-2 border-[#F56539] font-semibold mt-4  p-2 rounded-md  text-[#F56539] hover:bg-gray-700 hover:text-white"><a target='_blank' href='https://drive.google.com/file/d/1FpE-s5yqvItYOAInwpOX0qlGcmBXe1Ar/view?usp=drive_link'> View Resume</a></button>

            <a href ="/resume_of_masum.pdf" download>
              <button
              type="submit"
              className='border-2 border-[#F56539] font-semibold mt-4  p-2 rounded-md  text-[#F56539] hover:bg-gray-700 hover:text-white'>
                 Download Resume
              </button>
            </a>

          </div>

        </div>

        {/* Right Side Div */}
        <div className=" ">
          <div>
            <img className='rounded-full md:w-96 w-60 border-2 border-[#F56539]' src="https://i.ibb.co/30pc7qd/Masum1-removebg-preview.png" alt="Your Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
