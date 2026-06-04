"use client";

const locations = [
  {
    name: "باغ بهشت",
    city: "تهران",
    description: "باغی با فضای سبز و استخر بزرگ، مناسب فرمالیته و مراسم",
    image: "/locations/location1.jpg",
  },
  {
    name: "عمارت دلگشا",
    city: "شمال",
    description: "عمارت کلاسیک با دکوراسیون لوکس و سالن بزرگ",
    image: "/locations/location2.jpg",
  },
  {
    name: "تالار لوکس البرز",
    city: "تهران",
    description: "سالن مدرن با نورپردازی حرفه‌ای و ظرفیت بالا",
    image: "/locations/location3.jpg",
  },
];

export default function Locations() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <h2 className="text-5xl font-casko text-center mb-16">لوکیشن‌ها</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {locations.map((loc) => (
          <div
            key={loc.name}
            className="rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition transform bg-black/10"
          >
            <img src={loc.image} alt={loc.name} className="w-full h-64 object-cover" />
            <div className="p-6 bg-black/60 text-white">
              <h3 className="text-2xl font-casko mb-2">{loc.name}</h3>
              <p className="text-white/70 mb-2">{loc.city}</p>
              <p className="text-white/60">{loc.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}