import React from 'react'
import { FaHome } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const selectedStyle = {
    backgroundColor: "white",
    color: "slategray"
}

export const MainMenu = () =>
<nav className="main-menu">
    <NavLink to="/">
        <FaHome />
    </NavLink>
    <NavLink to="/pemesanan-mobil" activeStyle={selectedStyle}>
        [Pemesanan Mobil]
    </NavLink>
    <NavLink to="/ruangmeeting" activeStyle={selectedStyle}>
        [Ruang Meeting]
    </NavLink>
    <NavLink to="/inventori" activeStyle={selectedStyle}>
        [Inventori]
    </NavLink>
    <NavLink to="/catering" activeStyle={selectedStyle}>
        [Catering]
    </NavLink>
</nav>