import { NavLink, useLocation } from 'react-router-dom';
import { IoIosArrowDown,IoIosArrowUp,IoMdClose } from "react-icons/io";
import { RiMenu4Line } from "react-icons/ri";
import { HiMenu } from "react-icons/hi";
import './navbar.css';
import { useState } from 'react';

export const Navbar=()=>{
  const [isClicked, setIsClicked] = useState(false);
    const [open,setOpen]=useState(false);
    const location=useLocation();
    console.log('isHovered',isClicked)

    const togglebtn=()=>{
     if(open===true){
        setOpen(false)
     }else{
        setOpen(true)
     }
    }

    const handleClick = () => {
      setIsClicked(!isClicked);
    };
  
    const handleLinkClick = () => {
      setIsClicked(false);
    };

    return(
        <>
          <nav className='navbar-container sticky'>
           <div className='container d-flex'>
           <NavLink to="/" className='logo' style={{textDecoration:"none"}}>
                <img src='../../logo.png' alt='logo'/>
                <div className='leftdistance'>
                <h1>HI5 Consulting</h1>
                <p>Recruitment & Development</p>
                </div>
            </NavLink>
            <div className='menu'>
              <ul>
                <li><NavLink to='/' className={location.pathname==='/'?'bg-light':''}>Home</NavLink></li>
                <li><NavLink to='/services' className={location.pathname==='/services'?'bg-light':''}>Services</NavLink></li>
                <li><NavLink to='/capabilities' className={location.pathname==='/capabilities'?'bg-light':''}>Capabilities</NavLink></li>
                <li><NavLink to='#' className={location.pathname==='/recruiting'?'bg-light':''} onClick={handleClick}
        >Industries {isClicked ? <IoIosArrowUp /> : <IoIosArrowDown />}
               {isClicked && ( <ul className='submenu'>
                    <li><NavLink to='/recruiting' className={location.pathname==='/recruiting'?'bg-light':''} onClick={handleLinkClick}>Recruiting</NavLink></li>
                    <li><NavLink to='/development' className={location.pathname==='/development'?'bg-light':''} onClick={handleLinkClick}>Development</NavLink></li>
                </ul>)} </NavLink>
                </li>
                <li><NavLink to='/job-openings' className={location.pathname==='/job-openings'?'bg-light':''}>Jobs</NavLink></li>
                <li><NavLink to='/contact-us' className={location.pathname==='/contact-us'?'bg-light':''}>Contact Us</NavLink></li>
              </ul>
            </div>
            <button className='menuicon' onClick={togglebtn}>{open?<IoMdClose/>:<HiMenu/>}</button>
           </div>
        </nav> 
        {open &&  <ul className='mobilemenu'>
        <li><NavLink to='/' className={location.pathname==='/'?'bg-light':''}>Home</NavLink></li>
                <li><NavLink to='/services' className={location.pathname==='/services'?'bg-light':''}>Services</NavLink></li>
                <li><NavLink to='/capabilities' className={location.pathname==='/capabilities'?'bg-light':''}>Capabilities</NavLink></li>
                <li><NavLink to='#' className={location.pathname==='/recruiting'?'bg-light':'dropmenumm'}  onClick={handleClick}>Industries {isClicked ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </NavLink>
                {isClicked &&( <ul className='submenu'>
                    <li><NavLink to='/recruiting' className={location.pathname==='/recruiting'?'bg-light':''} onClick={handleLinkClick}>Recruiting</NavLink></li>
                    <li><NavLink to='/development' className={location.pathname==='/development'?'bg-light':''} onClick={handleLinkClick}>Development</NavLink></li>
                </ul>)}
                </li>
                <li><NavLink to='/job-openings' className={location.pathname==='/job-openings'?'bg-light':''}>Jobs</NavLink></li>
                <li><NavLink to='/contact-us' className={location.pathname==='/contact-us'?'bg-light':''}>Contact Us</NavLink></li>
        </ul>}
        </>
    )
}

