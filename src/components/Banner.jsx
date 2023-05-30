import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import intro from "../assets/images/3.webp";

function Banner() {
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loop, setLoop] = useState(0);
    const toRotate = ["Tlapacoyan", "Lugar dónde se lava", "Heroica"];
    const period = 1000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) }
    }, [text]);

    function tick() {
        let i = loop % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting === true ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText);

        isDeleting === true && setDelta(prevDelta => prevDelta / 2);

        if (!isDeleting && updatedText === fullText) {
            // setLoop();
            setDelta(period);
            setIsDeleting(true);
        } else if (isDeleting && updatedText === "") {
            setDelta(500);
            setIsDeleting(false);
            setLoop(loop + 1);
        }
    }
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-item-center">
                    <Col xs={12} md={6} xl={7}>
                        <h1>{`Hola `}<span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="textIntro">{text}</span></span></h1>
                        <p>¿Te gustaría conocer un lugar tradicional, cálido y divertido? Entonces visita el municipio de Tlapacoyan.</p>
                    </Col>
                    <Col className="zoom-wrapper">
                        <img className="intro" id="intro" src={intro} />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Banner;