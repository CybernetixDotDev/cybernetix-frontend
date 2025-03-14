import PageTransition from "../../components/MotionWrapper";

export default function MarketplacePage() {
  return (
    <PageTransition>
      <div className="flex justify-center items-center min-h-screen bg-black text-white">
        <h1 className="text-4xl font-bold neon-text">Cybernetix Marketplace</h1>
      </div>
    </PageTransition>
  );
}