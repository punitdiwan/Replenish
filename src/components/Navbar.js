import React from 'react'
import logo_svg from '../svgs/headerlogo.svg'
import logo_image from '../svgs/logoimage.svg'
import messanger_icon from '../svgs/messanger.svg'
import twiter_icon from '../svgs/twiter.svg'
import eight_icon from '../svgs/eight.svg'
import music_icon from '../svgs/music.svg'

const Navbar = () => {
  return (
            <div className='my-nav'>
              <div className='w-100 bg-dark text-light p-2 topbar-section'>
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
        {/* Navigation bar for large screen device  */}

       <div className="container-fluid bg-dark">
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                  <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>

                {/* Logo For Mobile Device */}
                  <button className="navbar-toggler border-none">
                    <li className='' style={{listStyle:'none'}}>
                        <span>
                            <img src={logo_svg} alt="" srcSet="" style={{width:'5rem',height:'2rem'}} />
                        </span>
                    </li>
                        <li className='' style={{listStyle:'none'}}>
                        <span>
                            <img src={logo_image} alt="" srcSet=""  style={{width:'5rem',height:'2rem'}}/>
                        </span>
                    </li>
                  </button>

            
                  
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto w-100 mb-2 mb-lg-0 d-flex align-items-center justify-content-between">
                        <li className="nav-item">
                          <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        {/* <li className="nav-item">
                          <a className="nav-link" href="#">Services</a>
                        </li> */}
                        <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Services
                          </a>
                          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                          </ul>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">Membership</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">Shop</a>
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
                            <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">Special</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">Blog</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">Become a provider</a>
                          </li>
                          <li className="nav-item" style={{marginRight: '10px'}}>
                            <button type="button" className="btn golden-border text-light">BOOK NOW</button>
                          </li>
                          <li className="nav-item" style={{marginRight: '10px'}}>  
                            <button type="button" className="btn text-dark bg-golden">LOGIN TO RMD</button>
                          </li>
                          <li className="nav-item">
                            <button type="button" className="btn text-dark bg-light">SIGN UP RMD</button>
                          </li>
                      </ul>
                  </div>
                </div>
              </nav>
        </div>
       </div>


          
        {/* Navigation bar for mobile device  */}
          <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header">
              {/* <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5> */}
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body bg-dark">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link pb-3 active text-light" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link pb-3 text-light" href="#">Services</a>
                    </li>
                    {/* <li className="nav-item dropdown">
                      <a className="nav-link pb-3 text-light dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </li> */}
                    <li className="nav-item">
                      <a className="nav-link pb-3 text-light" href="#" tabIndex="-1" aria-disabled="true">Membership</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link pb-3 text-light" href="#" tabIndex="-1" aria-disabled="true">Shop</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link pb-3 text-light" href="#" tabIndex="-1" aria-disabled="true">Specials</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link pb-3 text-light " href="#" tabIndex="-1" aria-disabled="true">Blog</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link pb-3 text-light " href="#" tabIndex="-1" aria-disabled="true">Become a provider</a>
                      </li>
                      <hr className='text-light'/>
                         <li className="nav-item" style={{marginBottom: '10px'}}>
                            <button type="button" className="btn golden-border text-light w-25">BOOK NOW</button>
                          </li>
                          <li className="nav-item" style={{marginBottom: '10px'}}>  
                            <button type="button" className="btn text-dark bg-golden w-25">LOGIN TO RMD</button>
                          </li>
                          <li className="nav-item">
                            <button type="button" className="btn text-dark bg-light w-25">SIGN UP RMD</button>
                          </li>
                          <hr className='text-light'/>
                          <div className='text-light'>
                          <p>HOU: (832) 770-7975</p>
                          <p>Training: (832) 953-0313</p>
                          <div className='topbar-icons mt-5'>
                            <span className='p-0 m-0'>
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

                  </ul>
              <div className="dropdown mt-3">
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Navbar