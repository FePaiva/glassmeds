import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Row, Col, Container, Form, Button, Dropdown, ButtonGroup} from 'react-bootstrap';


function AddPostForm({ posts, handlePost})
{
  const [facilities, setFacilities] = useState ([])
  const [procedures, setProcedures] = useState ([])

  // grabbing unique procedure
  const uniques = procedures.map(procedure => procedure.procedure)
  .filter((value, index, self) => self.indexOf(value) === index ) 
// console.log("unique procedures:", uniques)

// grabbing unique facility
  const uniqueList = [...new Map(facilities.map((facility)=> [facility["name"], facility])).values()];
  console.log("uniqueList", uniqueList)
  console.log("FACILITIES:", facilities)
  console.log("PROCEDURES:", procedures)

  useEffect(() => {
    fetch(`/posts/${procedures}`)
      .then((r) => r.json())
      .then(setProcedures);
  }, []);

  useEffect(() => {
    fetch("/facilities")
      .then((r) => r.json())
      .then(setFacilities);
  }, []);

  const [formData, setFormData] = useState({
    // facility_id: "",
    procedure:'',
    date_of_procedure:'',
    date_of_invoice:'',
    patient_cost: "",
    insurance_cost: "",
    comments: ""
  })

  const { id } = useParams();

  function handleChange(event) {
    setFormData({
      ...formData,[event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    handlePost(formData)
    };

  return (
    
    <Container> 
    <div >
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <h4>Please note that by sharing your costs will help other people to know what to expect in terms of medical costs.</h4>
       <br></br>
        <h3 style={{textAlign: "center"}}>Please add your medical cost here:</h3>
        <br></br>
    <Form onSubmit={handleSubmit}>
  <fieldset enable>
  <Form.Group className="mb-3">
      <Form.Label htmlFor="procedure"><b>Procedure</b></Form.Label>
      <Form.Select 
          onChange={handleChange}
          id="procedure"
          name="procedure"
          value={formData.procedure}
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
    <Form.Group className="mb-3">
      <Form.Label htmlFor="enabledSelect"><b> Facility</b></Form.Label>
      <Form.Select 
          onChange={handleChange} 
          id="facility_id"
          name="facility_id"
          value={formData.facility}
          >
        <option >
          Select Facility
        </option>
        {uniqueList.map((facility) => (
          <option key={facility.id} value={facility.id}>
            {facility.name}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicProcedureDate">
        <Form.Label><b>Procedure date:</b></Form.Label>
        <Form.Control 
        type="date"  
        name="date_of_procedure"
        onChange={handleChange}
        value={formData.date_of_procedure}
        />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicInvoiceDate">
        <Form.Label><b>Invoice date:</b></Form.Label>
        <Form.Control 
        type="date"  
        name="date_of_invoice"
        onChange={handleChange}
        value={formData.date_of_invoice}
        />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPatientCost">
        <Form.Label><b>Patient cost: $</b></Form.Label>
        <Form.Control 
        type="text"  
        name="patient_cost"
        onChange={handleChange}
        value={formData.patient_cost}
        placeholder="How much did you pay?"
        />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicInsurancePayment">
        <Form.Label><b>Insurance payment: $</b></Form.Label>
        <Form.Control 
        type="text"  
        name="insurance_cost"
        onChange={handleChange}
        value={formData.insurance_cost}
        placeholder="How much did your insurance pay?"
        />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicComment">
        <Form.Label><b>Comments:</b></Form.Label>
        <Form.Control 
        type="text"  
        name="comments"
        onChange={handleChange}
        value={formData.comments}
        placeholder="Anything else you would like to share?"
        />
  </Form.Group>

    
    <Button variant="success" type="submit">Submit</Button>
  </fieldset>
</Form>
    </div>
    </Container>
  );
}
export default AddPostForm;