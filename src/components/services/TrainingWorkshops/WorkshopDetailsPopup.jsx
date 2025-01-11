import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";

const workshopData = [
  {
    id: 1,
    title: "Sustainable Seed Management",
    startDate: "2025-02-15",
    registrationStatus: "Open",
    description:
      "Learn the best practices for managing seed quality to enhance crop yield and sustainability.",
  },
  {
    id: 2,
    title: "Farmers' Capacity Building",
    startDate: "2025-03-10",
    registrationStatus: "Closed",
    description:
      "Empowering farmers with modern farming techniques and knowledge to ensure sustainable development.",
  },
  {
    id: 3,
    title: "Seed Quality Certification Training",
    startDate: "2025-04-05",
    registrationStatus: "Open",
    description:
      "An intensive program for seed operators to understand and implement quality certification processes.",
  },
];

const WorkshopDetailsPopup = ({ onClose }) => {
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Full name is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      phone: Yup.string().required("Phone number is required"),
    }),
    onSubmit: (values) => {
      console.log("Form Submitted:", values);
      alert("Successfully applied for the workshop!");
    },
  });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full">
        <button
          className=" top-4 right-4 text-red-500 text-xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>
        {!selectedWorkshop ? (
          <>
            <h2 className="text-2xl font-bold text-green-700 mb-6">
              Available Workshops
            </h2>
            <div className="space-y-6">
              {workshopData.map((workshop) => (
                <motion.div
                  key={workshop.id}
                  className="p-4 border rounded-lg shadow hover:shadow-lg transition"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: workshop.id * 0.2 }}
                >
                  <h3 className="text-lg font-bold text-gray-800">{workshop.title}</h3>
                  <p className="text-sm text-gray-500">Start Date: {workshop.startDate}</p>
                  <p className="text-gray-600 mt-2">{workshop.description}</p>
                  <div className="mt-4">
                    {workshop.registrationStatus === "Open" ? (
                      <button
                        className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800"
                        onClick={() => setSelectedWorkshop(workshop)}
                      >
                        Apply
                      </button>
                    ) : (
                      <span className="text-red-500 font-semibold">Registration Closed</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        ) : (
          <form onSubmit={formik.handleSubmit} className="space-y-6">
            <h2 className="text-2xl font-bold text-green-700">
              Apply for {selectedWorkshop.title}
            </h2>
            <p className="text-sm text-gray-500">Start Date: {selectedWorkshop.startDate}</p>
            <div>
              <label className="block text-gray-700 font-semibold" htmlFor="fullName">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="w-full mt-2 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                {...formik.getFieldProps("fullName")}
              />
              {formik.touched.fullName && formik.errors.fullName ? (
                <p className="text-red-500 text-sm mt-2">{formik.errors.fullName}</p>
              ) : null}
            </div>
            <div>
              <label className="block text-gray-700 font-semibold" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full mt-2 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="text-red-500 text-sm mt-2">{formik.errors.email}</p>
              ) : null}
            </div>
            <div>
              <label className="block text-gray-700 font-semibold" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="w-full mt-2 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                {...formik.getFieldProps("phone")}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <p className="text-red-500 text-sm mt-2">{formik.errors.phone}</p>
              ) : null}
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="px-6 py-3 bg-green-700 text-white font-bold rounded-lg hover:bg-green-800"
              >
                Submit Application
              </button>
              <button
                type="button"
                className="ml-4 px-6 py-3 bg-gray-500 text-white font-bold rounded-lg hover:bg-gray-600"
                onClick={() => setSelectedWorkshop(null)}
              >
                Back
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default WorkshopDetailsPopup;
