import React from 'react'
import { Navbar } from 'react-bootstrap'

const Header = props => {
    return (
        <div>
            <Navbar bg="primary" variant="dark" className="justify-content-center">
                <Navbar.Brand href="#home">Asset Management System</Navbar.Brand>
            </Navbar>
        </div>
    )
}


export default Header
