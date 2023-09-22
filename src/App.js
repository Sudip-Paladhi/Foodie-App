import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import About from "./components/About";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import { Suspense } from "react";
const About = lazy(() => import("./components/About"));
import { Provider } from "react-redux";
import appStore from "./Redux/appStore";
import Cart from "./components/Cart";
const AppLayout = () => {
  return (
    <Provider store={appStore}>
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
{
  path: "/",
  element: <AppLayout />,
  children: [
    {
      path: "/",
      element: <Body />,
    },
    {
      path: "/about",
      element:(<Suspense fallback={<h1>Loading.........</h1>} >
        <About />
        </Suspense>),
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/restaurants/:resId",
      element: <RestaurantMenu />,
    },


  ]
},

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
