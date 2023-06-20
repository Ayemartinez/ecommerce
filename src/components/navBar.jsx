import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from "./cartWidget";


export const NavBar = () => <header>
<Navbar bg="light" data-bs-theme="light">
    <Container>
        <Navbar.Brand href="#home">Yamaha YBR125</Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link href="#home">Inicio</Nav.Link>
        <Nav.Link href="#repuestos">Repuestos</Nav.Link>
        <Nav.Link href="#accesorios">Accesorios</Nav.Link>
        </Nav>
        <CartWidget/>
    </Container>
    </Navbar>
</header>  