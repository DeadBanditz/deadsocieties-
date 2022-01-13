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
                    <Col md={6} xs={12} className='image-control' style={{marginBottom: 20, textAlign: "center"}}>
                            <a href="https://deadbanditz.io/"><img style={{border: "solid black 10px", borderRadius: 20}}src={"https://deadbanditz.io/static/media/owl.b740aad4.png"} alt='about gif' /></a>
                            <text style={{textAlign: "center", fontSize: 30}}>February 2022</text>
                        </Col>
                        <Col md={6} xs={12} className='image-control' style={{marginBottom: 20, textAlign: "center"}}>
                            <img style={{border: "solid black 10px", borderRadius: 20}}src={Asdf} alt='about gif' />
                            <text style={{textAlign: "center", fontSize: 30}}>Coming Soon...</text>
                        </Col>
                        <Col md={6} xs={12} className='image-control' style={{marginBottom: 20, textAlign: "center"}}>
                            <img style={{border: "solid black 10px", borderRadius: 20}}src={Asdf} alt='about gif' />
                            <text style={{textAlign: "center", fontSize: 30}}>Coming Soon...</text>
                        </Col>
                        <Col md={6} xs={12} className='image-control' style={{marginBottom: 20, textAlign: "center"}}>
                            <img style={{border: "solid black 10px", borderRadius: 20}}src={Asdf} alt='about gif' />
                            <text style={{textAlign: "center", fontSize: 30}}>Coming Soon...</text>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default About;