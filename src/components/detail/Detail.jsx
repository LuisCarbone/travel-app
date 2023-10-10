
import React from "react";
import { useParams } from "react-router-dom";

const Detail = (props) => {

    const { id } = useParams();

    const data = props.data?.find ( item => item.id === Number(id));

    return (
        <div>
            que me falta
            <h1>{data?.title}</h1>
            <h2>{data?.city}</h2>
            <h2>{data?.location}</h2>
            <h2>{data?.description}</h2>
            <p>{data?.image} alt={data?.title}</p>
        </div>

    )
}


export default Detail;