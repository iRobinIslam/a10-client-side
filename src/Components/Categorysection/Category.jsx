import React from "react";
import { FaMedal, FaDumbbell, FaRunning } from "react-icons/fa";
import { Link } from "react-router-dom";

const Category = () => {
    return (
        <div className="p-6">
            {/* Header Line */}
            <h2 className="text-3xl font-bold text-center mb-6">
              This Is The Categorywise Action Area 
            </h2>

            {/* Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Champions’ Corner */}
                <Link to='/fitnessandfun'>
                    <div className="bg-gradient-to-r from-blue-500 to-green-400 p-6 rounded-xl shadow-lg">
                        <FaMedal className="text-4xl text-white mb-4" />
                        <h3 className="text-white text-2xl font-bold">Action Guideline For All</h3>
                        <p className="text-white mt-2">
                            A place for top athletes to showcase their achievements and inspire others.
                        </p>
                    </div>
                </Link>

                {/* Fitness & Fun */}
                <Link to='/sportsandstrong'>
                <div className="bg-gradient-to-r from-purple-500 to-pink-400 p-6 rounded-xl shadow-lg">
                    <FaDumbbell className="text-4xl text-white mb-4" />
                    <h3 className="text-white text-2xl font-bold">Sports With Strong</h3>
                    <p className="text-white mt-2">
                        Engage in exciting workouts and fun activities for a healthier life.
                    </p>
                </div>
                </Link>

                {/* Athlete's Arena */}
               <Link to='/healthyoutine'>
               <div className="bg-gradient-to-r from-yellow-500 to-orange-400 p-6 rounded-xl shadow-lg">
                    <FaRunning className="text-4xl text-white mb-4" />
                    <h3 className="text-white text-2xl font-bold">Athlete's Arena</h3>
                    <p className="text-white mt-2">
                        A dynamic space where athletes train, compete, and push their limits.
                    </p>
                </div>
               </Link>
            </div>
        </div>
    );
};

export default Category;