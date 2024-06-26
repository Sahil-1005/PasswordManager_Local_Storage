import React,{ useState,useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar'
import Manager from './Component/Manager'
import Footer from './Component/Footer'
import LoginScreen from './Component/LoginScreen'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ActivityTab from './Component/ActivityTab'

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <><Navbar/><Manager /><Footer/></>
  //   },
  //   {
  //     path: "/activitytab",
  //     element: <><Navbar /><ActivityTab /><Footer/></>
  //   },
  //   {
  //     path: "/login",
  //     element: <><Navbar/><LoginScreen /><Footer/></>
  //   }
  // ])
  return (
    <>
      <div>
        {/* <RouterProvider router={router} /> */}
        <Manager/>
      </div>
    </>
  )
}

export default App
