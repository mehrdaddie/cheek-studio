"use client";

export default function Petals() {
  const petals = [
    { left: "10%", top: "15%" },
    { left: "25%", top: "60%" },
    { left: "40%", top: "30%" },
    { left: "55%", top: "75%" },
    { left: "70%", top: "20%" },
    { left: "85%", top: "55%" },
    { left: "15%", top: "45%" },
    { left: "35%", top: "10%" },
    { left: "60%", top: "40%" },
    { left: "90%", top: "12%" },
    { left: "80%", top: "82%" },
    { left: "45%", top: "65%" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {petals.map((petal, index) => (
        <div
          key={index}
          className="absolute w-4 h-4 rounded-full bg-pink-400 opacity-70"
          style={{
            left: petal.left,
            top: petal.top,
          }}
        />
      ))}
    </div>
  );
}