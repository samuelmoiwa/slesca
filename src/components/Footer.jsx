/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import logo from '../asset/logo.jpg'
import twitter from "../asset/icon_twitter.svg";
import linkedIn from "../asset/icon_linkedin.svg";
import facebook from "../asset/icon_Facebook.svg";
import instagram from "../asset/icons_Instagram.svg";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-green-900 to-gray-900 py-8">
      <div className="container mx-auto px-4 max-w-[90rem]">
        <div className="flex justify-center items-center">
          <img src={logo} alt="Logo" className="h-16 mr-2" />
        </div>

        <div className="w-full flex flex-col md:flex-row justify-center items-center mt-4">

          <div className="w-full md:mr-8">
            <h4 className="text-gray-100 uppercase font-semibold">Contact Me</h4>
            <p className="text-gray-200 mt-2">
              Address: SLeSCA Head Office, Freetown, Sierra Leone
            </p>
            <p className="text-gray-200 mt-1">Phone: +232 00 000 000</p>
            <p className="text-gray-200 mt-1">Email:  info@slesca.gov.sl</p>
          </div>
          <div className='w-full flex flex-col md:justify-center items-center text-white font-Poppins font-semibold'>
            <Link
            className="hover:underline hover:decoration-green-500 hover:decoration-2 transition duration-150 ease-in-out"
            to='/faqs'
            >
              FAQs
            </Link>
            <Link
            className="hover:underline hover:decoration-green-500 hover:decoration-2 transition duration-150 ease-in-out"
            to='/about/seeds-act'
            >
              The Seeds Act
            </Link>
            <Link
            className="hover:underline hover:decoration-green-500 hover:decoration-2 transition duration-150 ease-in-out"
            to='/services/training-workshops'
            >
              Training and Workshops
            </Link>


          </div>
          <div className="w-full flex md:flex-row md:justify-end mt-4 md:mt-0">
            <div className="flex flex-col md:justify-end">
              <h4 className="text-gray-100 uppercase font-semibold">Social Media</h4>
              <div className="flex mt-2 md:justify-end">

              <a
                  rel="facebook noreferrer"
                  href="#"
                  target="_blank"
                  className="px-1 py-2 flex justify-center
                  transform hover:scale-110 transition-transform duration-300"
              >
                  <img class="w-8 h-8" src={facebook} alt="image" />
              </a>

              <a
                  rel="twitter noreferrer"
                  href="#"
                  target="_blank"
                  className="px-1 py-2 flex justify-center
                  transform hover:scale-110 transition-transform duration-300"
              >
                  <img class="w-8 h-8" src={twitter} alt="image" />
              </a>

              <a
                  rel="linkedin noreferrer"
                  href="#"
                  target="_blank"
                  className="px-1 py-2 flex justify-center
                  transform hover:scale-110 transition-transform duration-300"
              >
                  <img class="w-8 h-8 " src={linkedIn} alt="image" />
              </a>

              <a
                  rel="phone"
                  href="tel: +23279000000"
                  className="px-1 py-2 flex justify-center
                  transform hover:scale-110 transition-transform duration-300"
              >
                  <img class="w-8 h-8 " src={instagram} alt="image" />
              </a>
              </div>
            </div>
          </div>

        </div>
        <hr className="border-gray-600 my-6" />
        <div className="text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Sierra Leone Seed Certification Agency (SLeSCA). All rights reserved.
        </div>
      </div>
    </footer>
  );
}









export default Footer;
