
import { useNavigate } from "react-router-dom";

export default function SellersLogin() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen">
     
      <div className="w-1/2 bg-[#7da5f8] flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-semibold mb-6">Market Hub</h1>
        <img src="/img3.png" alt="Seller Login" className="w-100 h-auto" />
      </div>

     
      <div className="w-1/2 flex flex-col justify-center px-16 relative">
        <button
          onClick={() => navigate("/")}
          className="absolute top-4 left-4 bg-gray-200 px-4 py-1 rounded-full"
        >
          ← Back
        </button>
        <div className="absolute top-4 right-4 text-blue-600 font-medium cursor-pointer">
          Buyer Log-in
        </div>

        <h2 className="text-2xl font-bold mb-1">Seller Login</h2>
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
