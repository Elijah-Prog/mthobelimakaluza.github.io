import React from 'react';
import Todo from '../../../img/Coming-Soon.png';
import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css";
import './Portfolio.css'
import { themeContext } from "../../../Context";
import { useContext} from 'react'

function Portfolio() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id='Portfolio'>
        {/** Heading */}

        <span style={{color: darkMode ? 'white' : ''}}>Recent Projects</span>
        <span>Portfolio</span>

        {/**Slider */}

        <Swiper spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className = 'portfolio-slider'
        >
            <SwiperSlide>
                <img src={Todo} alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img src={Todo} alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img src={Todo} alt="" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio
