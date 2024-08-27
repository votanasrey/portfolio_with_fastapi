import React from 'react'

const Projects = () => {
    return (
        <section name="Edition" className='relative text-white p-4 py-10 grid gap-10 sm:grid-cols-2 max-w-[1000px] mx-auto'>
            {/* Seccion izquierda */}
            <section className='grid gap-10'>
                <div>
                    <h3 className='text-sm text-gray-400'>Projects</h3>
                    <h2 className='text-3xl font-semibold mt-2'>Some incredible projects I have done</h2>
                </div>

                <article className='bg-gray-d relative border-dotted border-2 border-sky-500 rounded-lg overflow-hidden'>
                    <div>
                        <img src="/images/projectsImages/ecomAI.jpg" alt="EcomAI" loading='lazy' />
                    </div>
                    <section className='p-6'>
                        <h4>EcomAI</h4>
                        <p className='text-gray-400 text-md mt-2'>EcomAI is advanced generative AI technology to enhances the e-commerce experience by providing personalized product recommendations, dynamic content generation, and interactive customer support. EcomAI is designed to understand user preferences, analyze purchasing behavior, and deliver tailored suggestions, making the shopping experience more intuitive and engaging. To achieve this level of personalization and interactivity, the Gemini API was integral to EcomAI’s development.</p>
                        <a href="https://www.linkedin.com/posts/votana-v-srey-897947199_geminiabrapiabrdeveloperabrcompetition-ecomai-activity-7228294539671650304-ktcD?utm_source=share&utm_medium=member_desktop" target='_blank' className='bg-gradient-to-t from-blue-400 to-sky-color p-1 absolute bottom-0 right-0 text-lg'>
                            <i className='bx bx-link text-black'></i>
                        </a>
                    </section>
                </article>
                
      
            
            </section>

            {/* Seccion derecha */}
            <section className='grid gap-10'>
            <article className='bg-gray-d relative border-dotted border-2 border-sky-500 rounded-lg overflow-hidden'>
                    <div>
                        <img src="/images/projectsImages/github.png" alt="ds_application_sharing" loading='lazy' />
                    </div>
                    <section className='p-6'>
                        <h4>Votana's Personal Projects</h4>
                        <p className='text-gray-400 text-md mt-2'>Please check them out in votana's personal GitHub</p>
                        <a href="https://github.com/votanasrey?tab=repositories" target='_blank' className='bg-gradient-to-t from-blue-400 to-sky-color p-1 absolute bottom-0 right-0 text-lg'>
                            <i className='bx bx-link text-black'></i>
                        </a>
                    </section>
                </article>
            </section>
        </section>
    )
}

export default Projects
