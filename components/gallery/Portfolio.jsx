import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
import img5 from '../../img/5.png';
import img7 from '../../img/7.png';
import g1 from '../../img/g1.jpg';
import g2 from '../../img/g2.jpg';
import g3 from '../../img/g3.jpg';
import g4 from '../../img/g4.jpg';
import g5 from '../../img/g5.jpg';
import g7 from '../../img/g7.jpg';
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Lets Share Some</span>
      <span>Moments With Uh All!!</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={g1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={g2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={g3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={g4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={g5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={g7} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
