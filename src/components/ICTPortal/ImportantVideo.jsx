import { useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import ReactPlayer from "react-player";
import logo from "/logo.png";

export const ImportantVideo = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handlePrev = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };
  const handleNext = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  return (
    <div className="h-fit container mx-auto px-4 pb-10 lg:py-36 lg:px-40 ">
      <div className="lg:px-20 lg:bg-[#EBF8DE] pt-20 rounded-lg lg:shadow-lg">
        <div className="flex justify-end items-center">
          <div className="hidden sm:block">
            <div className="flex gap-2 ">
              <button
                aria-label="Click me to see previous review"
                className="p-3 rounded-full text-white  hover:shadow-lg bg-light-gray bg-green-500 hover:bg-green-600 transition-all duration-200"
                onClick={handlePrev}
              >
                <FaArrowLeftLong size={18} />
              </button>
              <button
                aria-label="Click me to see next review"
                className="p-3 rounded-full text-white  hover:shadow-lg bg-light-gray bg-green-500 hover:bg-green-600 transition-all duration-200"
                onClick={handleNext}
              >
                <FaArrowRightLong size={18} />
              </button>
            </div>
          </div>
        </div>

        <Swiper
          spaceBetween={30}
          slidesPerView="auto"
          grabCursor={true}
          effect={"fade"}
          modules={[Pagination]}
          onSwiper={(swiper) => setSwiperInstance(swiper)}
        >
          <SwiperSlide className="w-full">
            <div className="flex gap-2 items-center mb-4">
              <img className="w-8" src={logo} alt="" />
              <h1>বন্যার সময় কি করণীয়</h1>
            </div>
            <div className="mt-8 h-[250px] sm:h-[400px] md:h-[550px] w-full">
              <ReactPlayer
                height={"100%"}
                width={"100%"}
                controls={true}
                url="https://youtu.be/rV1iqRD9EKY?si=5t8QSf7baHd1iAAu"
                style={{
                  borderRadius: "15px",
                  overflow: "hidden",
                }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full">
            <div className="flex gap-2 items-center mb-4">
              <img className="w-8" src={logo} alt="" />
              <h1>ডেঙ্গু প্রতিরোধে করণীয়</h1>
            </div>
            <div className="mt-8 h-[250px] sm:h-[400px] md:h-[670px] w-full">
              <ReactPlayer
                height={"100%"}
                width={"100%"}
                controls={true}
                url="https://youtu.be/xoKu5adkiF4?si=1pKOfWyz1x_jla4w"
              />
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="sm:hidden flex justify-end mt-3">
          <div className="flex gap-2 ">
            <button
              aria-label="Click me to see previous review"
              className="p-3 rounded-full text-white  hover:shadow-lg bg-light-gray bg-green-500 hover:bg-green-600 transition-all duration-200"
              onClick={handlePrev}
            >
              <FaArrowLeftLong size={18} />
            </button>
            <button
              aria-label="Click me to see next review"
              className="p-3 rounded-full text-white  hover:shadow-lg bg-light-gray bg-green-500 hover:bg-green-600 transition-all duration-200"
              onClick={handleNext}
            >
              <FaArrowRightLong size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
