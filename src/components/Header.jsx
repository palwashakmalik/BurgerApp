import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'

export const Header = () => (
  <Navbar>
    <Container>
      <Navbar.Brand to='/'>Burger Builder App</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className='justify-content-end'>
        <Nav.Link as={Link} to='/signup' className='me-3'>Sign Up</Nav.Link>
        <Nav.Link as={Link} to='/'>Create Burger</Nav.Link>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default Header
