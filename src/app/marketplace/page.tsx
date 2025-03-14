"use client";

import MotionWrapper from "../../components/MotionWrapper";

export default function MarketplacePage() {
  return (
    <MotionWrapper>
      <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold neon-text text-center my-6 sm:my-8">
          Cybernetix NFT Marketplace
        </h1>

        {/* NFT Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          <NFTCard
            image="https://via.placeholder.com/300"
            title="Cyberpunk Warrior"
            price="0.5 ETH"
          />
          <NFTCard
            image="https://via.placeholder.com/300"
            title="Neon Samurai"
            price="0.75 ETH"
          />
          <NFTCard
            image="https://via.placeholder.com/300"
            title="AI Entity"
            price="1.2 ETH"
          />
          <NFTCard
            image="https://via.placeholder.com/300"
            title="Quantum Hacker"
            price="0.9 ETH"
          />
          <NFTCard
            image="https://via.placeholder.com/300"
            title="Glitched Reality"
            price="1.5 ETH"
          />
          <NFTCard
            image="https://via.placeholder.com/300"
            title="Futuristic Dancer"
            price="0.6 ETH"
          />
        </div>
      </div>
    </MotionWrapper>
  );
}

// NFT Card Component
function NFTCard({ image, title, price }: { image: string; title: string; price: string }) {
  return (
    <div className="bg-gray-900 bg-opacity-80 border border-cyan-400 shadow-lg shadow-cyan-500/20 rounded-xl p-4 text-center neon-border transform transition-all duration-300 hover:-translate-y-2 hover:shadow-cyan-500">
      <img src={image} alt={title} className="w-full h-64 object-cover rounded-lg border border-cyan-400" />
      <h2 className="text-xl font-bold text-cyan-300 mt-4">{title}</h2>
      <p className="text-gray-400 mt-2">{price}</p>
      <button className="mt-4 px-6 py-2 text-lg font-bold text-black bg-cyan-400 rounded-lg hover:bg-cyan-500 transition-all">
        Buy Now
      </button>
    </div>
  );
}
