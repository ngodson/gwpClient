import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import axios from "axios"
import { useEffect } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/autoplay"



export const Testimony = () => {
  
  const [dataDisplay,setDataDisplay] = useState({})

  const getData = async ()=>{
  await axios.get("http://localhost:3001/api/add/testimonies").then((response)=>{
    console.log(response.data)
  setDataDisplay(response)
  })
  
  }

  useEffect(()=>{
    getData()
  },[])


  return (
   
    <section className='testimonies'>
        <div className='testimoniesContainer'>
         <h2 className='testimonyH2'> Testimonies</h2>
    <Swiper className='swiperContainer'
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={3}
    //   navigation={true}
      autoplay={{delay:2000}}
      effect={"coverflow"}
      z-index={1}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
        
      <SwiperSlide className='testy' wrapper>
      <div className='slider'>
      he
      <hr />
      <div className='testimonyName'>Titus</div>
      </div>
      
      </SwiperSlide>
      <SwiperSlide className='testy'>
      <div className='slider'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      <hr />
      <div className='testimonyName'>Phillip</div>
      </div>
      
      </SwiperSlide>
      <SwiperSlide className='testy'>
      <div className='slider'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      <hr />
      <div className='testimonyName'>Jude</div>
      </div>
      
      </SwiperSlide>
      <SwiperSlide className='testy'>
      <div className='slider'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      <hr />
      <div className='testimonyName'>James</div>
      </div>
      
      </SwiperSlide>
      <SwiperSlide className='testy'>
      <div className='slider'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      <hr />
      <div className='testimonyName'>Mark</div>
      </div>
      </SwiperSlide>
      
      <SwiperSlide className='testy'>
      <div className='slider'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      <hr />
      <div className='testimonyName'>Mattew</div>
      </div>
      
      </SwiperSlide>
      <SwiperSlide className='testy'>
      <div className='slider'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      <hr />
      <div className='testimonyName'>John</div>
      </div>
      
      </SwiperSlide>
      <SwiperSlide className='testy'>
      <div className='slider'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      <hr />
      <div className='testimonyName'>Romans</div>
      </div>
      
      </SwiperSlide>
      <SwiperSlide className='testy'>
      <div className='slider'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      <hr />
      <div className='testimonyName'>Galatians</div>
      </div>
      
      </SwiperSlide>
    
      ...
    </Swiper>
    </div>
    </section>
  );
};