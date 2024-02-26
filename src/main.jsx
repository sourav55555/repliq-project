import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashborad from './pages/Dashborad.jsx';
import Locations from './pages/Locations.jsx';
import Invoice from './pages/Invoice.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/dashboard",
    element: <Dashborad/>
  },
  {
    path: "/locations",
    element: <Locations/>
  },
  {
    path: "/invoice",
    element: <Invoice/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
