const locations = [
  {
    name: "باغ بهشت",
    city: "تهران",
    desc: "باغ لوکس مناسب عکاسی و مراسم",
  },
  {
    name: "عمارت دلگشا",
    city: "شمال",
    desc: "عمارت کلاسیک و لاکچری",
  },
];

export default function Locations() {
  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold mb-8">Locations</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {locations.map((l) => (
          <div key={l.name} className="p-6 bg-white rounded-2xl shadow">
            <h2 className="text-2xl font-semibold">{l.name}</h2>
            <p className="text-gray-500">{l.city}</p>
            <p className="mt-2 text-gray-700">{l.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}