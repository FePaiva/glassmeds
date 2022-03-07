import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col, Container, ListGroup, ListGroupItem, Button} from 'react-bootstrap';

function Profile ({user, handleRemovePost}) {

  function handleDelete(e) {
    handleRemovePost(e.target.value)
  }

  return (
  <div>
    <Container> 
   <Card  border="success" > 
   <Card.Header >User Details</Card.Header>
     <Card.Body>
        <Card.Title>
          {user.username}
        </Card.Title>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Gender: {user.gender}</ListGroupItem>
          <ListGroupItem>Race: {user.race}</ListGroupItem>
          <ListGroupItem>State: {user.state}</ListGroupItem>
          <ListGroupItem>City: {user.city}</ListGroupItem>
          <ListGroupItem>Insurance: {user.insurance}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="/edit">Edit Profile</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
          </Card.Body>
   </Card>
  <br></br>
   <Row className="g-5" md={2}> 
    {user.posts.map((post) => 
    <div key={post.id}>
    <Card border="success" style={{ textAlign: 'center', width: '40rem', padding: '1rem' }}> 
    <Card.Title>Procedure: {post.procedure}</Card.Title>
    <Card.Subtitle className="mb-2 text-primary"><b> Facility: </b> {post.facility}</Card.Subtitle>
    <Card.Subtitle className="mb-2 text-primary"><b> Patient cost: $</b>{post.patient_cost}</Card.Subtitle>
    <Card.Subtitle className="mb-2 text-primary"><b> Insurance cost: $</b>{post.insurance_cost}</Card.Subtitle>
      <Card.Subtitle className="mb-2 text-primary"><b>Date of procedure: </b>{post.date_of_procedure}</Card.Subtitle>
      <Card.Subtitle className="mb-2 text-primary"><b>Date of invoice: </b>{post.date_of_invoice}</Card.Subtitle>
    <Card.Text>
        Comments: {post.comments}
     </Card.Text>
     <Card.Body>
          <Card.Link as={Link} to={"/edit"}>Edit Post</Card.Link>
          <Button value={post.id} onClick={handleDelete}  >Delete Post</Button>
      </Card.Body>
    </Card>
    </div>)}
    </Row>

  
   </Container>
  </div>
  )
// }
}

export default Profile;