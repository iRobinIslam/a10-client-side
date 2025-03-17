import React from "react";
import { NavLink } from "react-router-dom";

const Productcard = ({ product }) => {
    const {id,product_img,product_name,product_rating,product_price,stock_availability} =product
  return (
    <div className="card bg-base-100  shadow-xl">
      <figure>
        <img className="w-full h-48"
          src={product_img}
          alt="product-img"
        />
      </figure>
      <div className="card-body ">
        <div className="flex justify-between items-center">
        <h2 className="card-title">
           Product-Name : {product_name}
        </h2>
        <div className="badge  badge-secondary">{stock_availability}</div>
       
        </div>
        <p>Price ${product_price}</p>
        <p>Rating {product_rating}</p>
        <div className="card-actions ">
          <NavLink to={`/details/${id}`}>
          <button className="btn btn-primary w-full">View Details</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Productcard;

