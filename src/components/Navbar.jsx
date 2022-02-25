import React from 'react'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'

const Navbar = () => {
    return (
        <div className="sticky top-0 py-2 bg-white md:py-6 md:mb-6 dark:bg-black">
            <div className="container px-4 mx-auto flex items-center justify-between">
                <Link to='/'>
                    <h2 className="font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white">
                        Joshua H.
                    </h2>
                </Link>
            </div>
        </div>
    )
}

export default Navbar