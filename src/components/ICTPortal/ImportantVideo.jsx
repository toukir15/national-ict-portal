import logo from "/logo.png";
import bonna from "../../assets/video/borna.mp4";
import dengu from "../../assets/video/dengu.mp4";
import { useState } from "react";
export default function ImportantVideo() {
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
  return (
    <section
      onMouseMove={(e) => hoverActive && handleMouseMove(e)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        background: hoverActive
          ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(214, 244, 224, 0.9), transparent 80%)`
          : "none",
        transition: "background 0.2s ease",
      }}
      className="flex gap-16 mb-40 py-20 px-12 bg-[#F4FCF7] rounded-2xl border shadow-sm container mx-auto"
    >
      <div className="w-1/2">
        <div className="flex items-center gap-3 mb-4">
          <img className="w-8" src={logo} alt="" />
          <h2>বন্যার সময় কি করণীয়</h2>
        </div>
        <video
          className="w-full p-4 h-[400px] border border-[#bdbdbdc7] shadow rounded-xl"
          controls
          src={bonna}
        ></video>
      </div>
      <div className="w-1/2">
        <div className="flex items-center gap-3 mb-4">
          <img className="w-8" src={logo} alt="" />
          <h2>ডেঙ্গু প্রতিরোধে করণীয়</h2>
        </div>
        <video
          className="w-full p-4 h-[400px] border border-[#bdbdbdc7] shadow rounded-xl"
          controls
          src={dengu}
        ></video>
      </div>
    </section>
  );
}
