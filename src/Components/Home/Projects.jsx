import React, { useEffect, useState } from 'react';
import { FaEye, FaGithub } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("project.json")
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div id='project' className='container mx-auto'>

            <p className='text-center text-4xl font-semibold text-[#F56539] my-16'>
                <Typewriter
                    options={{
                        strings: ['My Projects'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </p>

            <div className=" grid gap-16 justify-items-center  md:grid-cols-3">
                {
                    projects.map(project =>
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src={project.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title ">Project Name:<span className='text-[#F56539]'> {project.name}</span></h2>
                                <p><span className='font-bold'>Tools:</span> {project.technology}</p>
                                <div className="flex justify-between">
                                    <div className='flex flex-col'>
                                        <button className="font-semibold">Client Link: <a target='_blank' href={project.clientLink}><FaGithub className='inline hover:text-[#F56539]'></FaGithub></a></button>
                                        <button className="font-semibold">Server Link: <a target='_blank' href={project.serverLink}><FaGithub className='inline hover:text-[#F56539]'></FaGithub></a></button>
                                    </div>
                                    <div>
                                        <button className="font-semibold">Website Link: <a target='_blank' href={project.liveLink}><FaEye className=' inline hover:text-[#F56539]'></FaEye></a></button>
                                    </div>
                                </div>
                            </div>
                        </div>






                    )
                }




            </div>
        </div>
    );
};

export default Projects;