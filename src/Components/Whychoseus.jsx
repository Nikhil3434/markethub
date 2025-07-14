import FeatureCard from './Feautrecard';

export default function WhyChoose() {
  const features = [
    {
      icon: "💬",
      title: "Instant Messaging System",
      detail:
        "Connect directly with Buyers & Sellers in Real Time for seamless Communication",
    },
    {
      icon: "🖥️",
      title: "Analytics Dashboard",
      detail:
        "Track Performance, Views and Conversions in in-built Interactive Dashboards",
    },
    {
      icon: "💰",
      title: "Zero Commission",
      detail:
        "List your first 3 Products absolutely free – risk-free Start for your Business",
    },
  ];

  return (
    <section className="text-center py-12 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-12">

        <span className="inline-block px-4 py-1 bg-[#e5edfb] rounded-full shadow">
          Why Choose <span className="text-[#3366ff]">Market Hub ?</span>
        </span>
      </h2>

   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">


        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            detail={feature.detail}
          />
        ))}
      </div>
    </section>
  );
}
