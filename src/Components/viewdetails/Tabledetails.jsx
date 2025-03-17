import React from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { FaDollarSign, FaBox, FaTag, FaStar, FaCheckCircle, FaClock, FaArrowLeft } from "react-icons/fa";
const Tabledetails = () => {
  const { price, image, item_name, category_name, stock_status, description, rating, customization, processing_time } = useLoaderData();

  return (
    <div className="hero bg-base-200 min-h-screen px-4 sm:px-8 py-10">
      <div className="hero-content flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
        
        <img src={image} className="max-w-xs md:max-w-sm lg:max-w-md rounded-lg shadow-xl object-cover" alt={item_name} />
        
        <div className="max-w-lg w-full">
          <h1 className="text-3xl font-bold text-gray-800">{item_name}</h1>
          <div className="mt-3 space-y-2 text-lg">
            <p className="flex items-center gap-2"><FaTag className="text-blue-500" /> <span className="font-semibold">Category:</span> {category_name}</p>
            <p className="flex items-center gap-2"><FaBox className="text-purple-500" /> <span className="font-semibold">Stock Status:</span> {stock_status}</p>
            <p className="flex items-center gap-2"><FaStar className="text-yellow-500" /> <span className="font-semibold">Rating:</span> {rating}</p>
            <p className="flex items-center gap-2"><FaCheckCircle className="text-green-500" /> <span className="font-semibold">Customization:</span> {customization}</p>
            <p className="flex items-center gap-2"><FaClock className="text-red-500" /> <span className="font-semibold">Processing Time:</span> {processing_time}</p>
            <p className="flex items-center gap-2 text-xl text-green-600 font-semibold"><FaDollarSign /> ${price}</p>
          </div>

          <p className="py-4 text-gray-600 text-justify">{description}</p>
          <NavLink to="/allequipment">
            <button className="btn btn-primary flex items-center gap-2">
              <FaArrowLeft /> Back To Previous Page
            </button>
          </NavLink>
        </div>

      </div>
    </div>
  );
};

export default Tabledetails;
