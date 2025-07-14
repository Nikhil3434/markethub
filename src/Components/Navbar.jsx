
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white">
      <div className="text-xl font-bold">Market Hub</div>

      <ul className="flex gap-6 text-sm font-medium text-gray-700">
        <li><a href="#" className="border-b-2 border-black pb-1 hover:text-blue-600">Home</a></li>
        <li><a href="#" className="hover:text-blue-600">About</a></li>
        <li><a href="#" className="hover:text-blue-600">Contact</a></li>
        <li><a href="#" className="hover:text-blue-600">Pricing</a></li>
      </ul>

      <div className="flex items-center gap-3">
        <button className="flex items-center gap-1 text-sm text-gray-600">
          🌐 En <span className="text-xs">▼</span>
        </button>
        <button className="rounded-full bg-black text-white p-2">📞</button>
        <button className="bg-black text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm">
          ➡️ Get in touch
        </button>
      </div>
    </nav>
  );
}
