import React, { useState } from "react";
import { FaFootballBall, FaRunning, FaSwimmer, FaDumbbell, FaBicycle } from "react-icons/fa";

const SportWithStrong = () => {
  const [showBenefits, setShowBenefits] = useState(false);

  const sportsData = [
    { name: "Football", icon: <FaFootballBall className="text-3xl text-green-600" />, benefits: "Improves cardiovascular health, endurance, and teamwork skills." },
    { name: "Running", icon: <FaRunning className="text-3xl text-blue-600" />, benefits: "Enhances stamina, strengthens leg muscles, and boosts mental clarity." },
    { name: "Swimming", icon: <FaSwimmer className="text-3xl text-teal-600" />, benefits: "Increases lung capacity, tones muscles, and improves flexibility." },
    { name: "Weightlifting", icon: <FaDumbbell className="text-3xl text-gray-600" />, benefits: "Builds muscle mass, strengthens bones, and increases metabolism." },
    { name: "Cycling", icon: <FaBicycle className="text-3xl text-yellow-600" />, benefits: "Strengthens heart, improves joint mobility, and reduces stress." }
  ];

  return (
    <div className="mt-6 bg-gradient-to-r from-blue-500 to-green-400 p-6 rounded-xl shadow-lg text-white">
      <h2 className="text-3xl font-bold mb-4">Sport With Strong</h2>
      <p className="mb-4">Discover how sports can transform your body, mind, and blood circulation.</p>
      
      <div className="flex space-x-4">
        <button
          onClick={() => setShowBenefits(!showBenefits)}
          className="px-6 py-2 bg-white text-blue-700 font-semibold rounded-lg shadow-md hover:bg-blue-100 transition duration-300"
        >
          {showBenefits ? "Hide Sports Benefits" : "Show Sports Benefits"}
        </button>
        
        <button
          onClick={() => window.location.href = "/"}
          className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition duration-300"
        >
          Back Home
        </button>
      </div>
      
      {showBenefits && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {sportsData.map((sport, index) => (
            <div key={index} className="bg-white text-gray-800 p-4 rounded-lg shadow-md flex items-center space-x-4">
              {sport.icon}
              <div>
                <h3 className="text-lg font-bold">{sport.name}</h3>
                <p className="text-sm">{sport.benefits}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SportWithStrong;
