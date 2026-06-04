const features = [
  "4K فیلمبرداری",
  "هلی‌شات",
  "FPV",
  "کرین",
  "تدوین حرفه‌ای",
];

const packages = [
  { name: "VIP", data: [true, true, true, true, true] },
  { name: "CIP", data: [true, true, false, true, true] },
];

export default function Packages() {
  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold mb-8">Packages</h1>

      <table className="w-full border">
        <thead>
          <tr className="bg-black text-white">
            <th className="p-3 text-left">Features</th>
            {packages.map((p) => (
              <th key={p.name} className="p-3">{p.name}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {features.map((f, i) => (
            <tr key={f} className="border-t">
              <td className="p-3">{f}</td>
              {packages.map((p) => (
                <td key={p.name} className="text-center">
                  {p.data[i] ? "✔" : "✖"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}