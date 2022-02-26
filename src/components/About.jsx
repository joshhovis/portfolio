import React from 'react'
import profile from '../assets/profile.jpeg'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'

const About = () => {
    return (
        <section className='flex flex-wrap max-w-md px-6 py-20 mx-auto sm:max-w-xl md:max-w-4xl lg:max-w-5xl'>
            <div className='flex items-center justify-center w-full md:w-1/3'>
                <img src={profile} className='w-40 transform sm:w-44 md:w-48 lg:w-64 hover:scale-110 transition duration-500 ease-in-out rounded-full hover:outline-none outline-none' />
            </div>
            <div className='flex items-center mt-6 md:w-2/3 md:mt-0 md:pl-3 lg:pl-6'>
                <div className='flex flex-col items-center text-black dark:text-white md:items-start'>
                    <h1 className='mb-3 text-xl text-center text-gray-800 md:text-2xl lg:text-2xl dark:text-white'>
                        Hi! My name is,
                    </h1>
                    <h2 className='mb-4 font-bold text-center text-2xl md:text-left sm:text-3xl md:text-4xl lg:text-5xl'>
                        Joshua Hovis
                        <br />
                        <span className='text-3xl'>Front End Developer</span>
                    </h2>
                    <p className='w-full mb-6 text-xl text-center text-gray-800 md:text-1xl dark:text-gray-100 md:text-left md:max-w-md lg:max-w-xl'>
                        I am a Junior Dev that is passionate about creating responsive, optimized, and efficient websites and is excited to continue learning. Let's connect!
                    </p>
                    <div className='flex flex-row items-center'>
                        <ScrollLink to='/' smooth={true} duration={600} offset={-100} className='px-6 py-2 text-xl border-2 rounded-full text-black border-black text-center hover:bg-neutral-900 hover:border-neutral-900 hover:text-white md:text-1xl dark:border-white dark:text-white dark:hover:bg-neutral-200 dark:hover:border-neutral-200 dark:hover:text-black mb-4 mr-4 cursor-pointer ease-in-out duration-300'>Get in touch</ScrollLink>
                        <Link to='/' className='px-6 py-2 text-xl border-2 rounded-full text-black border-black text-center hover:bg-neutral-900 hover:border-neutral-900 hover:text-white md:text-1xl dark:border-white dark:text-white dark:hover:bg-neutral-200 dark:hover:border-neutral-200 dark:hover:text-black mb-4 cursor-pointer ease-in-out duration-300'>My Resume</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About