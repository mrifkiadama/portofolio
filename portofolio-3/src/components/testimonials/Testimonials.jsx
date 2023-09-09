import React from "react";
import "./testimonials.css";
import { Data } from "./Data";

// Import Swiper React components;
import { Swiper, SwiperSlide } from "swiper/react";

// Import required modules
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Pagination } from 'swiper/modules';


const Testimonials = () => {
  return (
    <section className="testimonial container section">
      <h2 className="section__title">My Clients say</h2>
      <span className="section__subtitle">Testimonial</span>

      <Swiper
        className="testimonials__container mySwiper"
        //   slidesPerView={1}
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
        //   640: {
        //     slidesPerView: 2,
        //     spaceBetween: 20,
        //   },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        //   1024: {
        //     slidesPerView: 5,
        //     spaceBetween: 50,
        //   },
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide className="testimonial__card" key={id}>
              <img src={image} alt={title} className="testimonial__img" />
              <h3 className="testimonial__name">{title}</h3>
              <p className="testimonial__description">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
