import { useState } from "react";

export default function Navbar() {
  const [hoveredNavLink, setHoveredNavLink] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navbarOptions = [
    {
      name: "home",
      navLinkName: "Home",
      buttonColor: "#DC2F19",
      buttonHoverColor: "#A32010",
      nestedOptions: null,
    },
    {
      name: "about-us",
      navLinkName: "About us",
      buttonColor: "#DC2F19",
      buttonHoverColor: "#A32010",
      nestedOptions: [
        {
          nestedOptionName: "About Division",
          options: [
            "History & Activities",
            "Vision & Mission",
            "Honorable Adviser",
            "List of Ex-Ministers",
            "Secretary",
            "List of Ex-Secretaries",
            "Organogram",
            "Allocation of Business",
            "Principal Function",
            "Work Distribution",
            "Member Nomination",
          ],
        },
        {
          nestedOptionName: "Man Power",
          options: [
            "Officers",
            "Work Distribution",
            "Information Officer",
            "GRS and Appellate Officer",
            "Focal Point Officers",
          ],
        },
        {
          nestedOptionName: "Man Power",
          options: ["Citizen Charter", "List of Citizen e-Services"],
        },
        {
          nestedOptionName: "Committees of Ministry/Division",
          options: [
            "Committees of Ministry/Division",
            "Committees chaired by Honorable PM ",
          ],
        },
      ],
    },
    {
      name: "affiliated-offices/institutions",
      navLinkName: "Affiliated Offices/Institutions",
      buttonColor: "#BA2412",
      buttonHoverColor: "#A32010",
      nestedOptions: [
        {
          nestedOptionName: null,
          options: ["List of Offices/Institutions"],
        },
      ],
    },
    {
      name: "project/programme",
      navLinkName: "Project Programme",
      buttonColor: "#BA2412",
      buttonHoverColor: "#A32010",
      nestedOptions: [
        {
          nestedOptionName: "Project",
          options: [
            "On going Projects",
            "Procurement Plan",
            "Completed Projects",
          ],
        },
        {
          nestedOptionName: "Programme",
          options: ["Complted Programme"],
        },
      ],
    },
    {
      name: "gallery",
      navLinkName: "Gallery",
      buttonColor: "#8B1C0E",
      buttonHoverColor: "#A32010",
      nestedOptions: [
        {
          nestedOptionName: null,
          options: ["Photo Gallery", "Video Gallery"],
        },
      ],
    },
    {
      name: "act/policy",
      navLinkName: "Act/Policy",
      buttonColor: "#8B1C0E",
      buttonHoverColor: "#A32010",
      nestedOptions: [
        {
          nestedOptionName: null,
          options: [
            "Acts",
            "Policy",
            "Guidelines and Strategies",
            "Draft Acts, Rules and Policy",
          ],
        },
      ],
    },
    {
      name: "e-services",
      navLinkName: "e-Services",
      buttonColor: "#8B1C0E",
      buttonHoverColor: "#A32010",
      nestedOptions: [
        {
          nestedOptionName: null,
          options: [
            "Innovation Information System Management System",
            "Casual Leave Management",
            "Smart Dashboard",
            "Get Your Freelancer ID",
            "Fellowship & Innovation Fund Application",
            "e-Nothi",
            "Web mail",
            "Online Salary Submission",
            "e-Tendering(e-GP)",
            "Mygov",
            "GRP",
            "Project Monitoring System",
            "Online ACR",
            "Online Recruitement",
            "EMPORIA",
          ],
        },
      ],
    },
    {
      name: "contact/comment",
      navLinkName: "Contact/Comment",
      buttonColor: "#8B1C0E",
      buttonHoverColor: "#A32010",
      nestedOptions: [
        {
          nestedOptionName: "Contact",
          options: ["Office Address"],
        },
        {
          nestedOptionName: "Comment",
          options: ["Your question & comment"],
        },
      ],
    },
  ];

  return (
    <nav className="relative bg-green-500">
      <div className="container mx-auto flex justify-between items-center p-4 lg:p-0">
        {/* Logo or Branding */}
        <div className="text-white text-2xl font-bold lg:hidden ">
          ICT Division
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16m-7 6h7"
              }
            />
          </svg>
        </button>

        {/* Full Navbar for larger screens */}
        <div className="hidden lg:flex space-x-4">
          {navbarOptions.map((navbarOption, key) => (
            <div
              key={key}
              className="relative"
              onMouseEnter={() => setHoveredNavLink(navbarOption?.navLinkName)}
              onMouseLeave={() => setHoveredNavLink(null)}
            >
              <button
                className={`py-7 font-medium transition duration-150 text-white px-8 bg-[${navbarOption.buttonColor}] hover:bg-green-600`}
              >
                {navbarOption.navLinkName}
              </button>

              {/* Dropdown Menu */}
              <div
                onMouseEnter={() =>
                  setHoveredNavLink(navbarOption?.navLinkName)
                }
                onMouseLeave={() => setHoveredNavLink(null)}
                className={`absolute left-0 top-full bg-white px-4 py-4 rounded-b-lg z-50 border-l-4 border-green-500 shadow-lg flex gap-6  ${
                  navbarOption?.navLinkName === hoveredNavLink &&
                  navbarOption.nestedOptions
                    ? "block transition duration-500"
                    : "hidden"
                }`}
              >
                {navbarOption.nestedOptions?.map((nestedOption, index) => (
                  <div
                    onMouseEnter={() =>
                      setHoveredNavLink(navbarOption?.navLinkName)
                    }
                    onMouseLeave={() => setHoveredNavLink(null)}
                    key={index}
                    className="whitespace-nowrap relative"
                  >
                    <h4 className="font-semibold">
                      {nestedOption.nestedOptionName}
                    </h4>
                    <ul>
                      {nestedOption.options.map((option, i) => (
                        <li
                          key={i}
                          className="py-1 text-gray-600 text-sm hover:text-green-500 hover:translate-x-2 transition duration-200 cursor-pointer"
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Navbar */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full bg-white p-4 shadow-lg z-50 ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          {navbarOptions.map((navbarOption, key) => (
            <div key={key} className="relative">
              <button
                onClick={() =>
                  setHoveredNavLink(
                    hoveredNavLink === navbarOption?.navLinkName
                      ? null
                      : navbarOption?.navLinkName
                  )
                }
                className={`w-full text-left py-2 text-lg font-medium text-black bg-gray-100 mb-2 px-4 rounded-md ${
                  hoveredNavLink === navbarOption?.navLinkName
                    ? "bg-gray-200"
                    : ""
                }`}
              >
                {navbarOption.navLinkName}
              </button>

              {/* Dropdown Menu */}
              <div
                onMouseEnter={() =>
                  setHoveredNavLink(navbarOption?.navLinkName)
                }
                className={`${
                  hoveredNavLink === navbarOption?.navLinkName
                    ? "block"
                    : "hidden"
                } pl-4`}
              >
                {navbarOption.nestedOptions?.map((nestedOption, index) => (
                  <div key={index} className="py-2">
                    <h4 className="font-semibold">
                      {nestedOption.nestedOptionName}
                    </h4>
                    <ul>
                      {nestedOption.options.map((option, i) => (
                        <li
                          key={i}
                          className="py-1 text-sm text-gray-700 hover:text-green-500 transition duration-200 cursor-pointer"
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
