
import React from "react";
import { Card, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Detail = (props) => {

    const { id } = useParams();

    const data = props.data?.find ( item => item.id === Number(id));

    return (
        <Card >
            <Card.Title >{data?.title}</Card.Title>
            <Card.Subtitle>{data?.city} - {data?.location}</Card.Subtitle>

            <Card.Body>
                <Card.Img src={data?.image} />
                <Card.Text>{data?.description}</Card.Text>
            </Card.Body>
        </Card>
    )
}


export default Detail;