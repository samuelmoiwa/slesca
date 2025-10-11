import React, { useState } from "react";
import {
  Bell,
  Search,
  Calendar,
  X,
  Tag,
  Share2,
  Bookmark,
  Clock,
  AlertCircle,
  TrendingUp,
  Filter,
  ChevronRight,
  Sparkles,
  Star,
  Eye,
} from "lucide-react";

const notices = [
  {
    id: 1,
    title: "Seed Licensing Renewal Deadline",
    date: "2025-01-15",
    description:
      "All seed operators are reminded to renew their licenses by January 15th, 2025. Failure to renew may result in penalties. This is an important notice to ensure compliance with the 2018 Seed Act. Contact the SLeSCA office for more details.",
    fullDescription:
      "All seed operators are reminded to renew their licenses by January 15th, 2025. Failure to renew may result in penalties and suspension of operations. This is an important notice to ensure compliance with the 2018 Seed Act. All documentation must be submitted to the SLeSCA office by the deadline. For assistance with the renewal process, please contact our licensing department during business hours.",
    featured: true,
    priority: "high",
    tags: ["Licensing", "Compliance"],
    category: "Regulatory",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800",
    views: "2.3K",
    color: "from-red-500 to-orange-600",
  },
  {
    id: 2,
    title: "Upcoming Farmer Training Program",
    date: "2025-02-01",
    description:
      "Join our upcoming training program on sustainable seed management. Registration closes January 25th. This training is an opportunity to enhance your skills and knowledge in seed management.",
    fullDescription:
      "Join our comprehensive training program on sustainable seed management practices. The program covers modern techniques, quality control, and best practices for seed production. Registration closes January 25th. Limited seats available. This training is an excellent opportunity to enhance your skills and knowledge in seed management. Certificate of completion will be provided.",
    featured: false,
    priority: "medium",
    tags: ["Training", "Farmers"],
    category: "Education",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800",
    views: "1.8K",
    color: "from-green-500 to-emerald-600",
  },
  {
    id: 3,
    title: "National Seed Catalogue Update",
    date: "2025-03-10",
    description:
      "The updated National Seed Catalogue is now available. Operators must ensure compliance with the latest standards. The catalogue reflects the newest seed varieties approved for use.",
    fullDescription:
      "The updated National Seed Catalogue for 2025 is now available for download. All seed operators must ensure compliance with the latest standards and regulations. The catalogue reflects the newest seed varieties approved for use in Sierra Leone. All registered varieties have been tested and meet international quality standards. Please review the catalogue carefully and update your operations accordingly.",
    featured: true,
    priority: "high",
    tags: ["Catalogue", "Standards"],
    category: "Updates",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800",
    views: "3.1K",
    color: "from-blue-500 to-cyan-600",
  },
  {
    id: 4,
    title: "New Quality Testing Procedures",
    date: "2025-01-20",
    description:
      "Updated protocols for seed quality testing are now in effect. All laboratories must implement these new procedures immediately.",
    fullDescription:
      "Updated protocols for seed quality testing are now in effect across all SLeSCA-certified laboratories. These procedures align with international standards and ECOWAS requirements. All laboratories must implement these new procedures immediately to maintain certification. Training sessions will be provided for laboratory staff. Contact the Quality Control department for more information.",
    featured: false,
    priority: "medium",
    tags: ["Quality", "Testing"],
    category: "Regulatory",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800",
    views: "1.2K",
    color: "from-purple-500 to-pink-600",
  },
  {
    id: 5,
    title: "Import/Export Regulation Changes",
    date: "2025-02-15",
    description:
      "Important changes to seed import and export regulations. All traders must review the updated guidelines before proceeding.",
    fullDescription:
      "Important changes have been made to seed import and export regulations effective February 15th, 2025. All traders and operators involved in cross-border seed trade must review the updated guidelines before proceeding with any transactions. New documentation requirements and inspection protocols are now in place. Failure to comply may result in delays or rejection of shipments.",
    featured: false,
    priority: "high",
    tags: ["Import", "Export", "Trade"],
    category: "Regulatory",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800",
    views: "980",
    color: "from-orange-500 to-amber-600",
  },
];

