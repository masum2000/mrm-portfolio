import React from 'react';
import Marquee from 'react-fast-marquee';
import Typewriter from 'typewriter-effect';



const Skill = () => {
    return (
        <div className='container mx-auto my-10'>
            <p className='text-center text-4xl font-semibold text-[#F56539] my-16'>
                <Typewriter
                    options={{
                        strings: ['My Skills'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </p>

            
            <Marquee>
                <div className='flex md:gap-8 gap-3 '>
                    <img className=' bg-white rounded-md shadow-lg duration-500  hover:shadow-2xl hover:shadow-orange-700 p-6 w-32 h-32' src='https://i.ibb.co/QbYHm1S/10004.png'></img>
                    <img className='bg-white rounded-md shadow-lg duration-500  hover:shadow-2xl hover:shadow-orange-700 p-6 w-32 h-32' src='https://i.ibb.co/BT7jdQS/10002.png'></img>
                    <img className='bg-white rounded-md shadow-lg duration-500  hover:shadow-2xl hover:shadow-orange-700 p-6 w-32 h-32' src='https://i.ibb.co/kKyLBN6/10005.png'></img>
                    <img className='bg-white rounded-md shadow-lg duration-500  hover:shadow-2xl hover:shadow-orange-700 p-6 w-32 h-32' src='https://i.ibb.co/qY42RxH/10003.png'></img>
                    <img className='bg-white rounded-md shadow-lg duration-500  hover:shadow-2xl hover:shadow-orange-700 p-6 w-32 h-32' src='https://i.ibb.co/jLTvggx/10001.png'></img>
                    <img className='bg-white rounded-md shadow-lg duration-500  hover:shadow-2xl hover:shadow-orange-700 p-6 w-32 h-32' src='https://i.ibb.co/WHjjXS7/mongodb-original-logo-icon-146424.png'></img>
                    <img className='bg-white rounded-md shadow-lg duration-500  hover:shadow-2xl hover:shadow-orange-700 p-6 w-32 h-32' src='https://i.ibb.co/mXnm3Bg/8698fd02-86a6-4bbe-98cb-47652afdf267.png'></img>
                    <img className='bg-white rounded-md shadow-lg duration-500  hover:shadow-2xl hover:shadow-orange-700 p-6 w-32 h-32' src='https://i.ibb.co/cwtX972/express-js-trademark-logo.png'></img>


                </div>
            </Marquee>
        </div>
    );
};

export default Skill;