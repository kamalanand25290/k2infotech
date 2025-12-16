import CheckIcon from "./molecules/CheckIcon";

export default function Pricing() {
  return (
    <section className="" id="pricing">
      <div className="max-w-6xl mx-auto">
        <h2 className="max-w-xl mx-auto mb-5">Select the pricing plan that best suits your needs.</h2>
        <div className="">
            <div className="mx-auto max-w-[380px] md:max-w-full w-full grid md:grid-cols-2 lg:grid-cols-3 gap-7 ">

              <div className="p-7 lg:my-5 x-dark-bg rounded-2xl">
                <div className="dark-bg rounded-xl p-4 text-center">
                  <p>Essential</p>
                  <h5>$50</h5>
                  <p>Plans for pro users</p>
                  <a href="" className="opposite-bg rounded-full px-4 py-2 mt-5 block text-center">
                    Get started
                  </a>
                </div>
                <div className="p-3">Pages included - Up to 5</div>
                <div className="p-3">Mobile App Development</div>
                <div className="p-3">API Integration	</div>
                <div className="p-3">Custom Dashboard	</div>
                <div className="p-3">CRM Integration</div>
              </div>

              <div className="p-7 x-dark-bg rounded-2xl">
                <div className="dark-bg rounded-xl p-4 text-center">
                  <p>Advanced</p>
                  <h5>$99</h5>
                  <p>Plans for advanced users</p>
                  <a href="" className="opposite-bg rounded-full px-4 py-2 mt-5 block text-center">
                    Get started
                  </a>
                </div>
                <div className="p-3">Pages included - Up to 10</div>
                <div className="p-3">Mobile App Development</div>
                <div className="p-3">API Integration	</div>
                <div className="p-3">Custom Dashboard	</div>
                <div className="p-3">CRM Integration</div>
                <div className="p-3">SEO Optimization</div>
                <div className="p-3">Performance Monitoring</div>
                <div className="p-3">Cloud Deployment</div>
              </div>

              <div className="p-7 lg:my-5 mb-5 x-dark-bg rounded-2xl">
                <div className="dark-bg rounded-xl p-4 text-center">
                  <p>Enterprise</p>
                  <h5>Enterprise</h5>
                  <p>Contact us for enterprise users</p>
                  <a href="https://calendly.com/" className="opposite-bg rounded-full px-4 py-2 mt-5 block text-center">
                    Get started
                  </a>
                </div>
                <div className="p-3">Pages included - Up to 10</div>
                <div className="p-3">Mobile App Development</div>
                <div className="p-3">API Integration	</div>
                <div className="p-3">Custom Dashboard	</div>
                <div className="p-3">CRM Integration</div>
                <div className="p-3">SEO Optimization</div>
                <div className="p-3">Performance Monitoring</div>
                <div className="p-3">Cloud Deployment</div>
                <div className="p-3">Dedicated Support</div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}