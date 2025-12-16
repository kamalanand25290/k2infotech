"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Parallax, Scrollbar, Zoom, EffectCoverflow } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const projects = [
  {
    title: "E-Commerce Website",
    description: "Modern online store built using Next.js & Stripe.",
    image: "../../our-vision.png",
    link: "#",
  },
  {
    title: "Corporate IT Website",
    description: "Professional business website with SEO optimization.",
    image: "../../our-mission.png",
    link: "#",
  },
  {
    title: "SaaS Dashboard",
    description: "Admin dashboard with charts & analytics.",
    image: "../../our-vision.png",
    link: "#",
  },
  {
    title: "Mobile App UI",
    description: "React Native mobile app UI & UX.",
    image: "../../our-mission.png",
    link: "#",
  },
  {
    title: "SaaS Dashboard",
    description: "Admin dashboard with charts & analytics.",
    image: "../../our-vision.png",
    link: "#",
  },
  {
    title: "Mobile App UI",
    description: "React Native mobile app UI & UX.",
    image: "../../our-mission.png",
    link: "#",
  },
];

export default function Portfolio() {
  return (
    <section className="" id="portfolio">
    
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="">Our Portfolio</h2>
          <p className="">
            A glimpse of the projects we’ve successfully delivered.
          </p>
        </div>

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper"
        >
          {projects.map((project , i) => (
            <SwiperSlide
              key={i}
              className="dark-bg p-5 rounded-xl shadow-md w-40"
            >
              <img src={project.image} className="rounded-lg mb-3" />
              <h5 className="">{project.title}</h5>
              <p className="">{project.description}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
