const services = [
  "Web Development: Websites, apps, full-cycle dev",
  "UI/UX Design: Wireframes, prototypes, interfaces",
  "Graphics: Logos, branding, social creatives",
  "SEO: On-page, off-page, technical audits, ranking",
  "Digital Marketing: Ads, SMM, funnels, lead gen",
];

export default function Services() {
  return (
    <section className="" id="services">
      <div className="max-w-7xl mx-auto">
        <h2 className="">What I can help you with</h2>
      <p className="max-w-[776px] mx-auto">Whether you need a new visual identity, a high-performing website, or a design system, I offer creative services tailored to help your brand grow with clarity and confidence.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 max-w-7xl mx-auto text-left mt-10">
        {services.map((service, i) => (
          <div key={i} className="dark-bg p-6 rounded-md shadow">
            <h5 className="">{service}</h5>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
        ))}
      </div></div>
    </section>
  );
}
