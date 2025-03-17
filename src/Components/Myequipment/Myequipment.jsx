import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Youraddlist from '../YourAddlist/Youraddlist';


const Myequipment = () => {
  const loadedaddingequipments = useLoaderData();
  const [addingequipments,setaddequipments] = useState(loadedaddingequipments)
  return (
    <div>
      <h1 className="text-3xl font-bold text-center py-2">Total added equipment form you {addingequipments.length} </h1>

       
   <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
   {
       addingequipments.map(equipment=><Youraddlist key={equipment._id}
       equipment={equipment}
       addingequipments ={addingequipments}
       setaddequipments={setaddequipments}
       ></Youraddlist>) 
   }

   </div>

    </div>
  );
};

export default Myequipment;
