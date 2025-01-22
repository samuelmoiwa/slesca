import React from "react";
import { Timeline } from "../../components/ui/timeline";
import one from '../../image/timeline/1.jpeg'
import two from '../../image/timeline/2.jpeg'
import three from '../../image/timeline/3.jpeg'
import four from '../../image/timeline/4.jpg'
import five from '../../image/timeline/5.jpg'
import six from '../../image/timeline/6.jpg'
import seven from '../../image/timeline/7.jpg'
import eight from '../../image/timeline/8.jpg'
import nine from '../../image/timeline/9.jpg'
import ten from '../../image/timeline/10.JPG'

export function TimelineSection() {
  const data = [
    {
      title: "2022",
      content: (
        <div>
          <p className="text-neutral-800 text-xs md:text-sm font-normal mb-8">
          NO GOV. IMPORTATION OF RICE SEED IN 2023.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={three}
              alt="New DU Lab in 2024"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md"
            />
            <img
              src={four}
              alt="Training session at DU Lab"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022 - 2023",
      content: (
        <div>
          <p className="text-neutral-800 text-xs md:text-sm font-normal mb-8">
          IDENTIFIED TEN ADDITIONAL KEY SEED PRODUCERS.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={one}
              alt="DU Lab training session"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md"
            />
            <img
              src={two}
              alt="Students receiving certificates"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022 - 2023",
      content: (
        <div>
          <p className="text-neutral-800 text-xs md:text-sm font-normal mb-8">
          COLLABORATE WITH SEED ACTORS ACROSS THE COUNTRY.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={five}
              alt="First DU Lab setup in 2009"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md"
            />
            <img
              src={six}
              alt="Early DU Lab operations"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022 - 2023",
      content: (
        <div>
          <p className="text-neutral-800 text-xs md:text-sm font-normal mb-4">
            RELEASED NEW VARIETIES (RELEASED 19 VARIETIES OF RICE, GROUNDNUT & SOYA BEANS).
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={seven}
              alt="Blueprint for new DU Lab"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md"
            />
            <img
              src={eight}
              alt="Future DU Lab locations"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022 - 2023",
      content: (
        <div>
          <p className="text-neutral-800 text-xs md:text-sm font-normal mb-4">
            TRAINED AROUND 400 SEED ACTORS ACROSS THE COUNTRY.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={nine}
              alt="Blueprint for new DU Lab"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md"
            />
            <img
              src={ten}
              alt="Future DU Lab locations"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full max-w-[90rem]">
        <Timeline data={data} />
      </div>

    </div>
  );
}
