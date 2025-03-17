import React,{ useState } from "react";
import { FaUtensils, FaBed, FaRunning, FaAppleAlt, FaClock, FaHeartbeat, FaWater} from "react-icons/fa";

const HealthyRoutine = () => {
  const [showBenefits, setShowBenefits] = useState(false);

  return (
    <div className="mt-4 bg-gradient-to-r from-green-500 to-blue-400 p-6 rounded-xl shadow-lg text-white">
      <FaHeartbeat className="text-4xl mb-4" />
      <h3 className="text-2xl font-bold">Healthy Daily Routine</h3>
      <p className="mt-2">Follow these essential habits for a healthy and energetic life.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="flex items-center space-x-3 p-4 bg-white text-black rounded-lg shadow-md">
          <FaUtensils className="text-3xl text-green-600" />
          <p>Eat a balanced diet rich in proteins, vitamins, and fiber.</p>
        </div>
        <div className="flex items-center space-x-3 p-4 bg-white text-black rounded-lg shadow-md">
          <FaBed className="text-3xl text-blue-600" />
          <p>Get at least 7-9 hours of quality sleep every night.</p>
        </div>
        <div className="flex items-center space-x-3 p-4 bg-white text-black rounded-lg shadow-md">
          <FaRunning className="text-3xl text-red-600" />
          <p>Engage in daily physical activity for at least 30 minutes.</p>
        </div>
        <div className="flex items-center space-x-3 p-4 bg-white text-black rounded-lg shadow-md">
          <FaAppleAlt className="text-3xl text-yellow-600" />
          <p>Include fresh fruits and vegetables in your diet.</p>
        </div>
        <div className="flex items-center space-x-3 p-4 bg-white text-black rounded-lg shadow-md">
          <FaClock className="text-3xl text-purple-600" />
          <p>Maintain a regular schedule for meals and sleep.</p>
        </div>
        <div className="flex items-center space-x-3 p-4 bg-white text-black rounded-lg shadow-md">
          <FaWater className="text-3xl text-teal-600" />
          <p>Drink at least 8 glasses of water daily.</p>
        </div>
      </div>
      
      <div className="mt-6 flex space-x-4">
        <button 
          onClick={() => setShowBenefits(!showBenefits)}
          className="px-6 py-2 bg-white text-green-700 font-semibold rounded-lg shadow-md hover:bg-green-100 transition duration-300">
          {showBenefits ? "Hide Health Benefits" : "Show Health Benefits"}
        </button>
        
        <button 
          onClick={() => window.location.href = "/"} 
          className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition duration-300">
          Back Home
        </button>
      </div>
      
      {showBenefits && (
        <div className="mt-6 p-4 bg-white text-black rounded-lg shadow-md">
          <h4 className="text-lg font-bold mb-2">Health Benefits of a Proper Routine</h4>
          <ul className="list-disc pl-5">
            <li>Improves cardiovascular health and reduces the risk of heart diseases.</li>
            <li>Boosts metabolism and helps in maintaining a healthy weight.</li>
            <li>Enhances sleep quality and energy levels throughout the day.</li>
            <li>Strengthens immunity and keeps illnesses at bay.</li>
            <li>Promotes mental well-being, reducing stress and anxiety.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HealthyRoutine;
