export default function Hero() {
  return (
    <section className="text-left" id="home">
      <div className="max-w-7xl mx-auto pt-15 md:pt-28">
          <h1 className="max-w-[776px] mx-auto">
            Empowering Businesses with  
            <span className="text-blue-600"> Scalable IT Solutions</span>
          </h1>

          <p className="max-w-[776px] mx-auto">
            We help companies build modern websites, automate workflows, and
            scale their digital presence with high-performance software solutions.
          </p>

          {/* Highlights */}
          <div className="mt-8 text-center">
            <div className="flex gap-3 justify-center">
              <span className="text-blue-600 text-xl">✔</span>
              <p className="text-gray-700">Custom Web & App Development</p>
            </div>
            <div className="flex gap-3 justify-center">
              <span className="text-blue-600 text-xl">✔</span>
              <p className="text-gray-700">Cloud Infrastructure & DevOps</p>
            </div>
            <div className="flex gap-3 justify-center">
              <span className="text-blue-600 text-xl">✔</span>
              <p className="text-gray-700">SEO, Speed Optimization & Security</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition"
            >
              Get a Free Consultation
            </a>
            <a
              href="#services"
              className="px-6 py-3 border border-gray-300 text-gray-800 font-medium rounded-full hover:bg-gray-600 transition"
            >
              Explore Services
            </a>
          </div> 
      </div>
    </section>
  );
}
