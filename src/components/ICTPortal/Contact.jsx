import logo from "/logo.png";
import { FaFacebookSquare, FaTelegramPlane } from "react-icons/fa";
import {
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { TiWeatherCloudy } from "react-icons/ti";
import national from "../../assets/national.mp3";

export default function Contact() {
  return (
    <div className="hidden lg:block">
      <div className="container mx-auto  flex justify-between pl-6 ">
        <div className="py-4 flex items-center gap-12">
          <img src={logo} alt="" />
          <div className="flex gap-2 items-center ">
            <audio controls src={national}></audio>
          </div>
        </div>
        <div className="flex justify-between  gap-4">
          <div className="flex gap-12 text-[22px] text-green-500 py-4 items-center">
            <button className="hover:text-green-600 transition duratiion-200">
              <FaFacebookSquare />
            </button>
            <button className="hover:text-green-600 transition duratiion-200">
              <FaYoutube />
            </button>

            <button className="hover:text-green-600 transition duratiion-200">
              <FaXTwitter />
            </button>

            <button className="hover:text-green-600 transition duratiion-200">
              <FaLinkedinIn />
            </button>

            <button className="hover:text-green-600 transition duratiion-200">
              <FaInstagram />
            </button>

            <button className="hover:text-green-600 transition duratiion-200">
              <FaTelegramPlane />
            </button>

            <button className="hover:text-green-600 transition duratiion-200">
              <FaWhatsapp />
            </button>
          </div>
          <div className="bg-[#ff952b] h-auto flex items-center px-4 gap-10">
            <div>
              <h3 className="text-2xl font-medium mb-1">Wednesday</h3>
              <h6>14 Aug 2024</h6>
            </div>
            <div>
              <div className="flex  items-center gap-2 mb-1">
                <TiWeatherCloudy className="text-xl" />
                <h3 className="text-xl font-medium">25 - 30 C</h3>
              </div>
              <h6 className="text-gray-800">24Hr PSI 54-59PSI</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
