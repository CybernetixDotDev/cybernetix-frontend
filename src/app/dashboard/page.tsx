import PageTransition from "../../components/MotionWrapper";

export default function DashboardPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-black text-white flex flex-col items-center p-6">
        <h1 className="text-4xl font-bold neon-text mb-8">Cybernetix Dashboard</h1>

        {/* Card Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          <DashboardCard title="AI Task Generator" description="Get AI-driven task recommendations based on your skills." />
          <DashboardCard title="Profile & Stats" description="View your progress, completed tasks, and rankings." />
          <DashboardCard title="NFT Marketplace" description="Explore and trade NFTs securely on our blockchain platform." />
          <DashboardCard title="Token Rewards" description="Earn Cybernetix tokens by contributing valuable work." />
          <DashboardCard title="Project Collaboration" description="Work on exciting projects and team up with innovators." />
          <DashboardCard title="Live Community" description="Engage with like-minded contributors in real-time discussions." />
        </div>
      </div>
    </PageTransition>
  );
}

// Reusable Card Component
function DashboardCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-gray-900 bg-opacity-80 border border-cyan-400 shadow-lg shadow-cyan-500/20 rounded-xl p-6 neon-border transform transition-all duration-300 hover:-translate-y-2 hover:shadow-cyan-500">
      <h2 className="text-2xl font-bold text-cyan-300">{title}</h2>
      <p className="text-gray-400 mt-2">{description}</p>
    </div>
  );
}
