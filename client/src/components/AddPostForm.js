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
    state:"",
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
    <h4>Please share your costs to help other people to know what to expect in terms of medical costs.</h4>
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
    {/* <Form.Group className="mb-3">
      <Form.Label htmlFor="state"><b>State</b></Form.Label>
      <Form.Select 
       onChange={handleChange}
       id="state"
       name="state"
       value={formData.state}>
          <option value="">Select State</option>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="DC">District Of Columbia</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>
      </Form.Select>
    </Form.Group> */}
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