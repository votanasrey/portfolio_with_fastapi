import React from 'react'
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

const Volunteer = () => {
    return (
        <section name="Volunteer" className='relative text-white p-4 py-10 grid gap-10 sm:grid-cols-2 max-w-[1000px] mx-auto'>
            {/* Seccion izquierda */}
            <section className='grid gap-10'>
                <div>
                    <h3 className='text-sm text-gray-400'>Volunteer</h3>
                    <h2 className='text-3xl font-semibold mt-2'>Some of Volunteer Works I have done for Society.</h2>
                </div>

                <article className='bg-gray-d relative border-dotted border-2 border-sky-500 rounded-lg overflow-hidden'>
                    <div>
                        <img src="/images/volunteers/aws.jpg" alt="AWS" loading='lazy' />
                    </div>
                    <section className='p-6'>
                        <h4>Program Coordinator</h4>
                        <p className='text-gray-400 text-md mt-2'>Supporting the AWS Regional Team to run the program in Cambodia. Leading the volunteer memebers and assigning the right person to the right tasks to running the AWS DeepRacer Cambodia, AWS Dev Day and Building AWS Cambodia Community</p>
                    </section>
                </article>


            </section>

            {/* Seccion derecha */}
            <section className='grid gap-10'>
            <article className='bg-gray-d relative border-dotted border-2 border-sky-500 rounded-lg overflow-hidden'>
                    <div>
                        <img src="/images/volunteers/web_translator.jpeg" alt="ILAB" loading='lazy' />
                    </div>
                    <section className='p-6'>
                        <h4>Web Translator</h4>
                        <p className='text-gray-400 text-md mt-2'>Built my own achievements with InSTEDD iLab Southeast Asia collaborated with Code.org to support students and guys in Cambodia ft the Khmer Language into code.org </p>
                    </section>
                </article>
                <article className='bg-gray-d relative border-dotted border-2 border-sky-500 rounded-lg overflow-hidden'>
                    <div>
                        <img src="/images/volunteers/ai_talk.jpeg" alt="AI Talk" loading='lazy' />
                    </div>
                    <section className='p-6'>
                        <h4>Speaker</h4>
                        <p className='text-gray-400 text-md mt-2'>Sharing the Cambodian student on the AI & ML introduction fields a part of women go tech program.</p>
                    </section>
                </article>
            </section>

            <ScrollLink
                to="Contacts"
                smooth
                duration={500}
                className="absolute bottom-2 -left-full md:left-1/2 md:-translate-x-1/2 cursor-pointer hover:text-primary-color">
                <i className="bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color"></i>
            </ScrollLink>

        </section>
    )
}

export default Volunteer
