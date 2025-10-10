import React, { useState } from "react";
import {
  Quote,
  Star,
  Award,
  ThumbsUp,
  Sparkles,
  X,
  Send,
  Phone,
  Mail,
  User,
  Briefcase,
  MapPin,
  MessageSquare,
  ArrowRight
} from "lucide-react";

const testimonials = [
  {
    name: "John Kamara",
    role: "Certified Seed Operator",
    location: "Freetown",
    feedback:
      "SLeSCA's training programs have revolutionized my seed production practices. My yields have increased significantly, and the certification process was seamless.",
    rating: 5,
    gradient: "from-emerald-500 to-teal-600",
    bgGradient: "from-emerald-50 to-teal-50",
  },
  {
    name: "Aminata Sesay",
    role: "Farmer",
    location: "Bo District",
    feedback:
      "The certified seeds provided by SLeSCA have boosted my crop yields and improved my farming income. Their support has been invaluable.",
    rating: 5,
    gradient: "from-green-500 to-emerald-600",
    bgGradient: "from-green-50 to-emerald-50",
  },
  {
    name: "Dr. Mohamed Bangura",
    role: "Agriculture Researcher",
    location: "Makeni",
    feedback:
      "Partnering with SLeSCA has been a game-changer for advancing seed quality standards and fostering sustainable agricultural practices in Sierra Leone.",
    rating: 5,
    gradient: "from-lime-500 to-green-600",
    bgGradient: "from-lime-50 to-green-50",
  },
  {
    name: "Fatmata Koroma",
    role: "Agricultural Extension Officer",
    location: "Kenema",
    feedback:
      "Working with SLeSCA has enhanced my ability to support farmers effectively. Their resources and expertise are unmatched in the agricultural sector.",
    rating: 5,
    gradient: "from-teal-500 to-cyan-600",
    bgGradient: "from-teal-50 to-cyan-50",
  },
  {
    name: "Ibrahim Conteh",
    role: "Seed Distributor",
    location: "Port Loko",
    feedback:
      "The quality assurance programs from SLeSCA have transformed my business. Farmers trust our products more, and sales have doubled in just one year.",
    rating: 5,
    gradient: "from-green-600 to-emerald-700",
    bgGradient: "from-green-50 to-emerald-50",
  },
  {
    name: "Isatu Bangura",
    role: "Community Farming Leader",
    location: "Kailahun",
    feedback:
      "SLeSCA's community outreach and training workshops have empowered our entire farming cooperative. We're now producing certified seeds ourselves!",
    rating: 5,
    gradient: "from-emerald-600 to-green-700",
    bgGradient: "from-emerald-50 to-green-50",
  },
];

