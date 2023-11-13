import React from 'react'
import { Link } from 'react-router-dom'

import easyshop from '/images/projectsImages/easyshop.webp'
import pokedex from '/images/projectsImages/pokedex.webp'
import acciovocabulary from '/images/projectsImages/acciovocabulary.webp'
import rickandmorty from '/images/projectsImages/rickandmorty.webp'
import academloshop from '/images/projectsImages/academloshop.webp'
import weatherapp from '/images/projectsImages/weatherapp.webp'
import dogsblog from '/images/projectsImages/dogsblog.webp'
import crud from '/images/projectsImages/crud.webp'
import moviepedia from '/images/projectsImages/moviepedia.webp'
import tictactoe from '/images/projectsImages/tictactoe.webp'
import soccerquotes from '/images/projectsImages/soccerquotes.webp'
import fortunecookies from '/images/projectsImages/fortunecookies.webp'
import todomachine from '/images/projectsImages/todomachine.webp'

const AllProjects = () => {

    const projects = [
        {
          id: 1,
          title: "Product Classification",
          description: "Multi class object classification using Freiburg Groceries Dataset",
          technologies: "Python",
          src: "/images/projectsImages/product_classification.png",
          code: "https://github.com/votanasrey/Grocery-Product-Classification#multi-class-object-classification-using-freiburg-groceries-dataset",
        },
        {
          id: 2,
          title: "Students' Behavour and Feedback Analysis on Online Learning During Pandemic",
          description:
            "After the COVID-19 outbreak, all sectors in Cambodia and The world met the issue. such as economics, Agricultural, tourism, education, and so on are met the problem either. for the education sector, a number of students are moved from physical classes to online classes instead. Online Learning System's now booming and essential for student during COVID-19 Pandemic. We will Research about Students Behavior and Feedback, Apply ML Algorithms to perform the project, Build Scientific Research Paper",
          technologies: "Python, NLP, Text Processing, NLTK",
          src: "/images/projectsImages/student_behaviors.png",
          code: "https://github.com/votanasrey/Student_Behaviors_And_Feebdback_Analysis_On_Online_Learning_During_COVID_19",
        },
        {
          id: 3,
          title: "ETL Automation",
          description:
            "ETL Automation here is to support the reporting operation in order to load the cleaned data in specific flat files formart to the defined location.",
          technologies: "Python, SQL",
          src: "/images/projectsImages/etl_automation.png",
          code: "https://github.com/votanasrey/ETL_Automation",
        },
      ];
      

    const handleClickDemo = (demoUrl) => {
        const newWindow = window.open(demoUrl, '_blank');
        newWindow.opener = null;
        newWindow.rel = 'noopener noreferrer';
    }

    const handleClickCode = (codeUrl) => {
        const newWindow = window.open(codeUrl, '_blank');
        newWindow.opener = null;
        newWindow.rel = 'noopener noreferrer';
    }
    

    return (
        <section name="Projects" className='relative w-full text-white md:min-h-screen mt-24 mb-10'>
        
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <h2 className='text-4xl font-bold inline border-b-4 border-primary-color/40 sm:text-5xl'>Projects</h2>
                    <p className='py-6'>Check out the project list here.</p>
                </div>

                <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>
                    {
                        projects.map(({ id, src, demo, code }) => (
                                <div key={id} className='shadow-md shadow-gray-600 rounded-lg max-w-md mx-auto'>
                                    <img loading='lazy' src={src} alt="project card" className='rounded-md duration-200 hover:scale-105' />
                                    <div className='flex items-center justify-center'>
                                        <button onClick={() => handleClickCode(code)} className='w-1/2 px-6 py-2 m-4 duration-200 hover:scale-125'>Code</button>
                                    </div>
                                </div>
                        ))
                    }
                </div>
            </div>

            <div className='flex justify-center'>
                <Link to='/' className='text-white font-semibold text-[16px] w-fit px-6 py-3 my-2 flex items-center rounded-md bg-sky-500/100 from-green-400 to-primary-color cursor-pointer mx-auto md:mx-0 self-end mt-8 hover:scale-110 duration-300'>
                    <span className=''><i className='bx bx-home-heart mr-2'></i></span>
                    Go Back
                </Link>
            </div>
        </section>
    )
}

export default AllProjects
