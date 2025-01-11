import React, { useState } from "react";

const notices = [
  {
    id: 1,
    title: "Seed Licensing Renewal Deadline",
    date: "2025-01-15",
    description:
      "All seed operators are reminded to renew their licenses by January 15th, 2025. Failure to renew may result in penalties. This is an important notice to ensure compliance with the 2018 Seed Act. Contact the SLeSCA office for more details.",
    featured: true,
    tags: ["Licensing", "Compliance"],
    image: "https://via.placeholder.com/600x400",
  },
  {
    id: 2,
    title: "Upcoming Farmer Training Program",
    date: "2025-02-01",
    description:
      "Join our upcoming training program on sustainable seed management. Registration closes January 25th. This training is an opportunity to enhance your skills and knowledge in seed management.",
    featured: false,
    tags: ["Training", "Farmers"],
    image: "https://via.placeholder.com/600x400",
  },
  {
    id: 3,
    title: "National Seed Catalogue Update",
    date: "2025-03-10",
    description:
      "The updated National Seed Catalogue is now available. Operators must ensure compliance with the latest standards. The catalogue reflects the newest seed varieties approved for use.",
    featured: true,
    tags: ["Catalogue", "Standards"],
    image: "https://via.placeholder.com/600x400",
  },
];

const Notice = () => {
  const [search, setSearch] = useState("");
  const [selectedNotice, setSelectedNotice] = useState(null);

  const filteredNotices = notices.filter((notice) =>
    notice.title.toLowerCase().includes(search.toLowerCase())
  );

  const openModal = (notice) => {
    setSelectedNotice(notice);
  };

  const closeModal = () => {
    setSelectedNotice(null);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800">Public Notices</h1>
          <p className="text-gray-600 mt-4">
            Stay updated with the latest notices and announcements from SLeSCA.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search notices..."
            className="w-full md:w-1/2 p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Featured Notices */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">
            Featured Notices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notices
              .filter((notice) => notice.featured)
              .map((notice) => (
                <div
                  key={notice.id}
                  className="p-6 bg-white shadow rounded-lg border border-gray-200"
                >
                  <h3 className="text-xl font-semibold text-gray-800">
                    {notice.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">
                    Date: {notice.date}
                  </p>
                  <p className="text-gray-600 mt-4">
                    {notice.description.slice(0, 100)}...
                  </p>
                  <button
                    className="mt-4 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800"
                    onClick={() => openModal(notice)}
                  >
                    Read More
                  </button>
                </div>
              ))}
          </div>
        </div>

        {/* All Notices */}
        <div>
          <h2 className="text-2xl font-semibold text-green-800 mb-4">
            All Notices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNotices.map((notice) => (
              <div
                key={notice.id}
                className="p-6 bg-white shadow rounded-lg border border-gray-200"
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {notice.title}
                </h3>
                <p className="text-sm text-gray-500 mt-2">Date: {notice.date}</p>
                <p className="text-gray-600 mt-4">
                  {notice.description.slice(0, 100)}...
                </p>
                <button
                  className="mt-4 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800"
                  onClick={() => openModal(notice)}
                >
                  Read More
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedNotice && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-8 shadow-lg max-w-[40rem] w-full">
              <button
                className="top-4 right-4 bg-red-100 px-2 py-1 rounded-full text-red-500 hover:text-white hover:bg-red-600 sm:text-xl mb-3"
                onClick={closeModal}
              >
                ✕
              </button>
              <img
                src={selectedNotice.image}
                alt={selectedNotice.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {selectedNotice.title}
              </h3>
              <p className="text-sm text-gray-500">Date: {selectedNotice.date}</p>
              <p className="text-gray-600 mt-4">{selectedNotice.description}</p>
              <div className="mt-4">
                {selectedNotice.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full mr-2"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Notice;
