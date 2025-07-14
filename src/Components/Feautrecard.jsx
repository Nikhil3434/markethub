import { useState } from "react";
import { FaStar, FaMagic, FaLightbulb } from "react-icons/fa";

export default function FeatureCard({ icon, title, detail }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative w-full max-w-[300px] h-[340px] cursor-pointer transform transition duration-500 hover:scale-105 perspective"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full duration-700 transform-style preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
       
        <div className="absolute w-full h-full bg-gradient-to-br from-[#e0ecff] to-[#f4f8ff] rounded-3xl shadow-2xl flex flex-col justify-between items-center p-6 backface-hidden border border-white/40 backdrop-blur-xl overflow-hidden">

          <FaStar className="absolute text-[#cbdcfb] text-[120px] opacity-10 rotate-12 -top-8 -right-6 pointer-events-none" />
          <FaLightbulb className="absolute text-[#e0eaff] text-[80px] opacity-10 bottom-4 left-4 rotate-45 pointer-events-none animate-spin-slow" />
          <div className="absolute w-24 h-24 bg-[#a4c8ff]/20 rounded-full blur-2xl -bottom-10 -right-10 animate-float" />

          <div className="relative w-16 h-16 rounded-full bg-gradient-to-r from-[#6fa8ff] to-[#3366ff] flex items-center justify-center text-3xl text-white shadow-lg z-10">
            <div className="absolute w-full h-full animate-ping rounded-full bg-[#a4c8ff]/50"></div>
            <span className="z-10">{icon}</span>
          </div>

  
          <div className="text-center mt-4 z-10">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
            <p className="text-xs italic text-blue-500 mb-2 flex items-center justify-center gap-1">
              <FaMagic className="text-sm" /> Empower your business
            </p>
            <button className="px-4 py-1 bg-white text-sm text-blue-700 rounded-full hover:bg-blue-50 transition font-medium shadow-md">
              Know More →
            </button>
          </div>
        </div>

        <div className="absolute w-full h-full bg-white/40 backdrop-blur-2xl rounded-3xl shadow-2xl p-6 text-center text-sm text-gray-800 flex items-center justify-center rotate-y-180 backface-hidden border border-white/20">
          <p>{detail}</p>
        </div>
      </div>
    </div>
  );
}