const Testimonials = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    location: "",
    email: "",
    phone: "",
    feedback: "",
    rating: 5,
  });
  const [activeTab, setActiveTab] = useState("form"); // "form" or "call"

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Testimonial submitted:", formData);
    // Add your submission logic here
    setIsModalOpen(false);
    // Reset form
    setFormData({
      name: "",
      role: "",
      location: "",
      email: "",
      phone: "",
      feedback: "",
      rating: 5,
    });
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-green-50 to-emerald-50">
        {/* Decorative circles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-green-200/40 to-emerald-200/40 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-teal-200/40 to-green-200/40 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-lime-200/20 to-emerald-200/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-block">
            <div className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2 rounded-full shadow-lg">
              <Sparkles
                className="w-4 h-4 animate-spin"
                style={{ animationDuration: "3s" }}
              />
              <span className="font-bold text-sm uppercase tracking-wider">
                Success Stories
              </span>
              <Sparkles
                className="w-4 h-4 animate-spin"
                style={{
                  animationDuration: "3s",
                  animationDirection: "reverse",
                }}
              />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            What People Are{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Saying
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="12"
                viewBox="0 0 200 12"
                fill="none"
              >
                <path
                  d="M0 6C50 2 150 10 200 6"
                  stroke="url(#gradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="50%" stopColor="#059669" />
                    <stop offset="100%" stopColor="#14b8a6" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>

          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Hear from those who have experienced the transformative impact of
            SLeSCA's work firsthand.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Glow effect on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500 transform group-hover:scale-105`}
              />

              {/* Card */}
              <div
                className={`relative bg-gradient-to-br ${testimonial.bgGradient} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-transparent hover:border-white`}
              >
                {/* Quote icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Quote className="w-16 h-16 text-green-600" />
                </div>

                {/* Avatar and Info */}
                <div className="flex items-start gap-4 mb-6">
                  {/* Avatar with gradient */}
                  <div
                    className={`relative flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {getInitials(testimonial.name)}

                    {/* Verified badge */}
                    <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-md">
                      <Award className="w-4 h-4 text-green-600" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors duration-300">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm font-semibold text-green-600">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      📍 {testimonial.location}
                    </p>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 fill-yellow-400 text-yellow-400 transition-all duration-300`}
                      style={{
                        animationDelay: `${i * 100}ms`,
                        animation:
                          hoveredCard === index
                            ? "bounce 0.5s ease-in-out"
                            : "none",
                      }}
                    />
                  ))}
                </div>

                {/* Feedback */}
                <p className="text-gray-700 leading-relaxed text-sm md:text-base italic relative z-10">
                  "{testimonial.feedback}"
                </p>

                {/* Like Button */}
                <div className="mt-6 pt-6 border-t border-gray-200/50 flex items-center justify-between">
                  <button className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors duration-300 group/like">
                    <ThumbsUp className="w-5 h-5 group-hover/like:scale-110 transition-transform duration-300" />
                    <span className="text-sm font-semibold">Helpful</span>
                  </button>

                  <div className="flex items-center gap-1">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${testimonial.gradient}`}
                        style={{
                          animationDelay: `${i * 200}ms`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Bottom gradient line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${testimonial.gradient} rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <p className="text-gray-700 text-lg mb-4 font-semibold">
              Ready to share your success story with SLeSCA?
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Submit Your Testimonial
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />

          {/* Modal Content */}
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden animate-scaleIn">
            {/* Header with gradient */}
            <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 p-6 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-300 rounded-full blur-3xl" />
              </div>

              <div className="relative flex items-center justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                    <Sparkles className="w-7 h-7" />
                    Share Your Story
                  </h3>
                  <p className="text-green-100 mt-2">
                    We'd love to hear about your experience!
                  </p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-white hover:bg-white/20 rounded-full p-2 transition-all duration-300 hover:rotate-90"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setActiveTab("form")}
                className={`flex-1 py-4 px-6 font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                  activeTab === "form"
                    ? "text-green-600 border-b-2 border-green-600 bg-green-50"
                    : "text-gray-500 hover:text-green-600 hover:bg-gray-50"
                }`}
              >
                <MessageSquare className="w-5 h-5" />
                Submit Form
              </button>
              <button
                onClick={() => setActiveTab("call")}
                className={`flex-1 py-4 px-6 font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                  activeTab === "call"
                    ? "text-green-600 border-b-2 border-green-600 bg-green-50"
                    : "text-gray-500 hover:text-green-600 hover:bg-gray-50"
                }`}
              >
                <Phone className="w-5 h-5" />
                Call Us
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
              {activeTab === "form" ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-gray-700 font-semibold text-sm">
                      <User className="w-4 h-4 text-green-600" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 outline-none"
                    />
                  </div>

                  {/* Role */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-gray-700 font-semibold text-sm">
                      <Briefcase className="w-4 h-4 text-green-600" />
                      Role/Occupation *
                    </label>
                    <input
                      type="text"
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g., Farmer, Seed Distributor"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 outline-none"
                    />
                  </div>

                  {/* Location */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-gray-700 font-semibold text-sm">
                      <MapPin className="w-4 h-4 text-green-600" />
                      Location *
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      required
                      placeholder="City or District"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 outline-none"
                    />
                  </div>

                  {/* Email and Phone Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-gray-700 font-semibold text-sm">
                        <Mail className="w-4 h-4 text-green-600" />
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 outline-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-gray-700 font-semibold text-sm">
                        <Phone className="w-4 h-4 text-green-600" />
                        Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+232 XX XXX XXXX"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 outline-none"
                      />
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-gray-700 font-semibold text-sm">
                      <Star className="w-4 h-4 text-green-600" />
                      Your Rating *
                    </label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() =>
                            setFormData((prev) => ({ ...prev, rating: star }))
                          }
                          className="transition-transform duration-200 hover:scale-110"
                        >
                          <Star
                            className={`w-8 h-8 ${
                              star <= formData.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Feedback */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-gray-700 font-semibold text-sm">
                      <MessageSquare className="w-4 h-4 text-green-600" />
                      Your Testimonial *
                    </label>
                    <textarea
                      name="feedback"
                      value={formData.feedback}
                      onChange={handleInputChange}
                      required
                      rows="5"
                      placeholder="Share your experience with SLeSCA..."
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 outline-none resize-none"
                    />
                    <p className="text-xs text-gray-500">
                      Minimum 50 characters ({formData.feedback.length}/50)
                    </p>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={formData.feedback.length < 50}
                    className="w-full py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Submit Testimonial
                  </button>
                </form>
              ) : (
                <div className="space-y-6">
                  <div className="text-center space-y-4">
                    <div className="inline-flex p-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 shadow-xl">
                      <Phone className="w-12 h-12 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900">
                      Prefer to Call?
                    </h4>
                    <p className="text-gray-600">
                      Our team is ready to listen to your story and answer any
                      questions you may have.
                    </p>
                  </div>

                  {/* Contact Cards */}
                  <div className="space-y-4">
                    <a
                      href="tel:+23276123456"
                      className="block group bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 p-6 rounded-2xl border-2 border-green-200 hover:border-green-400 transition-all duration-300 transform hover:scale-[1.02]"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 p-3 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Phone className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-green-600 uppercase tracking-wider">
                            Main Office
                          </p>
                          <p className="text-xl font-bold text-gray-900">
                            +232 76 906 032
                          </p>
                          <p className="text-sm text-gray-500">
                            Mon - Fri, 8:00 AM - 5:00 PM
                          </p>
                        </div>
                        <ArrowRight className="w-6 h-6 text-green-600 group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </a>

                    <a
                      href="tel:+23278051704"
                      className="block group bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 p-6 rounded-2xl border-2 border-teal-200 hover:border-teal-400 transition-all duration-300 transform hover:scale-[1.02]"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 p-3 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Phone className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider">
                            Customer Support
                          </p>
                          <p className="text-xl font-bold text-gray-900">
                            +232 78 051 704
                          </p>
                          <p className="text-sm text-gray-500">
                            Available 24/7
                          </p>
                        </div>
                        <ArrowRight className="w-6 h-6 text-teal-600 group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </a>
                  </div>

                  {/* Additional Info */}
                  <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-2xl border border-amber-200">
                    <div className="flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-amber-900 mb-2">
                          Quick Tip
                        </p>
                        <p className="text-sm text-amber-800">
                          Have your story ready! Our team will guide you through
                          sharing your experience and may ask for permission to
                          feature your testimonial on our website.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-5px) scale(1.1);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.6;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
