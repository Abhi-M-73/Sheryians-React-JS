import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='flex gap-10 items-center justify-center text-xl text-white'>
            {/* <Link to={"/"}>Home</Link>
        <Link to={"/products"}>Products</Link>
        <Link to={"/services"}>Services</Link> */}

            <NavLink
                to="/"
                className={(e) => (e.isActive ? "text-red-600" : "")}
                style={(e) => (e.isActive ? { textDecoration: "underline" } : {})}
            >
                Home
            </NavLink>
            <NavLink
                to="/products"
                className={(e) => (e.isActive ? "text-red-600" : "")}
                style={(e) => (e.isActive ? { textDecoration: "underline" } : {})}
            >
                Products
            </NavLink>
            <NavLink
                to="/services"
                className={(e) => (e.isActive ? "text-red-600" : "")}
                style={(e) => (e.isActive ? { textDecoration: "underline" } : {})}
            >
                Services
            </NavLink>
        </div >
    )
}

export default Nav
