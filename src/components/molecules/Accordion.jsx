"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="w-full space-y-4">
      {items.map((item, i) => (
        <div
          key={i}
          className="x-dark-bg dark:border-gray-700 rounded-xl px-5 sm:px-8"
        >
          <h6
            onClick={() => toggle(i)}
            className="w-full flex justify-between items-center py-5 sm:py-8 text-left font-medium text-gray-900 dark:text-gray-100"
          >
            {item.question}

            <ChevronDown
              className={`w-5 h-5 transition-transform ${
                openIndex === i ? "rotate-180" : ""
              }`}
            />
          </h6>

          {openIndex === i && (
            <><hr className="border-gray-700"/>
            <div className="pb-6 pt-4 md:pb-8 md:pt-6">
              {item.answer}
            </div></>
          )}
        </div>
      ))}
    </div>
  );
}
