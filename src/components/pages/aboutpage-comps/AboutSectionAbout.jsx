import React from 'react'
import { Link as ScrollLink } from 'react-scroll';

const AboutSectionAbout = () => {
    return (
        <section name="About" className='relative w-full h-screen'>

            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 py-16 md:py-24 lg:py-0 lg:flex-row lg:gap-8'>
                
                <div className='flex mt-8 md:mt-0'>
                    <img src="/images/votanapf.png" alt="votana profile" className='rounded-2xl mx-auto w-2/3 max-w-lg md:max-w-sm object-cover md:w-[70rem] shadow-2xl shadow-blue-500/40' style={{ filter: 'drop-shadow(0px -4px 4px rgba(250, 0, 0, 0))' }} />
                </div>

                <div className='flex flex-col justify-center items-center h-[85%] md:h-full'>
                    
                    <h1 className='text-4xl md:text-5xl font-bold text-white mb-2 md:mb-4'>Who I am?</h1>

                    <div className='flex items-center bg-sky-500/50 rounded-md py-2 px-4'>
                        <img className='h-[30px] w-auto mr-2' src="/icons/cambodia.png" alt="" />
                        <h2 className='text-lg sm:text-xl md:text-2xl md:py-1 font-semibold text-white'>Votana SREY | Digital Data Scientist</h2>
                    </div>
                    
                    <p className='text-md md:text-lg text-gray-300 py-4 max-x-md text-justify'>A passionate in science and highly inquisitive student who’s majoring in computer science that specializing in data engineering, data modeling, and data analytics skill. Over more Experienced with development and research with innovative and creative skills and the ability to use my own initiative and work as a part of a team under pressure to meet challenging deadlines and objective communication, networking, and organizational skill.</p>
                </div>
            </div>

            <ScrollLink to="Edition" smooth duration={500} className='absolute bottom-2 -left-full md:left-1/2 md:-translate-x-1/2 cursor-pointer hover:text-primary-color'>
                <i className='bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color'></i>
            </ScrollLink>
        </section>
    );
}

export default AboutSectionAbout