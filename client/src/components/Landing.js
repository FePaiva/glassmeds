import Post from './Post';
import SearchBar from './SearchBar';
import { Card, Row, Col, Container} from 'react-bootstrap';

function Landing({posts, handleSearch}) {
  return (
    <Container> 
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Row> 
        <Col> 
      <SearchBar handleSearch={handleSearch} />
      <br></br>
       <br></br>
        </Col>
      </Row>
      <Row> 
        <h2 className="d-flex justify-content-center"> Welcome to Glassmeds!</h2>
        <br></br>
         <h4 className="d-flex justify-content-start" >GlassMeds' purpose is to bring more transparency to people who need medical treatment and are not sure what to expect in terms of cost. GlassMeds has personalized medical cost information — all posted anonymously by people in need of medical treatement like you. </h4>  
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <h5><b>IMPORTANT:</b>The information you see here is for reference only. Glassmeds has no responsibility if the costs of your procedure is different from what is indicated here. Please communicate with your insurance provider and/or facility for confirmation about your final cost.</h5>      
         </Row>
         <br></br>
         <br></br>
         <Row className="g-4" md={2}> 
         {posts.map(post => <Post post={post} key={post.id} />)}
       </Row>
       </Container>
  );
}

export default Landing;