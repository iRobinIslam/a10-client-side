import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Zoom } from "react-reveal";

const ViewurAdded = () => {
  const veiwequipmentlist = useLoaderData();
  const {
    _id,
    coffeename,
    Chefname,
    Suppliername,
    tasteprofile,
    category,
    Details,
    PhotoURL,
  } = veiwequipmentlist;

  return (
    <div className="hero bg-base-200 mt-10 py-10 px-8 lg:px-20">
      <div className="hero-content flex-col lg:flex-row-reverse w-full max-w-6xl mx-auto gap-12">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-end">
        <Zoom>
        <img
            src={PhotoURL}
            alt={coffeename}
            className="w-full max-w-lg rounded-2xl shadow-lg border border-gray-300"
          />
        </Zoom>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl font-bold">{coffeename}</h1>
          <p className="mt-2 text-lg"><span className="font-semibold">👨‍🍳 Chef:</span> {Chefname}</p>
          <p className="text-lg"><span className="font-semibold">🏭 Supplier:</span> {Suppliername}</p>
          <p className="text-lg"><span className="font-semibold">☕ Taste:</span> {tasteprofile}</p>
          <p className="text-lg"><span className="font-semibold">📌 Category:</span> {category}</p>
          <p className="mt-4 text-gray-700">{Details}</p>
          <Link to="/myequipment">
            <button className="btn btn-primary mt-6">🔙 Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewurAdded;
