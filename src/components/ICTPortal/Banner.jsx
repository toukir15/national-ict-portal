import { BsPinFill } from "react-icons/bs";
import honorableAdviser from "/Honorable-Adviser.jpg";
import honorableSecretary from "/Honorable-Secretary.jpg";
import { useState } from "react";

export default function Banner() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoverActive, setHoverActive] = useState(false);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    setHoverActive(true);
  };

  const handleMouseLeave = () => {
    setHoverActive(false);
  };

  const officialsData = [
    {
      name: "Md. Nahid Islam",
      degignation: "Honorable Adviser",
      img: honorableAdviser,
      imageWidth: 200,
    },
    {
      name: "Md. Shamsul Arefin",
      degignation: "Secretary",
      img: honorableSecretary,
      imageWidth: 208,
    },
  ];

  return (
    <div className="background-image min-h-[calc(100vh-200px)] relative">
      <div>
        <h2 className="text-center pt-20 text-4xl font-bold text-gray-800">
          ICT Division
        </h2>
        <h4 className="text-center text-xl mt-4 text-gray-800">
          Government of the People&apos;s Republic of Bangladesh
        </h4>
      </div>
      <div className="container mx-auto mt-12 md:mt-20 lg:mt-12 md:px-16 lg:px-0 flex gap-0 lg:gap-8 px-3">
        {/* notice board  */}
        <div
          onMouseMove={(e) => hoverActive && handleMouseMove(e)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            background: hoverActive
              ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(214, 244, 224, 0.9), transparent 70%)`
              : "none",
            transition: "background 0.2s ease",
          }}
          className="bg-[#f3f4f6ec] notice  p-4 lg:p-8 w-full lg:w-[60%] rounded-lg "
        >
          <div className="flex items-center mb-2 justify-between">
            <h4 className="text-xl lg:text-3xl mb-4 font-medium flex gap-2 items-center">
              <span className="relative top-[3px]">
                <BsPinFill />
              </span>
              <span>Notice Board</span>
            </h4>
            <button className="bg-green-500 hover:bg-green-600 transition duration-200 px-4 py-1.5 font-medium rounded text-white">
              See More
            </button>
          </div>
          <div className="text-gray-800 ">
            <button className="border-t border-gray-300 py-3 lg:py-5 px-2 block hover:translate-x-3 transition duration-200 w-full text-start hover:text-green-500">
              অফিস আদেশ (দায়িত্ব বণ্টন)
            </button>
            <button className="border-t border-gray-300 py-3 lg:py-5 px-2 block hover:translate-x-3 transition duration-200 w-full text-start hover:text-green-500">
              ২০২৪-২০২৫ অর্থবছরের বিজ্ঞপ্তি
            </button>
            <button className="border-t border-gray-300 py-3 lg:py-5 px-2 block hover:translate-x-3 transition duration-200 w-full text-start hover:text-green-500">
              e-Tender For “Procurement of Food and Refreshment for Aspire to
              Innovate (a2i) Progr...
            </button>
            <button className="border-t border-gray-300 py-3 lg:py-5 px-2 block hover:translate-x-3 transition duration-200 w-full text-start hover:text-green-500">
              অফিস আদেশ (অবমুক্তি, জনাব নাসরিন সুলতানা, উপসচিব)
            </button>
            <button className="border-t border-gray-300 py-3 lg:py-5 px-2 block hover:translate-x-3 transition duration-200 w-full text-start hover:text-green-500">
              অফিস আদেশ (অবমুক্তি, জনাব নাসরিন সুলতানা, উপসচিব)
            </button>
          </div>
        </div>
        <div className="flex gap-8"></div>
      </div>
      <div className="hidden lg:block">
        <div className=" absolute bottom-5 right-20 flex gap-10">
          {officialsData.map((official) => {
            return (
              <div
                key={official.name}
                className="w-fit border p-4 rounded bg-white"
              >
                <div>
                  <img className={`w-[200px]`} src={official.img} alt="" />
                </div>
                <p className="text-center text-lg mt-1 font-medium">
                  {official.name}
                </p>
                <p className="text-center text-gray-700">
                  {official.degignation}
                </p>
                <button className="bg-green-500 hover:bg-green-600 transition duration-200 w-full py-1 rounded mt-2 text-white font-medium">
                  More
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
