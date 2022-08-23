import React from 'react'
import logo_svg from '../svgs/headerlogo.svg'
import serviceheading_svg from '../svgs/serviceheading.svg'

const About = () => {
    return (
        <div className='text-center about-section'>
          <div className="container">
            <img src={logo_svg} alt="" srcSet="" className='logo-img'/>
            <img src={serviceheading_svg} alt="" srcSet="" className='logo-text-img' />
            <h2 className='mt-4'>Preserving Your Natural Beauty</h2>
            <p className='mt-4'>
                At Replenish our expert staff is dedicated to providing our clients with the most advanced and refined cosmetic treatments available.  The goal of our treatments is to enhance your appearance, reverse the signs of aging and restore youth while preserving your natural beauty.
                Our providers build confidence by taking the time to understand each of our client's personal concerns and aesthetic goals to build a deep and lasting relationship with our patients.
            </p>
            <p>
                Based on their medical experience and knowledge of cosmetic procedures, our doctors make authentic recommendations for treatment.  They consider all aspects of the client such as age, genetics, desires, and lifestyle to create a full, restorative treatment plan that works with your facial features and is true to you for undetectable results.
            </p>
            <p className='mt-5'> 
                <button className='btn btn-dark p-2'>LEARN MORE</button>
            </p>
          </div>
        </div>
    )
}

export default About



