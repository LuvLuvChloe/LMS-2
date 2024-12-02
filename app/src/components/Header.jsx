import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AuthContext } from '../contexts/AuthContext';
import { useContext } from 'react'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import logo from '../assets/LMSlogo.png'

export function Header(props) {
    const authState = useContext( AuthContext )

    if( !authState) {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark" sticky="top" >
            <Container fluid>
                <Navbar.Brand href="#home">
                <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />{' '}
            Australian University LMS
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
                        <Nav.Link as={Link} to="/signin">Signin</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="primary">Search</Button>
          </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
    else if( authState && props.mode == false ){
        return (
            <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark" sticky="top">
                <Container fluid>
                    <Navbar.Brand href="#home">
                    <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />{' '}
            Australian University LMS
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/logout">Log out</Nav.Link>
                           
                        </Nav>
                        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="primary">Search</Button>
          </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    
    }
    else if ( authState && props.mode == true ){
        return (
            <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark" sticky="top">
                <Container fluid>
                    <Navbar.Brand href="#home">
                    <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />{' '}
            Australian University LMS
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/admin/addbook">Add Book</Nav.Link>
                            <Nav.Link as={Link} to="/admin/listloans">Loans</Nav.Link>
                            <Nav.Link as={Link} to="/logout">Log out</Nav.Link>
                           
                        </Nav>
                        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="primary">Search</Button>
          </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )}
}