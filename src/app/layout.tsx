import "../styles/globals.css";
import Navbar from "../components/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
      </body>
    </html>
  );
}
