import { Container, Navbar, Nav } from "react-bootstrap"

const NavigationBar = () => {
    return (
        <div>
            <Navbar variant="black">
                <Container>
                    <Navbar.Brand className="text-white" href="/">DWIFILMS</Navbar.Brand>
                    <Nav>
                        <Nav.Link className="text-white" href="#trending">TRENDING</Nav.Link>
                        <Nav.Link className="text-white" href="#superhero">SUPERHERO</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar