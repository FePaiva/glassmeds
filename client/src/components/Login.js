import NavBar from "./NavBar";
import {Link} from "react-router-dom";
import React, {useState} from "react";

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
    <>
    <h2>Please Login here</h2>
    <form onSubmit={handleSubmit}>
      <label>Username</label>
      <input type="text" name="username" value={formData.username} onChange={handleChange}/>
    <br/>
      <label>Password</label>
      <input type="password" name="password" value={formData.password} onChange={handleChange}/>
    <br/>
    <button>Login</button>
    </form>
    <p>If you do not have an account, please<Link to="/signup" replace> Signup here</Link> </p>

    
    </>
  );
}

export default Login;