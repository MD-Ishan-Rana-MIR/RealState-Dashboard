import React from "react";
import { ArrowUpRight } from "lucide-react"; // optional icon, you can replace with your own image/icon

const Budget = () => {
  return (
    <div className="bg-[#6B4EFF] rounded-2xl p-6 flex justify-between items-center shadow-lg text-white w-full max-w-lg">
      {/* Left Content */}
      <div className="space-y-4">
        {/* Icon + Welcome Text */}
        <div className="flex items-center gap-3">
          <div className="bg-white/20 p-2 rounded-lg">
            <ArrowUpRight className="text-white w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Welcome Back</h3>
            <p className="text-base">David</p>
          </div>
        </div>

        {/* Budget Section */}
        <div className="flex gap-10">
          <div>
            <p className="text-sm opacity-80">Budget</p>
            <p className="text-2xl font-bold">$98,450</p>
          </div>
          <div>
            <p className="text-sm opacity-80">Budget</p>
            <p className="text-2xl font-bold">$2,440</p>
          </div>
        </div>
      </div>

      {/* Right Image (Target) */}
      <div className="flex-shrink-0">
        <img
          src="/src/assets/images/backgrounds/welcome-bg.png" 
          alt="Target"
          className="w-32 h-auto"
        />
      </div>
    </div>
  );
};

export default Budget;
