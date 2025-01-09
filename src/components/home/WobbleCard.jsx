import React from "react";
import { WobbleCard } from "../ui/wobble-card.js";

import _7 from '../../image/7.jpg'
import _8 from '../../image/8.jpg'


const WobbleCardFile = () => {
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full"
      >
      {/* First Card */}
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-[19rem] bg-pink-800 min-h-[300px] lg:min-h-[100px]"
        className="h-[]"
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          SLeSCA is Transforming Agriculture in Sierra Leone
          </h2>
          <p className="mt-4 text-left text-sm text-neutral-200">
            Ensuring high-quality seeds and fostering a sustainable seed sector,
            SLeSCA is driving food security and agricultural growth across the nation.
          </p>
        </div>
        <img
          src={_7}
          width={500}
          height={500}
          alt="eight"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>

      {/* Second Card */}
      <WobbleCard containerClassName="col-span-1 h-[19rem] min-h-[300px]">
        <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Transforming Agriculture in Sierra Leone
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
        Through seed quality certification, training, and regulatory compliance, SLeSCA is
        empowering farmers and stakeholders to build a sustainable and food-secure future.
        </p>
      </WobbleCard>

      {/* Third Card */}
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-green-900 h-[15rem] min-h-[300px] lg:min-h-[400px] xl:min-h-[200px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Partner with SLeSCA to Transform Agriculture
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            Together, we can ensure seed quality, promote sustainable farming, and empower
            communities to achieve food security and agricultural excellence.
          </p>
        </div>
        <img
          src={_8}
          width={500}
          height={500}
          alt="seven"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );

}

export default WobbleCardFile
