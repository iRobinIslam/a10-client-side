import React from "react";
import { useLoaderData } from "react-router-dom";
import Allequipmentcard from '../Allequipmentcard';


const Allequipment = () => {
     const allequipmentdata = useLoaderData();
     console.log(allequipmentdata);
  return (
   

    <div>
            <h1 className="text-3xl font-bold text-red-500 text-center mt-4">These Product Are currently  Avaliable {allequipmentdata.length} </h1>
          {
            allequipmentdata.map(eqipment=><Allequipmentcard eqipment={eqipment}></Allequipmentcard>)
          }
    </div>
    
  );
};

export default Allequipment;
