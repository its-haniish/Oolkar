import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import App from './App';
import Blogs from './pages/Blogs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <App />
  },
  {
    path: "/blogs",
    element: <Blogs />
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
