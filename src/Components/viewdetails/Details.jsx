import React from "react";
import { NavLink, useLoaderData } from "react-router-dom";

const Details = () => {
    const {product_img,product_name,product_category,product_rating,product_price,product_details,stock_availability} = useLoaderData();
    return (
        <div
        className="hero min-h-screen mt-6"
        style={{
          backgroundImage: `url(${product_img})`,
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{product_name}</h1>
            <h1 className="mb-5 text-3xl font-bold">{product_category}</h1>
            <p>Product Price $ {product_price}</p>
            <p>Product Rating {product_rating}</p>
            <p>Product Status {stock_availability}</p>
            <p className="mb-5">
            {
                product_details
            }
            </p>
            <NavLink to='/'>
            <button className="btn btn-primary">Back To Home </button>

            </NavLink>
          </div>
        </div>
      </div>
    );
};

export default Details;

