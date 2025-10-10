import React, { useState, useEffect } from "react";
import { X, Mail, Linkedin, Twitter } from "lucide-react";


const TeamMemberCard = ({ member, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 border border-gray-100"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={`View details for ${member.name}`}
    >
      <div className="relative mb-4">
        <img
          src={member.image || "https://via.placeholder.com/150"}
          alt={`${member.name}'s profile`}
          className="w-28 h-28 mx-auto rounded-full object-cover border-4 border-green-100"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/150?text=No+Image";
          }}
        />
        <div className="absolute bottom-0 right-1/2 translate-x-1/2 translate-y-2 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium">
          View Profile
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-1">
        {member.name}
      </h3>
      <p className="text-green-700 text-sm font-medium">{member.role}</p>
    </div>
  );
};

// Team Member Modal Component
const TeamMemberModal = ({ member, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !member) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="relative bg-gradient-to-r from-green-600 to-green-700 p-8 rounded-t-2xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-all"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
          <div className="flex flex-col items-center">
            <img
              src={member.image || "https://via.placeholder.com/150"}
              alt={`${member.name}'s profile`}
              className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/150?text=No+Image";
              }}
            />
            <h2 id="modal-title" className="text-3xl font-bold text-white mt-4">
              {member.name}
            </h2>
            <p className="text-green-100 text-lg font-medium mt-1">
              {member.role}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-8">
          {member.bio && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                About
              </h3>
              <p className="text-gray-600 leading-relaxed">{member.bio}</p>
            </div>
          )}

          {member.expertise && member.expertise.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {member.expertise.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {member.education && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Education
              </h3>
              <p className="text-gray-600">{member.education}</p>
            </div>
          )}

          {member.experience && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Experience
              </h3>
              <p className="text-gray-600">{member.experience}</p>
            </div>
          )}

          {/* Social Links */}
          {(member.email || member.linkedin || member.twitter) && (
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Connect
              </h3>
              <div className="flex gap-4">
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail size={20} />
                    <span className="text-sm">Email</span>
                  </a>
                )}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors"
                    aria-label={`${member.name}'s LinkedIn profile`}
                  >
                    <Linkedin size={20} />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                )}
                {member.twitter && (
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors"
                    aria-label={`${member.name}'s Twitter profile`}
                  >
                    <Twitter size={20} />
                    <span className="text-sm">Twitter</span>
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Main Teams Component
const TeamsComponent = ({ teamMembers = [], title = "", description = "" }) => {
  const [showAll, setShowAll] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const displayLimit = 9;
  const visibleMembers = showAll
    ? teamMembers
    : teamMembers.slice(0, displayLimit);
  const hasMoreMembers = teamMembers.length > displayLimit;

  const handleCardClick = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedMember(null), 300);
  };

  return (
    <>
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {description}
            </p>
          </div>

          {/* Team Grid */}
          {teamMembers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visibleMembers.map((member, index) => (
                <TeamMemberCard
                  key={member.id || index}
                  member={member}
                  onClick={() => handleCardClick(member)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No team members to display
              </p>
            </div>
          )}

          {/* Show More/Less Button */}
          {hasMoreMembers && (
            <div className="text-center mt-10">
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center gap-2 px-8 py-3 bg-white border-2 border-green-600 text-green-600 font-medium rounded-lg hover:bg-green-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                aria-label={
                  showAll ? "Show less team members" : "Show all team members"
                }
              >
                {showAll ? (
                  <>
                    <span>Show Less</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m18 15-6-6-6 6" />
                    </svg>
                  </>
                ) : (
                  <>
                    <span>Show All ({teamMembers.length})</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      <TeamMemberModal
        member={selectedMember}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default TeamsComponent;
