import { Breadrum } from "../InnerComponent/Breadrum"
import { ServiceLeft } from "../InnerComponent/ServiceLeft"
import { ServiceRight } from "../InnerComponent/ServiceRight";
import Socialmediaprofile from './images/41389-interview-get-ready-to-work-job-recruitment-isometric-hiring-process-1.json';
import Webdevelop from './images/39998-web-development.json';
import Socialmedia from './images/30953-social-media-marketing.json';
import Google from './images/35621-google-icons-search.json';
import Vector from "./images/lf30_editor_vlx28ylv.json";
import { Agencies } from "../InnerComponent/Agencies";

export const Service=()=>{
    return(
        <>
        <Breadrum title="Recruitment &
Development" image="images/breadservice.jpg" para="Since the exceptionally starting of our commerce, we’ve been interfacing our clients with difficult discoverability within the Data Innovation space. Our recruitment consulting firm ability ranges over a wide cluster of subdomains counting Recruitment & Development"/>
        <ServiceLeft id='recruitment-&-Staffing' title='Recruiting and Staffing Industry' para='When recruiting for your company, searching for the perfect hire can be a hassle. Let us make this job easier for you as we make sure to connect you with the best talent available that matches with all of your staffing requirements. It’s always our top priority to make sure you hire someone that not only produces the work required, but also fits in your company just as well. While working closely with your company, it is our goal to make sure every single hire is a 100% satisfactory.' subtitle='' image={Socialmediaprofile} height="403" margin="1rem"/>
        <ServiceRight id="Web-Development-and-Designing" title='Web Development & Designing' para='Our web development and designing team is your one stop to solving all your web related issues. Web design plays a huge part in making your company look their best whether it be through an interactive web app or a complex website. We want to provide our clients with top-of-the-line services that would guarantee that your web layout meets your company’s potential, connecting you and your users in such a way that is efficient and unique.' subtitle='' image={Webdevelop}/>
        <ServiceLeft id='Social-Media-Marketing' title='Social Media Marketing' para='In this new age, social media marketing is important for any company to get their brand out there and navigate their way into the market. It is a way for companies to connect to their clients and make sure potential consumers are aware of where they might be able to avail the services they need. Social media has become one of the primary platforms to utilize in order to market your company. We are SMM services company put effort in identifying ways to make sure your company not only reaches the desired audiences effectively but also leaves a mark!' subtitle='' image={Socialmedia}/>
        <ServiceRight id="Graphic-Designing" title='Graphic Designing' para='It takes a second to make an impression that lasts, and with the right tools, your company might just be able to impress the right people. Whether it’s with an attractive logo or a pop of color, or anything else you have in mind; our graphic designing services will cater to all your needs. Our designers will add the little spark your company needs to catch people’s eyes. In order to make sure your company’s ideas and services are projected clearly to customers in such a way that makes them stick around, our graphic designers will work closely with you to make your vision comes to life.' subtitle='' image={Vector}/>
        <ServiceLeft id="Search-Engine-Optimization" title='Search Engine Optimization' para='Building a strong SEO foundation is the first step to making sure your company is meeting its maximum online potential. It helps you target the right audience, build a solid online presence, and manage your social media traffic. Our SEO price packages and digital marketing packages USA just might be the thing for your company to break into the online market.' subtitle='' image={Google}/>
        <div className="row mx-0 text-center">
            <h1 className="mt-5 mb-4 loveservice">FALL IN LOVE WITH OUR SERVICES</h1>
            <div className="elementor-divider"><p className="elementor-divider-separator" style={{borderColor:'#b7abe3'}}>
						</p></div>

        </div>
        <Agencies/>
        </>
    )
}