import React from 'react'
import missionImage from '../../image/9.jpg'

const AboutNote = () => {
  return (
    <div className="w-full max-w-[80rem] px-4 py-6 bg-green-100 shadow mt-[7rem]">
      <div className="flex flex-col md:flex-row-reverse items-center md:space-x-8">
        {/* Text Section */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-green-700 mb-4">About SLeSCA</h2>
          <p className="text-gray-700 mb-4">
            The Sierra Leone Seed Certification Agency (SLeSCA), established under the 2018 Seed Act, is the authority for seed quality regulation in Sierra Leone. By licensing seed operators, enforcing compliance, and certifying seed quality, we support sustainable agriculture and national food security.
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
