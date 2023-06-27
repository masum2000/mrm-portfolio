import React from 'react';
import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div  id='about' className='container mx-auto'>
            <h1 className='text-center text-4xl font-semibold text-[#F56539] mt-16'>About Me</h1>

            <div className='text-justify my-6 md:px-0 px-4'>
                <p>My name is Mizanur Rahman Masum, but I am commonly known as Masum. I recently graduated from Daffodil International University with a Bachelor's degree in Computer Science and Engineering, achieving a commendable CGPA of 3.69. As a dedicated MERN Stack developer, I possess a solid skill set in MongoDB, Express.js, React.js, and Node.js HTML5, CSS3, Tailwind, and JavaScript. I bring a unique perspective to
                    my work. I am eager to find a challenging role in a reputable organization that offers a vibrant work environment,
                    where I can contribute to the company's growth while utilizing my communication, technical, and organizational skills. I have honed my expertise in frontend development and possess a solid understanding of backend technologies. I am an effective team player and excel in collaborating with cross-functional teams to deliver high-quality projects within given deadlines. I am enthusiastic about continuous learning and always eager to take on new opportunities to enhance my skills and contribute to the success of innovative projects. With my strong foundation and passion for programming, I am ready to make a significant impact in the field of web development.</p>
            </div>
            <div className='flex gap-5 text-center mx-auto justify-center '>
                <Link target='_blank' to="https://github.com/masum2000"><FaGithub className=' hover:text-[#F56539] w-9 h-16'></FaGithub></Link>
                <Link target='_blank ' to="https://www.linkedin.com/in/mizanur-rahman-masum-083179194/"><FaLinkedinIn className=' hover:text-[#F56539] w-9 h-16'></FaLinkedinIn></Link>
                <Link target='_blank' to="https://twitter.com/Mizanur24366727"><FaTwitter className=' hover:text-[#F56539] w-9 h-16'></FaTwitter></Link>
                <Link target='_blank' to="https://www.facebook.com/mizanurmasum2000/"><FaFacebook className=' hover:text-[#F56539] w-9 h-16'></FaFacebook></Link>
                <Link></Link>
                <Link></Link>
            </div>

        </div>
    );
};

export default About;