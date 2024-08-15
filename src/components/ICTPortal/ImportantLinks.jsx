import { FaArrowRightLong } from "react-icons/fa6";
import eDirectory from "../../../public/e-directory.jpg";
import internal from "../../../public/internal.jpg";
import mygov from "../../../public/mygov.jpg";
import discount from "../../../public/discount.jpg";

export default function ImportantLinks() {
  return (
    <section className="py-20">
      <div className="container mx-auto flex">
        <div className="border w-[60%] rounded-2xl flex">
          <div className="flex gap-2 w-[70%] px-6 border-r">
            <div className="py-20 w-1/2">
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
            <div className="py-20 w-1/2">
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
          <div className="w-[30%] flex justify-center items-center px-20">
            <div className="inline-block border border-gray-300 h-fit rounded-md shadow-md text-center">
              <div className="bg-green-200 text-gray-800 font-bold py-1 w-full">
                VisitorCounter
              </div>
              <table className="min-w-full bg-white">
                <tbody>
                  <tr>
                    <td className="px-2 pr-20 py-3 border-t border-gray-200 text-start">
                      Today
                    </td>
                    <td className="px-2 py-3 border-t border-gray-200 text-right">
                      818
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 pr-20 py-3 border-t border-gray-200 text-start">
                      Yesterday
                    </td>
                    <td className="px-2 py-3 border-t border-gray-200 text-right">
                      4502
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 pr-20 py-3 border-t border-gray-200 text-start">
                      All
                    </td>
                    <td className="px-2 py-3 border-t border-gray-200 text-right">
                      5327838
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 pr-20 py-3 border-t border-gray-200 text-start">
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
        <div className="px-8 space-y-3 w-[40%]">
          <img src={eDirectory} className=" z-10 mb-4" alt="eDirectory" />
          <img src={internal} className="" alt="Internal Services" />
          <img src={mygov} className="" alt="My gov" />
          <img src={discount} className="" alt="My gov" />
        </div>
      </div>
    </section>
  );
}
