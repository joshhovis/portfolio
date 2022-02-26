import React from 'react'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import useDarkMode from '../useDarkMode'

const Navbar = () => {
    const [colorTheme, setTheme] = useDarkMode()
    const handleClick = () => {
        setTheme(colorTheme)
        if (colorTheme === 'light') {
            document.getElementById('moon').style.display = 'none'
            document.getElementById('sun').style.display = 'block'
        } else {
            document.getElementById('sun').style.display = 'none'
            document.getElementById('moon').style.display = 'block'
        }
    }

    return (
        <div className="sticky top-0 z-50 flex items-center justify-center w-full px-5 h-15 bg-gray-100 dark:bg-black dark:text-gray-100">
            <nav className="flex items-center justify-between w-full h-20 max-w-[95rem]">
                <ul className="h-full space-x-1 md:items-center hidden md:flex relative">
                    <li className='z-50'>
                        <ScrollLink to='/' smooth={true} duration={600} offset={-100} className='p-2 px-3 rounded-md cursor-pointer text-lg transition-all duration-300 text-black hover:text-gray-600 dark:text-white dark:hover:text-white-300'>Home</ScrollLink>
                    </li>
                    <li className='z-50'>
                        <ScrollLink to='/' smooth={true} duration={600} offset={-100} className='p-2 px-3 rounded-md cursor-pointer text-lg transition-all duration-300 text-black hover:text-gray-600 dark:text-white dark:hover:text-white-300'>About</ScrollLink>
                    </li>
                    <li className='z-50'>
                        <ScrollLink to='/' smooth={true} duration={600} offset={-100} className='p-2 px-3 rounded-md cursor-pointer text-lg transition-all duration-300 text-black hover:text-gray-600 dark:text-white dark:hover:text-white-300'>Skills</ScrollLink>
                    </li>
                    <li className='z-50'>
                        <ScrollLink to='/' smooth={true} duration={600} offset={-100} className='p-2 px-3 rounded-md cursor-pointer text-lg transition-all duration-300 text-black hover:text-gray-600 dark:text-white dark:hover:text-white-300'>Projects</ScrollLink>
                    </li>
                    <li className='z-50'>
                        <ScrollLink to='/' smooth={true} duration={600} offset={-100} className='p-2 px-3 rounded-md cursor-pointer text-lg transition-all duration-300 text-black hover:text-gray-600 dark:text-white dark:hover:text-white-300'>Experience</ScrollLink>
                    </li>
                    <li className='z-50'>
                        <ScrollLink to='/' smooth={true} duration={600} offset={-100} className='p-2 px-3 rounded-md cursor-pointer text-lg transition-all duration-300 text-black hover:text-gray-600 dark:text-white dark:hover:text-white-300'>Contact</ScrollLink>
                    </li>
                </ul>
                <ul className='flex items-center h-full space-x-1'>
                    <li>
                        <a className="group grid place-items-center w-10 h-10 relative overflow-hidden rounded-md" aria-label="Linkedin profile" href="https://www.linkedin.com/in/joshua-hovis/">
                            <div className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100 bg-gradient-to-tr hover:from-[#212325] hover:to-[#212325] z-0">
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="21" height="21" fill="currentColor" aria-labelledby="react-aria-1" className="group-hover:text-white pointer-events-none z-10 fill-current text-neutral-800 dark:text-gray-200"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a className="group grid place-items-center w-10 h-10 relative overflow-hidden rounded-md" aria-label="GitHub profile" href="https://github.com/joshhovis">
                            <div className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100 bg-gradient-to-tr hover:from-[#212325] hover:to-[#212325] z-0">
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="21" height="21" fill="currentColor" aria-labelledby="react-aria-2" className="group-hover:text-white pointer-events-none z-10 fill-current text-neutral-800 dark:text-gray-200"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <button onClick={() => { handleClick() }} className="group grid place-items-center w-10 h-10 relative overflow-hidden rounded-md">
                            <div className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100 bg-gradient-to-tr hover:from-[#212325] hover:to-[#212325] z-0"></div>
                            <svg id='moon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="21" height="21" fill="currentColor" className="group-hover:text-white pointer-events-none z-10 fill-current text-neutral-800 dark:text-gray-200" aria-label="Change to dark theme"><path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path>
                            </svg>
                            <svg id='sun' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="21" height="21" fill="currentColor" className="group-hover:text-white pointer-events-none z-10 fill-current text-neutral-800 dark:text-gray-200" aria-label="Change to light theme"><path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path></svg>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar