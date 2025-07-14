
import { useNavigate } from "react-router-dom";

export default function BuyersLogin() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row h-screen">

  <div className="w-full md:w-1/2 bg-[#7da6f7] text-white flex flex-col items-center justify-center px-8 py-12">
    <h1 className="text-3xl md:text-4xl font-bold mb-6">Market Hub</h1>
    <img
      src="/img3.png"
      alt="Login Illustration"
      className="w-100
       h-auto max-w-full"
    />
  </div>
  
       <div className="w-full md:w-1/2 bg-white flex flex-col justify-center items-center p-8">
        <button
          onClick={() => navigate("/")}
          className="absolute top-4 left-4 bg-gray-200 px-4 py-1 rounded-full"
        >
          ← Back
        </button>
        <div className="absolute top-4 right-4 text-blue-600 font-medium cursor-pointer">
          Seller Log-in
        </div>

        <h2 className="text-2xl font-bold mb-1">Buyer Login</h2>
        <p className="text-sm text-gray-500 mb-6">Enter your login details below</p>

        <input
          type="email"
          placeholder="enter your email"
          className="border border-blue-300 px-4 py-2 rounded w-full mb-4"
        />
        <input
          type="password"
          placeholder="enter your password"
          className="border border-blue-300 px-4 py-2 rounded w-full mb-2"
        />
        <p className="text-xs text-blue-600 mb-6 cursor-pointer">forgot password ?</p>

        <button className="bg-blue-500 text-white px-6 py-2 rounded-full w-full mb-6 hover:bg-blue-600 transition">
          Login
        </button>

        <div className="flex items-center gap-3 justify-center">
          <span>Login Via</span>
          <span className="text-xl">G</span>
          <span className="text-xl">f</span>
          <span className="text-xl">X</span>
        </div>
      </div>
    </div>
  );
}
