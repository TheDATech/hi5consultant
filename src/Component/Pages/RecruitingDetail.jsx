import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

export const RecruitingDetail=()=>{
    const { slug } = useParams();

    return(
        <>
              <div className="Breadrum" style={{backgroundImage:'url(../../images/industry.jpeg)',backgroundSize:"100% 100%",height:"90vh"}}>
         <div className='content' style={{zIndex:'1200'}}>
                     {slug==="cybersecurity" && (<h1 className='animate__animated animate__fadeInUp servicebreadrumtitle1'>Cybersecurity</h1>)}
                     {slug==="aerospace" && (<h1 className='animate__animated animate__fadeInUp servicebreadrumtitle1'>Aerospace</h1>)}
                     {slug==="systems_engineering_&_administration" && (<h1 className='animate__animated animate__fadeInUp servicebreadrumtitle1'>Systems Engineering & Administration</h1>)}
                     {slug==="network_design_&_architecture" && (<h1 className='animate__animated animate__fadeInUp servicebreadrumtitle1'>Network Design & Architecture</h1>)}
                     {slug==="program_&_project_management" && (<h1 className='animate__animated animate__fadeInUp servicebreadrumtitle1'>Program & Project Management</h1>)}
                     {slug==="information_systems_security_Officer/Engineer" && (<h1 className='animate__animated animate__fadeInUp servicebreadrumtitle1'>Information Systems Security Officer/Engineer</h1>)}
                     {slug==="software_engineer" && (<h1 className='animate__animated animate__fadeInUp servicebreadrumtitle1'>Software Engineer</h1>)}
                     {slug==="sharePoint_developer" && (<h1 className='animate__animated animate__fadeInUp servicebreadrumtitle1'>SharePoint Developer</h1>)}
                     {slug==="peopleSoft_developer" && (<h1 className='animate__animated animate__fadeInUp servicebreadrumtitle1'>PeopleSoft Developer</h1>)}
                     {slug==="database_administrator" && (<h1 className='animate__animated animate__fadeInUp servicebreadrumtitle1'>Database Administrator</h1>)}
                     {slug==="bigData_architect" && (<h1 className='animate__animated animate__fadeInUp servicebreadrumtitle1'>BigData Architect</h1>)}
                     {slug==="IT_specialist" && (<h1 className='animate__animated animate__fadeInUp servicebreadrumtitle1'>IT Specialist</h1>)}
                     {slug==="web_applications" && (<h1 className='animate__animated animate__fadeInUp servicebreadrumtitle1'>Web Applications</h1>)}
                     {slug==="software’s" && (<h1 className='animate__animated animate__fadeInUp servicebreadrumtitle1'>Software’s</h1>)}
                     {slug==="mob_applications" && (<h1 className='animate__animated animate__fadeInUp servicebreadrumtitle1'>Mob Applications</h1>)}
                    
                </div>
       <div className="Breadrum-overlay" style={{height:"90vh"}}></div>
      </div>
      <div className="container mt-17 develop">
       <div className="text-center">
       <p>Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy. Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy. Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy. Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy.</p>
       </div>
      </div>
      <div className="container">
            <div className="text-center"> <h2 className="industrytitle">Government</h2>
         <img src="../../images/industrydot.JPG"/></div>
         <Swiper  autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }} navigation={{
          clickable: true,
        }}    
        loop="true"
        modules={[Autoplay, Navigation]}
        slidesPerView={6}
        breakpoints={{
         320: {
            slidesPerView: 3,
          },
         640: {
           slidesPerView: 3,
         },
         768: {
           slidesPerView: 4,
         },
         1024: {
           slidesPerView: 5,
         },
       }}
        className="mySwiper comm mt-5 mb-5"
        >
         <SwiperSlide>
            <div className='commericalimgbox'>
            <img src='../../images/Commercial1.png' alt=""/>
            </div>
         </SwiperSlide>
         <SwiperSlide>
         <div className='commericalimgbox'>
            <img src='../../images/Commercial2.png' alt=""/>
            </div>
         </SwiperSlide>
         <SwiperSlide>
         <div className='commericalimgbox'>
            <img src='../../images/Commercial3.png' alt=""/>
            </div>
         </SwiperSlide>
         <SwiperSlide>
         <div className='commericalimgbox'>
            <img src='../../images/Commercial4.png' alt=""/>
            </div>
         </SwiperSlide>
         <SwiperSlide>
         <div className='commericalimgbox'>
            <img src='../../images/Commercial5.png' alt=""/>
            </div>
         </SwiperSlide>
         <SwiperSlide>
         <div className='commericalimgbox'>
            <img src='../../images/Commercial6.png' alt=""/>
            </div>
         </SwiperSlide>
         <SwiperSlide>
         <div className='commericalimgbox'>
            <img src='../../images/Commercial7.png' alt=""/>
            </div>
         </SwiperSlide>
         <SwiperSlide>
         <div className='commericalimgbox'>
            <img src='../../images/Commercial8.png' alt=""/>
            </div>
         </SwiperSlide>
         <SwiperSlide>
         <div className='commericalimgbox'>
            <img src='../../images/Commercial9.png' alt=""/>
            </div>
         </SwiperSlide>
         <SwiperSlide>
         <div className='commericalimgbox'>
            <img src='../../images/Commercial1.gif' alt=""/>
            </div>
         </SwiperSlide>
         <SwiperSlide>
         <div className='commericalimgbox'>
            <img src='../../images/Commercial10.png' alt=""/>
            </div>
         </SwiperSlide>
        </Swiper>
        </div>
      <div className="container-fluid" style={{backgroundColor:'#F8F9FA'}}>
        <div className="container">
            <div className="row mx-0 pt-8 pb-5">
            <div className="col-md-6">
            <h6 className="subtitleindustry subtitle">Know Who We Are</h6>
            <h3 className="mt-2 mb-2 industryabout">About our company</h3>
                  <p className="industryaboutpara">We are a Recruiting and Web Development company. Our founders have extensive experience in industries like Recruiting and Staffing, Web Design and Development, Graphic Designing, Sales and Marketing. We work with a problem solving mindset for our customers and have a goal to deliver good quality work at a fair price. We’re customer focused, customer obsessed and work as your partner to achieve a common goal.</p>
                   <img src="../../images/quote.JPG"/>
                    <p className="mx-3 mb-0 industryaboutpara">
