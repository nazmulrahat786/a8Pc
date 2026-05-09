import { createBrowserRouter } from "react-router";
import MainPage from "../Pages/MainPage";
import Home from "../Components/Home";
import Apps from "../Components/Apps";
import Installation from "../Components/Installation";
import AppDetails from "../Components/AppDetails";
import Errorpage from "../Components/Errorpage";
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
        path:"apps" , Component: Apps ,
         loader: ()=>fetch("/public/Data.json")
      }
      ,
      {
        path:"installation" , Component: Installation ,
          loader: ()=>fetch("/public/Data.json")
      }
      ,
      {
        path:"details/:id" , Component: AppDetails ,
         loader: ()=>fetch("/public/Data.json")
      } ,
      
      {
        path:"apps/details/:id" , Component: AppDetails ,
         loader: ()=>fetch("/public/Data.json")
      } ,
      {
        path:"*" , Component: Errorpage
        
      } ,
      
    ]
    
  },
  
]);













export {router}