import React from "react";

const organogramData = {
  "Minister of Agriculture": {
    Board: {
      "Executive Director": {
        "Internal Audit": null,
        Secretariat: ["Legal", "Secretary", "Business Unit", "Media/PRO"],
        Finance: null,
        Programs: ["Training"],
        Projects: ["M&E", "Research", "Ext. Projects"],
        Technical: ["Laboratory", "Field", "Register Data"],
        Administrative: ["ICT", "Logistics", "Procurement", "Drivers", "Office Attendants"],
      },
    },
  },
};

const renderBranch = (label, children, level) => (
  <div className={`flex flex-col items-center gap-4`}>
    <div
      className={`rounded-lg px-6 py-3 shadow-lg bg-green-100 text-green-900 font-semibold ${
        level === 0 ? "border-4 border-green-500" : "border border-green-300"
      }`}
    >
      {label}
    </div>
    {children && (
      <div
        className={`flex flex-wrap justify-center gap-6 ${
          level > 1 ? "mt-2" : "mt-4"
        }`}
      >
        {Array.isArray(children)
          ? children.map((child, i) => (
              <div
                key={i}
                className="bg-green-50 text-green-700 border border-green-300 rounded-md px-4 py-2 text-sm shadow-sm"
              >
                {child}
              </div>
            ))
          : renderTree(children, level + 1)}
      </div>
    )}
  </div>
);

const renderTree = (tree, level = 0) => {
  return Object.entries(tree).map(([key, value], index) =>
    renderBranch(key, typeof value === "object" ? value : null, level)
  );
};

const Organogram = () => {
  return (
    <div className="w-full flex justify-center items-center bg-gray-50">
        <div className="p-8 bg-gray-50 w-full max-w-[90rem]">
        <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-extrabold text-green-800 text-center mb-8">
            Sierra Leone Seed Certification Agency (SLeSCA) Organogram
            </h1>
            <div className="flex flex-col items-center">{renderTree(organogramData)}</div>
        </div>
        <style jsx>{`
            @layer utilities {
            .bg-gradient-green {
                background: linear-gradient(135deg, #a7f3d0, #10b981);
            }
            }
        `}</style>
        </div>
    </div>

  );
};

export default Organogram;
