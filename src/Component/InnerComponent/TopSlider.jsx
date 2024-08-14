import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination } from 'swiper/modules';
import 'animate.css';
import { useRef } from 'react';


export const TopSlider=()=>{

    const addAnimationClass = (swiper) => {
        const activeSlide = swiper.slides[swiper.activeIndex];
        const elementsToAnimate = activeSlide.querySelectorAll('.content h1, .content p, .content button');
    
        elementsToAnimate.forEach(el => {
            el.classList.remove('animate__fadeInUp');
            void el.offsetWidth; // Trigger reflow to restart the animation
            el.classList.add('animate__fadeInUp');
        });
    };
    const handleSlideChange = (swiper) => {
        addAnimationClass(swiper);
    };

    return(

        <div className="container-fluid marg">
      <Swiper 
    onSlideChange={handleSlideChange}

      autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }} pagination={{
          clickable: true,
        }}    modules={[Autoplay, Pagination]}
        loop={true}
        speed={500} // Adjust this value for smoothness; lower values make it faster
        effect="slide" 
        onSwiper={(swiper) => addAnimationClass(swiper)}
        className="mySwiper"
        >
            <SwiperSlide>
                <img src="images/1.jpg" alt=""/>
                <div className='content'>
                    <h1 className='animate__animated animate__fadeInUp  animate__delay-custom'>RECRUITMENT AND STAFFING</h1>
                    <p className='animate__animated animate__fadeInUp  animate__delay-custom'>We make sure the best companies connect with the best talent.</p>
                    <button className='animate__animated animate__fadeInUp  animate__delay-custom'>Learn More</button>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img src="images/2.jpg" alt=""/>
                <div className='content'>
                    <h1 className='animate__animated animate__fadeInUp  animate__delay-custom'>WEB DEVELOPMENT AND DESIGN</h1>
                    <p className='animate__animated animate__fadeInUp  animate__delay-custom'>Find experienced web developers and designers that will cater to all your needs.</p>
                    <button className='animate__animated animate__fadeInUp  animate__delay-custom'>Learn More</button>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img src="images/3.jpg" alt=""/>
                <div className='content'>
                    <h1 className='animate__animated animate__fadeInUp  animate__delay-custom'>SOCIAL MEDIA MARKETING</h1>
                    <p  className='animate__animated animate__fadeInUp  animate__delay-custom'>Let us help you make your mark and utilize the intra-web to connect with users globally.</p>
                    <button className='animate__animated animate__fadeInUp  animate__delay-custom'>Learn More</button>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img src="images/4.jpg" alt=""/>
                <div className='content'>
                    <h1 className='animate__animated animate__fadeInUp   animate__delay-custom'>GRAPHIC DESIGNING</h1>
                    <p className='animate__animated animate__fadeInUp   animate__delay-custom'>From stunning layouts to attractive logos, nothing is impossible in the hands of our graphic designers.</p>
                    <button className='animate__animated animate__fadeInUp   animate__delay-custom'>Learn More</button>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img src="images/5.jpg" alt=""/>
                <div className='content'>
                    <h1 className='animate__animated animate__fadeInUp  animate__delay-custom'>SEARCH ENGINE OPTIMIZATION</h1>
                    <p className='animate__animated animate__fadeInUp   animate__delay-custom'>Let us use the best strategies to make your online profile work its magic.</p>
                    <button className='animate__animated animate__fadeInUp   animate__delay-custom'>Learn More</button>
                </div>
            </SwiperSlide>
           </Swiper>
           <div className='row mx-0'>
              <div className='col-1 offset-1'>
                <img src="images/dot-shapes.png" alt='' className='dotboxheight'/>
              </div>
              <div className='col-1 offset-8'>
              <img src="images/dot-shapes.png" alt='' className='dotboxheight'/>
              </div>
           </div>
        </div>


    )
}