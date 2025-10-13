import React, { useState } from "react";
import {
  RotateCw,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  CheckCircle2,
  Building2,
  FileText,
  Upload,
  Sparkles,
  AlertCircle,
  Calendar,
  DollarSign,
  Shield,
  Award,
  Clock,
  Info,
  ArrowRight,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";

const RenewalSeedLicense = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    businessName: "",
    licenseNumber: "",
    licenseExpiry: "",
    paymentMethod: "",
    renewalReason: "",
  });
  const [errors, setErrors] = useState({});
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const steps = [
    {
      number: 1,
      title: "Submit Application",
      icon: RotateCw,
      description: "Fill out the renewal form with accurate details",
    },
    {
      number: 2,
      title: "Verify Documents",
      icon: CheckCircle2,
      description:
        "Ensure your license number and business details are correct",
    },
    {
      number: 3,
      title: "Pay Fees",
      icon: CreditCard,
      description:
        "Complete payment online, via mobile money, or direct bank transfer",
    },
    {
      number: 4,
      title: "Receive Confirmation",
      icon: Award,
      description: "Receive your renewed license upon approval",
    },
  ];

  const pricingInfo = [
    {
      type: "Standard Renewal",
      price: "Le 500,000",
      duration: "1 Year",
      features: ["Basic certification", "Standard processing", "Email support"],
    },
    {
      type: "Premium Renewal",
      price: "Le 900,000",
      duration: "2 Years",
      features: ["Priority processing", "24/7 support", "Expedited delivery"],
      popular: true,
    },
    {
      type: "Enterprise Renewal",
      price: "Le 1,500,000",
      duration: "3 Years",
      features: [
        "Dedicated account manager",
        "Premium support",
        "Compliance monitoring",
      ],
    },
  ];

  const requirements = [
    {
      icon: FileText,
      title: "Valid License",
      description: "Current license must be on file",
    },
    {
      icon: Building2,
      title: "Business Registration",
      description: "Updated business documents",
    },
    {
      icon: CheckCircle2,
      title: "Compliance Record",
      description: "Good standing with SLeSCA",
    },
    {
      icon: CreditCard,
      title: "Payment Ready",
      description: "Renewal fees prepared",
    },
  ];

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.businessName.trim())
      newErrors.businessName = "Business name is required";
    if (!formData.licenseNumber.trim())
      newErrors.licenseNumber = "License number is required";
    if (!formData.paymentMethod)
      newErrors.paymentMethod = "Please select a payment method";
    if (!formData.renewalReason.trim())
      newErrors.renewalReason = "Please provide a reason for renewal";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setTimeout(() => {
          setSubmitSuccess(false);
          setFormData({
            fullName: "",
            email: "",
            phone: "",
            address: "",
            businessName: "",
            licenseNumber: "",
            licenseExpiry: "",
            paymentMethod: "",
            renewalReason: "",
          });
        }, 5000);
      }, 2000);
    } else {
      setErrors(newErrors);
    }
  };

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

      <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-5 h-5 text-green-600" />
            <span className="text-green-800 font-semibold text-sm">
              License Services
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600">
              Renewal of Seed License
            </span>
          </h2>

          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Renew your seed license with SLeSCA to continue operations smoothly.
            Follow the steps and submit your renewal application online.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-green-300 to-emerald-300 -translate-x-1/2 z-0"></div>
              )}

              <div
                className={`relative bg-white rounded-2xl shadow-lg border-2 p-6 hover:shadow-xl transition-all duration-300 z-10 ${
                  currentStep === step.number
                    ? "border-green-500 shadow-green-100"
                    : "border-green-100"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-5xl font-extrabold ${
                      currentStep === step.number
                        ? "text-green-500"
                        : "text-green-100"
                    }`}
                  >
                    0{step.number}
                  </span>
                  <div
                    className={`p-3 rounded-xl ${
                      currentStep === step.number
                        ? "bg-gradient-to-br from-green-500 to-emerald-600"
                        : "bg-green-100"
                    }`}
                  >
                    <step.icon
                      className={`w-6 h-6 ${
                        currentStep === step.number
                          ? "text-white"
                          : "text-green-700"
                      }`}
                    />
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {step.title}
                </h4>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Requirements Section */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 lg:p-12 mb-16 border-2 border-blue-100">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-extrabold text-gray-900 mb-4">
              Renewal Requirements
            </h3>
            <p className="text-gray-600 text-lg">
              Ensure you have these ready before starting
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {requirements.map((req, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl w-fit mb-4">
                  <req.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{req.title}</h4>
                <p className="text-gray-600 text-sm">{req.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Plans */}
        {/* <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Renewal Pricing
            </h3>
            <p className="text-gray-600 text-lg">
              Choose the plan that best fits your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingInfo.map((plan, idx) => (
              <div
                key={idx}
                className={`relative bg-white rounded-2xl shadow-xl border-2 p-8 hover:shadow-2xl transition-all duration-300 ${
                  plan.popular
                    ? "border-green-500 transform scale-105"
                    : "border-gray-100"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.type}
                  </h4>
                  <div className="text-4xl font-extrabold text-green-600 mb-2">
                    {plan.price}
                  </div>
                  <div className="text-gray-600">{plan.duration}</div>
                </div>

                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full py-3 px-6 rounded-xl font-bold transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Select Plan
                </button>
              </div>
            ))}
          </div>
        </div> */}

        {/* Application Form */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-2xl border-2 border-gray-100 p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                <FileText className="w-6 h-6 text-green-600" />
                <span>Renewal Application Form</span>
              </h3>

              {submitSuccess && (
                <div className="mb-6 bg-green-50 border-2 border-green-200 rounded-xl p-4 flex items-center space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="text-green-800 font-semibold">
                      Application submitted successfully!
                    </p>
                    <p className="text-green-700 text-sm">
                      We'll review your application and contact you soon.
                    </p>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
                        errors.fullName
                          ? "border-red-300 focus:border-red-500"
                          : "border-gray-200 focus:border-green-500"
                      }`}
                      placeholder="Enter your full name"
                    />
                  </div>
                  {errors.fullName && (
                    <p className="mt-2 text-sm text-red-600">
                      • {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
                        errors.email
                          ? "border-red-300 focus:border-red-500"
                          : "border-gray-200 focus:border-green-500"
                      }`}
                      placeholder="your.email@example.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600">
                      • {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
                        errors.phone
                          ? "border-red-300 focus:border-red-500"
                          : "border-gray-200 focus:border-green-500"
                      }`}
                      placeholder="+232 XX XXX XXXX"
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-2 text-sm text-red-600">
                      • {errors.phone}
                    </p>
                  )}
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Address
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 transition-colors"
                      placeholder="Your address"
                    />
                  </div>
                </div>

                {/* Business Name */}
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Business Name *
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
                        errors.businessName
                          ? "border-red-300 focus:border-red-500"
                          : "border-gray-200 focus:border-green-500"
                      }`}
                      placeholder="Your business name"
                    />
                  </div>
                  {errors.businessName && (
                    <p className="mt-2 text-sm text-red-600">
                      • {errors.businessName}
                    </p>
                  )}
                </div>

                {/* License Number */}
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    License Number *
                  </label>
                  <div className="relative">
                    <Shield className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="licenseNumber"
                      value={formData.licenseNumber}
                      onChange={handleChange}
                      className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
                        errors.licenseNumber
                          ? "border-red-300 focus:border-red-500"
                          : "border-gray-200 focus:border-green-500"
                      }`}
                      placeholder="SL-XXXX-XXXX"
                    />
                  </div>
                  {errors.licenseNumber && (
                    <p className="mt-2 text-sm text-red-600">
                      • {errors.licenseNumber}
                    </p>
                  )}
                </div>

                {/* License Expiry */}
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    License Expiry Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="date"
                      name="licenseExpiry"
                      value={formData.licenseExpiry}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Payment Method */}
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Payment Method *
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      name="paymentMethod"
                      value={formData.paymentMethod}
                      onChange={handleChange}
                      className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
                        errors.paymentMethod
                          ? "border-red-300 focus:border-red-500"
                          : "border-gray-200 focus:border-green-500"
                      }`}
                    >
                      <option value="">Select payment method</option>
                      <option value="bank">Bank Transfer</option>
                      <option value="mobileMoney">Mobile Money</option>
                      <option value="cash">Cash Payment</option>
                      <option value="online">Online Payment</option>
                    </select>
                  </div>
                  {errors.paymentMethod && (
                    <p className="mt-2 text-sm text-red-600">
                      • {errors.paymentMethod}
                    </p>
                  )}
                </div>

                {/* Renewal Reason */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Reason for Renewal *
                  </label>
                  <textarea
                    name="renewalReason"
                    value={formData.renewalReason}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors resize-none ${
                      errors.renewalReason
                        ? "border-red-300 focus:border-red-500"
                        : "border-gray-200 focus:border-green-500"
                    }`}
                    placeholder="Please explain why you're renewing your license..."
                  ></textarea>
                  {errors.renewalReason && (
                    <p className="mt-2 text-sm text-red-600">
                      • {errors.renewalReason}
                    </p>
                  )}
                </div>
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full mt-8 flex items-center justify-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Renewal Application</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Help Card */}
            <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl p-6 shadow-xl text-white">
              <Info className="w-8 h-8 mb-4" />
              <h4 className="text-xl font-bold mb-2">Need Help?</h4>
              <p className="text-white/90 text-sm mb-4">
                Our support team is here to assist you with your renewal
                process.
              </p>
              <Link to={"/contact-us"} className="w-full bg-white text-green-700 font-bold py-3 px-4 rounded-xl hover:bg-green-50 transition-all duration-300">
                Contact Support
              </Link>
            </div>

            {/* Processing Time */}
            <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 p-6">
              <Clock className="w-8 h-8 text-green-600 mb-4" />
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Processing Time
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                Your renewal application will be processed within 5-7 business
                days.
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <AlertCircle className="w-4 h-4" />
                <span>Expedited processing available</span>
              </div>
            </div>

            {/* Upload Documents */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-lg border-2 border-blue-100 p-6">
              <Upload className="w-8 h-8 text-blue-600 mb-4" />
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Upload Documents
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                Attach supporting documents to speed up your application.
              </p>
              <button className="w-full bg-white border-2 border-blue-300 text-blue-700 font-bold py-3 px-4 rounded-xl hover:bg-blue-50 transition-all duration-300">
                Upload Files
              </button>
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

export default RenewalSeedLicense;
