const steps = [
    { title: "Project Kickoff", description: "We begin by understanding your vision and goals through a detailed discovery call to align on the project's direction." },
    { title: "UI Components", description: "We begin by understanding your vision and goals through a detailed discovery call to align on the project's direction." },
    { title: "Pages & API", description: "We begin by understanding your vision and goals through a detailed discovery call to align on the project's direction." },
    { title: "Deploy", description: "We begin by understanding your vision and goals through a detailed discovery call to align on the project's direction." },
  ];

export default function Process() {
  return (
    <section className="" id="process">
      <div className="max-w-7xl mx-auto">
        <h2>How we'll work together</h2>
        <p className="max-w-xl mx-auto">I follow a process that's transparent, collaborative, and results-driven—built around clear communication and creative problem-solving.</p>
        <div className="relative border-l-2 border-blue-500 my-10 max-w-[350px] mx-auto md:mx-0 md:left-1/2">
          {steps.map((step, idx) => (
            <div className="pb-8 pl-6 h-[200px] relative" key={idx}>
              <div className="absolute -left-3.5 dark-bg border-2 border border-blue-500 w-6 h-6 rounded-full ml-[1px]"></div>
              <div className={`x-dark-bg shadow p-4 rounded-lg text-left ${idx%2==0 ? 'md:absolute md:right-[100%] md:w-[100%] md:mr-6' : 'even'}`}>
                <span className="text-blue-500 mb-3 block">Step {idx+1}</span>
                <h5 className="mb-1">{step.title}</h5>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}