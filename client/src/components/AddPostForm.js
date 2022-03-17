import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Form, Button, Spinner } from 'react-bootstrap';
import { GoogleMap, useJsApiLoader, Marker, Autocomplete } from '@react-google-maps/api';
// import GoogleMapComponent from "./GoogleMapComponent"

const center = {
  lat: 40.758896,
  lng: -73.985130
};

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
    facility_id: "",
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

    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: "AIzaSyB0ERQhHbX2usywDPXZPjo2E_QrBohanyA",
      libraries: ['places']
    })
    
    const [map, setMap] = useState(/** @type google.maps.Map */ (null))
    
    if(!isLoaded) {
      return <Spinner animation="border" size="sm" />
    }

    // const onLoad = React.useCallback(function callback(map) {
    //   const bounds = new window.google.maps.LatLngBounds();
    //   map.fitBounds(bounds);
    //   setMap(map)
    // }, [])
  
    // const onUnmount = React.useCallback(function callback(map) {
    //   setMap(null)
    // }, [])

   
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
        <div> 
          <GoogleMap
        mapContainerStyle={{width: '100%', height: '500px'}}
        center={center}
        zoom={15}
        // onLoad={onLoad}
        // onUnmount={onUnmount}
        options = {{
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false, 
        }}
        onLoad={map => setMap(map)}
      >
          </GoogleMap>

        </div>
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
    <Form.Group className="mb-3" controlId="formFacility">
      <Form.Label><b> Facility</b></Form.Label>
    <Autocomplete> 
      <Form.Control 
      name="facility"
      type="text" 
      placeholder="Facility Name" 
      onChange={handleChange}
      // value={formData.facility}
      />
      {/* <Form.Select 
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
      </Form.Select> */}
    </Autocomplete>
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