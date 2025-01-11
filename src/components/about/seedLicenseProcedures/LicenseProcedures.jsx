import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { FaClipboardCheck, FaMoneyBillWave, FaSearch, FaCheckCircle } from "react-icons/fa";
import applicationImage from "../../../image/1.jpg"; // Replace with actual image paths
import inspectionImage from "../../../image/3.jpg";

const LicenseProcedures = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const steps = [
    {
      icon: <FaClipboardCheck className="text-green-700 text-4xl" />,
      title: "Submit Application",
      description: "Purchase the form, complete it, and submit to the regional or head office in Freetown.",
      image: applicationImage,
    },
    {
      icon: <FaMoneyBillWave className="text-green-700 text-4xl" />,
      title: "Pay Required Fees",
      description: "Pay online, through mobile money, cash, or direct bank transfer.",
      image: inspectionImage,
    },
    {
      icon: <FaSearch className="text-green-700 text-4xl" />,
      title: "Inspection",
      description: "Facilities and documents submitted are verified by inspection.",
      image: applicationImage,
    },
    {
      icon: <FaCheckCircle className="text-green-700 text-4xl" />,
      title: "Receive License",
      description: "Upon approval, the license will be granted by SLeSCA.",
      image: inspectionImage,
    },
  ];

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      businessName: "",
      businessType: "",
      paymentMethod: "",
      bankDetails: "",
      mobileMoneyNumber: "",
      supportingDocuments: null,
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Full name is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      phone: Yup.string().required("Phone number is required"),
      address: Yup.string().required("Address is required"),
      businessName: Yup.string().required("Business name is required"),
      businessType: Yup.string().required("Please select a business type"),
      paymentMethod: Yup.string().required("Please select a payment method"),
      bankDetails: Yup.string().when("paymentMethod", {
        is: "bank",
        then: Yup.string().required("Bank details are required"),
      }),
      mobileMoneyNumber: Yup.string().when("paymentMethod", {
        is: "mobileMoney",
        then: Yup.string().required("Mobile Money number is required"),
      }),
      supportingDocuments: Yup.mixed().required("Supporting documents are required"),
    }),
    onSubmit: (values) => {
      setIsSubmitted(true);
      console.log(values);
    },
  });

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl font-bold text-green-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Seed License Procedures
          </motion.h2>
          <motion.p
            className="text-gray-600 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            Follow these steps to acquire a seed license in Sierra Leone. Apply online with ease.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transform hover:scale-105 transition duration-300 ease-in-out"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3 }}
            >
              {step.icon}
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-32 object-cover rounded my-4"
              />
              <h3 className="text-lg font-bold text-gray-800">{step.title}</h3>
              <p className="text-gray-600 mt-2">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Application Form */}
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white shadow-xl rounded-lg p-8 space-y-6"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Seed License Application Form</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Input Fields */}
            {[
              { name: "fullName", label: "Full Name", type: "text" },
              { name: "email", label: "Email Address", type: "email" },
              { name: "phone", label: "Phone Number", type: "text" },
              { name: "address", label: "Address", type: "text" },
              { name: "businessName", label: "Business Name", type: "text" },
            ].map(({ name, label, type }) => (
              <div key={name}>
                <label className="block text-gray-700 font-semibold">{label}</label>
                <input
                  type={type}
                  name={name}
                  className="w-full mt-2 p-3 border rounded focus:ring-2 focus:ring-green-500"
                  {...formik.getFieldProps(name)}
                />
                {formik.touched[name] && formik.errors[name] && (
                  <p className="text-red-500 text-sm mt-2">{formik.errors[name]}</p>
                )}
              </div>
            ))}

            {/* Business Type */}
            <div>
              <label className="block text-gray-700 font-semibold">Business Type</label>
              <select
                name="businessType"
                className="w-full mt-2 p-3 border rounded focus:ring-2 focus:ring-green-500"
                {...formik.getFieldProps("businessType")}
              >
                <option value="" label="Select business type" />
                <option value="grower" label="Seed Grower" />
                <option value="processor" label="Seed Processor" />
                <option value="vendor" label="Seed Vendor" />
                <option value="importer" label="Seed Importer" />
                <option value="exporter" label="Seed Exporter" />
              </select>
              {formik.touched.businessType && formik.errors.businessType && (
                <p className="text-red-500 text-sm mt-2">{formik.errors.businessType}</p>
              )}
            </div>
          </div>

          {/* Supporting Documents */}
          <div className="mt-6">
            <label className="block text-gray-700 font-semibold">
              Upload Supporting Documents
            </label>
            <input
              type="file"
              name="supportingDocuments"
              className="w-full mt-2 p-3 border rounded focus:ring-2 focus:ring-green-500"
              onChange={(event) =>
                formik.setFieldValue("supportingDocuments", event.target.files[0])
              }
            />
            {formik.touched.supportingDocuments && formik.errors.supportingDocuments && (
              <p className="text-red-500 text-sm mt-2">{formik.errors.supportingDocuments}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-green-700 text-white font-bold py-3 rounded hover:bg-green-800"
            >
              Submit Application
            </button>
          </div>
        </form>

        {/* Success Modal */}
        {isSubmitted && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-green-700">Application Submitted!</h3>
              <p className="mt-4 text-gray-600">Thank you for your application. We will review your submission and contact you shortly.</p>
              <button
                className="mt-6 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800"
                onClick={() => setIsSubmitted(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default LicenseProcedures;
