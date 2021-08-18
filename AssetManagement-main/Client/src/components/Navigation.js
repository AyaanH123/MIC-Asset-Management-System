import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import {  NavLink, HashRouter, Link } from 'react-router-dom'

const Navigation = ({ user, isAdmin, logOut }) => {

    return (
        <>
            <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        {user && 
                        <NavDropdown title="Asset" id="collasible-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/assetlist">Asset List</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/addasset">Add Asset</NavDropdown.Item>
                        </NavDropdown>
                        }
                        {user && 
                        <NavDropdown title="Employee" id="collasible-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/emplist">Employee List</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/addemp">Add Employee</NavDropdown.Item>
                        </NavDropdown>
                        }
                        {(user && isAdmin) &&
                        <NavDropdown title="Admin" id="collasible-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/admin">Add User</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/admin">Add Location</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/admin">Add Asset Type</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/admin">Add Person Type</NavDropdown.Item>
                        </NavDropdown>
                        }
                        {user && 
                        <NavDropdown title="Report" id="collasible-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/report">Asset Report</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/report">Person Report</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/report">Retired Asset</NavDropdown.Item>
                        </NavDropdown>
                        }
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text> {user &&
                        <>
                            Signed in as: {user.first_name + ", " + user.last_name} <Link className="btn btn-primary" to='/Login' onClick={logOut}>Logout</Link>
                        </>
                    }
                        {!user && <Link className="btn btn-primary" to='/Login'>Login</Link>}
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
            <br/>
        </>
    )
}

export default Navigation
