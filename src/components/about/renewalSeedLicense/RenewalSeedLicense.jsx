import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import {
  FaRedoAlt,
  FaEnvelope,
  FaPhone,
  FaAddressCard,
  FaCheckCircle,
  FaMoneyBillWave,
} from "react-icons/fa";
import renewalImage from "../../../image/6.jpg"; // Replace with your actual image path

const RenewalSeedLicense = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      businessName: "",
      licenseNumber: "",
      paymentMethod: "",
      renewalReason: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Full name is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      phone: Yup.string().required("Phone number is required"),
      address: Yup.string().required("Address is required"),
      businessName: Yup.string().required("Business name is required"),
      licenseNumber: Yup.string().required("License number is required"),
      paymentMethod: Yup.string().required("Please select a payment method"),
      renewalReason: Yup.string().required("Please provide a reason for renewal"),
    }),
    onSubmit: (values) => {
      alert("License Renewal Request Submitted Successfully!");
      console.log(values);
    },
  });

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-800">Renewal of Seed License</h2>
          <p className="text-gray-600 mt-4">
            Renew your seed license with SLeSCA to continue operations smoothly. Follow the steps and submit your renewal application online.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: <FaRedoAlt className="text-green-700 text-4xl" />,
              title: "Submit Application",
              description: "Fill out the renewal form with accurate details.",
            },
            {
              icon: <FaCheckCircle className="text-green-700 text-4xl" />,
              title: "Verify Documents",
              description: "Ensure your license number and business details are correct.",
            },
            {
              icon: <FaMoneyBillWave className="text-green-700 text-4xl" />,
              title: "Pay Fees",
              description: "Complete payment online, via mobile money, or direct bank transfer.",
            },
            {
              icon: <FaCheckCircle className="text-green-700 text-4xl" />,
              title: "Receive Confirmation",
              description: "Receive your renewed license upon approval.",
            },
          ].map((step, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              {step.icon}
              <h3 className="text-lg font-bold text-gray-800 mt-4">{step.title}</h3>
              <p className="text-gray-600 mt-2">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Form Section */}
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white shadow-lg rounded-lg p-8"
        >
          <h3 className="text-2xl font-bold text-green-800 mb-6">
            Renewal Application Form
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-gray-700 font-semibold">
                Full Name
              </label>
              <div className="flex items-center mt-2">
                <FaAddressCard className="text-green-500 mr-2" />
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  {...formik.getFieldProps("fullName")}
                />
              </div>
              {formik.touched.fullName && formik.errors.fullName && (
                <p className="text-red-500 text-sm mt-2">{formik.errors.fullName}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold">
                Email
              </label>
              <div className="flex items-center mt-2">
                <FaEnvelope className="text-green-500 mr-2" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  {...formik.getFieldProps("email")}
                />
              </div>
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm mt-2">{formik.errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-gray-700 font-semibold">
                Phone Number
              </label>
              <div className="flex items-center mt-2">
                <FaPhone className="text-green-500 mr-2" />
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  {...formik.getFieldProps("phone")}
                />
              </div>
              {formik.touched.phone && formik.errors.phone && (
                <p className="text-red-500 text-sm mt-2">{formik.errors.phone}</p>
              )}
            </div>

            {/* License Number */}
            <div>
              <label htmlFor="licenseNumber" className="block text-gray-700 font-semibold">
                License Number
              </label>
              <input
                type="text"
                id="licenseNumber"
                name="licenseNumber"
                className="w-full mt-2 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                {...formik.getFieldProps("licenseNumber")}
              />
              {formik.touched.licenseNumber && formik.errors.licenseNumber && (
                <p className="text-red-500 text-sm mt-2">{formik.errors.licenseNumber}</p>
              )}
            </div>

            {/* Payment Method */}
            <div>
              <label htmlFor="paymentMethod" className="block text-gray-700 font-semibold">
                Payment Method
              </label>
              <select
                id="paymentMethod"
                name="paymentMethod"
                className="w-full mt-2 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                {...formik.getFieldProps("paymentMethod")}
              >
                <option value="">Select Payment Method</option>
                <option value="bank">Bank Transfer</option>
                <option value="mobileMoney">Mobile Money</option>
                <option value="cash">Cash</option>
              </select>
              {formik.touched.paymentMethod && formik.errors.paymentMethod && (
                <p className="text-red-500 text-sm mt-2">{formik.errors.paymentMethod}</p>
              )}
            </div>

            {/* Renewal Reason */}
            <div className="col-span-1 md:col-span-2">
              <label htmlFor="renewalReason" className="block text-gray-700 font-semibold">
                Reason for Renewal
              </label>
              <textarea
                id="renewalReason"
                name="renewalReason"
                className="w-full mt-2 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                rows="4"
                {...formik.getFieldProps("renewalReason")}
              ></textarea>
              {formik.touched.renewalReason && formik.errors.renewalReason && (
                <p className="text-red-500 text-sm mt-2">{formik.errors.renewalReason}</p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <button
              type="submit"
              className="w-full p-3 bg-green-700 text-white font-bold rounded-lg hover:bg-green-800"
            >
              Submit Renewal Application
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RenewalSeedLicense;
