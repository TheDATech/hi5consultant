import { Agencies } from "../InnerComponent/Agencies"
import { FAQBox } from "../InnerComponent/FAQBox"

const data=[{
    id:1,
    q:'What Does Hi5 Consulting Do?',
    ans:`<p>Our goal at Hi5 consulting is to provide business with top-notch services available at the lowest price. Our services include recruitment, so your company can hire capable and skilled individuals best suited for your company from our large and diverse pool of candidates.</p><p>We also offer development services for your company’s needs, which includes developing web applications, mobile applications, and other software.</p>`
},{id:2,q:'What Industries Have You Recruited For?',ans:`<p>We have helped recruit across multiple industries, these include:</p>
<ul><li>Aerospace & Defense</li><li>US Federal Government</li><li>Information Technology/Software</li>
<li>Health Care</li><li>Energy</li><li>Commercial Construction</li>
<li>Education</li><li>Agriculture</li></ul><p>You can read about these in more detail at our <a href="https://hi5-consulting.comrecruiting/?_ga=2.252447817.1561714914.1710713471-567459480.1709665756&_gl=1*eg7o2k*_ga*NTY3NDU5NDgwLjE3MDk2NjU3NTY.*_ga_N3EKBJ8TWW*MTcxMTEzMjYxMi4yMy4wLjE3MTExMzI2MTIuMC4wLjA." target="__blank">‘Industries’</a> page.<br/>We have also placed candidates in the following agencies:</p><ul><li>Department of Defense</li><li>Department of Labor</li><li>Department of Justice</li><li>Department of Health</li><li>Department of Homeland Security</li><li>Department of Energy</li></ul><p>Our team includes experienced individuals who are qualified to place highly capable candidates in hard to fill positions. We provide cleared recruiting that includes:</p><ul><li>Public Trust</li><li>Secret Clearance</li><li>Top Secret Clearance</li><li>Top Secret SCI Clearance</li><li>CI Polygraph</li><li>Full Scope Polygraph</li></ul>`},
{id:3,q:'Why Would We Hire Through Hi5 Consulting?',ans:`<p>At Hi5 consulting, our goal is to make your hiring process easier for you. We make sure to connect businesses with individuals who would not only fit right into your company, but also help you unlock your company’s potential. Our pool of candidates consists of people who are highly skilled and multi-faceted.</p><p>We want you to be fully satisfied with your hiring process and in doing so, we will collaborate with you to get you the best fit for your company.</p>`},
{id:4,q:'What Other Services Do You Offer?',ans:`<p>Here is a list of our services:</p><ul><li>Web Development and Designing</li><li>Social Media Marketing</li><li>Graphic Designing</li><li>Search Engine Optimization</li></ul><p>We are basically your one stop to taking your business to the next level!</p>`},{id:5,q:'How Do We Connect?',ans:`<p>Make an appointment with us! Visit our website’s <a href='/contact-us'>Contact Us</a> page and submit your details in order to start your journey with us.</p>`}]

export const FAQ=()=>{

    return(
        <>
              <div className="Breadrum" style={{backgroundImage:'url(images/FAQ.jpg)'}}>
         <div className='content' style={{zIndex:'1200'}}>
                    <h1 className='animate__animated animate__fadeInUp'>FAQ</h1>
                </div>
       <div className="Breadrum-overlay"></div>
      </div>
        <FAQBox data={data}  />
        <Agencies/>
        </>
    )
}