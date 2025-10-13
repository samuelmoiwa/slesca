import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Sparkles,
  HelpCircle,
  Search,
  MessageCircle,
  Mail,
  Phone,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  FileQuestion,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const faqData = [
  {
    question: "What is SLeSCA?",
    answer:
      "SLeSCA stands for Sierra Leone Seed Certification Agency. It is the regulatory body ensuring the quality and compliance of agricultural seeds in Sierra Leone.",
    category: "General",
    icon: HelpCircle,
  },
  {
    question: "How can I apply for seed certification?",
    answer:
      "You can apply for seed certification by submitting the required documents and application form to SLeSCA. Inspections and approvals will follow the application. Visit our licensing page or contact our office for detailed guidance.",
    category: "Certification",
    icon: FileQuestion,
  },
  {
    question: "What services does SLeSCA provide?",
    answer:
      "SLeSCA provides licensing and registration of seed operators, seed quality assurance, farmer training, seed catalog management, and advocacy for agricultural development. We also conduct regular inspections and offer technical support.",
    category: "Services",
    icon: BookOpen,
  },
  {
    question: "Who can become a licensed seed operator?",
    answer:
      "Any registered entity in Sierra Leone meeting the criteria outlined by SLeSCA can become a licensed seed operator, including seed growers, processors, and vendors. You must meet specific quality standards and compliance requirements.",
    category: "Licensing",
    icon: Users,
  },
  {
    question: "How can I contact SLeSCA?",
    answer:
      "You can contact SLeSCA via email at info@slesca.gov.sl, call us at +232 76 906 032, or visit our office at Tower Hill, Freetown. Our team is available Monday to Friday, 8:00 AM - 5:00 PM.",
    category: "Contact",
    icon: MessageCircle,
  },
  {
    question: "What documents are needed for seed certification?",
    answer:
      "Required documents include business registration, field location details, seed production records, quality test results, and proof of compliance with agricultural standards. A complete checklist is available on our website.",
    category: "Certification",
    icon: FileQuestion,
  },
  {
    question: "How long does the certification process take?",
    answer:
      "The certification process typically takes 4-6 weeks from application submission to final approval, depending on the completeness of your documentation and inspection results. Expedited services may be available for urgent cases.",
    category: "Certification",
    icon: FileQuestion,
  },
  {
    question: "Are there training programs for farmers?",
    answer:
      "Yes! SLeSCA regularly conducts training programs on seed management, quality control, and sustainable agricultural practices. Check our events page or contact us to register for upcoming workshops.",
    category: "Services",
    icon: BookOpen,
  },
];

const categories = ["All", ...new Set(faqData.map((faq) => faq.category))];

const quickLinks = [
  {
    icon: Mail,
    title: "Email Support",
    description: "info@slesca.gov.sl",
    link: "mailto:info@slesca.gov.sl",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "+232 76 906 032",
    link: "tel:+23276906032",
  },
  // {
  //   icon: MessageCircle,
  //   title: "Live Chat",
  //   description: "Chat with our team",
  //   link: "#",
  // },
  {
    icon: BookOpen,
    title: "Documentations",
    description: "Browse our guides",
    link: "/document",
  },
];

const FAQComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  // Filter FAQs based on search and category
  const filteredFAQs = faqData.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="relative w-full bg-gradient-to-b from-white via-green-50 to-white py-16 lg:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, #10b981 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      {/* Floating Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-5 h-5 text-green-600" />
            <span className="text-green-800 font-semibold text-sm">
              Help Center
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600">
              Frequently Asked Questions
            </span>
          </h2>

          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Find answers to the most common questions about SLeSCA and its
            services. Can't find what you're looking for? Contact us directly.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-100 p-6 mb-12">
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl font-medium whitespace-nowrap transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="text-sm text-gray-600">
            Showing{" "}
            <span className="font-bold text-green-700">
              {filteredFAQs.length}
            </span>{" "}
            question{filteredFAQs.length !== 1 ? "s" : ""}
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* FAQ List */}
          <div className="lg:col-span-2 space-y-4">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 ${
                    activeIndex === index
                      ? "border-green-300 shadow-xl"
                      : "border-gray-100 hover:border-green-200"
                  }`}
                >
                  {/* Question */}
                  <div
                    className="flex items-start justify-between p-6 cursor-pointer group"
                    onClick={() => toggleAccordion(index)}
                  >
                    <div className="flex items-start space-x-4 flex-1">
                      <div
                        className={`p-3 rounded-xl transition-all duration-300 ${
                          activeIndex === index
                            ? "bg-gradient-to-br from-green-500 to-emerald-600"
                            : "bg-green-100 group-hover:bg-green-200"
                        }`}
                      >
                        <faq.icon
                          className={`w-5 h-5 ${
                            activeIndex === index
                              ? "text-white"
                              : "text-green-700"
                          }`}
                        />
                      </div>
                      <div className="flex-1">
                        <h3
                          className={`text-lg font-bold transition-colors ${
                            activeIndex === index
                              ? "text-green-700"
                              : "text-gray-900 group-hover:text-green-700"
                          }`}
                        >
                          {faq.question}
                        </h3>
                        <span className="inline-block mt-2 text-xs font-medium px-3 py-1 bg-green-100 text-green-700 rounded-full">
                          {faq.category}
                        </span>
                      </div>
                    </div>
                    <div
                      className={`p-2 rounded-full transition-all duration-300 ${
                        activeIndex === index
                          ? "bg-green-100"
                          : "group-hover:bg-gray-100"
                      }`}
                    >
                      {activeIndex === index ? (
                        <ChevronUp className="w-5 h-5 text-green-700" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-600" />
                      )}
                    </div>
                  </div>

                  {/* Answer */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      activeIndex === index
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-6 pl-20">
                      <div className="bg-green-50 rounded-xl p-4 border-l-4 border-green-500">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-16 bg-white rounded-2xl shadow-lg border-2 border-gray-100">
                <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  No questions found
                </h3>
                <p className="text-gray-600">
                  Try adjusting your search or filter
                </p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Help Card */}
            <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl p-8 shadow-xl text-white">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Need More Help?</h3>
              </div>
              <p className="text-white/90 mb-6">
                Can't find the answer you're looking for? Our support team is
                here to help.
              </p>
              <Link
                to={"/contact-us"}
                className="w-full bg-white text-green-700 font-bold py-3 px-6 rounded-xl hover:bg-green-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Contact Support</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <HelpCircle className="w-6 h-6 text-green-600" />
                <span>Quick Links</span>
              </h3>
              <div className="space-y-3">
                {quickLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.link}
                    className="flex items-start space-x-3 p-3 rounded-xl hover:bg-green-50 transition-all duration-300 group"
                  >
                    <div className="p-2 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                      <link.icon className="w-4 h-4 text-green-700" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm group-hover:text-green-700 transition-colors">
                        {link.title}
                      </div>
                      <div className="text-xs text-gray-600">
                        {link.description}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Popular Topics */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-lg border-2 border-blue-100 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Popular Topics
              </h3>
              <div className="space-y-2">
                {[
                  "Certification Process",
                  "Licensing Requirements",
                  "Quality Standards",
                  "Training Programs",
                ].map((topic, idx) => (
                  <button
                    key={idx}
                    className="w-full text-left px-4 py-3 bg-white rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium text-gray-700 hover:text-blue-700 flex items-center justify-between group"
                  >
                    <span>{topic}</span>
                    <ChevronDown className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Still Have Questions Section */}
        <div className="bg-white rounded-3xl shadow-2xl border-2 border-gray-100 p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 text-lg">
              We're here to help! Choose the best way to reach out to our team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Mail,
                title: "Email Us",
                description: "Get a response within 24 hours",
                action: "Send Email",
                color: "from-green-500 to-emerald-600",
              },
              {
                icon: Phone,
                title: "Call Us",
                description: "Mon-Fri, 8:00 AM - 5:00 PM",
                action: "Call Now",
                color: "from-blue-500 to-cyan-600",
              },
              // {
              //   icon: MessageCircle,
              //   title: "Live Chat",
              //   description: "Chat with our support team",
              //   action: "Start Chat",
              //   color: "from-purple-500 to-pink-600",
              // },
            ].map((option, idx) => (
              <div
                key={idx}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border-2 border-gray-100 hover:border-green-300 hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`inline-flex p-4 bg-gradient-to-br ${option.color} rounded-2xl mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                >
                  <option.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {option.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  {option.description}
                </p>
                <button className="w-full bg-gray-100 text-gray-700 font-bold py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-green-600 hover:to-emerald-600 hover:text-white transition-all duration-300">
                  {option.action}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Helpful Resources Banner */}
        <div className="mt-16 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            ></div>
          </div>

          <div className="relative text-center">
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Explore Our Resources
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Access comprehensive guides, documentation, and training materials
              to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={"/document"}
                className="flex items-center justify-center space-x-2 bg-white text-green-700 font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <BookOpen className="w-5 h-5" />
                <span>Browse Documentations</span>
              </Link>
              <Link
                to={"/services/training-workshops"}
                className="flex items-center justify-center space-x-2 bg-white/20 backdrop-blur-sm border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white/30 transition-all duration-300"
              >
                <CheckCircle2 className="w-5 h-5" />
                <span>View Training Programs</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -50px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(50px, 50px) scale(1.05);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default FAQComponent;
