import { useState, useEffect } from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () =>{

  const [colorChange, setColorchange] = useState(false);
  
  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);

    return (
<Navbar sticky="top" className={colorChange ? 'navbar colorChange' : 'navbar'}>

<Container>
  <Navbar.Brand href="/">Tienda de Guitarras</Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end " >
  <Nav.Item  >
  <Link to="/Carrito" className='nav-link '>Carrito</Link>
  </Nav.Item>
  <Nav.Item>
  <Link to="/Perfil" className='nav-link '>Perfil</Link>
  </Nav.Item>
  <Nav.Item>
  <Link to="/Login" className='nav-link '>Login</Link>
  </Nav.Item>
  </Navbar.Collapse>
</Container>
</Navbar>
      );
}

export default Header;