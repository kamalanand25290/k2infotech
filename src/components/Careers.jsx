"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const openings = [
  {
    title: "Digital is making place in funds back-office",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est.",
    location: "Chandigarh",
    type: "Full-time",
    link: "#"
  },
  {
    title: "Digital is making place in funds back-office",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est.",
    location: "Chandigarh",
    type: "Part-time",
    link: "#"
  },
  {
    title: "Digital is making place in funds back-office",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est.",
    location: "Chandigarh",
    type: "Contract",
    link: "#"
  },
  {
    title: "Digital is making place in funds back-office",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est.",
    location: "Mohali",
    type: "Part-time",
    link: "#"
  },
  {
    title: "Digital is making place in funds back-office",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est.",
    location: "Chandigarh",
    type: "Full-time",
    link: "#"
  },
  {
    title: "Digital is making place in funds back-office",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est.",
    location: "Mohali",
    type: "Part-time",
    link: "#"
  },
];

export default function Careers(){
    return(
    <section className="" id="career">
        <div className="max-w-7xl mx-auto">
        <h2>Become <span className="text-blue-600">part of the dream-team</span></h2>
        <p className="max-w-2xl mx-auto pb-5">Become part of a passionate community fueled by common interests.</p>
        {/* <Swiper
          modules={[Navigation, Pagination]}
          navigation={true}
          pagination={{ clickable: true }}
          spaceBetween={40}
          slidesPerView={1}
          breakpoints={{
            820: { slidesPerView: 2 },
            1280: { slidesPerView: 2 }
          }}
          autoplay={{ delay: 2500 }}
        >
          {openings.map((opening , i) => (
            <SwiperSlide
              key={i}
              className="dark-bg rounded-xl shadow-md px-4 py-6 md:p-6 text-left"
              style={{ height: "auto"   }}
            >
              <div className="flex items-center gap-2 m-0">
                      <p className="border rounded-full px-4 py-1 opposite-bg">{opening.location}</p>
                      <p className="border rounded-full px-4 py-1 opposite-bg">{opening.type}</p>
                    </div>
                      <h5 className="font-normal sm:text-heading-5 text-tagline-1 mb-2">
                        <a href="./creative-portfolio-opening-details.html" aria-label="Read more about electronic prescription in finance sector">
                          {opening.title}
                        </a>
                      </h5>
                      <p className="sm:text-tagline-1 text-tagline-2 font-normal text-secondary/60 dark:text-accent/60 line-clamp-2">
                        {opening.description}
                      </p>
                      <a href={opening.link} className="border rounded-full px-4 py-2 opposite-bg inline-block">Read More</a>
            </SwiperSlide>
          ))}
        </Swiper> */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 max-w-7xl mx-auto text-left md:mt-10">
        {openings.map((opening , i) => (
            <div
              key={i}
              className="dark-bg rounded-xl shadow-md px-4 py-6 md:p-6 text-left"
              style={{ height: "auto"   }}
            >
                    <div className="flex items-center gap-2 m-0">
                      <p className="rounded-full px-4 py-1 x-dark-bg">{opening.location}</p>
                      <p className="rounded-full px-4 py-1 x-dark-bg">{opening.type}</p>
                    </div>
                      <h5 className="font-normal sm:text-heading-5 text-tagline-1 mb-2">
                        <a href="./creative-portfolio-opening-details.html" aria-label="Read more about electronic prescription in finance sector">
                          {opening.title}
                        </a>
                      </h5>
                      <p className="sm:text-tagline-1 text-tagline-2 font-normal text-secondary/60 dark:text-accent/60 line-clamp-2">
                        {opening.description}
                      </p>
                      <a href={opening.link} className="border rounded-full px-4 py-2 opposite-bg inline-block">Read More</a>
            </div>
          ))}
          </div>
      </div>
    </section>);
}