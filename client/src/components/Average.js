import Post from './Post';
import React, { useState, useEffect, useMemo } from "react";
import { ProgressBar, Card, Fade, Col, Container, Form} from 'react-bootstrap';
import logo from '../assets/glassmeds.png';
import { Link, useNavigate } from "react-router-dom";

function Average ({posts, setUser, user}){
  
  const [open, setOpen] = useState(false);
  const [procedures, setProcedures] = useState ([])
  const [filteredProcedure, setFilteredProcedure] = useState ("")
  const [averageCost, setAverageCost] = useState (0)
  const [mostExpensive, setMostExpensive] = useState (0)
  const [lowerCost, setLowerCost] = useState(0)
  const [sameProcedureInstances, setSameProcedureInstances] = useState(0)
  const uniques = procedures.map(procedure => procedure.procedure)
  .filter((value, index, self) => self.indexOf(value) === index )
console.log("unique procedures:", uniques)

  // console.log("all procedures", procedures)
  // console.log("filtered procedure:", filteredProcedure)

  useEffect(() => {
    fetch(`/posts/${procedures}`)
      .then((r) => r.json())
      .then(setProcedures);
  }, [posts]);


    function handleProcedureChange(procedure) {
      setFilteredProcedure(procedure);
      let filteredObject = procedures.filter (p=> p.procedure === procedure)
      console.log("lenght of filtered procedure:", filteredObject)
      setSameProcedureInstances(parseInt(filteredObject.length))
      
      let total = 0;
      for (let ii = 0; ii < filteredObject.length; ii++) {
        total = total + filteredObject[ii].patient_cost
        
      }
      console.log("total:", total)
      let avg = total / filteredObject.length
      console.log("average:", avg)
      setAverageCost(avg.toFixed(2));


      // function mostExpensiveProcedure (filteredObject) {
      //   return filteredObject.reduce((p,v) => p.patient_cost > v.patient_cost ? p :v).procedure.patient_cost
      // }
      let expensiveProcedure = (filteredObject.sort((a,b) => b.patient_cost - a.patient_cost)[0].patient_cost)
      setMostExpensive(expensiveProcedure)
      console.log("expensive:", expensiveProcedure)

      let cheapProcedure = (filteredObject.sort((a,b) => a.patient_cost - b.patient_cost)[0].patient_cost)
      setLowerCost(cheapProcedure)
      console.log("cheap:", cheapProcedure)
    }

    function handleChange(e) {
      handleProcedureChange(e.target.value);
      console.log(e.target.value)
    }
    if (user) {
  return (
    <div  >
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    


      <Container className="App-header"> 

      <div >
      
      <Form.Group style={{textAlign: "center"}} className="mb-3">
      <Form.Label htmlFor="procedure"><b>Select Procedure</b></Form.Label>
      <Form.Select 
          onChange={handleChange}
          id="procedure"
          name="procedure"
          value={filteredProcedure}
          onClick={() => setOpen(!open)}
          aria-controls="example-fade-text"
          aria-expanded={open}
          >
        <option value="">
          Select Procedure
        </option>
        {uniques.map((procedure) => (
          <option key={procedure} value={procedure}>
            {procedure}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
          </div>
          <Fade in={open}>
           <div id="example-fade-text">
            <Col style={{ padding: '2rem' }}>
              <Card className="mb-3" border="success" style={{ textAlign: 'center', width: '40rem', padding: '1rem' }} >
                <Card.Img variant="top" src={logo} alt="GlassMeds" width="80px" height="400px" />
                <Card.Body>
                  <Card.Title><b>{filteredProcedure}</b></Card.Title>
                  <Card.Subtitle className="mb-2 text-primary"><b> Average Cost: $</b>{averageCost}</Card.Subtitle>
                  {/* <ProgressBar striped variant="warning" style={{wordSpacing:"5px"}}now={averageCost} min={lowerCost} max={mostExpensive} label={``}/> */}
                  <ProgressBar>
                      <ProgressBar animated variant="success" now={lowerCost}  key={1} label={`$${lowerCost}`} />
                      <ProgressBar animated variant="warning" now={averageCost} key={2} label={`$${averageCost}`} />
                      <ProgressBar animated variant="danger" now={mostExpensive} key={3} label={`$${mostExpensive}`} />
                  </ProgressBar>
                  <Card.Text>
                  <b>{`Among the ${sameProcedureInstances} GlassMeds users who shared their cost with us, the most expensive ${filteredProcedure} was $${mostExpensive}, and the cheapest $${lowerCost}.`}</b>
                  </Card.Text>
                  <Card.Text><b>GlassMeds would like to help other users like you.</b></Card.Text><Card.Link as={Link} to={"/addpost"}><b>Add Your Cost</b></Card.Link> <Card.Text><b>Share your medical cost with us.</b></Card.Text>
                  {/* <Card.Link href="/login"><b>Login </b></Card.Link> */}
                </Card.Body>
                <Card.Footer>
                  <small className="text-primary"><b>Thanks for checking with GlassMeds! </b></small>
                </Card.Footer>
              </Card>
            </Col>
            </div>
      </Fade>
    </Container>
    </div>
  )}

  return (
    <div  >
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
      <Container className="App-header"> 
      {/* style={{ textAlign: 'center'}} */}

      {/* <div >
        <select name="filter" onChange={handleProcedureChange}>
          <option value="">Filter by procedure</option>
          {/* <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option> */}
        {/* </select> */}
      {/* </div>
      <ul className="Items">
        {procedureToDisplay.map((post) => (
          <Post key={post.id} name={post.procedure} /> */}
        {/* ))}
      </ul>  */}

      <div >
      {/* <label htmlFor="procedure"><b>Select Procedure:</b></label>
      <select
        id="procedure"
        name="procedure"
        value={filteredProcedure}
        onChange={handleChange}      >
        <option>Select Procedure</option>
        {uniques.map((procedure) => (
          <option key={procedure} value={procedure}>
            {procedure} 

          </option>
        ))}
      </select> */}
      <Form.Group style={{textAlign: "center"}} className="mb-3">
      <Form.Label htmlFor="procedure"><b>Select Procedure</b></Form.Label>
      <Form.Select 
          onChange={handleChange}
          id="procedure"
          name="procedure"
          value={filteredProcedure}
          onClick={() => setOpen(!open)}
          aria-controls="example-fade-text"
          aria-expanded={open}
          >
        <option value="">
          Select Procedure
        </option>
        {uniques.map((procedure) => (
          <option key={procedure} value={procedure}>
            {procedure}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
          </div>
          <Fade in={open}>
           <div id="example-fade-text">
            <Col style={{ padding: '2rem' }}>
              <Card className="mb-3" border="success" style={{ textAlign: 'center', width: '40rem', padding: '1rem' }} >
                <Card.Img variant="top" src={logo} alt="GlassMeds" width="80px" height="400px" />
                <Card.Body>
                  <Card.Title><b>{filteredProcedure}</b></Card.Title>
                  <Card.Subtitle className="mb-2 text-primary"><b> Average Patient Cost: $</b>{averageCost}</Card.Subtitle>
                  {/* <ProgressBar striped variant="warning" style={{wordSpacing:"5px"}}now={averageCost} min={lowerCost} max={mostExpensive} label={``}/> */}
                  <ProgressBar>
                      <ProgressBar animated variant="success" now={lowerCost}  key={1} label={`$${lowerCost}`} />
                      <ProgressBar animated variant="warning" now={averageCost} key={2} label={`$${averageCost}`} />
                      <ProgressBar animated variant="danger" now={mostExpensive} key={3} label={`$${mostExpensive}`} />
                  </ProgressBar>
                  <Card.Text>
                  <b>{`Among the ${sameProcedureInstances} GlassMeds users who shared their cost with us, the most expensive ${filteredProcedure} was $${mostExpensive}, and the cheapest $${lowerCost}.`}</b>
                  </Card.Text>
                  <Card.Text><b>GlassMeds would like to help other users like you.</b></Card.Text><Card.Link as={Link} to={"/signup"}><b>Signup</b></Card.Link> <Card.Text><b>and share your medical costs with us.</b></Card.Text>
                  {/* <Card.Link href="/login"><b>Login </b></Card.Link> */}
                </Card.Body>
                <Card.Footer>
                  <small className="text-primary"><b>Thanks for checking with GlassMeds! </b></small>
                </Card.Footer>
              </Card>
            </Col>
            </div>
      </Fade>
    </Container>
    </div>

  )     
}

export default Average;