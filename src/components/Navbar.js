import React,{useState} from 'react'
import logo_svg from '../svgs/headerlogo.svg'
import logo_image from '../svgs/logoimage.svg'
import messanger_icon from '../svgs/messanger.svg'
import twiter_icon from '../svgs/twiter.svg'
import eight_icon from '../svgs/eight.svg'
import music_icon from '../svgs/music.svg'
import phone_svg from '../svgs/phone.svg'
import phonecall_svg from '../svgs/phonecall.svg'
import sbotox_svg from '../svgs/servicesicons/sbotox.svg'
import biodentical_svg from '../svgs/servicesicons/biodentical.svg'
import peptide_svg from '../svgs/servicesicons/biodentical.svg'
import botoxtwo_svg from '../svgs/servicesicons/botoxtwo.svg'
import tesosterone_svg from '../svgs/servicesicons/tesosterone.svg'
import jar_svg from '../svgs/servicesicons/jar.svg'
import iv_svg from '../svgs/servicesicons/iv.svg'
import medical_svg from '../svgs/servicesicons/medical.svg'


const Navbar = () => {
  const [servicesPopUpOpen, setServicesPopUpOpen] = useState(false)
  return (
            <div className='my-nav'>
              <div className='w-100 bg-dark text-light p-2 topbar-section'>
                <div className="container">
                    <div className="topbar">
                        <div>
                            <p>HOU: <img src={phone_svg} alt="" /> (832) 770-7975 &nbsp;&nbsp; Training: <img src={phonecall_svg} alt="" srcset="" /> (832) 953-0313</p>
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
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-10">
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
                        <li className="nav-item" onClick={()=>setServicesPopUpOpen(!servicesPopUpOpen)}>
                          <a className="nav-link" aria-current="page" href="#">Services</a>
                        </li>

                        <div className='services-popup-box' style={servicesPopUpOpen ? {display:'block'}:{display:'none'}}>
                          <div className="row">
                            <div className="col-4">
                              <img src={sbotox_svg} alt="" srcset="" /><span>Botox/Dermal Fillers</span>
                            </div>
                            <div className="col-4">
                              <img src={biodentical_svg} alt="" />
                              <span>Bioidentical Hormone Replacement Therapy</span>
                            </div>
                            <div className="col-4">
                              <img src={peptide_svg} alt="" />
                              <span>Peptide Therapy (Sermorelin/ Ipamorelin)</span>
                            </div>
                            <div className="col-4">
                              <img src={botoxtwo_svg} alt="" srcset="" />
                              <span>Botox / Dermal Filler Parties</span>
                            </div>
                            <div className="col-4">
                              <img src={tesosterone_svg} alt="" srcset="" />
                              <span>Tesosterone therapy</span>
                            </div>
                            <div className="col-4">
                              <img src={jar_svg} alt="" srcset="" />
                              <span>Mobile Labs/ Micronutrient Testing</span>
                            </div>
                            <div className="col-4">
                              <img src={iv_svg} alt="" srcset="" />
                              <span>IV therapy</span>
                            </div>
                            <div className="col-4">
                              <img src={medical_svg} alt="" srcset="" />
                              <span>Medical Weight Loss</span>
                            </div>
                          </div>
                        </div>

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
        </div>
       </div>


          
        {/* Navigation bar for mobile device  */}
          <div className="offcanvas offcanvas-start bg-dark" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header">
              {/* <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5> */}
              <button type="button" className="btn-close btn-close-white text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
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
                            <button type="button" className="btn golden-border text-light w-50">BOOK NOW</button>
                          </li>
                          <li className="nav-item" style={{marginBottom: '10px'}}>  
                            <button type="button" className="btn text-dark bg-golden w-50">LOGIN TO RMD</button>
                          </li>
                          <li className="nav-item">
                            <button type="button" className="btn text-dark bg-light w-50">SIGN UP RMD</button>
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



