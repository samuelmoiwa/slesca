import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactUsComponent = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    message: Yup.string().min(10, "Message should be at least 10 characters").required("Message is required"),
  });

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    alert(JSON.stringify(values, null, 2));
    resetForm();
  };

  return (
    <section className="py-12 bg-gray-50 w-full max-w-[100rem]">
      <div className="container mx-auto px-6 lg:px-16 max-w-[90rem]">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800">Contact Us</h1>
          <p className="text-gray-600 mt-4">
            Have questions or need assistance? Reach out to us using the form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-green-700 text-3xl" />
              <div>
                <h4 className="text-lg font-bold text-gray-800">Our Address</h4>
                <p className="text-gray-600 max-w-[20rem]">Sierra Leone Seed Certification Agency Tower Hill, Freetown, Sierra Leone West Africa</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhone className="text-green-700 text-3xl" />
              <div>
                <h4 className="text-lg font-bold text-gray-800">Call Us</h4>
                <p className="text-gray-600">+232 76 906 032 / +232 78 051 704</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-green-700 text-3xl" />
              <div>
                <h4 className="text-lg font-bold text-gray-800">Email Us</h4>
                <p className="text-gray-600">info@slesca.gov.sl</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {() => (
                <Form className="bg-white shadow-lg rounded-lg p-6 space-y-6">
                  <div>
                    <label className="block text-gray-700 font-semibold" htmlFor="name">
                      Name
                    </label>
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      className="w-full mt-2 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Enter your name"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 text-sm mt-2"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold" htmlFor="email">
                      Email
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className="w-full mt-2 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Enter your email"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm mt-2"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold" htmlFor="message">
                      Message
                    </label>
                    <Field
                      as="textarea"
                      id="message"
                      name="message"
                      rows="5"
                      className="w-full mt-2 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Enter your message"
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="text-red-500 text-sm mt-2"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-700 text-white py-3 rounded hover:bg-green-800 transition duration-300"
                  >
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsComponent;
