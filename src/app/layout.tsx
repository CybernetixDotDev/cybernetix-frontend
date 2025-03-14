import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { Web3Provider } from "../context/Web3Context";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Web3Provider>
          <Navbar />
          <main className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
        </Web3Provider>
      </body>
    </html>
  );
}
