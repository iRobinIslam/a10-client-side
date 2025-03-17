import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Addequipment = () => {
  const navigate = useNavigate();

  const handleaddequipment = e =>{
    e.preventDefault();
    const form = e.target;
    const coffeename =  form.coffeename.value;
    const Chefname =  form.Chefname.value;
    const Suppliername =  form.Suppliername.value;
    const tasteprofile =  form.tasteprofile.value;
    const category =  form.category.value;
    const Details =  form.Details.value;
    const PhotoURL =  form.PhotoURL.value;
    const addnewequipment={coffeename,Chefname,Suppliername,tasteprofile,category,Details,PhotoURL}
    console.log(addnewequipment);

    //send the data to server site 

    fetch('http://localhost:5000/addequipment',{
      method:"POST",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(addnewequipment)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      form.reset();
      if(data.insertedId){
        Swal.fire({
          title: 'success!',
          text: 'Added The Equipment Successfully',
          icon: 'success',
          confirmButtonText: 'Cool',
        })
        .then(() => {
          navigate("/myequipment"); // Redirect to home after clicking "Cool"
        });
      }
    })

  }
    return (
        <div className="flex  justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-gradient-to-r mt-4 from-purple-500 to-pink-500 p-8 rounded-lg shadow-lg w-full max-w-3xl">
          <h2 className="text-white text-2xl font-bold text-center">Add New Equipment</h2>
          <p className="text-white text-center mb-6">
            Fill in the details below to add a new product to the list.
          </p>
          <form onSubmit={handleaddequipment}
          className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-white">Item Name</label>
              <input type="text" name='coffeename' placeholder="Product name" className="input input-bordered w-full" />
            </div>
            <div>
              <label className="text-white">Category Name</label>
              <input type="text" name='Chefname' placeholder="Product category" className="input input-bordered w-full" />
            </div>
            <div>
              <label className="text-white">Company-Name</label>
              <input type="text" name='Suppliername' placeholder="company name" className="input input-bordered w-full" />
            </div>
            <div>
              <label className="text-white">Processing Time</label>
              <input type="text" name='tasteprofile' placeholder="Delivery time" className="input input-bordered w-full" />
            </div>
            <div>
              <label className="text-white">Customization Details</label>
              <input type="text" name='category' placeholder="grip,hitpaper etc" className="input input-bordered w-full" />
            </div>
            <div>
              <label className="text-white">Description</label>
              <input type="text" name='Details' placeholder="Abbout The Product" className="input input-bordered w-full" />
            </div>
            <div className="md:col-span-2">
              <label className="text-white">Product Image URL</label>
              <input type="text" name='PhotoURL' placeholder="Enter photo URL" className="input input-bordered w-full" />
            </div>
            <div className="md:col-span-2 flex justify-center">
              <button className="btn bg-purple-700 text-white w-full">Add New  Equipment</button>
            </div>
          </form>
        </div>
         </div>
    );
};

export default Addequipment;
