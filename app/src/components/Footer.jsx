import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Navbar from 'react-bootstrap/Navbar';

export function Footer(props) {
    return (
        <Navbar bg="light" data-bs-theme="light">
            <Col></Col>
            <Col className="text-center"><Navbar.Text>Copyright © 2024 - Australian University LMS - All Rights Reserved</Navbar.Text></Col>
            <Col></Col>
        </Navbar>
    )
}