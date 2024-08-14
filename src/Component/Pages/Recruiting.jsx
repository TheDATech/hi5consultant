import { Link } from "react-router-dom"
import { Agencies } from "../InnerComponent/Agencies"
import { Commerical } from "../InnerComponent/Commerical"
import { IndustryAbout } from "../InnerComponent/IndustryAbout"
import { FaFingerprint,FaNetworkWired,FaConnectdevelop,FaDev,FaSitemap } from "react-icons/fa6";
import { FaFighterJet, FaServer } from "react-icons/fa";
import { FiDatabase } from "react-icons/fi";

export const Recruiting=()=>{
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
       <div className="text-center"> <h2 className="industrytitle">Positions we are<br/>
Recruiting for</h2>
         <img src="images/industrydot.JPG"/></div>
        <div className="row mt-4 mb-4">
            <div className="col-md-4">
                <Link to="/recruiting/cybersecurity"><div className="box"><FaFingerprint/></div><h4>Cybersecurity</h4></Link>
            </div>
            <div className="col-md-3">
                <Link to="/recruiting/aerospace"><div className="box"><FaFighterJet/></div><h4>Aerospace</h4></Link>
            </div>
            <div className="col-md-4 abcd">
                <Link to="/recruiting/systems_engineering_&_administration"><div className="box"><img src='images/system.JPG' alt="" style={{borderRadius:'50%'}}/></div><h4>Systems Engineering & Administration</h4></Link>
            </div>
            <div className="col-md-4">
                <Link to="/recruiting/network_design_&_architecture"><div className="box"><FaNetworkWired/></div><h4>Network Design & Architecture</h4></Link>
            </div>
            <div className="col-md-4">
                <Link to="/recruiting/program_&_project_management"><div className="box"><img src='images/use.JPG' alt="" style={{borderRadius:'50%'}}/></div><h4>Program & Project Management</h4></Link>
            </div>
            <div className="col-md-4">
                <Link to="/recruiting/information_systems_security_Officer/Engineer"><div className="box"><img src='images/cloud.JPG' alt="" style={{borderRadius:'50%'}}/></div><h4>Information Systems Security Officer/Engineer</h4></Link>
            </div>
            <div className="col-md-4">
                <Link to="/recruiting/software_engineer"><div className="box"><img src='images/software.JPG' alt="" style={{borderRadius:'50%'}}/></div><h4>Software Engineer</h4></Link>
            </div>
            <div className="col-md-4">
                <Link to="/recruiting/sharePoint_developer"><div className="box"><FaConnectdevelop/></div><h4>SharePoint Developer</h4></Link>
            </div>
            <div className="col-md-4">
                <Link to="/recruiting/peopleSoft_developer"><div className="box"><FaDev/></div><h4>PeopleSoft Developer</h4></Link>
            </div>
            <div className="col-md-4">
                <Link to="/recruiting/database_administrator"><div className="box"><img src='images/database.JPG' alt="" style={{borderRadius:'50%'}}/></div><h4>Database Administrator</h4></Link>
            </div> <div className="col-md-4">
                <Link to="/recruiting/bigData_architect"><div className="box"><FiDatabase/></div><h4>BigData Architect</h4></Link>
            </div> <div className="col-md-4">
                <Link to="/recruiting/IT_specialist"><div className="box"><FaSitemap/></div><h4>IT Specialist</h4></Link>
            </div>
        </div>
      </div>
      <Commerical title="Government"/>
      <IndustryAbout/>
      <Agencies/>
      </>
    )}