import React, { useState } from 'react'
import HeroHeading_svg from '../svgs/HeroHeading.svg'
import downarrow_svg from '../svgs/downarrow.svg'
import carousel_img1 from '../svgs/carouselimg1.svg'
import carousel_img2 from '../svgs/carouselimg2.svg'
import carousel_img3 from '../svgs/carouselimg3.svg'
import carousel_img4 from '../svgs/carouselimg4.svg'
import carousel_img5 from '../svgs/carouselimg5.svg'
import carousel_img6 from '../svgs/carouselimg6.svg'

const HeroImageSection = () => {
    const [bookNowDropDown, setBookNowDropDown] = useState(false)
    return (
            <div className="container-fluid p-0 m-0 parent">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={carousel_img1} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src={carousel_img2} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src={carousel_img3} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src={carousel_img4} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src={carousel_img5} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item" >
                    <img src={carousel_img6} className="d-block w-100" alt="..."/>
                    </div>
                </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="child carousel-section">
                    <h4 className='carousel-section-h4'>Welcome To</h4>
                    <img src={HeroHeading_svg} alt="" className='heading-img'/>
                    <p>Power by ReplenishMD </p>
                    <p><button onClick={() => setBookNowDropDown(!bookNowDropDown)} className='btn btn-dark p-3'>BOOK NOW <img src={downarrow_svg} alt="" srcSet="" /></button></p>
                        <div className="book-now-dropdown" style={bookNowDropDown ? {display:'block'}:{visibility:'hidden'}}>
                            <ul>
                                <li>Botox/Dermal Fillers</li>
                                <li>Bio identical Hormone Replacement Therapy</li>
                                <li>Testosterone Replacement Therapy</li>
                                <li>Peptides (Sermorelin / Ipamorelin)</li>
                                <li>Medical Weight Loss</li>
                                <li>IV Drips (We can come to you)</li>
                                <li>Erectile Dysfunction (Sildenafil/Tadalafil)</li>
                                <li>Erectile Dysfunction (Sildenafil/Tadalafil)</li>
                                <li>Addiction Medicine (suboxone)</li>
                                <li>Personal Training</li>
                                <li>Nutrition Counseling</li>
                                <li>Mobile Labwork</li>
                            </ul>
                        </div>
          
                </div>
            </div>
    )
}

export default HeroImageSection




