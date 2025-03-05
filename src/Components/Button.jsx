import React from 'react'
import { NavLink } from 'react-router-dom'
import './Btn.css'
const Button = ({text, to}) => {
  return (
    <>
    <NavLink
      to={to}
      className="hero-btn w-fit"
    >
      {text}
    </NavLink>
    </>
  )
}

export default Button