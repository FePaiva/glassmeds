import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Card, Row, Col, Container, Form, Button, Dropdown, ButtonGroup} from 'react-bootstrap';

// import { Bar } from 'react-chartjs-2';

function EditProfile({user, setUser, setIsUpdated, isUpdated, setErrors, errors, setIsAuthenticated  }) {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    gender: "",
    race: "",
    state: "",
    city: "",
    insurance: ""
  })

  function handleChange(event) {
    setFormData({
      ...formData,[event.target.name]: event.target.value,
    });
  }

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   handleEditProfile(formData)
  //   };

  function handleEditProfile(e) {
    e.preventDefault();
    fetch(`users/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => {

      if (res.ok) {
        res.json().then((data) => {
          setUser(data); 
          console.log(data);        
          setIsUpdated(!isUpdated);
          // setIsAuthenticated(true)
          navigate('/profile'); 
        });
      } else {
        res.json().then((data) => {
          console.log(data);
          setErrors(data.errors);
        });
      }
    });
  }


  return (
 <Container>
   <br></br>
    <h4 style={{textAlign: "center"}}>GlassMeds will not share your personal information with third parties.</h4>
       <br></br>
        <h3 style={{textAlign: "center"}}>Update Profile</h3>
        <br></br>
   <Form onSubmit={handleEditProfile}>
    <fieldset enable>
    <Form.Group className="mb-3">
      <Form.Label htmlFor="gender">Gender</Form.Label>
      <Form.Select 
        onChange={handleChange}
        id="gender"
        name="gender"
        value={formData.gender}
        >
          <option value="">
            Gender
          </option>
          <option>Female</option>
          <option>Male</option>
          <option>Other</option>  
          <option>Prefer not to disclose</option>          
        </Form.Select>
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label htmlFor="race">Select Race</Form.Label>
      <Form.Select 
       onChange={handleChange} 
       id="race"
       name="race"
       value={formData.race}>
          <option value="">
            Select Race
            </option>
          <option>African / African Descendent</option>
          <option>Asian / Asian Descendant</option>
          <option>Hispanic / Hispanic Descendant</option>
          <option>Native American</option>
          <option>Latino / Latino Descendant</option>
          <option >White</option>
          <option >Prefer not to disclose</option>
          <option >Not listed here</option>
      </Form.Select>
    </Form.Group>
    <Form.Group className="mb-3">
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
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label htmlFor="city">City</Form.Label>
      <Form.Control 
      type="text"  
      name="city"
      onChange={handleChange}
      value={formData.city}
      id="city" 
      placeholder="City of residence" 
      />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label htmlFor="insurance">Insurance Provider</Form.Label>
      <Form.Control
      type="text"  
      name="insurance"
      onChange={handleChange}
      value={formData.insurance} 
      id="insurance" 
      placeholder="N/A if you do not have insurance." 
      />
    </Form.Group>
     <Button  variant="success" type="submit">Submit</Button>
     {/* href="/profile"> */}
  </fieldset>
</Form>


 </Container>
  )
}

export default EditProfile;