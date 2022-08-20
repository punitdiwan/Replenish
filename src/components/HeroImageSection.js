import React, { useState } from 'react'
import HeroHeading_svg from '../svgs/HeroHeading.svg'
import downarrow_svg from '../svgs/downarrow.svg';

const HeroImageSection = () => {
    const [bookNowDropDown, setBookNowDropDown] = useState(false)
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 hero-image-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-5 hero-heading-section">
                                    <h2 className='text-light'>Welcome To</h2>
                                    <img src={HeroHeading_svg} alt="" />
                                    <p>Power by ReplenishMD </p>
                                    <p><button onClick={() => setBookNowDropDown(!bookNowDropDown)} className='btn btn-dark p-3'>BOOK NOW <img src={downarrow_svg} alt="" srcset="" /></button></p>
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
                                <div className="col-md-4"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroImageSection



// {
//     bookNowDropDown ?  <div className="book-now-dropdown">
//     <ul>
//         <li>Botox/Dermal Fillers</li>
//         <li>Bio identical Hormone Replacement Therapy</li>
//         <li>Testosterone Replacement Therapy</li>
//         <li>Peptides (Sermorelin / Ipamorelin)</li>
//         <li>Medical Weight Loss</li>
//         <li>IV Drips (We can come to you)</li>
//         <li>Erectile Dysfunction (Sildenafil/Tadalafil)</li>
//         <li>Erectile Dysfunction (Sildenafil/Tadalafil)</li>
//         <li>Addiction Medicine (suboxone)</li>
//         <li>Personal Training</li>
//         <li>Nutrition Counseling</li>
//         <li>Mobile Labwork</li>
//     </ul>
// </div> : ''
// }