import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import AboutGif from '../../assets/about.gif';
import YButton from "../basic/YButton";
import Asdf from "../../assets/asdf.png";

//import CSS
import './about.css';
class About extends React.Component {
    render() {
        return (
            <div className='about-control'>
                <Container>
                    <Row>
                    <Col md={6} xs={12} className='image-control'>
                            <a href="https://deadbanditz.io/"><img style={{border: "solid black 10px", borderRadius: 20}}src={"https://deadbanditz.io/static/media/owl.b740aad4.png"} alt='about gif' /></a>
                        </Col>
                        <Col md={6} xs={12} className='image-control'>
                            <img style={{border: "solid black 10px", borderRadius: 20}}src={Asdf} alt='about gif' />
                        </Col>
                        <Col md={6} xs={12} className='image-control'>
                            <img style={{border: "solid black 10px", borderRadius: 20}}src={Asdf} alt='about gif' />
                        </Col>
                        <Col md={6} xs={12} className='image-control'>
                            <img style={{border: "solid black 10px", borderRadius: 20}}src={Asdf} alt='about gif' />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default About;