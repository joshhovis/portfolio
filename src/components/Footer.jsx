import React from 'react'
import { Link as ScrollLink } from 'react-scroll'

const Footer = () => {
    return (
        <div className=' mt-20 px-4 pt-8 pb-5 text-center dark:bg-black dark:text-gray-100 transition-colors duration-300'>
            <h3 className='font-bold text-black dark:text-white uppercase text-1xl'>Let's Connect!</h3>
            <div className='flex justify-center py-3 '>
                <div className='text-4xl w-44 md:w-48 lg:w-64 md:text-4xl lg:text-5xl'>
                    <ul className='flex items-center justify-evenly'>
                        <li className='flex'>
                            <a href='https://www.linkedin.com/in/joshua-hovis/'>
                                <svg className='fill-purple-800 hover:fill-purple-400 dark:fill-blue-600 dark:hover:fill-blue-200 transition-colors duration-300' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
                            </a>
                        </li>
                        <li className='flex'>
                            <a href='https://github.com/joshhovis'>
                                <svg className='fill-purple-800 hover:fill-purple-300 dark:fill-blue-600 dark:hover:fill-blue-200 transition-colors duration-300' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 480 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"></path></svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <p className='text-lg text-black dark:text-white'>
                © 2022 Joshua Hovis
                <br />
                Built with
                <span className='text-sky-600 font-medium'> React </span>
                and
                <span className='text-green-600 font-medium'> TailwindCSS</span>
                <br />
                Hosted by
                <span className='text-teal-600 font-medium'> Netlify</span>
            </p>
            <div className='flex justify-center mt-3'>
                <ScrollLink to='about' smooth={true} duration={600} offset={-100} className='px-6 py-2 text-xl border-2 rounded-full text-purple-800 border-purple-700 text-center hover:bg-purple-300 hover:border-purple-300 md:text-1xl dark:border-blue-600 dark:text-blue-600 dark:hover:bg-blue-200 dark:hover:border-blue-200 mb-4 mr-4 cursor-pointer ease-in-out duration-300 font-medium'>Back to Top</ScrollLink>
            </div>
        </div>
    )
}

export default Footer