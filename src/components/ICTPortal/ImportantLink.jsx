import { FaArrowRightLong } from "react-icons/fa6";
import eDirectory from "../../../public/e-directory.jpg";
import internal from "../../../public/internal.jpg";
import mygov from "../../../public/mygov.jpg";
import discount from "../../../public/discount.jpg";
import { useState } from "react";

export default function ImportantLink() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });
  };

  return (
    <section className="lg:py-36 py-16 container mx-auto px-4 lg:px-0">
      <h2 className="text-3xl lg:text-4xl font-medium mb-8 lg:mb-16 ">
        Important Links & <br /> Essential{" "}
        <span className="text-green-500">Info</span>
      </h2>
      <div className=" lg:flex">
        <div
          onMouseMove={(e) => handleMouseMove(e)}
          style={{
            background: ` radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(214, 244, 224, 0.9), transparent 70%)`,
            transition: "background 0.2s ease",
          }}
          className="border w-full lg:w-[60%] rounded-2xl shadow-lg lg:flex"
        >
          <div className="lg:flex gap-2 lg:w-[70%] px-6 lg:border-r">
            <div className="lg:py-20 py-6 w-full lg:w-1/2">
              <h6 className="text-xl font-medium mb-2">Internal eServices</h6>
              <ul className="space-y-[2px] text-gray-700">
                <li className="group flex items-center gap-2 w-fit cursor-pointer">
                  <p className="w-[14px] group-hover:w-[18px] transition-all duration-200 h-[2px] bg-green-500"></p>
                  <p className="group-hover:text-green-500 transition duration-100 text-gray">
                    Web Mail
                  </p>
                </li>
                <li className="group flex items-center gap-2 w-fit cursor-pointer">
                  <p className="w-[14px] group-hover:w-[18px] transition-all duration-200 h-[2px] bg-green-500"></p>
                  <p className="group-hover:text-green-500 transition duration-100 text-gray">
                    Online Application
                  </p>
                </li>
                <li className="group flex items-center gap-2 w-fit cursor-pointer">
                  <p className="w-[14px] group-hover:w-[18px] transition-all duration-200 h-[2px] bg-green-500"></p>
                  <p className="group-hover:text-green-500 transition duration-100 text-gray">
                    National Enterprise Architecture
                  </p>
                </li>
                <li className="group flex items-center gap-2 w-fit cursor-pointer">
                  <p className="w-[14px] group-hover:w-[18px] transition-all duration-200 h-[2px] bg-green-500"></p>
                  <p className="group-hover:text-green-500 transition duration-100 text-gray">
                    CIRT
                  </p>
                </li>
                <li className="group flex items-center gap-2 w-fit cursor-pointer">
                  <p className="w-[14px] group-hover:w-[18px] transition-all duration-200 h-[2px] bg-green-500"></p>
                  <p className="group-hover:text-green-500 transition duration-100 text-gray">
                    Online Recruitment System
                  </p>
                </li>
                <li className="group flex items-center gap-2 w-fit cursor-pointer">
                  <p className="w-[14px] group-hover:w-[18px] transition-all duration-200 h-[2px] bg-green-500"></p>
                  <p className="group-hover:text-green-500 transition duration-100 text-gray">
                    One Stop Service (OSS)
                  </p>
                </li>
              </ul>
              <button className="bg-green-500 p-1 gap-2 text-white mt-4 rounded-full hover:bg-green-600 transition duration-200 flex px-4 items-center">
                <p>More</p>
                <FaArrowRightLong className="relative top-[2px]" />
              </button>
            </div>
            <div className="lg:py-20 py-6 w-full lg:w-1/2">
              <h6 className="text-xl font-medium mb-2">Important Links</h6>
              <ul className="space-y-[2px] text-gray-700">
                <li className="group flex items-center gap-2 w-fit cursor-pointer">
                  <p className="w-[14px] group-hover:w-[18px] transition-all duration-200 h-[2px] bg-green-500"></p>
                  <p className="group-hover:text-green-500 transition duration-100 text-gray">
                    President&apos;s Office
                  </p>
                </li>
                <li className="group flex items-center gap-2 w-fit cursor-pointer">
                  <p className="w-[14px] group-hover:w-[18px] transition-all duration-200 h-[2px] bg-green-500"></p>
                  <p className="group-hover:text-green-500 transition duration-100 text-gray">
                    Prime Minister&apos;s Office
                  </p>
                </li>
                <li className="group flex items-center gap-2 w-fit cursor-pointer">
                  <p className="w-[14px] group-hover:w-[18px] transition-all duration-200 h-[2px] bg-green-500"></p>
                  <p className="group-hover:text-green-500 transition duration-100 text-gray">
                    BKKB
                  </p>
                </li>
                <li className="group flex items-center gap-2 w-fit cursor-pointer">
                  <p className="w-[14px] group-hover:w-[18px] transition-all duration-200 h-[2px] bg-green-500"></p>
                  <p className="group-hover:text-green-500 transition duration-100 text-gray">
                    NSDA
                  </p>
                </li>
                <li className="group flex items-center gap-2 w-fit cursor-pointer">
                  <p className="w-[14px] group-hover:w-[18px] transition-all duration-200 h-[2px] bg-green-500"></p>
                  <p className="group-hover:text-green-500 transition duration-100 text-gray">
                    Primary Digital Content
                  </p>
                </li>
                <li className="group flex items-center gap-2 w-fit cursor-pointer">
                  <p className="w-[14px] group-hover:w-[18px] transition-all duration-200 h-[2px] bg-green-500"></p>
                  <p className="group-hover:text-green-500 transition duration-100 text-gray">
                    National Portal
                  </p>
                </li>
              </ul>
              <button className="bg-green-500 p-1 gap-2 text-white mt-4 rounded-full hover:bg-green-600 transition duration-200 flex px-4 items-center">
                <p>More</p>
                <FaArrowRightLong className="relative top-[2px]" />
              </button>
            </div>
          </div>
          <div className="lg:w-[30%] flex justify-center items-center lg:px-20 pb-8 lg:pb-0">
            <div className="inline-block border border-gray-300 h-fit rounded-md shadow-md text-center">
              <div className="bg-green-200 text-gray-800 font-bold py-1 w-full">
                VisitorCounter
              </div>
              <table className="min-w-full bg-white">
                <tbody>
                  <tr>
                    <td className="px-2 pr-52 lg:pr-20 py-3 border-t border-gray-200 text-start">
                      Today
                    </td>
                    <td className="px-2 py-3 border-t border-gray-200 text-right">
                      818
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 pr-52 lg:pr-20 py-3 border-t border-gray-200 text-start">
                      Yesterday
                    </td>
                    <td className="px-2 py-3 border-t border-gray-200 text-right">
                      4502
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 pr-52 lg:pr-20 py-3 border-t border-gray-200 text-start">
                      All
                    </td>
                    <td className="px-2 py-3 border-t border-gray-200 text-right">
                      5327838
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 pr-52 lg:pr-20 py-3 border-t border-gray-200 text-start">
                      Online
                    </td>
                    <td className="px-2 py-1 border-t border-gray-200 text-right">
                      85
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Images displayed below the previous content */}
        <div className="px-8 space-y-3 mt-10 lg:mt-0 lg:w-[40%]">
          <img
            src={eDirectory}
            className="border rounded-xl shadow-lg cursor-pointer"
            alt="eDirectory"
          />
          <img
            src={internal}
            className="border rounded-xl shadow-lg cursor-pointer"
            alt="Internal Services"
          />
          <img
            src={mygov}
            className="border rounded-xl shadow-lg cursor-pointer"
            alt="My gov"
          />
          <img
            src={discount}
            className="border rounded-xl shadow-lg cursor-pointer"
            alt="My gov"
          />
        </div>
      </div>
    </section>
  );
}
