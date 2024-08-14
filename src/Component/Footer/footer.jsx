import { Link, useLocation } from 'react-router-dom';
import './footer.css';
import { FaLinkedin } from 'react-icons/fa6';
import { HiOutlineMailOpen } from "react-icons/hi";
import { useLottie } from "lottie-react";
import FAQ from './lf30_editor_k0lhaaui.json';
import { useEffect } from 'react';


export const Footer=()=>{
  const options = {
    animationData: FAQ,
    loop: true
  };
  const { View } = useLottie(options);

  const location = useLocation();
  console.log('location',location)

    useEffect(() => {
        const sectionId = location.hash.substring(1);
        console.log('location',location,'sectionId',sectionId)
        if (sectionId) {
            const sectionElement = document.getElementById(sectionId);
            if (sectionElement) {
                sectionElement.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);
    return(
       <footer className='footerbackground'>
         <div className='container'>
             <div className='row pt-3 pb-3'>
                <div className='col-md-4 offset-md-1'>
                  <h2>About Hi5 Consulting</h2>
                  <span className='spanwidth'></span>
                  <p className='mb-0 mere'>We are a Recruiting and Web Development company. Our founders have extensive experience in industries like Recruiting and Staffing, Web Design and Development, Graphic Designing, Sales and Marketing. We work with a problem solving mindset for our customers and have a goal to deliver good quality work at a fair price. We’re customer focused, customer obsessed and work as your partner to achieve a common goal.</p>
                  <h2 style={{fontSize:"17px"}}>Connect With Us</h2>
                  <span className='spanwidth'></span>
                  <ul className='social mt-3'>
                    <li><Link to="https://www.linkedin.com/company/hi5-consulting" target='__blank'><FaLinkedin/></Link></li>
                    <li><Link to="mailto:bilal@hi5-consulting.com" target='__blank'><HiOutlineMailOpen/></Link></li>
                  </ul>
                </div>
                <div className='col-md-2 hgu'>
                <h2 style={{width:"7rem"}}>Services</h2>
                <span className='spanwidth'></span>
                <ul><li><Link to="/services#recruitment-&-Staffing">Recruitment & Staffing</Link></li>
                <li><Link to="/services#Web-Development-and-Designing">Web Development and Designing</Link></li>
                <li><Link to="/services#Social-Media-Marketing">Social Media Marketing</Link></li>
                <li><Link to="/services#Graphic-Designing">Graphic Designing</Link></li>
                <li><Link to="/services#Search-Engine-Optimization">Search Engine Optimization</Link></li></ul>
                <h2 style={{width:"7rem"}}>Industries</h2>
                <span className='spanwidth'></span>
                <ul><li><Link to='/recruiting'>Recruiting</Link></li>
                <li><Link to="/development">Development</Link></li>
              </ul>
                </div>
                <div className='col-md-4 text-center'>
                  <div className='faqicon'>
                  {View}
                  </div>
                  <Link to="/faq"><button className='click'>Click here</button></Link>
                </div>
             </div>
             <div className='row'>
              <p className='text-center copyright'>Copyright © 2024 Hi5 Consulting | All Rights Reserved Hi5 Consulting | Developed by <Link to="https://thedatech.com">DA Tech</Link></p>
              </div>
         </div>
       </footer>
    )
}