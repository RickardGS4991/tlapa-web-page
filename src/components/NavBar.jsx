import React, {useState, useEffect} from "react";
import {Nav, Navbar,Container} from "react-bootstrap";
import logo from "../assets/images/logo.webp";

function NavBar() {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled,setScrolled] = useState(false);

    useEffect(()=>{
        function onScroll(){
            window.scrollY > 50 ? setScrolled(true) : setScrolled(false);
        }

        return ()=> {window.removeEventListener("scroll",onScroll)}
    },[])

    function updateActiveLink(value){
        console.log(value);
        setActiveLink(value);
    }

    return (
        <Navbar className={scrolled === true ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home"><img src={logo} alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link":"navbar-link"} onClick={()=>updateActiveLink("home")}>Inicio</Nav.Link>
                        <Nav.Link href="#history" className={activeLink === "history" ? "active navbar-link" : "navbar-link"} onClick={()=>updateActiveLink("history")}>Historia</Nav.Link>
                        <Nav.Link href="#pDi" className={activeLink === "pDi" ? "active navbar-link" : "navbar-link"} onClick={()=>updateActiveLink("pDi")}>Lugares</Nav.Link>
                        <Nav.Link href="#food" className={activeLink==="food"?"active navbar-link" : "navbar-link"} onClick={()=>updateActiveLink("food")}>Gastronomía</Nav.Link>
                        <Nav.Link href="#services" className={activeLink === "services" ? "active navbar-link" : "navbar-link"} onClick={()=>updateActiveLink("services")}>Servicios</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;