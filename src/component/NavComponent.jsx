import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavbarComponent = () => {
    return (
            <Nav justify variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link href="/seongyu">Quiz1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/sumi">Quiz2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/kichan">Quiz3</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/mingi">Quiz4</Nav.Link>
            </Nav.Item>
            </Nav>
    );
};

export default NavbarComponent;
