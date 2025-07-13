import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
// import Home from "./Home.jsx"


function OutLet() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    
    </>
  )
}

export default OutLet;