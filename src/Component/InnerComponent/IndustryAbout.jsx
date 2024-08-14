import { BiSolidQuoteAltRight } from "react-icons/bi";
export const IndustryAbout=()=>{
    return(
        <div className="container-fluid" style={{backgroundColor:'#F8F9FA'}}>
        <div className="container">
            <div className="row mx-0 pt-8 pb-5">
            <div className="col-md-6">
            <h6 className="subtitleindustry subtitle">Know Who We Are</h6>
            <h3 className="mt-2 mb-2 industryabout">About our company</h3>
                  <p className="industryaboutpara">We are a Recruiting and Web Development company. Our founders have extensive experience in industries like Recruiting and Staffing, Web Design and Development, Graphic Designing, Sales and Marketing. We work with a problem solving mindset for our customers and have a goal to deliver good quality work at a fair price. We’re customer focused, customer obsessed and work as your partner to achieve a common goal.</p>
                   <img src="/images/quote.JPG"/>
                    <p className="mx-3 mb-0 industryaboutpara">
Its an approach that we provide the best Recruitment on hard to fill positions and the best Web Development to Our Customers.</p>
                <p className="mx-5" style={{color:'#8678B8',fontSize:'12px',fontWeight:"700"}}>– CEO @ Hi5-Consulting</p>
                </div>
                <div className="col-md-6">
                    <div style={{width:'100%',height:'100%'}}>
                    <img src="images/hand-shake.jpg" alt="" style={{width:'100%',height:'100%',objectFit:"cover"}}/>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}