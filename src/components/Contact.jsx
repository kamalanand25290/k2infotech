export default function Contact() {
  return (
    <section id="contact" className="">
      <div className="max-w-7xl mx-auto">
        <h2>Reach out to our <span className="text-blue-600">support team </span>for help.</h2>
        <p className="max-w-2xl mx-auto pb-5">Whether you have a question, need technical assistance, or just want some guidance, our support team is here to help. We're available around the clock to provide quick and friendly support.</p>
        <div className="flex flex-col justify-center items-center gap-6 md:gap-10 lg:flex-row lg:gap-8 xl:gap-[30px]">
          <div className="lg:max-w-sm w-full flex flex-col gap-6 md:gap-10 sm:flex-row lg:flex-col">            
            <div className="x-dark-bg border border-gray-900 rounded-[20px] p-10 w-full md:max-w-[371px] relative overflow-hidden">
              <div className="space-y-6">
                <figure className="size-10 overflow-hidden mx-auto">
                  <img src="../../team.png" alt="Email icon" className="size-full object-cover"/>
                </figure>

                <div className="space-y-2.5">
                  <h6 className="">Email Us</h6>
                    <a href="mailto:hello@nextsaaS.com">hello@nextsaaS.com</a>
                </div>
              </div>
            </div>
            <div className="x-dark-bg  border border-gray-900 rounded-[20px] p-10 w-full md:max-w-[371px] relative overflow-hidden">
              <div className="space-y-6">
                <figure className="size-10 overflow-hidden mx-auto">
                  <img src="../../team.png" alt="Email icon" className="size-full object-cover"/>
                </figure>

                <div className="space-y-2.5">
                  <h6 className="">Email Us</h6>
                    <a href="mailto:hello@nextsaaS.com">hello@nextsaaS.com</a>
                </div>
              </div>
            </div>
            <div className="x-dark-bg  border border-gray-900 rounded-[20px] p-10 py-5 w-full md:max-w-[371px] relative overflow-hidden">
              <div className="space-y-6">
                <figure className="size-10 overflow-hidden mx-auto">
                  <img src="../../team.png" alt="Email icon" className="size-full object-cover"/>
                </figure>

                <div className="space-y-2.5">
                  <h6 className="">Email Us</h6>
                    <a href="mailto:hello@nextsaaS.com">hello@nextsaaS.com</a>
                </div>
              </div>
            </div>
          </div>
          <form className="w-full lg:max-w-3xl p-6 md:p-8 lg:p-11 rounded-4xl space-y-3 x-dark-bg border border-gray-900">
            <div className="flex items-center flex-col md:flex-row space-y-3 md:space-y-0 md:gap-8 justify-between">
              <div className="w-full">
                <label htmlFor="fullname" className="block text-left">Your name</label>
                <input name="fullname" className="w-full px-4 py-2 mb-4 rounded-full border border-gray-700 bg-transparent" placeholder="Enter your name" />
              </div>
              <div className="w-full">
                <label htmlFor="phone" className="block text-left">Your number</label>
                <input name="phone" className="w-full px-4 py-2 mb-4 rounded-full border border-gray-700 bg-transparent" placeholder="Enter your number" />
              </div>
            </div>
            <div className="">
                <label htmlFor="email" className="block text-left">Email address</label>
                <input name="email" className="w-full px-4 py-2 mb-4 rounded-full border border-gray-700 bg-transparent" placeholder="Enter your email" />
              </div>
            <div>
              <label htmlFor="subject" className="block text-left">Subject</label>
              <input name="subject" className="w-full px-4 py-2 mb-4 rounded-full border border-gray-700 bg-transparent" placeholder="Enter your subject" />
            </div>
            <div>
              <label htmlFor="message" className="block text-left">Write message</label>
              <textarea name="message" rows="7" className="w-full px-4 py-2 mb-4 rounded-xl border border-gray-700 bg-transparent" placeholder="Enter your message" />
            </div>
            <button className="opposite-bg px-6 py-3 rounded-full w-full">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
