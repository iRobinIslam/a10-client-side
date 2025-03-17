import React,{ useState } from "react";
import { FaDumbbell, FaRunning, FaHeartbeat, FaBicycle, FaSwimmer, FaWalking, FaAppleAlt, FaSpa, FaWeight, FaClipboardList } from "react-icons/fa";

const FitnessFun = () => {
  const [showTable, setShowTable] = useState(false);

  // List of random icons
  const randomIcons = [
    <FaRunning className="text-3xl text-purple-700" />,
    <FaDumbbell className="text-3xl text-pink-700" />,
    <FaHeartbeat className="text-3xl text-red-500" />,
    <FaBicycle className="text-3xl text-blue-500" />,
    <FaSwimmer className="text-3xl text-teal-500" />,
    <FaWalking className="text-3xl text-green-500" />,
    <FaAppleAlt className="text-3xl text-orange-500" />,
    <FaSpa className="text-3xl text-indigo-500" />,
    <FaWeight className="text-3xl text-gray-600" />,
    <FaClipboardList className="text-3xl text-yellow-500" />,
  ];

  // Generate 3 random icons each time the table appears
  const getRandomIcons = () => {
    const shuffledIcons = randomIcons.sort(() => 0.5 - Math.random());
    return shuffledIcons.slice(0, 3);
  };

  return (
    <div className="mt-4 bg-gradient-to-r from-purple-500 to-pink-400 p-6 rounded-xl shadow-lg">
      <FaDumbbell className="text-4xl text-white mb-4" />
      <h3 className="text-white text-2xl font-bold">Fitness & Fun</h3>
      <p className="text-white mt-2">
        Engage in exciting workouts and fun activities for a healthier life.
      </p>

      {/* Button to Show/Hide Table */}
      <button 
        onClick={() => setShowTable(!showTable)} 
        className="mt-4 px-6 py-2 bg-white text-purple-700 font-semibold rounded-lg shadow-md hover:bg-purple-100 transition duration-300"
      >
        {showTable ? "Hide Exercise Guide" : "Show Exercise Guide"}
      </button>

      {/* Exercise Guidelines Table */}
      {showTable && (
        <div className="overflow-x-auto mt-6">
          
     

           {/* Back to Home Button */}
           <button 
            onClick={() => window.location.href = "/"} 
            className="mb-4 px-6 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition duration-300"
          >
            Back to Home
          </button>



          {/* Random Icons Section */}
          <div className="flex justify-center space-x-4 mb-4">
            {getRandomIcons().map((icon, index) => (
              <div key={index}>{icon}</div>
            ))}
          </div>

          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead>
              <tr className="bg-purple-600 text-white">
                <th className="py-2 px-4 border">Age Group</th>
                <th className="py-2 px-4 border">Weight (kg)</th>
                <th className="py-2 px-4 border">Recommended Exercise</th>
                <th className="py-2 px-4 border">Duration (mins)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-gray-700">
                <td className="py-2 px-4 border">5 - 10 years</td>
                <td className="py-2 px-4 border">20 - 35 kg</td>
                <td className="py-2 px-4 border">Jumping, Running, Light Sports</td>
                <td className="py-2 px-4 border">30 - 45 mins</td>
              </tr>
              <tr className="text-gray-700 bg-gray-100">
                <td className="py-2 px-4 border">11 - 15 years</td>
                <td className="py-2 px-4 border">36 - 50 kg</td>
                <td className="py-2 px-4 border">Cycling, Swimming, Strength Training</td>
                <td className="py-2 px-4 border">45 - 60 mins</td>
              </tr>
              <tr className="text-gray-700">
                <td className="py-2 px-4 border">16 - 20 years</td>
                <td className="py-2 px-4 border">51 - 65 kg</td>
                <td className="py-2 px-4 border">Weight Training, Cardio, HIIT</td>
                <td className="py-2 px-4 border">60 - 90 mins</td>
              </tr>
              <tr className="text-gray-700 bg-gray-100">
                <td className="py-2 px-4 border">21 - 30 years</td>
                <td className="py-2 px-4 border">66 - 80 kg</td>
                <td className="py-2 px-4 border">Gym, Running, Functional Training</td>
                <td className="py-2 px-4 border">45 - 75 mins</td>
              </tr>
              <tr className="text-gray-700">
                <td className="py-2 px-4 border">31 - 40 years</td>
                <td className="py-2 px-4 border">70 - 90 kg</td>
                <td className="py-2 px-4 border">Yoga, Strength Training, Jogging</td>
                <td className="py-2 px-4 border">30 - 60 mins</td>
              </tr>
              <tr className="text-gray-700 bg-gray-100">
                <td className="py-2 px-4 border">41 - 50 years</td>
                <td className="py-2 px-4 border">75 - 95 kg</td>
                <td className="py-2 px-4 border">Pilates, Walking, Swimming</td>
                <td className="py-2 px-4 border">30 - 45 mins</td>
              </tr>
              <tr className="text-gray-700">
                <td className="py-2 px-4 border">51 - 60 years</td>
                <td className="py-2 px-4 border">80 - 100 kg</td>
                <td className="py-2 px-4 border">Brisk Walking, Yoga, Resistance Bands</td>
                <td className="py-2 px-4 border">30 - 45 mins</td>
              </tr>
              <tr className="text-gray-700 bg-gray-100">
                <td className="py-2 px-4 border">61 - 70 years</td>
                <td className="py-2 px-4 border">85 - 105 kg</td>
                <td className="py-2 px-4 border">Stretching, Tai Chi, Light Weights</td>
                <td className="py-2 px-4 border">20 - 40 mins</td>
              </tr>
              <tr className="text-gray-700">
                <td className="py-2 px-4 border">71 - 80 years</td>
                <td className="py-2 px-4 border">80 - 100 kg</td>
                <td className="py-2 px-4 border">Light Walking, Chair Exercises</td>
                <td className="py-2 px-4 border">15 - 30 mins</td>
              </tr>
              <tr className="text-gray-700 bg-gray-100">
                <td className="py-2 px-4 border">81+ years</td>
                <td className="py-2 px-4 border">75 - 95 kg</td>
                <td className="py-2 px-4 border">Gentle Stretching, Balance Training</td>
                <td className="py-2 px-4 border">10 - 20 mins</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default FitnessFun;


