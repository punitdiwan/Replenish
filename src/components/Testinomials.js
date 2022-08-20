import React from 'react'
import quotes_svg from '../svgs/quotes.svg'

const Testinomials = () => {
    return (
        <div className='text-center testinomial-section'>
            <div className="container">
                <h2 className='mt-4'>Testinomials</h2>
                <span>
                    <img src={quotes_svg} alt="" />
                    <img src={quotes_svg} alt="" />
                </span>
                <p className='mt-4'>
                    The aesthetics training course provided by ReplenishMD was exceptional. The 2-day training started with an informative didactic portion in the morning. The second part of each day trainees had the opportunity to practice their newly learned skills, both fillers and Botox, on real models. The instructor was extremely supportive, hands-on, and eager to answer questions and offer further guidance to trainees when needed. I found the instructor’s attention to detail in regards to precise techniques and the safest practices were extremely beneficial to my learning. I highly recommend this training course to future medical professionals wishing to pursue a career in aesthetics.
                </p>
                <p className='text-center text-dark pb-5'>K. T.</p>
            </div>
        </div>
    )
}

export default Testinomials