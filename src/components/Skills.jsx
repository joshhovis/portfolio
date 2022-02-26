import React from 'react'

const Skills = () => {
    return (
        <section id='skills' className='w-full relative px-6 sm:px-16 transition-colors duration-300 bg-neutral-50 dark:bg-neutral-900'>
            <div className='mx-auto sm:py-20 grid gap-8 max-w-[42rem] text-black dark:text-white'>
                <div className='flex flex-col gap-4 items-center'>
                    <span className='text-2xl'>I am competent in</span>
                    <ul className='flex flex-wrap justify-center sm:grid sm:grid-cols-3 gap-4 w-full '>
                        <li className='grid grid-cols-[max-content_1fr] bg-white shadow-md'>
                            <div className='inline-block align-top relative overflow-hidden h-7 w-7 m-1'>
                                <img width='32' height='32' src='https://cdn.sanity.io/images/mwmzpjpg/production/296a694b4e2b46562c822d19256cf63e44e1ed60-32x32.svg?w=32&h=32&auto=format' />
                            </div>
                            <span className='px-3 md:px-2 bg-neutral-200 dark:bg-neutral-300 dark:text-black sm:text-lg flex items-center justify-center'>CSS</span>
                        </li>
                        <li className='grid grid-cols-[max-content_1fr] bg-white shadow-md'>
                            <div className='inline-block align-top relative overflow-hidden h-7 w-7 m-1'>
                                <img width='32' height='32' src='https://cdn.sanity.io/images/mwmzpjpg/production/c16e95f43b673f8d763105efa33e1f64881f7c80-32x32.svg?w=32&h=32&auto=format' />
                            </div>
                            <span className='px-3 md:px-2 bg-neutral-200 dark:bg-neutral-300 dark:text-black sm:text-lg flex items-center justify-center'>HTML</span>
                        </li>
                        <li className='grid grid-cols-[max-content_1fr] bg-white shadow-md'>
                            <div className='inline-block align-top relative overflow-hidden h-7 w-7 m-1'>
                                <img width='32' height='32' src='https://cdn.sanity.io/images/mwmzpjpg/production/335b60970f507ce70d6e3bac36ca488a46653394-32x32.svg?w=32&h=32&auto=format' />
                            </div>
                            <span className='px-3 md:px-2 bg-neutral-200 dark:bg-neutral-300 dark:text-black sm:text-lg flex items-center justify-center'>JavaScript</span>
                        </li>
                        <li className='grid grid-cols-[max-content_1fr] bg-white shadow-md'>
                            <div className='inline-block align-top relative overflow-hidden h-7 w-7 m-1'>
                                <img width='32' height='32' src="https://img.icons8.com/color/000000/bootstrap.png" />
                            </div>
                            <span className='px-3 md:px-2 bg-neutral-200 dark:bg-neutral-300 dark:text-black sm:text-lg flex items-center justify-center'>Bootstrap</span>
                        </li>
                        <li className='grid grid-cols-[max-content_1fr] bg-white shadow-md'>
                            <div className='inline-block align-top relative overflow-hidden h-7 w-7 m-1'>
                                <img width='32' height='32' src="https://img.icons8.com/color/000000/sass-avatar.png" />
                            </div>
                            <span className='px-3 md:px-2 bg-neutral-200 dark:bg-neutral-300 dark:text-black sm:text-lg flex items-center justify-center'>Sass</span>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col gap-4 items-center'>
                    <span className='text-2xl'>comfortable with</span>
                    <ul className='flex flex-wrap justify-center sm:grid sm:grid-cols-3 gap-4 w-full '>
                        <li className='grid grid-cols-[max-content_1fr] bg-white shadow-md'>
                            <div className='inline-block align-top relative overflow-hidden h-7 w-7 m-1'>
                                <img width='32' height='32' src="https://cdn.sanity.io/images/mwmzpjpg/production/cba5f20b347b9a3d68903763659890626cd9849a-32x32.svg?w=32&h=32&auto=format" />
                            </div>
                            <span className='px-3 md:px-2 bg-neutral-200 dark:bg-neutral-300 dark:text-black sm:text-lg flex items-center justify-center'>React</span>
                        </li>
                        <li className='grid grid-cols-[max-content_1fr] bg-white shadow-md'>
                            <div className='inline-block align-top relative overflow-hidden h-7 w-7 m-1'>
                                <img width='32' height='32' src='https://cdn.sanity.io/images/mwmzpjpg/production/6beeb89c6c1548cc93376c8ead2ebdf4eee13fdd-32x32.png?w=32&h=32&auto=format' />
                            </div>
                            <span className='px-3 md:px-2 bg-neutral-200 dark:bg-neutral-300 dark:text-black sm:text-lg flex items-center justify-center'>MongoDB</span>
                        </li>
                        <li className='grid grid-cols-[max-content_1fr] bg-white shadow-md'>
                            <div className='inline-block align-top relative overflow-hidden h-7 w-7 m-1'>
                                <img width='32' height='32' src='https://cdn.sanity.io/images/mwmzpjpg/production/7a55574100a6d18b70ae7178d765c48b59568c90-32x32.svg?w=32&h=32&auto=format' />
                            </div>
                            <span className='px-3 md:px-2 bg-neutral-200 dark:bg-neutral-300 dark:text-black sm:text-lg flex items-center justify-center'>NodeJS</span>
                        </li>
                        <li className='grid grid-cols-[max-content_1fr] bg-white shadow-md'>
                            <div className='inline-block align-top relative overflow-hidden h-7 w-7 m-1'>
                                <img width='32' height='32' src="https://cdn.sanity.io/images/mwmzpjpg/production/9f713da7e2fdb2163612503cf407f1612eef8321-32x32.svg?w=32&h=32&auto=format" />
                            </div>
                            <span className='px-3 md:px-2 bg-neutral-200 dark:bg-neutral-300 dark:text-black sm:text-lg flex items-center justify-center'>TailwindCSS</span>
                        </li>
                        <li className='grid grid-cols-[max-content_1fr] bg-white shadow-md'>
                            <div className='inline-block align-top relative overflow-hidden h-7 w-7 m-1'>
                                <img width='32' height='32' src="https://img.icons8.com/color/48/000000/python--v1.png" />
                            </div>
                            <span className='px-3 md:px-2 bg-neutral-200 dark:bg-neutral-300 dark:text-black sm:text-lg flex items-center justify-center'>Python</span>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col gap-4 items-center'>
                    <span className='text-2xl'>and exploring</span>
                    <ul className='flex flex-wrap justify-center sm:grid sm:grid-cols-3 gap-4 w-full '>
                        <li className='grid grid-cols-[max-content_1fr] bg-white shadow-md'>
                            <div className='inline-block align-top relative overflow-hidden h-7 w-7 m-1'>
                                <img width='32' height='32' src='https://cdn.sanity.io/images/mwmzpjpg/production/bac649975871d9c7ebda8e23bfc216d12189702b-32x32.svg?w=32&h=32&auto=format' />
                            </div>
                            <span className='px-3 md:px-2 bg-neutral-200 dark:bg-neutral-300 dark:text-black sm:text-lg flex items-center justify-center'>PostgreSQL</span>
                        </li>
                        <li className='grid grid-cols-[max-content_1fr] bg-white shadow-md'>
                            <div className='inline-block align-top relative overflow-hidden h-7 w-7 m-1'>
                                <img width='32' height='32' src="https://cdn.sanity.io/images/mwmzpjpg/production/ac25cb19555d313aedbc3be9e62fd22b883a9713-32x32.svg?w=32&h=32&auto=format" />
                            </div>
                            <span className='px-3 md:px-2 bg-neutral-200 dark:bg-neutral-300 dark:text-black sm:text-lg flex items-center justify-center'>Django</span>
                        </li>
                        <li className='grid grid-cols-[max-content_1fr] bg-white shadow-md'>
                            <div className='inline-block align-top relative overflow-hidden h-7 w-7 m-1'>
                                <img width='32' height='32' src='https://cdn.sanity.io/images/mwmzpjpg/production/7f2043586b0797d4e7229d6cf75314b3f2ad2e56-32x32.svg?w=32&h=32&auto=format' />
                            </div>
                            <span className='px-3 md:px-2 bg-neutral-200 dark:bg-neutral-300 dark:text-black sm:text-lg flex items-center justify-center'>TypeScript</span>
                        </li>
                        <li className='grid grid-cols-[max-content_1fr] bg-white shadow-md'>
                            <div className='inline-block align-top relative overflow-hidden h-7 w-7 m-1'>
                                <img width='32' height='32' src="https://cdn.sanity.io/images/mwmzpjpg/production/5d0c785f5f53299fe2da8d639d6950a073eb0ff1-32x32.svg?w=32&h=32&auto=format" />
                            </div>
                            <span className='px-3 md:px-2 bg-neutral-200 dark:bg-neutral-300 dark:text-black sm:text-lg flex items-center justify-center'>NextJS</span>
                        </li>
                        <li className='grid grid-cols-[max-content_1fr] bg-white shadow-md'>
                            <div className='inline-block align-top relative overflow-hidden h-7 w-7 m-1'>
                                <img width='32' height='32' src="https://cdn.sanity.io/images/mwmzpjpg/production/74693655533fa57b5e52d90064e0a6888668cdfb-32x32.svg?w=32&h=32&auto=format" />
                            </div>
                            <span className='px-3 md:px-2 bg-neutral-200 dark:bg-neutral-300 dark:text-black sm:text-lg flex items-center justify-center'>Figma</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Skills