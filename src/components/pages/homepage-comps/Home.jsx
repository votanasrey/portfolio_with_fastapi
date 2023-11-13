import React from 'react'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import { Link } from "react-scroll"
import MobileSocialLinks from './MobileSocialLinks';

const Home = () => {
    return (
      <section name="Home" className='relative w-full md:h-screen h-unset'>

        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 py-16 md:py-0 md:flex-row md:gap-8'>

          <div className='flex flex-col justify-center items-center h-[85%] md:h-full order-2 md:order-1 md:items-start'>
            
            <h1 className='text-2xl md:text-4xl font-bold text-white mb-2 mt-3 md:mt-0 md:mb-4'>This is VOTANA SREY</h1>
            <h2 className='rounded-md bg-sky-700 max-w-max px-6 inline text-xl md:text-3xl lg:text-4xl font-semibold text-white'>Digital Data Scientist</h2>
            <p className='text-gray-300 py-4 max-x-md text-justify'> Votana is a Digital Data Scientist with over 3 years of experiences. He specializes in extracting meaningful insights from data, building predictive models, and delivering data-driven solutions and enable new business with increable Artificial Intelligence Technologies. He has a proven track record of collaborating with cross-functional teams and helping businesses thrive through data-driven decision-making.</p>

            <div className='hidden desktop:flex'>
              <Link to='About' smooth duration={500} className='group text-white font-semibold w-fit px-6 py-3 my-2 flex items-center rounded-md bg-sky-700 from-green-400 to-primary-color cursor-pointer mx-auto md:mx-0'>
                About Me
                <span className='group-hover:rotate-90 duration-300'><MdOutlineKeyboardArrowRight size={25} className='ml-1' /></span>
              </Link>
            </div>

            <MobileSocialLinks />
          </div>

          <div className='flex order-1 md:order-2 mt-8 md:mt-0'>
              <img src="/images/votanapf.png" alt="votana profile" className='mb-2 rounded-2xl mx-auto w-2/3 max-w-lg md:max-w-sm object-cover md:w-[70rem] shadow-2xl shadow-blue-500/40' style={{ filter: 'drop-shadow-[0_35px_35px_rgba(250,0,0,0)]' }} />
              {/* <img src="https://imgur.com/mebuqDk.png" alt="My profile" className='rounded-2xl mx-auto w-2/3 max-w-lg md:max-w-sm object-cover md:w-[70rem] shadow-2xl shadow-primary-color/20' style={{ filter: 'drop-shadow(0px -4px 4px rgba(0, 255, 0, 0.5))' }} /> */}
            </div>
        </div>
      </section>
    );
}

export default Home
