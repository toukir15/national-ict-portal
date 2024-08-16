import { FaPeopleGroup } from "react-icons/fa6";
import { IoMdPlay } from "react-icons/io";
import { GiNotebook } from "react-icons/gi";
import { MdPolicy } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
import { FaPeopleArrows } from "react-icons/fa";
import { FaUsersGear } from "react-icons/fa6";
import { FaInstalod } from "react-icons/fa";
import { FaStaylinked } from "react-icons/fa";
import { RiInformation2Fill } from "react-icons/ri";
import { SiNovu } from "react-icons/si";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { FaHeadSideVirus } from "react-icons/fa6";
import { SiSaltproject } from "react-icons/si";
import { SiNationalrail } from "react-icons/si";
import { FaDiceD6 } from "react-icons/fa6";
import { useState } from "react";

export default function GovementServices() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState(null);
  const handleMouseMove = (e, index) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });
    setActiveCard(index);
  };

  const handleMouseLeave = () => {
    setActiveCard(null);
  };

  const servicesData = [
    {
      title: "About us",
      icon: FaPeopleGroup,
      options: [
        "Vision & Mission",
        "Organogram",
        "Officers/Staff",
        "Work Distribution",
      ],
    },
    {
      title: "Notice/Order/Circular",
      icon: GiNotebook,
      options: [
        "Notification/Circular",
        "Office orders/ Government Orders (GO)/ No Objection Certificate (NOC)",
        "News Notifications",
        "Tender/Recruitment Notice",
      ],
    },
    {
      title: "Policies & Publications",
      icon: MdPolicy,
      options: [
        "Policy",
        "Laws & Regulations/Guidelines & Strategies",
        "Publications & Annual Report",
        "Others Report",
      ],
    },
    {
      title: "Citizen e-Services",
      icon: FaGlobe,
      options: [
        "Donation in ICT Innovation",
        "Fellowship & Scholarship",
        "Hi-Teck Park One Stop Service",
        "Other e-Service",
      ],
    },
    {
      title: "Citizen's Charter",
      icon: FaPeopleArrows,
      options: [
        "Citizen's Charter",
        "Focal Point/Monitoring Committee",
        "Work Plan, Monitoring & Evaluation Report",
        "Laws/Regulations/Polices/Notification",
      ],
    },
    {
      title: "Performance Management",
      icon: FaInstalod,
      options: [
        "Guidelines/Circulars/APA Team/Focal Point",
        "Annual Performance Agreement & Result",
        "Monitoring and evaluation report",
        "APAMS software link    ",
      ],
    },
    {
      title: "Integrity Strategy",
      icon: FaStaylinked,
      options: [
        "Best Practice Work Plan Web Link",
        "Intregrity Strategy Committee & Focal point",
        "Monitoring/Evaluation Report",
        "Laws/Regulations/Polices/Notification",
      ],
    },
    {
      title: "Grievance Redress System",
      icon: FaUsersGear,
      options: [
        "GRS and Appellate Officers",
        "Work Plan, Monitoring & Evalution Report",
        "Grievance Submission (Online)",
        "Laws/Regulations/Polices/Notification",
      ],
    },
    {
      title: "Right to Information",
      icon: RiInformation2Fill,
      options: [
        "Designated Officer & Appellate Authority",
        "Application and appeal forms",
        "Self Expressible Information/Progress Report",
        "Laws/Regulations/Polices/Notification",
      ],
    },
    {
      title: "Innovative Activities",
      icon: SiNovu,
      options: [
        "Innovation Team",
        "Innovation Idea",
        "Innovation Work Plan/Publication",
        "Piloting Project",
      ],
    },
    {
      title: "Service Process",
      icon: FaScrewdriverWrench,
      options: [
        "Notification/Circular/Policy/Pub",
        "Digital Service",
        "SPS Example",
        "List of simplified services",
      ],
    },
    {
      title: "SDG and Development",
      icon: FaHeadSideVirus,
      options: [
        "Ministry/ Divisions’ SDG",
        "SDG Focal/ Alternative Focal Point",
        "SDG National Document",
        "5th Year Plan & Report",
      ],
    },
    {
      title: "Budget & Projects",
      icon: SiSaltproject,
      options: [
        "Annual Procurement Plan",
        "Budget & MTBF Budget",
        "Budget Reports/ Office Orders",
        "Important Implemented Projects",
      ],
    },
    {
      title: "National ICT Policy 2018",
      icon: SiNationalrail,
      options: [
        "National ICT Policy 2018",
        "Ministry/Division Wise Work Plan",
        "Office Order/Notification",
        "Focal Point",
      ],
    },
    {
      title: "Miscellaneous",
      icon: FaDiceD6,
      options: [
        "Different Forms",
        "Best Practice",
        "ICT Related Award",
        "Different Committee",
      ],
    },
  ];

  return (
    <section className="bg-white mt-10 lg:mt-24 px-3 lg:px-0 ">
      <div className="container mx-auto">
        <h2 className="text-3xl lg:text-4xl font-medium mb-10 lg:mb-16 ">
          Govement Services & <br /> Important{" "}
          <span className="text-green-500">Laws/Notices</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => {
            return (
              <div
                key={index}
                className="bg-gray-100 shadow-xl card p-8 rounded-2xl relative overflow-hidden border-r-4 border-green-500"
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={handleMouseLeave}
                style={{
                  background:
                    activeCard === index
                      ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(214, 244, 224, 0.9), transparent 70%)`
                      : "radial-gradient(circle at 0px 0px, rgba(214, 244, 224, 0.9), transparent 70%)",
                  transition: "background 0.2s ease",
                }}
              >
                <h4 className="text-2xl font-medium">{service.title}</h4>
                <div className="gap-8 items-center pt-4">
                  <service.icon className="lg:text-[100px] text-[80px] text-gray-800 mb-4" />
                  {service.options.map((option, idx) => {
                    return (
                      <div key={idx} className="space-y-2">
                        <button className="flex mt-1 text-start gap-1 hover:text-green-500 hover:translate-x-2 transition duration-200">
                          <span className="relative top-1">
                            <IoMdPlay />
                          </span>
                          <span>{option}</span>
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
