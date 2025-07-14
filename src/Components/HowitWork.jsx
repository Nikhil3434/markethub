import React from "react";

export default function HowItWorks() {
  return (
    <section className="w-full px-6 py-16 bg-white relative">
  
      <div className="max-w-6xl mx-auto bg-[#f8f9ff] rounded-2xl p-10 grid md:grid-cols-2 gap-10 items-center shadow">

        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-black">
            How MarketHub Works
          </h2>
          <p className="text-gray-600">See how it is easy to connect and trade</p>


          <div className="space-y-4">
            {[
              {
                icon: "📝",
                title: "Register",
                desc: "Sellers and buyers sign up in seconds.",
              },
              {
                icon: "🔍",
                title: "List & discover",
                desc: "Sellers list products, buyers explore.",
              },
              {
                icon: "💬",
                title: "Get Support",
                desc: "Reliable support helps when you need it.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-[#dce6ff] p-4 rounded-xl shadow"
              >
                <div className="text-2xl">{item.icon}</div>
                <div>
                  <h4 className="font-semibold text-lg">{item.title}</h4>
                  <p className="text-sm text-gray-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="/VIDEOCARD (1).png"
            alt="How it works"
            className="w-[300px] md:w-[350px] object-contain rounded-xl"
          />
        </div>
      </div>

      
      <div className="mt-16 flex flex-col items-center justify-center gap-4 text-center">
        <p className="text-lg font-semibold text-black">Still questions?</p>
        <button className="flex items-center gap-2 bg-[#e5edfb] px-5 py-2 rounded-full text-sm font-medium text-blue-600 hover:scale-105 transition">
          Request a Demo <span>↗️</span>
        </button>
      </div>

      <div className="mt-12 flex flex-col items-center gap-3">
        <img src="/logo.png" alt="MarketHub Logo" className="w-18 h-18" />
        
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-[#e5edfb] p-3 rounded-full shadow hover:scale-110 transition-all"
        aria-label="Scroll to top"
      >
        ⬆️
      </button>
    </section>
  );
}
