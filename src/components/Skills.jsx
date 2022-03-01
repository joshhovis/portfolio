import React from 'react'
import { ChipIcon } from '@heroicons/react/solid'
import { skills } from '../data'
import { skillsExploring } from '../data'


const Skills = () => {
    return (
        <section id='skills' className='w-full relative sm:px-16 transition-colors duration-300 bg-neutral-50 dark:bg-[rgba(14,13,13,.8)] mx-auto'>
            <div className='mx-auto sm:py-20 py-10 px-2 grid gap-8 max-w-full text-black dark:text-white'>
                <div className='flex flex-col gap-3 items-center'>
                    <ChipIcon className='mx-auto inline-block w-10 mb-4 -mt-3 text-neutral-700 dark:text-white' />
                    <h1 className='sm:text-3xl font-medium title-font mb-1 text-black dark:text-white'>Skills</h1>
                    <span className='text-2xl'>Skills in my toolbox</span>
                    <ul className='flex flex-wrap justify-center gap-4 md:w-[34rem]'>
                        {skills.map((skill) => (
                            <li className='grid grid-cols-[max-content_1fr] bg-white shadow-md w-[10rem] md:w-[16rem]'>
                                <div className='inline-block align-top relative overflow-hidden h-7 w-7 m-1'>
                                    <img alt={`${skill.title} icon`} width='32' height='32' src={skill.iconImg} />
                                </div>
                                <span className='px-3 md:px-2 bg-neutral-200 dark:bg-neutral-300 dark:text-black sm:text-lg flex items-center justify-center'>{skill.title}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='flex flex-col gap-4 items-center mt-5'>
                    <span className='text-2xl'>Skills I am exploring</span>
                    <ul className='flex flex-wrap justify-center gap-4 md:w-[34rem]'>
                        {skillsExploring.map((skillNew) => (
                            <li className='grid grid-cols-[max-content_1fr] bg-white shadow-md w-[10rem] md:w-[16rem]'>
                                <div className='inline-block align-top relative overflow-hidden h-7 w-7 m-1'>
                                    <img alt={`${skillNew.title} icon`} width='32' height='32' src={skillNew.iconImg} />
                                </div>
                                <span className='px-3 md:px-2 bg-neutral-200 dark:bg-neutral-300 dark:text-black sm:text-lg flex items-center justify-center'>{skillNew.title}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Skills