import React from "react";
import CardItem from "../carditem/CardItem"
import { Container, Row, Col } from "react-bootstrap";

const Cards = (props) => {
  return (

    <Container fluid>
        <Row>
            { props.data ? 
                (props.data.map((item) => (
                    < CardItem 
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        city={item.city}
                        location={item.location}
                        key={item.id}
                    />)) 
                ) : (
                    <p>Cargando datos</p>
                )}
        </Row>
    </Container>
  )
}

export default Cards;