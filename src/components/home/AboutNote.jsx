import React from 'react'
import missionImage from '../../image/8.jpg'

const AboutNote = () => {
  return (
    <div className="w-full max-w-[80rem] px-4 py-12 bg-green-100 shadow mt-[10rem]">
      <div className="flex flex-col md:flex-row items-center md:space-x-8">
        {/* Text Section */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-green-700 mb-4">About SLeSCA</h2>
          <p className="text-gray-700 mb-4">
            The Sierra Leone Seed Certification Agency (SLeSCA), established under the 2018 Seed Act, is the authority for seed quality regulation in Sierra Leone. By licensing seed operators, enforcing compliance, and certifying seed quality, we support sustainable agriculture and national food security.
          </p>

          <h3 className="text-2xl font-semibold text-green-600 mt-6 mb-2">Our Mission</h3>
          <p className="text-gray-700 mb-4">
            To build a robust and sustainable seed sector that guarantees seed sufficiency, contributing to food security in Sierra Leone.
          </p>

          <h3 className="text-2xl font-semibold text-green-600 mt-6 mb-2">Our Vision</h3>
          <p className="text-gray-700 mb-4">
            To establish a sustainable seed system, reducing seed importation and making the seed sector attractive for private sector investment.
          </p>

          <a
            href="/about"
            className="inline-block mt-4 px-6 py-2 bg-green-700 text-white font-semibold rounded hover:bg-green-800"
          >
            Read More
          </a>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src={missionImage}
            alt="SLeSCA Mission"
            className="w-full h-auto rounded shadow-lg"
          />
        </div>
      </div>
      </div>
  )
}

export default AboutNote
