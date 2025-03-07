/** @format */
import React from 'react'   
import Button from './Button'
import "./Hero.css"

const Hero = () => {
  return (
    <main className="hero">
      <div className=" flex flex-col mx-[10%] justify-center h-screen">
        <h1 className="text-5xl text-white font-bold  mb-5 tracking-wide flex flex-col ">
            <span>REAL SECURITY</span>
            <span>YOU NEED</span>
        </h1>
        <Button
        to="/blog"
        text="Contact Us" />
      </div>
    </main>
  )
}

export default Hero