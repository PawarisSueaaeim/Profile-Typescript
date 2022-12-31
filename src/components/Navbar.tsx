import React from "react";
import '../style/Navbar.css';
import Nav from 'react-bootstrap/Nav';

interface Navbar {
    home: string,
}

const Navbar: React.FC<Navbar> = ({ home }) => {
    return (
       <>
        <Nav defaultActiveKey="/home"> 
            <Nav.Item></Nav.Item>
        </Nav>
        <Nav className="navbar-default">
            <Nav.Item className="m-3">
                <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item className="m-3">
                <Nav.Link eventKey="link-1">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item className="m-3">
                <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
        </Nav>
       </>
        
    );
};

export default Navbar;
