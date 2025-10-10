import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
  Send,
  FileText,
  HelpCircle,
  GraduationCap,
  Sparkles,
  ChevronUp,
} from "lucide-react";
import logo from '../asset/logo.jpg'

// Note: Replace these with your actual React Router Link component
const Link = ({ to, children, className }) => (
  <a href={to} className={className}>
    {children}
  </a>
);

function Footer() {
  const [email, setEmail] = useState("");
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/profile.php?id=100092613360652",
      label: "Facebook",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Twitter,
      href: "#",
      label: "Twitter",
      color: "from-sky-400 to-blue-500",
    },
    {
      icon: Linkedin,
      href: "#",
      label: "LinkedIn",
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: Instagram,
      href: "tel:+23279000000",
      label: "Instagram",
      color: "from-pink-500 to-purple-600",
    },
  ];

  const quickLinks = [
    { icon: HelpCircle, text: "FAQs", to: "/faqs" },
    { icon: FileText, text: "The Seeds Act", to: "/document/seeds-act" },
    {
      icon: GraduationCap,
      text: "Training and Workshops",
      to: "/services/training-workshops",
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto px-4 max-w-[90rem] relative z-10">
        {/* Top Section with Newsletter */}
        <div className="py-12 border-b border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Logo and Tagline */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                <div className="relative">
                  <img src={logo} alt="SLeSCA Logo" className="w-20 h-20 rounded-full object-cover border-4 border-white/20 shadow-lg" />
                  <div className="absolute inset-0 rounded-full border-2 border-white/30" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-green-100
                  to-emerald-200 bg-clip-text text-start text-transparent">
                    SLeSCA
                  </h2>
                  <p className="text-green-300 text-sm font-semibold tracking-wider">
                    Growing Tomorrow's Agriculture
                  </p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed max-w-md mx-auto lg:mx-0">
                Leading Sierra Leone's agricultural transformation through
                certified seed quality and sustainable farming practices.
              </p>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-green-400/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg">
                  <Send className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Stay Updated</h3>
                  <p className="text-green-200 text-sm">
                    Subscribe to our newsletter
                  </p>
                </div>
              </div>
              <div className="flex gap-2 sm:flex-row flex-col">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all duration-300"
                />
                <button
                  onClick={handleNewsletterSubmit}
                  className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl text-white font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/50 flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Contact Information */}
            <div className="space-y-4">
              <h4 className="text-white text-lg font-bold mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-green-400 to-emerald-600 rounded-full" />
                Contact Us
              </h4>

              <div className="space-y-3">
                <div className="flex items-start gap-3 group">
                  <div className="p-2 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors duration-300">
                    <MapPin className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Sierra Leone Seed Certification Agency
                      <br />
                      Tower Hill, Freetown
                      <br />
                      Sierra Leone, West Africa
                    </p>
                  </div>
                </div>

                <a
                  href="tel:+23276906032"
                  className="flex items-start gap-3 group hover:translate-x-1 transition-transform duration-300"
                >
                  <div className="p-2 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors duration-300">
                    <Phone className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">
                      +232 76 906 032
                      <br />
                      +232 78 051 704
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:info@slesca.gov.sl"
                  className="flex items-start gap-3 group hover:translate-x-1 transition-transform duration-300"
                >
                  <div className="p-2 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors duration-300">
                    <Mail className="w-5 h-5 text-green-400" />
                  </div>
                  <p className="text-gray-300 text-sm">info@slesca.gov.sl</p>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-white text-lg font-bold mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-green-400 to-emerald-600 rounded-full" />
                Quick Links
              </h4>
              <div className="space-y-2">
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.to}
                    className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition-all duration-300 group hover:translate-x-2 py-2"
                  >
                    <link.icon className="w-5 h-5 text-green-400" />
                    <span className="group-hover:underline">{link.text}</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-white text-lg font-bold mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-green-400 to-emerald-600 rounded-full" />
                Our Services
              </h4>
              <div className="space-y-2">
                <Link
                  to="/services/seed-certification"
                  className="block text-gray-300 hover:text-green-400 transition-colors duration-300 hover:translate-x-2 transform py-2"
                >
                  Seed Certification
                </Link>
                <Link
                  to="/services/quality-assurance"
                  className="block text-gray-300 hover:text-green-400 transition-colors duration-300 hover:translate-x-2 transform py-2"
                >
                  Quality Assurance
                </Link>
                <Link
                  to="/services/farmer-training"
                  className="block text-gray-300 hover:text-green-400 transition-colors duration-300 hover:translate-x-2 transform py-2"
                >
                  Farmer Training
                </Link>
                <Link
                  to="/services/licensing"
                  className="block text-gray-300 hover:text-green-400 transition-colors duration-300 hover:translate-x-2 transform py-2"
                >
                  Licensing Services
                </Link>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="text-white text-lg font-bold mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-green-400 to-emerald-600 rounded-full" />
                Connect With Us
              </h4>
              <p className="text-gray-300 text-sm mb-4">
                Follow us on social media for the latest updates and
                agricultural insights.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHoveredSocial(index)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    className="group relative"
                    aria-label={social.label}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${social.color} rounded-xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300`}
                    />
                    <div className="relative p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                      <social.icon className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </a>
                ))}
              </div>

              {/* Stats */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                  <p className="text-2xl font-bold text-green-400">500+</p>
                  <p className="text-xs text-gray-400">Farmers Trained</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                  <p className="text-2xl font-bold text-emerald-400">45+</p>
                  <p className="text-xs text-gray-400">Seed Varieties</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Sierra Leone Seed Certification
              Agency (SLeSCA). All rights reserved.
            </p>

            {/* <div className="flex items-center gap-6">
              <Link
                to="/privacy-policy"
                className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link
                to="/sitemap"
                className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-300"
              >
                Sitemap
              </Link>
            </div> */}
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full shadow-2xl hover:shadow-green-500/50 text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 z-50 group"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6 group-hover:animate-bounce" />
      </button>

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.2;
          }
        }

        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </footer>
  );
}

export default Footer;
