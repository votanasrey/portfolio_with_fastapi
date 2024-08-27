import React, { useEffect } from 'react'
// import Navbar from "./homepage-comps/Navbar"
import Home from "./homepage-comps/Home"
import About from "./homepage-comps/Career"
import MyProjects from "./homepage-comps/MyProjects"
import Techs from "./homepage-comps/Techs"
import Contact from "./homepage-comps/Contact"
import CertificateSlider from './homepage-comps/CertificateSlider'
import Edition from './aboutpage-comps/Edition'
import Education from './homepage-comps/EducationPage'
import Volunteer from './homepage-comps/Volunteer'


const HomePage = () => {
    const certificates = [
        {image: '/images/certificates/1.jpeg'},
        {image: '/images/certificates/2.jpeg'},
        {image: '/images/certificates/3.jpeg'},
        {image: '/images/certificates/4.jpeg'},
        {image: '/images/certificates/5.jpeg'},
        {image: '/images/certificates/6.jpeg'},
        {image: '/images/certificates/7.jpeg'},
        {image: '/images/certificates/8.jpeg'},
        {image: '/images/certificates/9.jpeg'},
        {image: '/images/certificates/10.jpeg'},
        {image: '/images/certificates/11.jpeg'},
        {image: '/images/certificates/12.jpeg'},
        {image: '/images/certificates/13.jpeg'},
        {image: '/images/certificates/14.jpeg'},
        {image: '/images/certificates/15.jpeg'},
        {image: '/images/certificates/16.jpeg'},
        {image: '/images/certificates/17.jpeg'},
        {image: '/images/certificates/18.jpeg'},
        {image: '/images/certificates/19.jpeg'},
        {image: '/images/certificates/20.jpeg'},
        {image: '/images/certificates/21.jpeg'},
        {image: '/images/certificates/22.jpeg'},
        {image: '/images/certificates/23.jpg'},
        {image: '/images/certificates/24.png'},
        {image: '/images/certificates/25.png'},
        {image: '/images/certificates/26.png'}


    ];


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            {/* <Navbar /> */}
            <Home />
            <About />
            <Education />
            <MyProjects />
            <Techs />
            <CertificateSlider certificates={certificates} />
            <Edition />
            <Volunteer />
            <Contact />

        </>
    )
}

export default HomePage