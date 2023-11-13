import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll';

const Career = () => {
    return (
        <section name="Career" className='relative text-white p-4 py-10 grid gap-10 sm:grid-cols-2 max-w-[1000px] mx-auto'>
            {/* Seccion izquierda */}
            <section className='grid gap-10'>
                <div>
                    <h3 className='text-sm text-gray-400'>Career</h3>
                    <h2 className='text-3xl font-semibold mt-2'>My Career Roadmap</h2>
                </div>

                <article className='bg-gray-d relative border-dotted border-2 border-sky-500 rounded-lg overflow-hidden'>
                    <div>
                        <img src="/images/careers/aba.jpeg" alt="ABA" loading='lazy' />
                    </div>
                    <section className='p-6'>
                        <h4>Digital Data Scientist</h4>
                        <p className='text-gray-400 mt-1'>Currently working with this role</p>
                        <p className='text-gray-400 text-md mt-3'>Organization: Advanced Bank of Asia limited</p>
                        <p className='text-gray-400 text-md mt-1'>Skills: Artificial Intelligence (AI) · Machine Learning · Software Development · Communication · Big Data Analytics · Microsoft Power BI · Communication</p>
                    </section>
                </article>

                <article className='bg-gray-d relative border-dotted border-2 border-sky-500 rounded-lg overflow-hidden'>
                    <div>
                        <img src="/images/careers/heineken.jpeg" alt="HEINEKEN" loading='lazy' />
                    </div>
                    <section className='p-6'>
                        <h4>Data Analyst & Steward</h4>
                        <p className='text-gray-400 text-md mt-3'>Organization: HEINEKEN Cambodia</p>
                        <p className='text-gray-400 text-md mt-1'>Skills: Microsoft SQL Server · Master Data Management · Python (Programming Language) · Data Science · Data Governance · Data Integration · Data Modeling · Microsoft Power BI · Data Stewardship · Data Analysis · Process Automation</p>
                    </section>
                </article>

                <article className='bg-gray-d relative border-dotted border-2 border-sky-500 rounded-lg overflow-hidden'>
                    <div>
                        <img src="/images/careers/avi.jpeg" alt="AVI" loading='lazy' />
                    </div>
                    <section className='p-6'>
                        <h4>Research Intern</h4>
                        <p className='text-gray-400 text-md mt-3'>Organization: ASEAN Vision Institution</p>
                        <p className='text-gray-400 text-md mt-1'>Skills:  Social Research · Article Writing · Publication Planning · Communication · Quantitative Research</p>
                    </section>
                </article>

            </section>

            {/* Seccion derecha */}
            <section className='grid gap-10'>
            <article className='bg-gray-d relative border-dotted border-2 border-sky-500 rounded-lg overflow-hidden'>
                    <div>
                        <img src="/images/careers/delivery_hero.png" alt="Foodpanda" loading='lazy' />
                    </div>
                    <section className='p-6'>
                        <h4>Data Analyst</h4>
                        <p className='text-gray-400 text-md mt-3'>Organization: Delievry Hero - foodpanda Cambodia</p>
                        <p className='text-gray-400 text-md mt-1'>Skills: Google BigQuery · Google Data Studio · Tableau · Advance Excel · Big Data Analytics · Python (Programming Language) · Data Analytics · ETL Automation with DBT · Commercial Operation · Data Operation Support.</p>
                    </section>
                </article>

                <article className='bg-gray-d relative border-dotted border-2 border-sky-500 rounded-lg overflow-hidden'>
                    <div>
                        <img src="/images/careers/cadt.jpeg" alt="CADT" loading='lazy' />
                    </div>
                    <section className='p-6'>
                        <h4>Data Scientist</h4>
                        <p className='text-gray-400 text-md mt-3'>Organization: Cambodia Academy of Digital Technology</p>
                        <p className='text-gray-400 text-md mt-1'>Skills: Python (Programming Language) · Natural Language Processing (NLP) · NLTK · Data Science · Operations Research</p>
                    </section>
                </article>
            </section>
            <ScrollLink
                to="Education"
                smooth
                duration={500}
                className="absolute bottom-5 -left-full md:left-1/2 md:-translate-x-1/2 cursor-pointer hover:text-sky-color">
                <i className="bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-sky-color"></i>
            </ScrollLink>
        </section>
    )
}

export default Career

