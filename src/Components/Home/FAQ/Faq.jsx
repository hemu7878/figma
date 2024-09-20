import React from "react";
import { useState } from "react";

const faqData = [
  {
    question: "What is Nfthub's NFT Collection?",
    answer:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.",
  },
  {
    question: "How can we buy and invest NFT?",
    answer:
      "Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.",
  },
  {
    question: "Why should we choose Nerko's NFT?",
    answer: "Excepteur sint occaecat cupidatat proident.",
  },
  {
    question: "Where can we buy and sell NFTs?",
    answer: "Excepteur sint occaecat cupidatat proident.",
  },
  {
    question: "How secure is this token?",
    answer: "Excepteur sint occaecat cupidatat proident.",
  },
  {
    question: "What is your contract address?",
    answer: "Excepteur sint occaecat cupidatat proident.",
  },
];

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-center text-purple-600 p-8">
        Your question, <span className="text-black">answered!</span>
      </h1>
      <div className="max-w-md mx-auto p-4 bg-card rounded-lg shadow-md">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b border-border">
            <button
              className="flex justify-between w-full py-2 text-left text-primary hover:bg-primary/10 focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              <span>{faq.question}</span>
              <svg
                className={`w-5 h-5 transition-transform transform ${
                  activeIndex === index ? "rotate-180" : "rotate-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <p
              className={`${hiddenTextClasses} ${
                activeIndex === index ? "" : "hidden"
              }`}
            >
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;

const hiddenTextClasses = "mt-2 text-muted-foreground hidden";
