import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Users,
  User,
  Building2,
  Briefcase,
} from "lucide-react";

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
        Administrative: [
          "ICT",
          "Logistics",
          "Procurement",
          "Drivers",
          "Office Attendants",
        ],
      },
    },
  },
};

// Node Component with interactive features
const OrgNode = ({
  label,
  children,
  level,
  isExpanded,
  onToggle,
  hasChildren,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const getNodeStyle = () => {
    switch (level) {
      case 0:
        return {
          bg: "bg-gradient-to-br from-green-700 to-green-600",
          text: "text-white",
          border: "border-4 border-green-800",
          shadow: "shadow-2xl",
          icon: <Building2 className="inline mr-2" size={24} />,
          scale: "hover:scale-105",
        };
      case 1:
        return {
          bg: "bg-gradient-to-br from-green-600 to-green-500",
          text: "text-white",
          border: "border-2 border-green-700",
          shadow: "shadow-xl",
          icon: <Users className="inline mr-2" size={20} />,
          scale: "hover:scale-105",
        };
      case 2:
        return {
          bg: "bg-gradient-to-br from-green-500 to-green-400",
          text: "text-white",
          border: "border-2 border-green-600",
          shadow: "shadow-lg",
          icon: <Briefcase className="inline mr-2" size={18} />,
          scale: "hover:scale-105",
        };
      default:
        return {
          bg: "bg-white",
          text: "text-green-800",
          border: "border-2 border-green-300",
          shadow: "shadow-md",
          icon: <User className="inline mr-2" size={16} />,
          scale: "hover:scale-105",
        };
    }
  };

  const style = getNodeStyle();

  return (
    <div className="flex flex-col items-center gap-2 relative">
      {/* Vertical connector line */}
      {level > 0 && (
        <div className="absolute -top-4 w-0.5 h-4 bg-green-400"></div>
      )}

      <div
        className={`relative rounded-xl px-6 py-4 ${style.bg} ${style.text} ${
          style.border
        } ${style.shadow} ${style.scale} transition-all duration-300 ${
          hasChildren ? "cursor-pointer" : ""
        } min-w-[180px] text-center`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={hasChildren ? onToggle : undefined}
        role={hasChildren ? "button" : "text"}
        tabIndex={hasChildren ? 0 : undefined}
        onKeyDown={
          hasChildren
            ? (e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onToggle();
                }
              }
            : undefined
        }
      >
        {/* Hover glow effect */}
        {isHovered && hasChildren && (
          <div className="absolute inset-0 bg-white opacity-10 rounded-xl"></div>
        )}

        <div className="relative z-10 flex items-center justify-center">
          {style.icon}
          <span className="font-bold text-sm sm:text-base">{label}</span>
        </div>

        {/* Expand/Collapse button */}
        {hasChildren && (
          <button
            className={`absolute -bottom-3 left-1/2 transform -translate-x-1/2 ${
              style.bg
            } ${style.text} rounded-full p-1 ${style.border} ${
              style.shadow
            } transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
            onClick={(e) => {
              e.stopPropagation();
              onToggle();
            }}
            aria-label={isExpanded ? "Collapse" : "Expand"}
          >
            <ChevronDown size={16} />
          </button>
        )}
      </div>

      {/* Children */}
      {children && isExpanded && (
        <div className="relative mt-6">
          {/* Horizontal connector line */}
          {level < 3 && (
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6 w-0.5 h-6 bg-green-400"></div>
          )}
          <div
            className={`flex ${
              level < 2 ? "flex-col" : "flex-row flex-wrap"
            } justify-center items-start gap-6`}
          >
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

// Leaf Node Component (for array items)
const LeafNode = ({ label }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`bg-gradient-to-br from-green-50 to-green-100 text-green-800 border-2 border-green-300 rounded-lg px-4 py-3 text-sm shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 min-w-[120px] text-center font-medium ${
        isHovered ? "border-green-500" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <User className="inline mr-1" size={14} />
      {label}
    </div>
  );
};

// Branch Component with expand/collapse functionality
const OrgBranch = ({ label, children, level, globalExpand }) => {
  const [isExpanded, setIsExpanded] = useState(level < 2);

  // Update expansion state when globalExpand changes
  React.useEffect(() => {
    if (globalExpand !== null) {
      setIsExpanded(globalExpand);
    }
  }, [globalExpand]);

  const hasChildren =
    children !== null &&
    children !== undefined &&
    (Array.isArray(children)
      ? children.length > 0
      : Object.keys(children).length > 0);

  const renderChildren = () => {
    if (!children) return null;

    if (Array.isArray(children)) {
      return (
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {children.map((child, i) => (
            <LeafNode key={i} label={child} />
          ))}
        </div>
      );
    }

    return renderTree(children, level + 1, globalExpand);
  };

  return (
    <OrgNode
      label={label}
      level={level}
      isExpanded={isExpanded}
      onToggle={() => setIsExpanded(!isExpanded)}
      hasChildren={hasChildren}
    >
      {renderChildren()}
    </OrgNode>
  );
};

const renderTree = (tree, level = 0, globalExpand = null) => {
  return Object.entries(tree).map(([key, value]) => (
    <OrgBranch
      key={key}
      label={key}
      children={typeof value === "object" ? value : null}
      level={level}
      globalExpand={globalExpand}
    />
  ));
};

const Organogram = () => {
  const [globalExpand, setGlobalExpand] = useState(null);
  const [showStats, setShowStats] = useState(true);

  // Calculate statistics
  const countNodes = (obj) => {
    let count = 0;
    const traverse = (node) => {
      if (node === null) return;
      if (Array.isArray(node)) {
        count += node.length;
      } else if (typeof node === "object") {
        count += Object.keys(node).length;
        Object.values(node).forEach(traverse);
      }
    };
    traverse(obj);
    return count;
  };

  const totalPositions = countNodes(organogramData);

  const handleExpandAll = () => {
    setGlobalExpand(true);
    setTimeout(() => setGlobalExpand(null), 100);
  };

  const handleCollapseAll = () => {
    setGlobalExpand(false);
    setTimeout(() => setGlobalExpand(null), 100);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-green-50 to-gray-50">
      <div className="p-4 sm:p-8 w-full max-w-[95rem] mx-auto py-12">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto mb-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-green-800 mb-4 drop-shadow-sm">
              Sierra Leone Seed Certification Agency
            </h1>
            <p className="text-xl text-green-700 font-semibold mb-2">
              (SLeSCA)
            </p>
            <p className="text-gray-600 text-lg">Organizational Structure</p>
          </div>

          {/* Control Panel */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            <button
              onClick={handleExpandAll}
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              <ChevronDown size={20} />
              Expand All
            </button>

            <button
              onClick={handleCollapseAll}
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              <ChevronUp size={20} />
              Collapse All
            </button>

            <button
              onClick={() => setShowStats(!showStats)}
              className="px-6 py-3 bg-white border-2 border-green-600 text-green-600 hover:bg-green-600
              hover:text-white font-semibold rounded-lg shadow hover:shadow-xl transition-all duration-300"
            >
              {showStats ? "Hide" : "Show"} Statistics
            </button>
          </div>

          {/* Statistics Panel */}
          {showStats && (
            <div className="bg-white rounded-xl shadow-md p-6 mb-8 border-2 border-green-200">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-green-700 mb-1">
                    {totalPositions}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    Total Positions
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-blue-700 mb-1">8</div>
                  <div className="text-sm text-gray-600 font-medium">
                    Departments
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-purple-700 mb-1">
                    4
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    Management Levels
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Organogram Chart */}
        <div className="bg-white rounded-2xl shadow-lg p-10 border-2 border-green-200">
          <div className="flex flex-col items-center overflow-x-auto">
            <div className="">
              {renderTree(organogramData, 0, globalExpand)}
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="max-w-4xl mx-auto mt-8 bg-white rounded-md shadow-lg p-6 border-2 border-green-200">
          <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">
            Legend
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-br from-green-700 to-green-600 rounded border-2 border-green-800"></div>
              <span className="text-sm text-gray-700">Leadership</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-br from-green-600 to-green-500 rounded border-2 border-green-700"></div>
              <span className="text-sm text-gray-700">Executive</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-br from-green-500 to-green-400 rounded border-2 border-green-600"></div>
              <span className="text-sm text-gray-700">Departments</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-br from-green-50 to-green-100 rounded border-2 border-green-300"></div>
              <span className="text-sm text-gray-700">Units/Staff</span>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>Click on any position to expand or collapse its sub-units</p>
        </div>
      </div>
    </div>
  );
};

export default Organogram;
