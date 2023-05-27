import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export const NavigationBar = () => {
  return (
    <div>
            <Navbar bg="dark" variant='dark' expand="lg" fixed="top">
                <Container fluid>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll>
                        <Nav.Link to="/movies-in-theaters" className='mx-2' as={NavLink}>Movies in theaters</Nav.Link>
                        <Nav.Link to="/movies-coming" className='mx-2' as={NavLink}>Coming soon</Nav.Link>
                        <Nav.Link to="/top-rated-india" className='mx-2' as={NavLink}>Top rated Indian</Nav.Link>
                        <Nav.Link to="/top-rated-movies" className='mx-2' as={NavLink}>Top rated movies</Nav.Link>
                        <Nav.Link to="/favourite" className='mx-2' as={NavLink}>Favourites</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    </Navbar.Collapse>
                </Container>
        </Navbar>
    </div>
  )
}
