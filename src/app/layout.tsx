import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa">
      <body className="bg-[#F7F4EF] text-black">

        {/* NAVBAR */}
        <nav className="flex gap-6 p-6 border-b bg-white/70 backdrop-blur">
          <Link href="/" className="hover:opacity-60">Home</Link>
          <Link href="/locations" className="hover:opacity-60">Locations</Link>
          <Link href="/packages" className="hover:opacity-60">Packages</Link>
        </nav>

        {children}
      </body>
    </html>
  );
}