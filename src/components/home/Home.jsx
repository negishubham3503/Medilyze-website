import React from 'react';
import './Home.css';
import logo from '../../images/logo.png';
import ambulance from '../../images/emergency-ambulance.png';
import bulb from '../../images/light-bulb.png';
import briefcase from '../../images/medicine-briefcase.png';
import ehr from '../../images/bofu-shaw-gs4EYZuLdlg-unsplash.jpg';
import paperless from '../../images/ante-samarzija-F7m3QZJ_4mg-unsplash.jpg';
import computerizedTop from '../../images/cdc-p33DqVXhWvs-unsplash.jpg';
import computerizedBottom from '../../images/brandon-holmes-GofYo51GQ_4-unsplash.jpg';

export default function Home() {
    return (
        <div className="container">
            <div className="tagline">
                <img src={logo} style={{width: "8rem", height: "7rem"}} />
                <div className="focus-text">
                    <span className="heading-2">We Care About</span>
                    <span className="heading-1">Your Health</span>
                    <span className="heading-3">Check out our Services</span>
                    <div className="icons">
                        <img className="icon" src={ambulance} />
                        <img className="icon" src={bulb} />
                        <img className="icon" src={briefcase} />
                    </div>
                </div>
            </div>
            <div className="platform">
                <a href="https://medilyzeregistration.herokuapp.com/" target="_blank"><div className="link registration-app">Registration</div></a>
                <a href="https://medilyzedoctor.herokuapp.com/" target="_blank"><div className="link doctor-app">Doctor</div></a>
                <a href="https://medilyzediagnosis.herokuapp.com/" target="_blank"><div className="link diagnosis-app">Diagnosis</div></a>
                <a href=""><div className="link patient-app" target="_blank">Patient</div></a>
            </div>
            <div className="product">
                <h1 style={{color: "black"}}>Welcome to Medilyze!</h1>
                <span className="sub-heading">Creating products for healthcare</span>
                <p className="desc"> A centralized healthcare system makes health workers and patients data available at a central location in order to
                    <span style={{padding: "0 3rem"}}> allow access to patient information at each and every posible potential venue providing privacy, security and </span>
                    autonomy to the patients
                </p>
                <button className="blog-button">Go To Blog</button>
                <div className="features">
                    <div className="feature">
                        <h1 style={{color: "black", marginTop: "2rem"}}>EHR Server</h1>
                        <p className="feature-desc">Medilyze created a centralized server to manage data which makes it available to every healthcare entity on a click</p>
                        <img src={ehr} />
                    </div>
                    <div className="feature">
                        <img src={paperless} />
                        <h1 style={{color: "black", marginTop: "2rem"}}>Paperless</h1>
                        <p className="feature-desc">Medilyze makes everything involved in the process of healthcare online and thus reduces paper wastage</p>
                    </div>
                    <div className="feature">
                        <img src={computerizedTop} />
                        <h1 style={{color: "black", marginTop: "4rem"}}>Computerized</h1>
                        <p className="feature-desc" style={{marginBottom: "2.3rem"}}>Medilyze is making the healthcare system Computerized, thus reducing human effort of managing large data</p>
                        <img src={computerizedBottom} />
                    </div>
                </div>
            </div>
            <div className="contact">
                <h3>Copyright © Medilyze</h3>
                <h3>All rights reserved</h3>
                <h3>Contact Us</h3>
            </div>
        </div>
    )
}