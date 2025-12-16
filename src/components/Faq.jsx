"use client";
import { Tab } from "@headlessui/react";
import Accordion from "./molecules/Accordion";

const faqs = [
    {
  title: "Timelines",
  qas: [
    {
      question: "How long does a typical project take to complete?",
      answer:
        "Most projects are completed within 2–6 weeks depending on complexity, requirements, and client feedback speed."
    },
    {
      question: "Can the project timeline be accelerated if needed?",
      answer:
        "Yes, we offer priority and express delivery options. Accelerated timelines may require additional charges based on urgency."
    },
    {
      question: "What factors can delay a project timeline?",
      answer:
        "Delays usually occur when required content, approvals, or feedback from the client is late. Technical complications can also extend timelines."
    },
    {
      question: "How do you keep clients updated during the project?",
      answer:
        "We provide weekly progress updates and milestone review sessions to keep you informed at every stage."
    },
    {
      question: "Do you follow a structured workflow or timeline plan?",
      answer:
        "Yes, every project includes a detailed roadmap with phases like planning, design, development, testing, and launch."
    }
  ]
},
{
  title: "Support",
  qas: [
    {
      question: "What kind of support do you provide after project completion?",
      answer:
        "We offer 30 days of free technical support after launch, covering bug fixes and minor adjustments."
    },
    {
      question: "Do you offer long-term maintenance plans?",
      answer:
        "Yes, we provide monthly and yearly maintenance packages for updates, monitoring, and improvements."
    },
    {
      question: "How quickly do you respond to support requests?",
      answer:
        "Our standard response time is 24 hours, with priority support available for clients on maintenance plans."
    },
    {
      question: "Do you provide support for third-party integrations?",
      answer:
        "Absolutely. We support integrations such as payment gateways, APIs, analytics tools, and more."
    },
    {
      question: "What is the easiest way to contact your support team?",
      answer:
        "The fastest way is through our support portal or email. Paid support plans include WhatsApp and phone support."
    }
  ]
}
,
{
  title: "Platforms",
  qas: [
    {
      question: "Which platforms do you specialize in?",
      answer:
        "We work with modern platforms including Next.js, React, WordPress, Node.js, Shopify, and custom API development."
    },
    {
      question: "Do you develop mobile-responsive designs?",
      answer:
        "Yes. Every project is fully responsive and optimized for all screen sizes including mobile, tablet, and desktop."
    },
    {
      question: "Can you migrate my current project to a new platform?",
      answer:
        "Yes, we can migrate from old frameworks or CMS platforms to modern, performance-optimized solutions."
    },
    {
      question: "Do you support cloud deployment platforms?",
      answer:
        "We support AWS, Vercel, Netlify, DigitalOcean, Hostinger, and other cloud hosting providers."
    },
    {
      question: "Can you integrate third-party APIs into my project?",
      answer:
        "Yes, we integrate payment APIs, CRM tools, analytics, shipping systems, and custom APIs."
    }
  ]
}
,
{
  title: "Revisions",
  qas: [
    {
      question: "How many revisions do you offer?",
      answer:
        "We provide 3 rounds of revisions in the standard package. Additional revisions can be purchased if needed."
    },
    {
      question: "What is included in a revision round?",
      answer:
        "A revision round covers edits to design, content placement, UI adjustments, and minor functional tweaks."
    },
    {
      question: "Do revisions affect the project timeline?",
      answer:
        "Major revisions can extend timelines. Small feedback changes are usually completed within 24–48 hours."
    },
    {
      question: "Can I request revisions after project completion?",
      answer:
        "Yes, but they are billed separately unless included in a support or maintenance package."
    },
    {
      question: "How should I send revision feedback?",
      answer:
        "We recommend sending all feedback in a single consolidated document to avoid confusion and speed up execution."
    }
  ]
}
,
];

export default function Faq() {
  return (
    <section className="" id="faq">
        <div className="max-w-7xl mx-auto">
        <h2>Commonly asked <span className="text-blue-600">questions</span></h2>
        <p className="max-w-2xl mx-auto md:pb-5">By offering concise and informative responses, this section helps users find solutions without the need to contact customer support, saving time</p>

    <Tab.Group className="max-w-4xl mx-auto">
        <Tab.List className="flex justify-center sm:space-x-4 border-b border-gray-300 dark:border-gray-700">
            {faqs.map((faq , i) => (
            <Tab
                key={i}
                className={({ selected }) =>
                `py-2 px-3 sm:px-5 outline-none ${
                    selected
                    ? "border-b-2 border-blue-600 text-blue-600 dark:text-blue-400"
                    : ""
                }`
                }
            >
                {faq.title}
            </Tab>
            ))}
        </Tab.List>
        <Tab.Panels className="mt-6">
            {faqs.map((faq, i) => (
                <Tab.Panel key={i}>
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-7xl mx-auto text-left mt-6 md:mt-10">
        <Accordion items={faq.qas} />

          



          </div>
                </Tab.Panel>
            ))}
        </Tab.Panels>
    </Tab.Group>
      </div>
    </section>
  );
}