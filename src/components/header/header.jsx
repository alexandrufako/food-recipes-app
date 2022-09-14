import {Link, useLocation} from "react-router-dom";
import { Context } from "../../context/context";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./header.css";

const Header = () => {
    const { favourites } = Context();
    const { pathname } = useLocation();
    
    console.log(pathname)


    return (
        pathname !== '/login' ? <Navbar bg="light" variant="light">
            <Container>
                
                <Nav className="me-auto">
   
                    <Link to="/blog" className={`nav-link header-link ${pathname === '/blog' ? "active" : ""}`}>
                        <div className="favourites">
                            {favourites.length > 0 && <div className="bubble">{favourites.length}</div>}
                            <div className="page-name">favourites</div>
                        </div>     
                    </Link>
                    <Link to="/" className={`nav-link header-link ${pathname === '/' ? "active" : ""}`}>
                        <img id="logo-header" src="/cantina-logo.png" alt="" />
                    </Link>
                    <Link to="/user" className={`nav-link header-link ${pathname === '/user' ? "active" : ""}`}>
                        account
                    </Link>

                </Nav>
            </Container>
        </Navbar> : null
    );
};

export default Header;