const Notice = () => {
  const [search, setSearch] = useState("");
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [bookmarked, setBookmarked] = useState([]);

  const categories = ["All", ...new Set(notices.map((n) => n.category))];

  const filteredNotices = notices.filter((notice) => {
    const matchesSearch =
      notice.title.toLowerCase().includes(search.toLowerCase()) ||
      notice.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || notice.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredNotices = filteredNotices.filter((n) => n.featured);
  const regularNotices = filteredNotices.filter((n) => !n.featured);

  const toggleBookmark = (id) => {
    setBookmarked((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const getPriorityIcon = (priority) => {
    if (priority === "high")
      return <AlertCircle className="w-4 h-4 text-red-500" />;
    return <TrendingUp className="w-4 h-4 text-blue-500" />;
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-gray-50 via-white to-gray-50 py-16 lg:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, #10b981 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      {/* Floating Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-green-100 rounded-full px-4 py-2 mb-6">
            <Bell className="w-5 h-5 text-green-600 animate-pulse" />
            <span className="text-green-800 font-semibold text-sm">
              Latest Updates
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-emerald-500 to-cyan-600">
              Public Notices
            </span>
          </h1>

          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest notices and announcements from SLeSCA.
            Important information for seed operators and stakeholders.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 mb-12">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search notices by title or description..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors appearance-none cursor-pointer"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 flex items-center justify-between text-sm">
            <span className="text-gray-600">
              Found{" "}
              <span className="font-bold text-green-700">
                {filteredNotices.length}
              </span>{" "}
              notice{filteredNotices.length !== 1 ? "s" : ""}
            </span>
            <div className="flex items-center space-x-2 text-gray-500">
              <Bookmark className="w-4 h-4" />
              <span>{bookmarked.length} bookmarked</span>
            </div>
          </div>
        </div>

        {/* Featured Notices */}
        {featuredNotices.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
              <h2 className="text-3xl font-bold text-gray-900">
                Featured Notices
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {featuredNotices.map((notice) => (
                <div
                  key={notice.id}
                  className="group relative bg-white rounded-2xl shadow-xl border-2 border-gray-100 hover:border-green-300 transition-all duration-500 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedNotice(notice)}
                >
                  {/* Featured Badge */}
                  <div className="absolute top-4 left-4 z-10 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                    <Star className="w-3 h-3 fill-white" />
                    <span>Featured</span>
                  </div>

                  {/* Bookmark Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleBookmark(notice.id);
                    }}
                    className="absolute top-4 right-4 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:scale-110 transition-transform"
                  >
                    <Bookmark
                      className={`w-5 h-5 ${
                        bookmarked.includes(notice.id)
                          ? "fill-green-600 text-green-600"
                          : "text-gray-600"
                      }`}
                    />
                  </button>

                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={notice.image}
                      alt={notice.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      {getPriorityIcon(notice.priority)}
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${notice.color} text-white`}
                      >
                        {notice.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                      {notice.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {notice.description}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{notice.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{notice.views} views</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {notice.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center space-x-1 bg-green-50 text-green-700 text-xs font-medium px-3 py-1 rounded-full"
                        >
                          <Tag className="w-3 h-3" />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>

                    <button className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-3 px-4 rounded-xl hover:shadow-lg transition-all duration-300 transform group-hover:scale-105">
                      <span>Read Full Notice</span>
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Notices */}
        {regularNotices.length > 0 && (
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Bell className="w-6 h-6 text-green-600" />
              <h2 className="text-3xl font-bold text-gray-900">All Notices</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularNotices.map((notice) => (
                <div
                  key={notice.id}
                  className="group relative bg-white rounded-2xl shadow-lg border border-gray-200 hover:border-green-300 hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedNotice(notice)}
                >
                  {/* Bookmark Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleBookmark(notice.id);
                    }}
                    className="absolute top-4 right-4 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:scale-110 transition-transform"
                  >
                    <Bookmark
                      className={`w-4 h-4 ${
                        bookmarked.includes(notice.id)
                          ? "fill-green-600 text-green-600"
                          : "text-gray-600"
                      }`}
                    />
                  </button>

                  {/* Image */}
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={notice.image}
                      alt={notice.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center space-x-2 mb-3">
                      {getPriorityIcon(notice.priority)}
                      <span className="text-xs font-semibold text-gray-600">
                        {notice.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-green-700 transition-colors">
                      {notice.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {notice.description}
                    </p>

                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{notice.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-3 h-3" />
                        <span>{notice.views}</span>
                      </div>
                    </div>

                    <button className="w-full bg-green-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2">
                      <span>Read More</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {filteredNotices.length === 0 && (
          <div className="text-center py-16">
            <div className="inline-flex p-6 bg-gray-100 rounded-full mb-4">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              No notices found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>

      {/* Notice Detail Modal */}
      {selectedNotice && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedNotice(null)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Header */}
            <div className="relative h-72 overflow-hidden">
              <img
                src={selectedNotice.image}
                alt={selectedNotice.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent"></div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedNotice(null)}
                className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
              >
                <X className="w-6 h-6 text-gray-900" />
              </button>

              {/* Priority & Category Badge */}
              <div className="absolute top-4 left-4 flex items-center space-x-2">
                <div
                  className={`bg-gradient-to-r ${selectedNotice.color} px-4 py-2 rounded-full flex items-center space-x-2`}
                >
                  {getPriorityIcon(selectedNotice.priority)}
                  <span className="text-white font-bold text-sm">
                    {selectedNotice.category}
                  </span>
                </div>
              </div>

              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                  {selectedNotice.title}
                </h3>
                <div className="flex items-center space-x-4 text-white/90">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{selectedNotice.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span className="text-sm">
                      {selectedNotice.views} views
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-8">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedNotice.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center space-x-1 bg-green-100 text-green-700 text-sm font-medium px-4 py-2 rounded-full"
                  >
                    <Tag className="w-4 h-4" />
                    <span>#{tag}</span>
                  </span>
                ))}
              </div>

              {/* Full Description */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Notice Details
                </h4>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {selectedNotice.fullDescription}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleBookmark(selectedNotice.id);
                  }}
                  className={`flex-1 flex items-center justify-center space-x-2 font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                    bookmarked.includes(selectedNotice.id)
                      ? "bg-green-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <Bookmark
                    className={
                      bookmarked.includes(selectedNotice.id) ? "fill-white" : ""
                    }
                  />
                  <span>
                    {bookmarked.includes(selectedNotice.id)
                      ? "Bookmarked"
                      : "Bookmark"}
                  </span>
                </button>
                <button className="flex-1 flex items-center justify-center space-x-2 bg-blue-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <Share2 className="w-5 h-5" />
                  <span>Share Notice</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -50px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(50px, 50px) scale(1.05);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Notice;
