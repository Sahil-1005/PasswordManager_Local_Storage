import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar'
import Manager from './Component/Manager'
import Footer from './Component/Footer'
import LoginScreen from './Component/LoginScreen'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ActivityTab from './Component/ActivityTab'
import CurrentLocation from './Component/CurrentLocation'
// Main Application

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Manager /><Footer/></>
    },
    {
      path: "/activitytab",
      element: <><Navbar /><ActivityTab /><Footer/></>
    }
  ])
  return (
    <>
      {/* <LoginScreen/> */}
      <div>
        {/* <Navbar></Navbar>
        <Manager></Manager>
        <Footer></Footer> */}
        <RouterProvider router={router} />
        {/* <CurrentLocation/> */}
      </div>
    </>
  )
}

export default App
