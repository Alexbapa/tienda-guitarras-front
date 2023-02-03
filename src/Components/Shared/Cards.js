import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Cards() {
  return (
    <Container>
        <Row>
             <Col xs={12} md={12} className='text-center '>
             <p>Bienvenido</p>
        </Col>
        <Col xs={12} md={4} className='text-center '>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://picsum.photos/300/300" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col xs={12} md={4} className='text-center '>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://picsum.photos/300/300" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col xs={12} md={4} className='text-center '>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://picsum.photos/300/300" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>
  );
}

export default Cards;