import { BsPinFill } from "react-icons/bs";
import honorableAdviser from "/Honorable-Adviser.jpg";
import honorableSecretary from "/Honorable-Secretary.jpg";

export default function Banner() {
  return (
    <div className="background-image min-h-[calc(100vh-200px)] relative">
      <div>
        <h2 className="text-center pt-20 text-4xl font-bold text-gray-900">
          ICT Division
        </h2>
        <h4 className="text-center text-xl mt-4 text-gray-800">
          Government of the People&apos;s Republic of Bangladesh
        </h4>
      </div>
      <div className="container mx-auto mt-12 flex gap-8">
        <div className="bg-[#f3f4f6ec] p-8 w-[60%]  rounded-lg ">
          <div className="flex items-center mb-2 justify-between">
            <h4 className="text-3xl mb-4 font-medium flex gap-2 items-center">
              <span className="relative top-[3px]">
                <BsPinFill />
              </span>
              <span>Notice Board</span>
            </h4>
            <button className="bg-green-500 px-4 py-1.5 font-medium rounded text-white">
              See More
            </button>
          </div>
          <div className="text-gray-800">
            <button className="border-t border-gray-300 py-5 px-2 block hover:translate-x-3 transition duration-200 w-full text-start hover:text-green-500">
              অফিস আদেশ (দায়িত্ব বণ্টন)
            </button>
            <button className="border-t border-gray-300 py-5 px-2 block hover:translate-x-3 transition duration-200 w-full text-start hover:text-green-500">
              ২০২৪-২০২৫ অর্থবছরের বিজ্ঞপ্তি
            </button>
            <button className="border-t border-gray-300 py-5 px-2 block hover:translate-x-3 transition duration-200 w-full text-start hover:text-green-500">
              e-Tender For “Procurement of Food and Refreshment for Aspire to
              Innovate (a2i) Progr...
            </button>
            <button className="border-t border-gray-300 py-5 px-2 block hover:translate-x-3 transition duration-200 w-full text-start hover:text-green-500">
              অফিস আদেশ (অবমুক্তি, জনাব নাসরিন সুলতানা, উপসচিব)
            </button>
            <button className="border-t border-gray-300 py-5 px-2 block hover:translate-x-3 transition duration-200 w-full text-start hover:text-green-500">
              অফিস আদেশ (অবমুক্তি, জনাব নাসরিন সুলতানা, উপসচিব)
            </button>
          </div>
        </div>
        <div className="flex gap-8"></div>
      </div>
      <div className="w-fit border p-4 rounded bg-white absolute  bottom-0 right-20">
        <h5 className="text-2xl text-center mb-2 font-medium">Secretary</h5>
        <img className="w-52" src={honorableSecretary} alt="" />
        <p className="text-center text-lg mt-1 font-medium">Md. Nahid Islam</p>
        <button className="bg-green-500 w-full py-1 rounded mt-2 text-white font-medium">
          More
        </button>
      </div>
      <div className="w-fit border p-4 rounded bg-white absolute bottom-0 right-[400px]">
        <h5 className="text-2xl text-center mb-2 font-medium">
          Honorable Adviser
        </h5>
        <img className="w-[200px]" src={honorableAdviser} alt="" />
        <p className="text-center text-lg mt-1 font-medium">Md. Nahid Islam</p>
        <button className="bg-green-500 w-full py-1 rounded mt-2 text-white font-medium">
          More
        </button>
      </div>
    </div>
  );
}
