import React from "react";
import Productcard from '../productcard/Productcard'
import { NavLink, useLoaderData } from "react-router-dom";

const Allcurrentpro = () => {
    const products = useLoaderData();
    return (
       <div>
         <div className=' gap-4 grid md:rid-cols-2 lg:grid-cols-3 mt-4'>
            {
              products.map(product=><Productcard product={product} ></Productcard>)  
            }
        </div>
        <NavLink to='/'><button className='btn btn-primary w-full'>BacK To Home Page</button></NavLink>
       </div>
        
    );
};

export default Allcurrentpro;
