import { Card, Col, Container, Row, Image } from "react-bootstrap"
import hero1 from "../assets/images/Hero/antman.png"
import hero2 from "../assets/images/Hero/avengers.png"
import hero3 from "../assets/images/Hero/iron.png"
import hero4 from "../assets/images/Hero/captain.png"
import hero5 from "../assets/images/Hero/indhumans.png"
import hero6 from "../assets/images/Hero/thor.png"
const SuperHero = () => {
    return (
        <>
            <Container>
                <br />
                <h1 className="text-white text-center">SUPERHERO MOVIES</h1>
                <Row>
                    <Col md={4} className="movieWrapper" id="superhero">
                        <Card className="movieSuper">
                            <Image src={hero1} alt="antman" className="super" />
                            <div className="bg-dark">
                                <div className="p-2 m-2 text-white">
                                    <Card.Title className="text-center">ANTMAN</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieSuper">
                            <Image src={hero2} alt="avengers" className="super" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">AVENGERS</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieSuper">
                            <Image src={hero3} alt="iron" className="super" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">IRON MAN 2</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieSuper">
                            <Image src={hero4} alt="captain america" className="super" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">CAPTAIN AMERICA </Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieSuper">
                            <Image src={hero5} alt="inhumans" className="super" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">INHUMANS</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieSuper">
                            <Image src={hero6} alt="thor" className="super" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">THOR </Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default SuperHero