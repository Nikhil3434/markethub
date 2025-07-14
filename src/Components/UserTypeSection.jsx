
import React from "react";
import { useNavigate } from "react-router-dom";

const UserTypeSection = () => {
  const navigate = useNavigate();

  return (
    <section id="usertype" className="w-full py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 rounded-3xl shadow-md overflow-hidden">

        <div className="flex-1 flex flex-col items-center text-center px-6 py-10 gap-6">
          <img src="/img1.png" alt="Buyer" className="w-52 h-52 object-contain" />
          <h2 className="text-xl md:text-2xl font-semibold">Continue as a Buyer</h2>
          <button
            onClick={() => navigate("/buyer-login")}
            className="bg-[#d2e2ff] text-blue-600 px-8 py-2 rounded-xl text-lg font-medium shadow hover:shadow-md hover:scale-105 duration-300"
          >
            Continue
          </button>
          <p className="text-sm">
            Not registered?{" "}
            <span className="text-blue-600 underline cursor-pointer">click here</span>
          </p>
        </div>

       
        <div className="hidden md:block w-[1px] bg-gray-300 h-[80%]"></div>

      
        <div className="flex-1 flex flex-col items-center text-center px-6 py-10 gap-6">
          <img src="/img2.png" alt="Seller" className="w-52 h-52 object-contain" />
          <h2 className="text-xl md:text-2xl font-semibold">Continue as a Seller</h2>
          <button
            onClick={() => navigate("/seller-login")}
            className="bg-[#d2e2ff] text-blue-600 px-8 py-2 rounded-xl text-lg font-medium shadow hover:shadow-md hover:scale-105 duration-300"
          >
            Continue
          </button>
          <p className="text-sm">
            Not registered?{" "}
            <span className="text-blue-600 underline cursor-pointer">click here</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default UserTypeSection;
