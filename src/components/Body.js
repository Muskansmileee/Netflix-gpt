import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
/* 
 error : useNavigate() may be used only in the context of a <Router> component.
 i was getting this because i used navigate outside my router provider.
 navigate should be used in child components of body.
 ideally it router should be in app.js 
 for now i removed it and i will navigate from my login.js
*/