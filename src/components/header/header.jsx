import {Link, useLocation} from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./header.css";

const Header = () => {
    const { pathname } = useLocation();
    console.log(pathname)
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>App mancare</Navbar.Brand>
                <Nav className="me-auto">
                    <Link to="/" className={`nav-link ${pathname === '/' ? "active" : ""}`}>
                        Home
                    </Link>
                    <Link to="/blog" className={`nav-link ${pathname === '/blog' ? "active" : ""}`}>
                        Blog Page
                    </Link>
                    <Link to="/user" className={`nav-link ${pathname === '/user' ? "active" : ""}`}>
                        My Account
                    </Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;