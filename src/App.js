import React, { lazy, Suspense, useEffect, useState } from "react";
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
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./store/appStore";

const AppLayout = () => {
  const [userName, setUserName] = useState(null);

  // Authentication
  useEffect(() => {
    // maing an api call to authenticate user and geting data
    const data = {
      name: "Ashish Kumar",
    };

    const newUser = data.name
    setUserName(newUser);

  }, []);

  return (
    <Provider store ={appStore}>
       <UserContext.Provider value={{loggedInUser: userName }}>
      <div className="App">
        <Header />
        <Outlet />
      </div> 
    </UserContext.Provider>
    </Provider>
   
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
