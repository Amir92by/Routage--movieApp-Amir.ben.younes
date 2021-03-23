import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import { NavLink} from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark" className='NavBar'>
       <img  src="https://reacttraining.com/images/blog/reach-react-router-future.png" alt="logo" width='60px'></img>   
            
            <Nav className="mr-auto">

            <NavLink exact to='/' activeClassName='Active-title' className='nav-Title'>Home</NavLink>
            </Nav>
        </Navbar>
    )
}

export default NavBar