Its an approach that we provide the best Recruitment on hard to fill positions and the best Web Development to Our Customers.</p>
                <p className="mx-5" style={{color:'#8678B8',fontSize:'12px',fontWeight:"700"}}>– CEO @ Hi5-Consulting</p>
                </div>
                <div className="col-md-6">
                    <div style={{width:'100%',height:'100%'}}>
                    <img src="../../images/hand-shake.jpg" alt="" style={{width:'100%',height:'100%',objectFit:"cover"}}/>
                    </div>
                </div>
            </div>
        </div>
        </div>
      <div className="servicebg container-fluid agencies">
          <h1 className="text-center title pt-4 mb-4">Agencies we've placed candidates at</h1>
          <div className="container pb-5 pt-2">
           <div className="row">
            <div className="col-md-3 box">
              <img src='../../images/agen1.png' alt=''/>
            </div>
            <div className="col-md-3 box">
              <img src='../../images/agen2.png' alt=''/>
            </div>
            <div className="col-md-3 box">
              <img src='../../images/agen3.png' alt=''/>
            </div>
            <div className="col-md-3 box" style={{borderRight:'none'}}>
              <img src='../../images/agen4.png' alt=''/>
            </div>
            <div className="col-md-3 box" style={{borderBottom:'none'}}>
              <img src='../../images/agen5.png' alt=''/>
            </div>
            <div className="col-md-3 box" style={{borderBottom:'none'}}>
              <img src='../../images/agen6.png' alt=''/>
            </div>
            <div className="col-md-3 box"  style={{borderBottom:'none'}}>
              <img src='../../images/agen7.png' alt=''/>
            </div>
            <div className="col-md-3 box"  style={{borderRight:'none',borderBottom:'none'}}>
              <img src='../../images/agen8.png' alt=''/>
            </div>
           </div>
          </div>
          <div className="servicebg-overlay"></div>
        </div>

        </>
    )
}
