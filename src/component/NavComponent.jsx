import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavbarComponent = () => {
    return (
        <Navbar bg="light" expand="lg">
                <Nav className="mr-auto">
                    <Nav.Link href="/seongyu">선규</Nav.Link>
                    <Nav.Link href="/sumi">수미</Nav.Link>
                    <Nav.Link href="/kichan">기찬</Nav.Link>
                    <Nav.Link href="/mingi">민기</Nav.Link>
                </Nav>
        </Navbar>
    );
};

export default NavbarComponent;
