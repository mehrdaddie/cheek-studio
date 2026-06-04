"use client";

const featuresList = [
  "پیشکاری مراسم عروسی",
  "تصویر برداری 4k",
  "تعداد دوربین",
  "هلی شات باغ",
  "هلی شات مراسم",
  "FPV روز مراسم",
  "رونین باغ و مراسم",
  "کرین سالن",
  "عکس برداری کامل در باغ",
  "عکس برداری مراسم",
  "صدا برداری مراسم",
  "پخش کلیپ روز مراسم در سالن",
  "تدوین کامل پروژه شامل کلیپ باغ و مراسم",
  "آلبوم",
  "آلبوم جیبی",
  "اسلایدشو ( LED )",
  "قاب 60*40",
  "قاب 30*40",
  "قاب 20*30",
  "قاب 21*16",
  "عکس خانوادگی 21 در 16",
  "لیت هدیه 26 در 13",
  "آرشیو کامل فایل ها عکس و فیلم",
  "فرمالیته",
  "فرمالیته - تصویربرداری",
  "فرمالیته - عکس برداری کامل روز فرمالیته",
  "فرمالیته - هلی شات روز فرمالیته",
  "فرمالیته - FPV روز فرمالیته",
  "فرمالیته - آلبوم 40 در 60 شامل 10 برگ و 20 صفحه",
  "به همراه آرشیو کامل فایل های عکس و فیلم",
];

const packages = [
  {
    name: "پکیج VIP",
    features: featuresList.map((f, i) => (i % 2 === 0 ? true : false)),
  },
  {
    name: "پکیج CIP",
    features: featuresList.map((f, i) => (i % 3 === 0 ? true : false)),
  },
  {
    name: "فرمالیته شمال",
    features: featuresList.map((f, i) => i % 4 === 0),
  },
  {
    name: "فرمالیته شهری",
    features: featuresList.map((f, i) => i % 5 === 0),
  },
];

export default function Packages() {
  return (
    <main className="bg-[#F7F4EF] min-h-screen pt-28 px-6">
      <h1 className="text-5xl font-casko text-center mb-16">پکیج‌ها</h1>
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse w-full">
          <thead>
            <tr className="bg-black text-white">
              <th className="p-4 text-left font-casko">ویژگی‌ها</th>
              {packages.map((pkg) => (
                <th key={pkg.name} className="p-4 text-center font-casko">
                  {pkg.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {featuresList.map((feature, i) => (
              <tr key={feature} className="odd:bg-white even:bg-gray-100">
                <td className="p-3 font-graphik">{feature}</td>
                {packages.map((pkg, j) => (
                  <td key={j} className="p-3 text-center">
                    {pkg.features[i] ? (
                      <span className="text-green-500 text-xl">✔️</span>
                    ) : (
                      <span className="text-red-500 text-xl">❌</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}