import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col, Container} from 'react-bootstrap';


function Post({post, user, key, setUser}) {
console.log("procedure:", post.procedure)

const date = new Date(post.created_at).toString();


  return (
   
      
      <Container> 
       
              <Card border="success" style={{ textAlign: 'center', width: '40rem', padding: '1rem' }} >
                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                <Card.Body>
                  <Card.Title>Procedure: {post.procedure}</Card.Title>
                  <Card.Subtitle className="mb-2 text-primary"><b> Facility: </b> {post.facility.name} - Location:  {post.facility.city}, {post.facility.state}
                  </Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-primary"><b> Patient cost: $</b>{post.patient_cost}</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-primary"><b> Insurance cost: $</b>{post.insurance_cost}</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-primary"><b>Date of procedure: </b>{post.date_of_procedure}</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-primary"><b>Date of invoice: </b>{post.date_of_invoice}</Card.Subtitle>
                  <Card.Text>
                  Comment: {post.comments}
                  </Card.Text>
                  <Card.Link as={Link} to={"/average"}><b>Check Average Cost </b></Card.Link>
                  {/* <Card.Link href="#"><b>Another Link </b></Card.Link> */}
                </Card.Body>
                <Card.Footer>
                  <small className="text-primary"><b>Posted on: </b>{date.slice(4, 16)}</small>
                </Card.Footer>
              </Card>
           
        </Container>
  
  );
}

export default Post;
