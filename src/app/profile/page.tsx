"use client";

import MotionWrapper from "../../components/MotionWrapper";
import { useState, useEffect } from "react";

export default function ProfilePage() {
  // Example XP data
  const [xp, setXp] = useState(320); // Current XP
  const xpToNextLevel = 500; // XP required for next level

  // Simulate XP increase
  useEffect(() => {
    const interval = setInterval(() => {
      setXp((prevXp) => (prevXp >= xpToNextLevel ? prevXp : prevXp + 5));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <MotionWrapper>
      <div className="flex justify-center items-center min-h-screen bg-black text-white">
        <div className="relative w-full max-w-lg p-8 bg-gray-900 bg-opacity-80 border border-cyan-400 shadow-lg shadow-cyan-500/20 rounded-xl neon-border">
          
          {/* Profile Image */}
          <div className="flex justify-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-cyan-400 shadow-lg"
            />
          </div>

          {/* User Info */}
          <h1 className="text-3xl font-bold text-center mt-4 neon-text">Your Name</h1>
          <p className="text-gray-300 text-center">Cybernetix Contributor</p>

          {/* XP Progress Bar */}
          <div className="mt-6 text-center">
            <h2 className="text-lg font-bold text-cyan-300">Level {Math.floor(xp / 100)}</h2>
            <div className="w-full bg-gray-700 rounded-full h-4 mt-2">
              <div
                className="bg-cyan-400 h-4 rounded-full transition-all duration-500 neon-glow"
                style={{ width: `${(xp / xpToNextLevel) * 100}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-400 mt-1">{xp} / {xpToNextLevel} XP</p>
          </div>

          {/* Achievements Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-cyan-300 text-center">Achievements</h2>
            <div className="flex justify-center space-x-4 mt-4">
              <AchievementBadge title="Cyber Initiate" icon="🔰" />
              <AchievementBadge title="Task Master" icon="🏆" />
              <AchievementBadge title="Blockchain Guru" icon="🔗" />
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 flex justify-center space-x-4">
            <button className="px-6 py-2 text-lg font-bold text-black bg-cyan-400 rounded-lg hover:bg-cyan-500 transition-all">
              Edit Profile
            </button>
            <button className="px-6 py-2 text-lg font-bold text-cyan-400 border border-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-black transition-all">
              View Contributions
            </button>
          </div>
        </div>
      </div>
    </MotionWrapper>
  );
}

// Achievement Badge Component
function AchievementBadge({ title, icon }: { title: string; icon: string }) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-all">
      <div className="text-3xl">{icon}</div>
      <p className="text-sm text-gray-300 mt-2">{title}</p>
    </div>
  );
}
