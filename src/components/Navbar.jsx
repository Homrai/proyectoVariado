
import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-dark navbar-dark navbar-expand-sm d-flex justify-content-around p-2 sticky-top">
        <NavLink className='btn btn-outline-light'   to={"cronometro"}>Cronometro</NavLink>
        <NavLink className='btn btn-outline-warning' to={"calculadora"}>Calculadora</NavLink>
        <NavLink className='btn btn-outline-danger'  to={"pokeapi"}>Api Pokemon</NavLink>
    </nav>
  )
}

export default Navbar