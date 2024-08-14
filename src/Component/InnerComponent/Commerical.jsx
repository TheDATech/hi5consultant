import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

export const Commerical=({title})=>{
    return(
        <div className="container">
            <div className="text-center"> <h2 className="industrytitle">{title}</h2>
         <img src="images/industrydot.JPG"/></div>
         <Swiper  autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }} navigation={{
          clickable: true,
        }}    modules={[Autoplay, Navigation]}
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
            <img src='images/Commercial1.png' alt=""/>
            </div>
         </SwiperSlide>
         <SwiperSlide>
         <div className='commericalimgbox'>
            <img src='images/Commercial2.png' alt=""/>
            </div>
         </SwiperSlide>
         <SwiperSlide>
         <div className='commericalimgbox'>
            <img src='images/Commercial3.png' alt=""/>
            </div>
         </SwiperSlide>
         <SwiperSlide>
         <div className='commericalimgbox'>
            <img src='images/Commercial4.png' alt=""/>
            </div>
         </SwiperSlide>
         <SwiperSlide>
         <div className='commericalimgbox'>
            <img src='images/Commercial5.png' alt=""/>
            </div>
         </SwiperSlide>
         <SwiperSlide>
         <div className='commericalimgbox'>
            <img src='images/Commercial6.png' alt=""/>
            </div>
         </SwiperSlide>
         <SwiperSlide>
         <div className='commericalimgbox'>
            <img src='images/Commercial7.png' alt=""/>
            </div>
         </SwiperSlide>
         <SwiperSlide>
         <div className='commericalimgbox'>
            <img src='images/Commercial8.png' alt=""/>
            </div>
         </SwiperSlide>
         <SwiperSlide>
         <div className='commericalimgbox'>
            <img src='images/Commercial9.png' alt=""/>
            </div>
         </SwiperSlide>
         <SwiperSlide>
         <div className='commericalimgbox'>
            <img src='images/Commercial1.gif' alt=""/>
            </div>
         </SwiperSlide>
         <SwiperSlide>
         <div className='commericalimgbox'>
            <img src='images/Commercial10.png' alt=""/>
            </div>
         </SwiperSlide>
        </Swiper>
        </div>
    )
}