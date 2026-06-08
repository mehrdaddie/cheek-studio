import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa">
      <body className="bg-[#F7F4EF] text-black">
        {children}
      </body>
    </html>
  );
}