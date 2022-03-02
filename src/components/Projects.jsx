import React from 'react'
import { projects } from '../data'
import { CodeIcon } from '@heroicons/react/solid'

const Projects = () => {
    return (
        <section id='projects' className='text-black dark:text-white bg-white dark:bg-black transition-colors duration-300'>
            <div className='container px-5 py-10 mx-auto text-center lg:px-40'>
                <div className='flex flex-col w-full mb-20'>
                    <CodeIcon className='mx-auto inline-block w-10 mb-4 text-neutral-700 dark:text-white' />
                    <h1 className='text-3xl font-medium title-font mb-4 text-black dark:text-white'>Projects I've built</h1>
                    <p className='lg:w-2/3 mx-auto leading-relaxed text-lg -mb-12 sm:mb-0'>
                        A collection of the most recent projects I have completed
                    </p>
                </div>
                <div className='flex flex-wrap -m-6 sm:-m-12 overflow-hidden'>
                    {projects.map((project) => (
                        <div className='sm:w-1/2 w-full p-4'>
                            <div className='flex relative ease-in-out duration-300 hover:scale-105'>
                                <img src={project.image} alt={`${project.title} cover image`} className='absolute inset-0 w-full h-full object-cover object-center rounded-xl' />
                                <div className='px-8 py-20 relative z-10 w-full h-full border-4 border-neutral-800 bg-neutral-900 opacity-0 hover:opacity-100 ease-in-out duration-300 rounded-xl'>
                                    <h2 className='tracking-widest text-sm title-font font-medium text-purple-600 dark:text-blue-600 mb-1'>{project.subtitle}</h2>
                                    <h1 className='title-font text-lg font-medium text-white mb-3'>{project.title}</h1>
                                    <p className='leading-relaxed text-white'>{project.description}</p>
                                    <div className='mt-6'>
                                        <a href={project.codeLink} target='_black' className='px-6 py-2 text-md border-2 rounded-full text-purple-700 border-purple-700 text-center hover:bg-purple-300 hover:border-purple-300 dark:border-blue-600 dark:text-blue-600 dark:hover:bg-blue-200 dark:hover:border-blue-200 mb-4 mr-4 cursor-pointer ease-in-out duration-300 font-medium '>Source Code</a>
                                        <a href={project.liveLink} target='_black' className='px-6 py-2 text-md border-2 rounded-full text-purple-700 border-purple-700 text-center hover:bg-purple-300 hover:border-purple-300 dark:border-blue-600 dark:text-blue-600 dark:hover:bg-blue-200 dark:hover:border-blue-200 mb-4 mr-4 cursor-pointer ease-in-out duration-300 font-medium'>Live Site</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects