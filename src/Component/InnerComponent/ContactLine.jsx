import { FaPhone } from "react-icons/fa6";
import { TiStopwatch } from "react-icons/ti";
import { HiOutlineMailOpen } from "react-icons/hi";
import { Link } from "react-router-dom";

export const ContactLine=()=>{
    return(
        <div className="container-fluid" style={{backgroundColor:'#6E57C9'}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-2 col-4  contactline offset-md-1">
                        <Link to="tel:+5715497519" target='__blank'><FaPhone className="mx-2" />571-549-7519</Link>
                    </div>
                    <div className="col-4 text-center contactline offset-md-1">
                        <Link to='mailto:info@hi5-consulting.com' target='__blank'><HiOutlineMailOpen className="mx-2"/>info@hi5-consulting.com</Link>
                    </div>
                    <div className="col-md-3 col-4 text-center contactline" style={{zIndex:"12000"}}>
                    <Link to="/"><TiStopwatch className="mx-2"/>Timing: Mon - Fri: 9am - 6pm</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}