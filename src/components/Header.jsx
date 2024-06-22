import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'

export default function Header() {
  return (
    <header className='py-2'>
        <Navbar expand="lg">
      <div className='bigger-container'>
        {/* <Navbar.Brand as="div">
            <Link to="/"><img src={logo} width={60} alt="logo" /></Link>
        </Navbar.Brand> */}
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/cart">Cart</Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
    </header>
  );
}
