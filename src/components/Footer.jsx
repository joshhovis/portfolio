import React from 'react'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'

const Footer = () => {
    return (
        <div className='w-full px-16 py-6 pt-12 mt-5 sm:pt-6 bg-gray-100 dark:bg-black dark:text-gray-100 transition-colors duration-300'>
            <div className='max-w-7xl mx-auto grid items-center gap-12 sm:gap-10'>
                <div className='grid gap-y-12 items-center justify-items-center sm:grid-cols-3 sm:justify-items-stretch w-full'>
                    <div className='flex flex-col gap-4 items-center'>
                        <span className='w-max font-bold text-4xl sm:text-2xl uppercase'>Joshua Hovis</span>
                        <div className='grid grid-cols-2 w-full sm:w-min sm:flex gap-4 text-xl'>
                            <ScrollLink to='about' smooth={true} duration={600} offset={-100} className='hover:text-gray-700 dark:hover:text-gray-300 transition-colors cursor-pointer'>About</ScrollLink>
                            <ScrollLink to='skills' smooth={true} duration={600} offset={-100} className='hover:text-gray-700 dark:hover:text-gray-300 transition-colors cursor-pointer'>Skills</ScrollLink>
                            <ScrollLink to='projects' smooth={true} duration={600} offset={-100} className='hover:text-gray-700 dark:hover:text-gray-300 transition-colors cursor-pointer'>Projects</ScrollLink>
                            <ScrollLink to='/' smooth={true} duration={600} offset={-100} className='hover:text-gray-700 dark:hover:text-gray-300 transition-colors cursor-pointer'>Experience</ScrollLink>
                        </div>
                    </div>
                    <div className='sm:self-start sm:row-start-1 sm:col-start-1'>
                        <span className='hidden mb-2 sm:mb-1 sm:inline-block text-sm text-gray-600 dark:text-gray-400'>Let's Connect!</span>
                        <div className='flex justify-center sm:justify-start gap-8 sm:gap-3 md:gap-4'>
                            <a className='cursor-pointer' href='https://github.com/joshhovis'>
                                <svg className='h-14 w-14 sm:h-7 sm:w-7 md:h-9 md:w-9 transition-colors fill-gray-900 hover:fill-gray-700 dark:fill-white dark:hover:fill-gray-300' viewBox="0 0 36 36"><path d="M18 0C8.055 0 0 8.25874 0 18.4553C0 26.6218 5.1525 33.5194 12.3075 35.9647C13.2075 36.1262 13.545 35.5726 13.545 35.0881C13.545 34.6498 13.5225 33.1965 13.5225 31.6508C9 32.5044 7.83 30.5204 7.47 29.4823C7.2675 28.9517 6.39 27.3138 5.625 26.8755C4.995 26.5295 4.095 25.6759 5.6025 25.6529C7.02 25.6298 8.0325 26.9909 8.37 27.5445C9.99 30.3359 12.5775 29.5515 13.6125 29.0671C13.77 27.8675 14.2425 27.0601 14.76 26.5987C10.755 26.1373 6.57 24.5455 6.57 17.4864C6.57 15.4794 7.2675 13.8184 8.415 12.5265C8.235 12.0651 7.605 10.1735 8.595 7.63588C8.595 7.63588 10.1025 7.15142 13.545 9.52754C14.985 9.1123 16.515 8.90468 18.045 8.90468C19.575 8.90468 21.105 9.1123 22.545 9.52754C25.9875 7.12836 27.495 7.63588 27.495 7.63588C28.485 10.1735 27.855 12.0651 27.675 12.5265C28.8225 13.8184 29.52 15.4563 29.52 17.4864C29.52 24.5686 25.3125 26.1373 21.3075 26.5987C21.96 27.1754 22.5225 28.2827 22.5225 30.0129C22.5225 32.4813 22.5 34.4653 22.5 35.0881C22.5 35.5726 22.8375 36.1493 23.7375 35.9647C27.3108 34.7278 30.4158 32.3732 32.6155 29.2322C34.8152 26.0912 35.9989 22.3221 36 18.4553C36 8.25874 27.945 0 18 0Z"></path></svg>
                            </a>
                            <a className='cursor-pointer' href='https://www.linkedin.com/in/joshua-hovis/'>
                                <svg className="h-14 w-14 sm:h-7 sm:w-7 md:h-9 md:w-9 transition-colors fill-blue-900 hover:fill-blue-800" viewBox="0 0 36 36"><path fillRule="evenodd" clipRule="evenodd" d="M1.5 4.257C1.5 3.5258 1.79047 2.82455 2.30751 2.30751C2.82454 1.79047 3.5258 1.5 4.257 1.5H31.74C32.1024 1.49941 32.4613 1.5703 32.7962 1.7086C33.1311 1.84691 33.4355 2.04992 33.6919 2.30601C33.9482 2.5621 34.1516 2.86624 34.2903 3.20102C34.4289 3.5358 34.5002 3.89464 34.5 4.257V31.74C34.5004 32.1024 34.4293 32.4614 34.2909 32.7963C34.1524 33.1313 33.9492 33.4356 33.693 33.692C33.4368 33.9483 33.1326 34.1516 32.7977 34.2903C32.4628 34.4289 32.1039 34.5002 31.7415 34.5H4.257C3.89482 34.5 3.53619 34.4286 3.2016 34.29C2.867 34.1513 2.56301 33.9481 2.30698 33.692C2.05095 33.4358 1.8479 33.1317 1.70943 32.797C1.57097 32.4624 1.4998 32.1037 1.5 31.7415V4.257ZM14.562 14.082H19.0305V16.326C19.6755 15.036 21.3255 13.875 23.805 13.875C28.5585 13.875 29.685 16.4445 29.685 21.159V29.892H24.8745V22.233C24.8745 19.548 24.2295 18.033 22.5915 18.033C20.319 18.033 19.374 19.6665 19.374 22.233V29.892H14.562V14.082ZM6.312 29.6865H11.124V13.875H6.312V29.685V29.6865ZM11.8125 8.718C11.8216 9.13001 11.7483 9.53968 11.5969 9.92298C11.4455 10.3063 11.219 10.6555 10.9308 10.9501C10.6427 11.2446 10.2985 11.4787 9.91868 11.6385C9.53882 11.7983 9.13086 11.8806 8.71875 11.8806C8.30664 11.8806 7.89868 11.7983 7.51882 11.6385C7.13895 11.4787 6.79483 11.2446 6.50665 10.9501C6.21847 10.6555 5.99204 10.3063 5.84064 9.92298C5.68924 9.53968 5.61593 9.13001 5.625 8.718C5.64281 7.90929 5.97658 7.13969 6.55483 6.57403C7.13308 6.00838 7.90984 5.69163 8.71875 5.69163C9.52766 5.69163 10.3044 6.00838 10.8827 6.57403C11.4609 7.13969 11.7947 7.90929 11.8125 8.718V8.718Z"></path></svg>
                            </a>
                        </div>
                    </div>
                    <div className='flex gap-y-2 gap-x-4 items-center sm:flex-col sm:items-end sm:self-start'>
                        <span className='sm:text-sm text-gray-600 dark:text-gray-400'>Built With</span>
                        <div className='flex gap-4 sm:gap-3 md:gap-4'>
                            <div className='h-10 w-10'>
                                <img alt='React icon' src="https://img.icons8.com/ultraviolet/40/000000/react--v1.png" />
                            </div>
                            <div className='h-10 w-10'>
                                <img alt='Tailwind icon' width='34' src="https://cdn.sanity.io/images/mwmzpjpg/production/9f713da7e2fdb2163612503cf407f1612eef8321-32x32.svg?w=32&h=32&auto=format" />
                            </div>
                            <div className='h-10 w-10'>
                                <img alt='Netlify icon' src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/40/000000/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row-reverse md:justify-between gap-4'>
                    <span className='text-center text-sm text-gray-600 dark:text-gray-400'>Built using
                        <span className='text-sky-600 font-medium'> React </span>
                        and
                        <span className='text-green-600 font-medium'> TailwindCSS </span>
                        and deployed with
                        <span className='text-teal-600 font-medium'> Netlify </span>
                    </span>
                    <span className='text-center text-sm text-gray-600 dark:text-gray-400'>© 2022 Joshua Hovis</span>
                </div>
            </div>
        </div>
    )
}

export default Footer