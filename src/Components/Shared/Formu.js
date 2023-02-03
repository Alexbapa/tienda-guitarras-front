import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const Formu = () =>{

   const[inputs, setInputs] = useState({})

   const handleChange = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
     setInputs(values =>({...values,[name]: value}))
   }

   const handleSubmit = (event) =>{
    event.preventDefault();
       alert("usuario: " + inputs.usuario + " contraseña: " + inputs.contrasena);
   }

  return(
<Form onSubmit={handleSubmit}>
<Form.Label>Ingresar</Form.Label>

      <Form.Group className="mb-3" controlId="formBasicUser">
        <Form.Label>Usuario</Form.Label>
        <Form.Control onChange={handleChange} name="usuario" type="text" placeholder="Nombre de usuario" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control onChange={handleChange} name="contrasena" type="text" placeholder="tu contraseña" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Formu;