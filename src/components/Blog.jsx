"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const blogs = [
  {
    title: "An electronic prescription tailored for the finance sector",
    excerpt:
      "An electronic prescription tailored for the finance sector refers to a structured, digital solution that",
    image: "../../our-vision.png",
    category: "Finance",
    link: "#",
    author:'John Doe',
    date:'August 15, 2023',
  },
  {
    title: "An electronic prescription tailored for the finance sector",
    excerpt:
      "An electronic prescription tailored for the finance sector refers to a structured, digital solution that",
    image: "../../our-mission.png",
    category: "Finance",
    link: "#",
    author:'John Doe',
    date:'August 15, 2023',
  },
  {
    title: "An electronic prescription tailored for the finance sector",
    excerpt:
      "An electronic prescription tailored for the finance sector refers to a structured, digital solution that",
    image: "../../our-mission.png",
    category: "Finance",
    link: "#",
    author:'John Doe',
    date:'August 15, 2023',
  },
  {
    title: "An electronic prescription tailored for the finance sector",
    excerpt:
      "An electronic prescription tailored for the finance sector refers to a structured, digital solution that",
    image: "../../our-vision.png",
    category: "Finance",
    link: "#",
    author:'John Doe',
    date:'August 15, 2023',
  },
  {
    title: "An electronic prescription tailored for the finance sector",
    excerpt:
      "An electronic prescription tailored for the finance sector refers to a structured, digital solution that",
    image: "../../our-mission.png",
    category: "Finance",
    link: "#",
    author:'John Doe',
    date:'August 15, 2023',
  },
  {
    title: "An electronic prescription tailored for the finance sector",
    excerpt:
      "An electronic prescription tailored for the finance sector refers to a structured, digital solution that",
    image: "../../our-vision.png",
    category: "Finance",
    link: "#",
    author:'John Doe',
    date:'August 15, 2023',
  },
  {
    title: "An electronic prescription tailored for the finance sector",
    excerpt:
      "An electronic prescription tailored for the finance sector refers to a structured, digital solution that",
    image: "../../our-mission.png",
    category: "Finance",
    link: "#",
    author:'John Doe',
    date:'August 15, 2023',
  },
  {
    title: "An electronic prescription tailored for the finance sector",
    excerpt:
      "An electronic prescription tailored for the finance sector refers to a structured, digital solution that",
    image: "../../our-vision.png",
    category: "Finance",
    link: "#",
    author:'John Doe',
    date:'August 15, 2023',
  },
  {
    title: "An electronic prescription tailored for the finance sector",
    excerpt:
      "An electronic prescription tailored for the finance sector refers to a structured, digital solution that",
    image: "../../our-mission.png",
    category: "Finance",
    link: "#",
    author:'John Doe',
    date:'August 15, 2023',
  },
  {
    title: "An electronic prescription tailored for the finance sector",
    excerpt:
      "An electronic prescription tailored for the finance sector refers to a structured, digital solution that",
    image: "../../our-vision.png",
    category: "Finance",
    link: "#",
    author:'John Doe',
    date:'August 15, 2023',
  },
  
];

export default function Blog() {
  return (
    <section className="" id="blog">
      <div className="max-w-7xl mx-auto">
        <h2>Our recent <span className="text-blue-600">news & insights</span></h2>
        <p className="max-w-2xl mx-auto pb-5">Our recent news and insights highlight the latest developments, achievements, and thought leadership shaping our journey forward. From product innovations and strategic partnerships to industry trends</p>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={true}
          pagination={{ clickable: true }}
          spaceBetween={40}
          slidesPerView={1}
          breakpoints={{
            820: { slidesPerView: 2 },
            1280: { slidesPerView: 3 }
          }}
          autoplay={{ delay: 2500 }}
        >
          {blogs.map((blog , i) => (
            <SwiperSlide
              key={i}
              className="dark-bg rounded-xl shadow-md"
              style={{ height: "auto"   }}
            >
              <div className="rounded-xl space-y-6 overflow-hidden">
                <div className="">
                  <figure className="">
                    <img src={blog.image} alt="Courtney Henry's profile" loading="lazy"/>
                  </figure>
                  <div className="px-4 py-6 md:p-6 space-y-6 text-left">
                    <div className="flex items-center gap-2 m-0">
                      <p className="rounded-full px-4 py-1 x-dark-bg">{blog.category}</p>
                      <p className="">{blog.author}</p><p>&#128900;</p>
                      <p className="">{blog.date}</p>
                    </div>
                    <div>
                      <h5 className="font-normal sm:text-heading-5 text-tagline-1 mb-2">
                        <a href={blog.link} aria-label="Read more about electronic prescription in finance sector">
                          {blog.title}
                        </a>
                      </h5>
                      <p className="">
                        {blog.excerpt}
                      </p>
                      <a href={blog.link} className="border rounded-full px-4 py-2 opposite-bg inline-block">Read More</a>
                    </div>
                  </div>
                </div>

                <p className="text-left">
                  {blog.message}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}