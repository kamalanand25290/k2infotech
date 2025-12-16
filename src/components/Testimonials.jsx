"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Rahul Sharma",
    company: "Startup Founder",
    message:
      "As a small business owner, your service has been a lifesaver in managing cash flow and optimizing financial strategies. It has truly exceeded my expectations.",
      image: "../../team.png",
  },
  {
    name: "Anjali Verma",
    company: "E-commerce Business Owner",
    message:
      "As a small business owner, your service has been a lifesaver in managing cash flow and optimizing financial strategies. It has truly exceeded my expectations. your service has been a lifesaver in managing cash flow and optimizing financial strategies. It has truly exceeded my expectations.",
      image: "../../team.png",
  },
  {
    name: "Sandeep Kumar",
    company: "IT Manager",
    message:
      "As a small business owner, your service has been a lifesaver in managing cash flow and optimizing financial strategies. It has truly exceeded my expectations.",
      image: "../../team.png",
  },
  {
    name: "Anjali Verma",
    company: "E-commerce Business Owner",
    message:
      "As a small business owner, your service has been a lifesaver in managing cash flow and optimizing financial strategies. It has truly exceeded my expectations. your service has been a lifesaver in managing cash flow and optimizing financial strategies. It has truly exceeded my expectations.",
      image: "../../team.png",
  },
  {
    name: "Sunil Verma",
    company: "E-commerce Business Owner",
    message:
      "As a small business owner, your service has been a lifesaver in managing cash flow and optimizing financial strategies. It has truly exceeded my expectations. your service has been a lifesaver in managing cash flow and optimizing financial strategies. It has truly exceeded my expectations.",
      image: "../../team.png",
  },
];

export default function Testimonials() {
  return (
    <section className="" id="testimonials">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-8 md:mb-12">
          <h2 className="">What Our Clients Say</h2>
          <p className="">
            Trusted by startups, businesses & enterprises.
          </p>
        </div>
        
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={true}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          autoplay={{ delay: 2500 }}
        >
          {testimonials.map((testimonial , i) => (
            <SwiperSlide
              key={i}
              className="dark-bg p-5 rounded-xl shadow-md"
              style={{ height: "auto"   }}
            >
              <div className="md:p-4 sm:p-8 rounded-xl space-y-6">
                <div className="flex items-center justify-between pb-6 border-b border-b-stroke-2 dark:border-b-stroke-6">
                  <div className="flex items-center gap-3 text-left">
                    <figure className="size-11 overflow-hidden rounded-full">
                      <img src={testimonial.image} alt="Courtney Henry's profile" loading="lazy"/>
                    </figure>
                    <div>
                      <h6>{testimonial.name} <small className="block">{testimonial.company}</small></h6>
                    </div>
                  </div>
                </div>

                <p className="text-left">
                  {testimonial.message}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>


      </div>
    </section>
  );
}
