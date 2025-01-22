import React from "react";

const organogramData = {
  "Minister of Agriculture": {
    Board: {
      "Executive Director": {
        "Internal Audit": null,
        "Secretariat": null,
        Projects: ["Ext. Projects", "Training", "M&E", "Research"],
        Technical: ["Register Data", "Field", "Laboratory"],
        Administrative: [
          "Finance",
          "Procurement",
          "Logistics",
          "Drivers",
          "ICT",
          "Programs",
          "Legal",
          "Media/PRO",
          "Business Unit",
          "Secretary",
          "Office Attendants",
        ],
      },
    },
  },
};

const renderLevel = (data, level = 0) => {
  return Object.entries(data).map(([key, value], index) => (
    <div
      key={index}
      className={`border-l-4 pl-4 ml-4 mb-6 border-green-${300 + level * 100}`}
    >
      <div className={`text-lg font-bold mb-2 text-green-${700 - level * 100}`}>
        {key}
      </div>
      {value ? (
        <div className="ml-4">
          {Array.isArray(value)
            ? value.map((item, i) => (
                <div
                  key={i}
                  className="bg-green-50 rounded-lg p-2 mb-2 shadow-sm"
                >
                  <span className="text-sm font-medium text-green-800">
                    {item}
                  </span>
                </div>
              ))
            : renderLevel(value, level + 1)}
        </div>
      ) : null}
    </div>
  ));
};

const Organogram = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
        <h2 className="text-4xl font-extrabold text-green-800 text-center mb-12">
          SLeSCA Organogram
        </h2>
        <div className="bg-white shadow-lg rounded-lg p-8">
          {renderLevel(organogramData)}
        </div>
      </div>
    </section>
  );
};

export default Organogram;
