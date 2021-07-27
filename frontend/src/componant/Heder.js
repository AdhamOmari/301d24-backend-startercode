import React, { Component } from 'react'
import { Navbar,Nav,Container} from 'react-bootstrap';
export class Heder extends Component {
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/home">home</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/fav">Favorite list</Nav.Link>
                          
                        </Nav>
                    </Container>
                </Navbar>
            </>
        )
    }
}

export default Heder
