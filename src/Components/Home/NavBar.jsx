import React, { useState } from 'react';
import { BeakerIcon } from '@heroicons/react/24/solid'
import { FaHome,  FaItunesNote,  FaProjectDiagram,  FaStickyNote,  FaUser,} from "react-icons/fa";

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-white font-semibold text-lg"><img className='h-10 ' src='https://i.ibb.co/LrWvtx3/Black-Grey-Simple-Modern-Name-Logo-1-removebg-preview.png'></img></span>
            <span className="text-[#F56539]  ml-2 font-semibold text-xl">MRM</span>
          </div>
          <div className="hidden md:block">

            <div className="ml-10 flex gap-2items-baseline space-x-4">
                
              <div className='flex  items-center gap-2 text-[#F56539] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
              <FaHome class="h-5 w-6 " />
              <a href="#" className="text-xl"> Home</a>
              </div>
              <div className='flex items-center  gap-2 text-[#F56539] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
              <FaUser class="h-5 w-6 text-[#F56539]" />
              <a href="#about" className="text-xl"> About Me</a>
              </div>
              <div className='flex items-center  gap-2 text-[#F56539] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
              <FaProjectDiagram class="h-5 w-6 text-[#F56539]" />
              <a href="#project" className="text-xl">Projects</a>
              </div>
              <div className='flex items-center  gap-2 text-[#F56539] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
              <FaStickyNote class="h-5 w-6 text-[#F56539]" />
              <a target='_blank' href="https://drive.google.com/file/d/1FpE-s5yqvItYOAInwpOX0qlGcmBXe1Ar/view?usp=drive_link" className="text-xl">Resume</a>
              </div>
              
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleMenu} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            
          <div className='flex  items-center gap-2 text-[#F56539] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
              <FaHome class="h-5 w-6 " />
              <a href="#" className="text-xl"> Home</a>
              </div>
              <div className='flex items-center  gap-2 text-[#F56539] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
              <FaUser class="h-5 w-6 text-[#F56539]" />
              <a href="#about" className="text-xl"> About Me</a>
              </div>
              <div className='flex items-center  gap-2 text-[#F56539] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
              <FaProjectDiagram class="h-5 w-6 text-[#F56539]" />
              <a href="#project" className="text-xl">Projects</a>
              </div>
              <div className='flex items-center  gap-2 text-[#F56539] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
              <FaStickyNote class="h-5 w-6 text-[#F56539]" />
              <a target='_blank' href="https://drive.google.com/file/d/1FpE-s5yqvItYOAInwpOX0qlGcmBXe1Ar/view?usp=drive_link" className="text-xl">Resume</a>
              </div>

          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;























// import { useContext } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { useState } from "react";


// // import useInstructors from '../../hooks/useInstructors';


// const NavBar = () => {
//     const [photoURL, setPhotoURL] = useState('');
//     const [displayName, setDisplayName] = useState('');
//     // const { user } = useContext(AuthContext);

//     return (
//         <div className='text-center  md:px-10 '>
//             <div className=''>
//                 <div className="navbar flex justify-between">
//                     <div className="navbar-start pl-2">
//                         <div className="dropdown pe-5 md:pe-0 z-20">
//                             <label tabIndex={0} className="lg:hidden ">
//                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//                             </label>
//                             <ul tabIndex={0} className="menu menu-compact dropdown-content  font-bold space-y-3 mt-8 p-2 shadow   rounded-box w-52">
//                                 <NavLink to='/' className="hover:bg-white hover:text-black hover:p-1 hover:rounded-md p-1">Home</NavLink>
//                                 <NavLink to='/instructors' className="hover:bg-white hover:text-black hover:p-1 hover:rounded-md p-1">About Me</NavLink>
//                                 <NavLink to='/classes' className="hover:bg-white hover:text-black hover:p-1 hover:rounded-md p-1">Projects</NavLink>
//                                 <NavLink to='/classes' className="hover:bg-white hover:text-black hover:p-1 hover:rounded-md p-1">Resume</NavLink>
                                
//                             </ul>
//                         </div>
//                         <Link className="" to="/"><img className='md:h-20 h-8' src="https://i.ibb.co/xf0Kmyf/Black-Grey-Simple-Modern-Name-Logo.png" /></Link>

//                     </div>
//                     <div className="navbar-center hidden lg:flex">
//                         <ul className="menu menu-horizontal px-1  font-bold space-x-8">
                           
//                                 <div className="menu menu-horizontal px-1 font-semibold space-x-8">
//                                 <NavLink to='/' className="hover:bg-white hover:text-black hover:p-1 hover:rounded-md p-1">Home</NavLink>
//                                 <NavLink to='/instructors' className="hover:bg-white hover:text-black hover:p-1 hover:rounded-md p-1">About Me</NavLink>
//                                 <NavLink to='/classes' className="hover:bg-white hover:text-black hover:p-1 hover:rounded-md p-1">Projects</NavLink>
//                                 <NavLink to='/classes' className="hover:bg-white hover:text-black hover:p-1 hover:rounded-md p-1">Resume</NavLink>
//                                 </div> 
//                         </ul>
//                     </div>
                    
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default NavBar;