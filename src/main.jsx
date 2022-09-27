import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Notes from './Notes'
import Create from './Create'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./index.css";
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Notes />
      },
      {
        path: "create",
        element: <Create />,
      },
    ],
  },
]);

const theme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      '"Quicksand"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightBold: 700,
  }
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme} >
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);