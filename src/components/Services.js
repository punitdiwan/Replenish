import React from 'react'
import facial_svg from '../svgs/facial.svg'
import fillers_svg from '../svgs/fillers.svg'
import botox_svg from '../svgs/botox.svg'

const Services = () => {
    return (
        <div className='text-center services-section'>
            <div className="container">
                <h2 className='mt-4'>Services</h2>
                <p className='mt-4'>
                    Replenish MD's specializations are cosmetic treatments that slow the signs of aging, preserve your beauty, and bring back your youthful glow.  In each individual session, we provide the highest quality treatment for each of our clients.
                </p>
                <p>
                    We are passionate about creating natural and effective results for our clients so they can achieve the goals they desire.  Our staff routinely stay up to date on their knowledge and skills in aesthetic medicine by looking for training opportunities that increase their knowledge of the latest and most advanced treatments that give our clients the best results every time.

                </p>
                <p className='mt-5'>
                    <button className='btn p-2' style={{ backgroundColor: '#DECFB3' }}>LEARN MORE</button>
                </p>
            </div>
            <div className="container image-container">
                <div className="row">
                    <div className="col-md-4">
                        <img className='img-fluid' src={facial_svg} alt="" srcset="" />
                        <p>Facial</p>
                    </div>
                    <div className="col-md-4">
                        <img className='img-fluid' src={fillers_svg} alt="" srcset="" />
                        <p>Filters</p>
                    </div>
                    <div className="col-md-4">
                        <img className='img-fluid' src={botox_svg} alt="" srcset="" />
                        <p>Botox & Dysport</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services



