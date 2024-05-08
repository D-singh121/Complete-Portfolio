import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

// import { Heropage, Projects, TechStack, Contact } from './pages/index.js'


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <Heropage />
//       },
//       {
//         path: "/tech-stack",
//         element: <TechStack />
//       },
//       {
//         path: "/contact",
//         element: <Contact />
//       },
//       {
//         path: "/project",
//         element: <Projects />
//       }
//     ],
//   },
// ])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </React.StrictMode>,
)
