import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";


const validate = (form) => {
    // crear un objeto vacio donde se agregaran los errores ocurridos y que luego se devolvera
    const errors = {  }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email)) errors.email = "Correo electrónico no válido"
    if (!form.email) errors.email = "Completar correo electrónico";
    if (form.password.length <= 8) errors.password = "Contraseña demaisado corta";
    if (!form.password) errors.password = "Completar contraseña";
    return errors;
}


const Login = () => {

    // en vez de almacenar cada variable en un estado, guardamos un objeto que contiene a todos los inputs
    const [ form, setForm ] = useState({
        email : "",
        password : ""
    });

    // manejador de errores
    const [ errors , setErrors ] = useState({
        email : "",
        password : ""
    })

    const handleChange = (event) => {
        // lo siguiente es poco practico en casos de formularios de muchos campos
//        if (event.target.name === "email") {
//            setForm({...form, email: event.target.value}); 
                // a los 3 puntos delatnte del form se los llama "spread operator", 
                // y evita que se sobreescriba lo existente en el array u objeto
                // es decir que cuando mando email no se pise password y viceversa

//        };
//
//        if (event.target.name === "password") {
//            setForm({...form, password: event.target.value});
//        };

        // todo lo anterior se puede reemplazar por lo siguiente
        const property = event.target.name;
        const value = event.target.value;
        setForm ({...form, [property] : value});
        // hasta acá , los "[]" se denominan "braket notation" y reemplazan el contenido
        // por el valor que tiene almacenado en vez del literal, de esta manera [property] 
        // se considera en este ejemplo como "email" y/o "password" segun corresponda

        setErrors (validate({...form, [property] : value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (Object.keys(errors).length === 0) {
            alert("login exitoso");
        }
    }

    // el submit ya no lo usamos desde el boton sino desde el formualrio
    return (
        <Container fluid >
            <Row>
                <Col xl={8}>
                    HOLA
                </Col>
                <Col xl={4}>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email">Correo electrónico:</label>
                            <input type="text" name="email" value={form.email} onChange={handleChange}></input>
                            {errors.email && <p>{errors.email}</p>}
                        </div>
                        <div>
                            <label htmlFor="password">Contraseña:</label>
                            <input type="text" name="password" value={form.password} onChange={handleChange}></input>
                            {errors.password && <p>{errors.password}</p>}
                        </div>
                        <button>Ingresar</button>

                    </form>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;

// Regexp
// /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

/*



*/