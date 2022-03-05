import { NavLink, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { Card, Row, Col, Container, Form, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function Signup({setUser}) {
  const navigate = useNavigate();

  const [ formData, setFormData ] = useState({
    username: '',
    email: '',
    password: ''
})
const [ errors, setErrors ] = useState([])

function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setFormData({...formData, [key]: value})
}

function handleSubmit(e) {
    e.preventDefault();
    fetch('/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(res => {
        if (res.ok) {
            res.json().then(setUser)
            navigate("/")
            setFormData({
                email: '',
                password: ''
            })
        } else {
            res.json().then(errorResponse => setErrors(errorResponse.errors))
        }
    })
}


  return (
    <div className="App-header">
                {/* <h1>Sign Up</h1>
                <form onSubmit={handleSubmit} className="mb-3">
                    <input name="username" placeholder="Username" onChange={handleChange}></input>
                    <input name="email" placeholder="Email" onChange={handleChange}></input>
                    <input name="password" type="password" placeholder="Password" onChange={handleChange}></input>
                    {errors.length > 0 ? <div className="error-container">{errors.map(error => <p className="error" key={error}>{error}</p>)}</div> : <div></div>}
                    <input type="submit" value="Sign Up"></input>
                </form>
                <div>
                    <p>Already a member? <NavLink
                                to="/login">Log in here. </NavLink></p>
                </div> */}

                <div>
                <br></br>
                <h1 style={{textAlign: "center"}}>Sign Up </h1>
         <Form  onSubmit={handleSubmit} >
            <Form.Group className="mb-3" controlId="formUsername" >  
                <Form.Label> Username</Form.Label>
                <Form.Control 
                name="username"
                type="text" 
                placeholder="Username" 
                onChange={handleChange}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId=" formEmail"> 
                <Form.Label> Email Address</Form.Label>
                <Form.Control 
                name="email"
                type="email" 
                placeholder="Enter email" 
                onChange={handleChange}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword"> 
                 <Form.Label> Password</Form.Label>
                 <Form.Control 
                 name="password"
                 type="password" 
                 placeholder="Enter password" 
                 onChange={handleChange}
                 />
                <Form.Text className="text-muted">
                 GlassMeds will never share any user's personal information with third parties.
                </Form.Text>
                 {errors.length > 0 ? <div>{errors.map(error => <p className="error" key={error}>{error}</p>)}</div> : <div></div>}
            </Form.Group>
            <Button  variant="success" type="submit">
                Submit
            </Button>
            
        </Form>
    </div>
        </div>

        

  );
}

export default Signup;
