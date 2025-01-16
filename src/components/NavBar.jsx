import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../asset/Coat_of_arms.png";
import AOS from '../components/aosConfig';

const navigation = [
  { name: "Home", href: "/", current: true },
  {
    name: "About Us",
    href: "/about",
    current: false,
    subLinks: [
      { name: "SLeSCA Structure", href: "/about/structure" },
      { name: "The Seeds Act", href: "/about/seeds-act" },
      { name: "Seed License Procedures", href: "/about/license-procedures" },
      { name: "Renewal of Seed License", href: "/about/renewal-license" },
      { name: "Recent Projects", href: "/about/recent-projects" },
    ],
  },
  {
    name: "Services",
    href: "/services",
    current: false,
    subLinks: [
      { name: "Seed Quality Certification", href: "/services/quality-certification" },
      { name: "Regulatory Compliance", href: "/services/regulatory-compliance" },
      { name: "Training and Workshops", href: "/services/training-workshops" },
    ],
  },
  {
    name: "Our Team",
    href: "/team",
    // current: false,
    // subLinks: [
    //   { name: "Board of Directors", href: "/team/board" },
    //   { name: "Management Team", href: "/team/management" },
    // ],
  },
  { name: "Public Notices", href: "/public-notices", current: false },
  { name: "Contact Us", href: "/contact-us", current: false },
  { name: "FAQs", href: "/faqs", current: false },
];

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [activeNav, setActiveNav] = useState("/");

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (href) => {
    localStorage.setItem("currentNav", href);
    setActiveNav(href);
    setIsOpen(false);
  };

  useEffect(() => {
    const savedNav = localStorage.getItem("currentNav");
    const currentPath = location.pathname;
    setActiveNav(savedNav && savedNav === currentPath ? savedNav : currentPath);
    AOS.refresh();
  }, [location]);

  const renderSubLinks = (subLinks) => (
    <div className="ml-4 space-y-1">
      {subLinks.map((subItem) => (
        <NavLink
          key={subItem.name}
          exact
          to={subItem.href}
          className={`
            block px-3 py-2 text-sm text-white
            hover:underline hover:decoration-green-500
            transition duration-150 ease-in-out font-Poppins font-semibold
          `}
          onClick={() => handleNavClick(subItem.href)}
        >
          {subItem.name}
        </NavLink>
      ))}
    </div>
  );

  return (
    <nav className="bg-green-950 shadow top-0 w-full fixed z-50" aria-label="Top">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex w-full justify-between  h-16">
          <div className="flex items-center lg:ml-20 justify-start">
            <NavLink to="/" className="text-xl flex flex-row justify-center items-center font-bold font-Poppins text-white">

              <img className="block h-8 w-auto lg:hidden" src={logo} alt="SLeSCA" />
              <img className="hidden h-8 w-auto lg:block" src={logo} alt="SLeSCA" />
              <p className="text-pretty md:ml-2 md:mt-2">SLeSCA</p>
            </NavLink>
          </div>

          <div className="flex items-center -mr-2 lg:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white
              hover:bg-gray-100 focus:outline-none transition duration-150 ease-in-out
              font-Poppins font-bold"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>

          <div className="hidden lg:flex lg:items-center justify-center lg:ml-6 mr-52">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <NavLink
                  exact
                  to={item.href}
                  className={`
                    px-3 py-2 text-sm text-white
                    hover:underline hover:decoration-green-500 hover:decoration-2
                    transition duration-150 ease-in-out font-Poppins font-semibold
                    ${
                      activeNav === item.href
                        ? "underline decoration-green-500 decoration-2"
                        : ""
                    }
                  `}
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.name}
                </NavLink>
                {item.subLinks && (
                  <div className="absolute hidden group-hover:block bg-gray-800 shadow-lg p-2 mt-2 rounded">
                    {renderSubLinks(item.subLinks)}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden">
          <div className="pt-2 pb-3 flex flex-col justify-center items-center">
            {navigation.map((item) => (
              <div key={item.name}>
                <NavLink
                  exact
                  to={item.href}
                  className={`
                    block px-3 py-2 text-sm text-white
                    hover:underline hover:decoration-blue-500
                    transition duration-150 ease-in-out font-Poppins font-semibold
                    ${
                      activeNav === item.href
                        ? "underline decoration-blue-500 decoration-2"
                        : ""
                    }
                  `}
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.name}
                </NavLink>
                {item.subLinks && renderSubLinks(item.subLinks)}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
