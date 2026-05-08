import { createBrowserRouter } from "react-router";
import MainPage from "../Pages/MainPage";
import Home from "../Components/Home";
import Apps from "../Components/Apps";
import Installation from "../Components/Installation";
import AppDetails from "../Components/AppDetails";
const router = createBrowserRouter([
  {
    path: "/",
    Component: MainPage ,
    children: [
      {
        index:true ,
        loader: ()=>fetch("/public/Data.json")


        ,
        
        Component:Home , path:"/"
      },
      {
        path:"apps" , Component: Apps 
      }
      ,
      {
        path:"installation" , Component: Installation
      }
      ,
      {
        path:"details/:id" , Component: AppDetails ,
         loader: (params)=>fetch("/public/Data.json")
      }
    ]
    
  },
]);













export {router}