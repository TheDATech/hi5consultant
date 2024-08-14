import { Link } from "react-router-dom";
import { SlScreenDesktop } from "react-icons/sl";
import { FaMobileScreenButton,FaAccusoft } from "react-icons/fa6";
import { Commerical } from "../InnerComponent/Commerical";
import { IndustryAbout } from "../InnerComponent/IndustryAbout";
import { Agencies } from "../InnerComponent/Agencies";

export const Development=()=>{
    return(
        <>
          <div className="Breadrum" style={{backgroundImage:'url(images/industry.jpeg)',backgroundSize:"100% 100%",height:"90vh"}}>
         <div className='content' style={{zIndex:'1200'}}>
                    <h1 className='animate__animated animate__fadeInUp servicebreadrumtitle1'>Industries</h1>
                    <p style={{fontWeight:"400",fontSize:"14px"}}>Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy.</p>
                </div>
       <div className="Breadrum-overlay" style={{height:"90vh"}}></div>
      </div>
      <div className="container mt-17 develop">
       <div className="text-center"> <h2 className="industrytitle">Development for</h2>
         <img src="images/industrydot.JPG"/></div>
        <div className="row justify-content-center mt-4 mb-4">
            <div className="col-md-4">
                <Link to="/development/web_applications"><div className="box"><SlScreenDesktop/></div><h4>Web Applications</h4></Link>
            </div>
            <div className="col-md-3">
                <Link to="/development/software’s"><div className="box"><FaAccusoft/></div><h4>Software’s</h4></Link>
            </div>
            <div className="col-md-4">
                <Link to="/development/mob_applications"><div className="box"><FaMobileScreenButton/></div><h4>Mob Applications</h4></Link>
            </div>
        </div>
      </div>
      <Commerical title="Commercial"/>
      <IndustryAbout/>
      <Agencies/>
      </>
)}