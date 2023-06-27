import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
// import Pdf from "react-to-pdf";
// const ref = React.createRef();

const Banner = () => {
  return (
    <div className="container max-h-screen mx-auto my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 md:justify-items-end align-items-center justify-items-center">
        {/* Left Side Div */}
        <div className="flex flex-col md:justify-center  text-center   ">
          <h1 className="text-4xl font-bold mb-4 text-[#F56539]">Hello! I'm </h1>
          <h1 className="text-4xl font-bold mb-4 ">Mizanur Rahman Masum</h1>
          <Marquee className='text-2xl mb-4 '>
            Junior Font-end Developer, Web Designer, MERN Stack Developer.
          </Marquee>

          <div className='mb-6'>
            <button className="border-2 border-[#F56539] font-semibold mt-4  p-2 rounded-md  text-[#F56539] hover:bg-gray-700 hover:text-white"><a target='_blank' href='https://drive.google.com/file/d/1FpE-s5yqvItYOAInwpOX0qlGcmBXe1Ar/view?usp=drive_link'>Resume</a></button>
          </div>

          {/* <div className='text-center'>
                    <Pdf targetRef={ref} filename="Blog-Page.pdf">
                        {({ toPdf }) => <button className="border-2 border-sky-600 text-black p-3 rounded-lg bg-none font-bold   hover:bg-sky-600 duration-300 " onClick={toPdf}> Pdf Download</button>}
                    </Pdf>
                </div> */}

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
