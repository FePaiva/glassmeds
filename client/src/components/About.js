import React from "react";
import { Card, ListGroup, ListGroupItem, Container, Row, Col} from 'react-bootstrap';
import logo from '../assets/glassmeds.png';


function About() {
  return (
    
    <div >
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
<Container> 
  <Row className="g-4" md={2} > 
  <Col> 
   <Card border="success" style={{ textAlign: 'center', width: '30rem', padding: '1rem' }} >
  <Card.Img variant="top" src={logo} style={{ height: '550px'}} />
</Card>
</Col>
<Col> 
    <Card border="light">
    <Card.Body>
    <Card.Title>Our Mission</Card.Title>
    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
    <Card.Text>
      To help people everywhere find fair cost for medical procedures.
    </Card.Text>
  <Card.Title>Our Values</Card.Title>
     <Card.Text>
         <b>Be Transparent:</b> We share information (good or the bad) so we can continuously help people to make the right decisions.
    </Card.Text>
    <Card.Text>
         <b>Be Entrepreneurial:</b> To resape the way the world works, we must be bold and corageous. We forge our own path by challenging the status quo.
    </Card.Text>
    <Card.Text>
        <b>Better Together:</b> We work together with integrity, respect and compassion for one another. We have fun together. We are inclusive, fair and humble while remaining confident.
    </Card.Text>
    <Card.Text>
        <b>Be Grateful:</b> We do not take anyone or anything for granted. We are grateful for our GlassMeds users and for the opportunities we have in front of us to make the world a better place.
    </Card.Text>
    <Card.Title>About GlassMeds</Card.Title>
     <Card.Text>
      GlassMeds was built to increase medical assistance transparency, offering insights into the patient experience with facilitites (hospital / clinics) acrross the US. All of the information you see here was shared by people who went trhough the procedures themselves, and ended up with a "surprise" bill at the end.
    </Card.Text>



  </Card.Body>


    </Card>
</Col>
</Row>
</Container>

   {/* <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={logo} width="600px" height="600px"
      // <img src={logo} alt="GlassMeds" width="100px" height="100px"/>
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <h3>Our Mission</h3>

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>To help people everywhere find fair cost for medical procedures.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <h3>Our Values</h3>


    <Carousel.Caption>
      <h3>Third slide label</h3>
      <div>
        <p>Be Transparent: We share information (good or the bad) so we can continuously help people to make the right decisions.</p>

        <p>Be Entrepreneurial: To resape the way the world works, we must be bold and corageous. We forge our own path by challenging the status quo.</p>

        <p>Better Together: We work together with integrity, respect and compassion for one another. We have fun together. We are inclusive, fair and humble while remaining confident. We do the right thing, period.</p>

        <p>Be Grateful: We do not take anyone or anything for granted. We are grateful for our GlassMeds users and for the opportunities we have in front of us to make the world a better place.</p>
    </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> */}
    </div>
  );
}

export default About;