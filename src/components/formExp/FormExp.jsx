import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const validate = (form) => {
    const errors = {}
    if (!title) errors.title = "Completar el título";
    return errors;
}

const FormExp = () => {
    const [ form, setForm ] = useState ({
        title:"",
        user:"",
        city:"",
        location:"",
        description:"",
        image:"",
    });

    const [ errors, setErrors ] = useState ({
        title:"",
        user:"",
        city:"",
        location:"",
        description:"",
        image:"",
    });

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        setForm ({...form, [property] : value});

        setErrors (validate({...form, [property] : value}))

    }

    const handleSubmit = (event) => {
        event.preventDefault();


    }

    return (
        <Form onSubmit={handleSubmit} style={{width: "40%", margin: "30px auto"}}>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="title">Título:</Form.Label>
                <Form.Control type="text" name="title" value={form.title} onChange={handleChange}></Form.Control>
                {errors.title && <Form.Text>{errors.title}</Form.Text>}
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="user">Usuario:</Form.Label>
                <Form.Control type="text" name="user" value={form.user} onChange={handleChange}></Form.Control>
                {errors.user && <Form.Text>{errors.user}</Form.Text>}
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="city">Ciudad:</Form.Label>
                <Form.Control type="text" name="city" value={form.city} onChange={handleChange}></Form.Control>
                {errors.city && <Form.Text>{errors.city}</Form.Text>}
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="location">Usuario:</Form.Label>
                <Form.Control type="text" name="location" value={form.location} onChange={handleChange}></Form.Control>
                {errors.location && <Form.Text>{errors.location}</Form.Text>}
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="description">Descripción:</Form.Label>
                <Form.Control type="text" name="description" value={form.description} onChange={handleChange}></Form.Control>
                {errors.description && <Form.Text>{errors.description}</Form.Text>}
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="image">Imágen:</Form.Label>
                <Form.Control type="text" name="image" value={form.image} onChange={handleChange}></Form.Control>
                {errors.image && <Form.Text>{errors.image}</Form.Text>}
            </Form.Group>

            <Button type="submit" variant="secondary">Ingresar</Button>
        </Form>     
    )
}

export default FormExp;