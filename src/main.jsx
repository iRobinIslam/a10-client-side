import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Mainlayout from './Components/Mainlayout/Mainlayout.jsx';
import Home from './Components/Home/Home.jsx';
import Allequipment from './Components/AllSportsequpment/Allequipment.jsx';
import Addequipment from './Components/Addequipment/Addequipment.jsx';
import Myequipment from './Components/Myequipment/Myequipment.jsx';
import Allcurrentpro from './Components/Allcurrentproduct/Allcurrentpro.jsx';
import Details from './Components/viewdetails/Details.jsx';
import Tabledetails from './Components/viewdetails/Tabledetails.jsx';
import Updatepage from './Components/updatepage/Updatepage.jsx';
import ViewurAdded from './Components/viewyouradded/ViewurAdded.jsx';
import SignInpage from './Components/signinpage/SignInpage.jsx';
import Signup from './Components/signup/Signup.jsx';
import Authprovider from './Provider/Authprovider.jsx';
import Privateroute from './Components/privateroute/Privateroute.jsx';
import FitnessFun from './Components/fitness&fun/FitnessFun.jsx';
import SportWithStrong from './Components/Sportswithstrong/SportWithStrong.jsx';
import HealthyRoutine from './Components/HealthyRoutine/HealthyRoutine.jsx';
import ErrorPage from './Components/errorpage/ErrorPage .jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children:[
          {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch("/Product.json")
          },
          {
            path:'/allequipment',
            element:<Allequipment></Allequipment>,
            loader:()=>fetch("/allequipement.JSON")
          },

        {
        path:'/tabledetails/:id',
        element:<Privateroute><Tabledetails></Tabledetails></Privateroute>,
        loader: async({params})=>{
          const res = await fetch("/allequipement.JSON")
          const data = await res.json();
          const singlequipment = data.find(d=>d.id==params.id)
          return singlequipment;
        }
        },


          {
            path:'/addequipment',
            element:<Privateroute><Addequipment></Addequipment></Privateroute>

          },
          {
            path:'/myequipment',
            element:<Privateroute><Myequipment></Myequipment></Privateroute>,
            loader:()=> fetch('http://localhost:5000/addequipment')

          },
          {
            path:'/allcurrentproduct',
            element:<Allcurrentpro></Allcurrentpro>,
            loader:()=>fetch("/Product.json")

          },
          {
            path:'/updatepage/:id',
            element:<Updatepage></Updatepage>,
            loader: ({params}) => fetch(`http://localhost:5000/addequipment/${params.id}`)

          },
          {
            path:'/viewyouraddlist/:id',
            element:<ViewurAdded></ViewurAdded>,
            loader: ({params}) => fetch(`http://localhost:5000/addequipment/${params.id}`)
          },
          {
            path:'/signin',
            element:<SignInpage></SignInpage>
          },
          {
            path:'/signup',
            element:<Signup></Signup>
          },
          {
            path:'/details/:id',
            element:<Privateroute><Details></Details></Privateroute>,
            loader:async({params})=>{
            const res= await fetch("/Product.json")
            const data =await res.json();
           
           const singleproduct = data.find(d=>d.id==params.id)
            return singleproduct
            }
          },
          {
            path:'/fitnessandfun',
            element:<FitnessFun></FitnessFun>
          },
          {
            path:'/sportsandstrong',
            element:<SportWithStrong></SportWithStrong>
          },
          {
            path:'healthyoutine',
            element:<HealthyRoutine></HealthyRoutine>
          },
          {
            path:'/*',
            element:<ErrorPage></ErrorPage>
          }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Authprovider><RouterProvider router={router} /></Authprovider>
  </StrictMode>,
)
