
export default function HeroSection() {
  return (
   <section className="bg-[#e5edfb] rounded-lg mx-6 mt-6 p-10 flex flex-col md:flex-row items-center justify-between">

      <div className="max-w-xl">
        <h1 className="text-3xl font-bold text-[#3366ff] mb-2">Welcome to MarketHub</h1>
        <h2 className="text-2xl font-semibold text-[#3366ff] mb-6">
          Your one-stop market for buying & selling
        </h2>
        <p className="text-gray-700 mb-4">
          Buy. Sell. Thrive - All in one place. <br />
          List your products, reach more customers, and manage everything with ease.
          <br /> Secure payments, real-time insights, and 24/7 support help turn your passion into profit.
        </p>
        <button className="bg-[#3366ff] text-white px-5 py-2 rounded-md font-semibold mt-4">
          Explore Now
        </button>
      </div>

      <img
  src="/background-replacer-result (3).png"
  alt="Market Hub"
  className="w-full md:w-[400px] object-contain mt-6 md:mt-0"
/>

    </section>
  );
}
