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

export default function Contact() {
  return (
    <div>
      <div className="container mx-auto  flex justify-between pl-6 ">
        <div className="py-4">
          <img src={logo} alt="" />
        </div>
        <div className="flex justify-between  gap-4">
          <div className="flex gap-5 text-[22px] text-green-500 py-4 items-center">
            <button>
              <FaFacebookSquare />
            </button>
            <div className="border border-[#f0f0f089] h-10" />
            <button>
              <FaYoutube />
            </button>
            <div className="border border-[#f0f0f089] h-10" />

            <button>
              <FaXTwitter />
            </button>
            <div className="border border-[#f0f0f089] h-10" />

            <button>
              <FaLinkedinIn />
            </button>
            <div className="border border-[#f0f0f089] h-10" />

            <button>
              <FaInstagram />
            </button>
            <div className="border border-[#f0f0f089] h-10" />

            <button>
              <FaTelegramPlane />
            </button>
            <div className="border border-[#f0f0f089] h-10" />

            <button>
              <FaWhatsapp />
            </button>
          </div>
          <div className="bg-[#26c44b71] h-auto flex items-center px-4 gap-10">
            <div>
              <h3 className="text-2xl font-medium mb-1">Wednesday</h3>
              <h6>14 Aug 2024</h6>
            </div>
            <div>
              <div className="flex  items-center gap-2 mb-1">
                <TiWeatherCloudy className="text-xl" />
                <h3 className="text-xl font-medium">25 - 30 C</h3>
              </div>
              <h6>24Hr PSI 54-59PSI</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
