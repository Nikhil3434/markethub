import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#e5edfb] relative overflow-hidden px-6 py-16 mt-8"> 

      <h1 className="absolute text-[150px] font-bold text-[#cfdaf3] opacity-20 top-1/2 -translate-y-1/2 left-10 pointer-events-none select-none hidden lg:block">
        MarketHub
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
      
        <div>
          <h4 className="font-semibold text-lg mb-3 text-black">The good</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><a href="#">Home</a></li>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Why Markethub ?</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>


        <div>
          <h4 className="font-semibold text-lg mb-3 text-black">The Boring</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Cookies</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-3 text-black">The Cool</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">YouTube</a></li>
          </ul>
        </div>


        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h4 className="font-semibold text-lg text-black mb-4">
            Boost your Sales by Joining Us Today!
          </h4>
          <ul className="space-y-2 text-sm text-gray-700 mb-5">
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-600" /> Get discount
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-600" /> Lorem Ipsuem
            </li>
          </ul>

          <div className="flex gap-3 flex-wrap">
            <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-900 transition">
              <ArrowRight size={16} /> Get in touch
            </button>
            <button className="bg-[#d2e2ff] text-black px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition">
              Book a call
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
