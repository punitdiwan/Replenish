import React from 'react'
import logo_svg from '../svgs/headerlogo.svg'
import logo_image from '../svgs/logoimage.svg'
import messanger_icon from '../svgs/messanger.svg'
import twiter_icon from '../svgs/twiter.svg'
import eight_icon from '../svgs/eight.svg'
import music_icon from '../svgs/music.svg'


const Navbar = () => {
    return (
        <div>
            <div className='w-100 bg-dark text-light p-2'>
                <div className="container">
                    <div className="topbar">
                        <div>
                            <p>HOU: (832) 770-7975 Training: (832) 953-0313</p>
                        </div>
                        <div className='topbar-icons'>
                            <span>
                                <i className="fa-brands fa-linkedin-in"></i>
                            </span>
                            <span>
                                <img src={messanger_icon} alt="" srcSet="" />
                            </span>
                            <span>
                                <img src={twiter_icon} alt="" srcSet="" />
                            </span>
                            <span>
                                <img src={eight_icon} alt="" srcSet="" />
                            </span>
                            <span>
                                <img src={music_icon} alt="" srcSet="" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='p-0 m-0' />
            <div className="w-100 bg-dark">
                <div className='container-fluid'>
                    <div className="row p-0 m-0">
                        <div className="col-md-2"></div>
                        <div className="col-10">
                            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
                                <div className="container-fluid">
                                    {/* <a className="navbar-brand" href="#">Navbar</a> */}
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                            <li className="nav-item">
                                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Services</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Membership</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Shop</a>
                                            </li>
                                            <li className=''>
                                                <span>
                                                    <img src={logo_svg} alt="" srcSet="" />
                                                </span>
                                            </li>
                                            <li className=''>
                                                <span>
                                                    <img src={logo_image} alt="" srcSet="" />
                                                </span>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Specials</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Blog</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Become a provider</a>
                                            </li>
                                            <li className="nav-item">
                                                <button type="button" className="btn btn-outline-secondary text-light">Book Now</button>
                                            </li>
                                            <li className="nav-item mx-2">
                                                <button type="button" className="btn btn-outline-secondary text-light text-dark" style={{ backgroundColor: '#DECFB3' }}>LOGIN TO RMD</button>
                                            </li>
                                            <li className="nav-item">
                                                <button type="button" className="btn btn-outline-secondary text-dark bg-light">SIGN UP TO RMD</button>
                                            </li>
                                            <li>

                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar



