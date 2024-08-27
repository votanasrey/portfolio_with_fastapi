import React from 'react'

const Edition = () => {
    return (
        <section name="Edition" className='relative text-white p-4 py-10 grid gap-10 sm:grid-cols-2 max-w-[1000px] mx-auto'>
            {/* Seccion izquierda */}
            <section className='grid gap-10'>
                <div>
                    <h3 className='text-sm text-gray-400'>Activities</h3>
                    <h2 className='text-3xl font-semibold mt-2'>Some incredible activities on social I have done</h2>
                </div>

                <article className='bg-gray-d relative border-dotted border-2 border-sky-500 rounded-lg overflow-hidden'>
                    <div>
                        <img src="/images/social_activities/asean_conference.jpeg" alt="ASEAN Conference" loading='lazy' />
                    </div>
                    <section className='p-6'>
                        <h4>ASEAN CONFERENCE OF EMERGING TECHNOLOGIES (ACET) 2022</h4>
                        <p className='text-gray-400 text-md mt-2'>ACET is the ASEAN conference that focuses on the latest research and Development in digital technology but more specifically on Natural Language Processing (NLP), Data Science, Networking & IoT, Artificial Intelligence (AI). ACET conference aims to connect researchers’ knowledge and Building applications for smarter societies. RESEARCH, SHARE, CONNECT : Bringing together researchers from local and international communities through a forum for academicians, professionals, and researchers to discuss and exchange research results, innovative ideas, and experiences, fostering advancements in the field.</p>
                        <a href="https://www.linkedin.com/feed/update/urn:li:activity:7006625985164967936/?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A7006625985164967936%29" target='_blank' className='bg-gradient-to-t from-blue-400 to-sky-color p-1 absolute bottom-0 right-0 text-lg'>
                            <i className='bx bx-link text-black'></i>
                        </a>
                    </section>
                </article>
                
                <article className='bg-gray-d relative border-dotted border-2 border-sky-500 rounded-lg overflow-hidden'>
                    <div>
                        <img src="/images/social_activities/asean_india_hackathon.jpeg" alt="ASEAN India Hackathon" loading='lazy' />
                    </div>
                    <section className='p-6'>
                        <h4>ASEAN India Hackathon 2020</h4>
                        <p className='text-gray-400 text-md mt-2'>The ASEAN-India Hackathon was organised by the Ministry of Education in collaboration with Ministry of External Affairs from 1-4 February 2020. All India Council for Technical Education (AICTE) has implemented this important initiative with the support of nodal agencies from all 10 ASEAN countries, which included their Education Ministries and prominent universities. </p>
                        <a href="https://www.linkedin.com/feed/update/urn:li:activity:6904375228529569792/?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A6904375228529569792%29" target='_blank' className='bg-gradient-to-t from-blue-400 to-sky-color p-1 absolute bottom-0 right-0 text-lg'>
                            <i className='bx bx-link text-black'></i>
                        </a>
                    </section>
                </article>

            
            </section>

            {/* Seccion derecha */}
            <section className='grid gap-10'>
            <article className='bg-gray-d relative border-dotted border-2 border-sky-500 rounded-lg overflow-hidden'>
                    <div>
                        <img src="/images/social_activities/ds_application_sharing.jpg" alt="ds_application_sharing" loading='lazy' />
                    </div>
                    <section className='p-6'>
                        <h4>Data-Driven Technologies and Its Application</h4>
                        <p className='text-gray-400 text-md mt-2'>Phnom Penh, August 26th, 2024 - the Institute of Digital Research and Innovation of CADT held a workshop on "Data Driven Technologies and Its Applications" attended by over 160 participants from diverse sectors, including students, researchers, and industry professionals. The workshop showcases applications and technologies used in the banking and research sector. The speakers also showed various tools and architecture being applied and carried out in real work place along with use cases. Disseminating these data science technologies provided a comprehensive overview of the latest advancements in practical use across various industries. Participants also gained valuable insights into the power of data-driven decision-making and explored real-world applications.</p>
                        <a href="https://www.facebook.com/photo?fbid=834033758918535&set=pcb.834034102251834" target='_blank' className='bg-gradient-to-t from-blue-400 to-sky-color p-1 absolute bottom-0 right-0 text-lg'>
                            <i className='bx bx-link text-black'></i>
                        </a>
                    </section>
                </article>

            <article className='bg-gray-d relative border-dotted border-2 border-sky-500 rounded-lg overflow-hidden'>
                    <div>
                        <img src="/images/social_activities/apac_digital_id.png" alt="APAC Digital Identity" loading='lazy' />
                    </div>
                    <section className='p-6'>
                        <h4>APAC Digital Identity unConference 2023 in Bangkok, Thailand.</h4>
                        <p className='text-gray-400 text-md mt-2'>APAC Digital unConference is one such newly initiated forum where people from the region have a platform come together, brainstorm on such problems to find solutions to with the emerging trends & technologies and most importantly, to collaborate — eventually, get benefitted..</p>
                        <a href="https://ayanworks.medium.com/apac-digital-identity-unconference-2023-thailand-b39f23377243" target='_blank' className='bg-gradient-to-t from-blue-400 to-sky-color p-1 absolute bottom-0 right-0 text-lg'>
                            <i className='bx bx-link text-black'></i>
                        </a>
                    </section>
                </article>

                <article className='bg-gray-d relative border-dotted border-2 border-sky-500 rounded-lg overflow-hidden'>
                    <div>
                        <img src="/images/social_activities/cambodia_ict_camp.jpeg" alt="cambodia ICT Camp" loading='lazy' />
                    </div>
                    <section className='p-6'>
                        <h4>Cambodia ICT Camp 2022</h4>
                        <p className='text-gray-400 text-md mt-2'>The Cambodia ICT Camp 2022 will be a three-day boarding-style event centered around open data, digital security, and data journalism. This event will consist of a series of interactive workshops and hands-on activities led by professional experts in the fields of data, media and communication, journalism, and technology. Participants in the event will consist of Cambodian nationals coming from diverse – but interrelated – fields, namely media and journalism, civil society organizations, digital rights working groups, the private sector, university lecturers, and students.</p>
                        <a href="https://cambodiaict.net/programme/" target='_blank' className='bg-gradient-to-t from-blue-400 to-sky-color p-1 absolute bottom-0 right-0 text-lg'>
                            <i className='bx bx-link text-black'></i>
                        </a>
                    </section>
                </article>

            </section>
        </section>
    )
}

export default Edition
