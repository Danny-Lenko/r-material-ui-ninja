import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Notes from './Notes'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
// import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "notes",
        element: <Notes />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);