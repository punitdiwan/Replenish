import React from 'react'
import logo_svg from '../svgs/headerlogo.svg'
import logo_image from '../svgs/logoimage.svg'
import messanger_icon from '../svgs/messanger.svg'
import twiter_icon from '../svgs/twiter.svg'
import eight_icon from '../svgs/eight.svg'
import music_icon from '../svgs/music.svg'

const Footer = () => {
    return (
        <div className='footer bg-dark p-5 text-light'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-2">
                        <img src={logo_svg} alt="" srcset="" />
                        <img src={logo_image} alt="" srcset="" style={{ width: '10rem' }} />
                        <div className='topbar-icons'>
                            <span>
                                <i className="fa-brands fa-linkedin-in"></i>
                            </span>
                            <span>
                                <img src={messanger_icon} alt="" srcset="" />
                            </span>
                            <span>
                                <img src={twiter_icon} alt="" srcset="" />
                            </span>
                            <span>
                                <img src={eight_icon} alt="" srcset="" />
                            </span>
                            <span>
                                <img src={music_icon} alt="" srcset="" />
                            </span>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <h2>Healthcare</h2>
                        <ul>
                            <li>For Individuals</li>
                            <li>Locations</li>
                            <li>Doctors</li>
                            <li>Health Coaches</li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h2>Articles</h2>
                        <ul>
                            <li>Health Concerns</li>
                            <li>Recipes & Nutrition</li>
                            <li>Optimizations</li>
                            <li>News</li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h2>Company</h2>
                        <ul>
                            <li>Mission</li>
                            <li>Origin</li>
                            <li>Careers</li>
                            <li>Team</li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h2>Help & Support</h2>
                        <ul>
                            <li>Contact</li>
                            <li>Common Questions</li>
                            <li>Membership</li>
                            <li>Message Us</li>
                        </ul>
                    </div>
                    <div className="col-md-1">
                    </div>
                </div>
            </div>
            <hr />
            <p className='text-center copyrigh-section'>
                © 2020-22 ReplenishMD ‧ Terms of Use ‧ Membership Terms & Conditions ‧ Privacy Policy ‧
            </p>
        </div>
    )
}

export default Footer