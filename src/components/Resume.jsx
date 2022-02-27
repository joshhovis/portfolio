import React from "react"
import { Document, Page } from "react-pdf/dist/esm/entry.webpack"
import Resume from '../assets/resume.pdf'

const MyResume = () => {
    return (
        <div className='w-full m-auto'>
            <div className='mt-8 flex justify-center'>
                <a href={require('../assets/resume.pdf')} target='_blank' className='px-6 py-2 text-lg border-2 rounded-full text-purple-800 border-purple-700 text-center hover:bg-purple-300 hover:border-purple-300 md:text-1xl dark:border-blue-600 dark:text-blue-600 dark:hover:bg-blue-200 dark:hover:border-blue-200 mr-4 cursor-pointer ease-in-out duration-300 font-medium'>View Resume</a>
            </div>
            <Document file={Resume} className='flex justify-between mx-56 mt-14 mb-20'>
                <Page pageNumber={1} className='hover:scale-110 border-2 dark:border-0' />
                <Page pageNumber={2} className='hover:scale-110 border-2 dark:border-0' />
            </Document>
        </div>
    )
}

export default MyResume