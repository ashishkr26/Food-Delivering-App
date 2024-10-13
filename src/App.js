import React, { lazy, Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Offers from "./components/Offers";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import NotFound from "./components/NotFound";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery"
const Grocery = lazy(() => import("./components/Grocery"));
import Support from "./components/Support";
import Cart from "./components/Cart";


const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/grocery",
        element: <Grocery />,
      },
      {
        path: "/support",
        element: <Support />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);
const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

reactRoot.render(<RouterProvider router={appRouter} />);
