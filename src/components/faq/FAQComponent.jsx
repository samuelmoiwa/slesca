import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = [
  {
    question: "What is SLeSCA?",
    answer:
      "SLeSCA stands for Sierra Leone Seed Certification Agency. It is the regulatory body ensuring the quality and compliance of agricultural seeds in Sierra Leone.",
  },
  {
    question: "How can I apply for seed certification?",
    answer:
      "You can apply for seed certification by submitting the required documents and application form to SLeSCA. Inspections and approvals will follow the application.",
  },
  {
    question: "What services does SLeSCA provide?",
    answer:
      "SLeSCA provides licensing and registration of seed operators, seed quality assurance, farmer training, seed catalog management, and advocacy for agricultural development.",
  },
  {
    question: "Who can become a licensed seed operator?",
    answer:
      "Any registered entity in Sierra Leone meeting the criteria outlined by SLeSCA can become a licensed seed operator, including seed growers, processors, and vendors.",
  },
  {
    question: "How can I contact SLeSCA?",
    answer:
      "You can contact SLeSCA via email, phone, or visit their office. For more details, check the contact us page on the website.",
  },
];

const FAQComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="py-12 bg-gray-50 w-full max-w-[90rem]">
      <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-800">Frequently Asked Questions</h2>
          <p className="text-gray-600 mt-4">
            Find answers to the most common questions about SLeSCA and its services.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-lg border border-gray-200"
            >
              {/* Question */}
              <div
                className="flex justify-between items-center p-4 cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </h3>
                {activeIndex === index ? (
                  <FaChevronUp className="text-green-700" />
                ) : (
                  <FaChevronDown className="text-green-700" />
                )}
              </div>

              {/* Answer */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden px-4 pb-4"
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQComponent;
