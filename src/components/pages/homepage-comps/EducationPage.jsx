import React from 'react'
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

const Education = () => {
    return (
        <section name="Education" className='relative text-white p-4 py-10 grid gap-10 sm:grid-cols-2 max-w-[1000px] mx-auto'>
            {/* Seccion izquierda */}
            <section className='grid gap-10'>
                <div>
                    <h3 className='text-sm text-gray-400'>Education</h3>
                    <h2 className='text-3xl font-semibold mt-2'>Education Background</h2>
                </div>

                <article className='bg-gray-d relative border-dotted border-2 border-sky-500 rounded-lg overflow-hidden'>
                    <div>
                        <img src="/images/careers/cadt.jpeg" alt="ASEAN India Hackathon" loading='lazy' />
                    </div>
                    <section className='p-6'>
                        <h4>BSc in Computer Science at CADT</h4>
                        <p className='text-gray-400 text-md mt-2'>CADT aims to be a national flagship research and education institution for Digital Technology and Innovation, nurturing digital talent and innovators to drive Cambodia toward a digital society. CADT has 3 missions to accomplish: Provision of quality Higher Education and Professional Training in digital technology </p>
                        <a href="https://cadt.edu.kh/about/" target='_blank' className='bg-gradient-to-t from-blue-400 to-sky-color p-1 absolute bottom-0 right-0 text-lg'>
                            <i className='bx bx-link text-black'></i>
                        </a>
                    </section>
                </article>
            </section>

            {/* Seccion derecha */}
            <section className='grid gap-10'>
            <article className='bg-gray-d relative border-dotted border-2 border-sky-500 rounded-lg overflow-hidden'>
                    <div>
                        <img src="/images/educations/paragon_mis.jpeg" alt="Paragon" loading='lazy' />
                    </div>
                    <section className='p-6'>
                        <h4>MSc in Management of Information Systems</h4>
                        <p className='text-gray-400 text-md mt-2'>This Master of Science in Management of Information Systems is designed to prepare students for challenging careers involving the design, analysis, implementation and operation of computer-based information systems. MIS involves the use of technologies in organizations and the integration of computer skills with the functional areas of management. MIS professionals are the “communication bridge” between business needs and technology. Graduates of the MIS program can pursue careers as Business Analysts, IT Consultants, Systems Analysts, IT Development Project Leaders, Database Administrators, Business Intelligence Analysts, Data Analysts, Web Developers and Information Systems Managers. </p>
                         <a href="https://paragoniu.edu.kh/prospective-students/postgraduate-programs/" target='_blank' className='bg-gradient-to-t from-blue-400 to-sky-color p-1 absolute bottom-0 right-0 text-lg'>
                            <i className='bx bx-link text-black'></i>
                        </a>
                    </section>
                </article>
            </section>

            <ScrollLink
                to="Projects"
                smooth
                duration={500}
                className="absolute bottom-2 -left-full md:left-1/2 md:-translate-x-1/2 cursor-pointer hover:text-primary-color">
                <i className="bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color"></i>
            </ScrollLink>

        </section>
    )
}

export default Education
