import NavBarComp from "./NavBarComp";
import {Link} from "react-router-dom";
import React, {useState} from "react";
import { Card, Row, Col, Container, Form, Button} from 'react-bootstrap';

function Login() {

    const [formData, setFormData] = useState ({
      username: "",
      password: "",
    });

    const handleChange = (e) => {
      setFormData({ ...formData,
        [e.target.name] : e.target.value
      });
    };

    function handleSubmit (e) {
      e.preventDefault();

      const userData = {...formData};

      fetch("/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userData)
      })
      .then((r) => r.json())
      .then((user) => {
        console.log("user", user);
        setFormData({
          username:"",
          password: "",
        });
        window.location.reload(true);
      })
    }

  return (
    <Container className="App-header"> 
    <br></br>
    <h1 style={{textAlign: "center"}}>Login </h1>
    {/* <h2>Please Login here</h2>
    <form onSubmit={handleSubmit}>
      <label>Username</label>
      <input type="text" name="username" value={formData.username} onChange={handleChange}/>
    <br/>
      <label>Password</label>
      <input type="password" name="password" value={formData.password} onChange={handleChange}/>
    <br/>
    <button>Login</button>
    </form> */}
   

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
            </Form.Group>
            <Button  variant="success" type="submit">
                Submit
            </Button>
            
        </Form>
        <p>If you do not have an account, please<Link to="/signup" replace> Signup here</Link> </p>
        </Container>
  );
}

export default Login;