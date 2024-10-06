import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { resList } from "./utils/data";
import { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import NotFound from "./components/NotFound";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <ContactUs />,
    },
    {
      path: "/restaurants/:resId",
      element: <RestaurantMenu />,
    },]
  },
 
]);
const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

reactRoot.render(<RouterProvider router={appRouter} />);
