import React from 'react'
import { CartWidget } from './CartWidget'

export const Navbar = () => {
    return (
        
        <div className="navbar">
            
            <div className="logo">CompuShop</div>
            
            <nav className="menu">
                <ul className="menues">
                    <li>Inicio</li>
                    <li>Productos</li>
                    <li>Servicios</li>
                    <li>Nosotros</li>
                </ul>
            </nav>

            <CartWidget /> 
 
        </div>

 

    )
}
