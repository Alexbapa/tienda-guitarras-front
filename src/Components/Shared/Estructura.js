import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Estructura = () =>{
    return(
        <Container >
            <Row>
                <Col className='text-center'>
                <h1>Hola</h1>
                </Col>
            </Row>
            <Row>
               <Col xs={12} md={6} className='text-center '>
               <p>esto es una estructura prueba</p>
               </Col>
               <Col xs={12} md={6} className='text-center '>
               <p>esto es una estructura prueba</p>
               </Col>
            </Row>
        </Container>
    );
}

export default Estructura