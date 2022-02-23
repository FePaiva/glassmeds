import { NavLink, useNavigate } from "react-router-dom";
import { useState } from 'react';


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
    <div id="signup">
            <div>
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <input name="username" placeholder="Username" onChange={handleChange}></input>
                    <input name="email" placeholder="Email" onChange={handleChange}></input>
                    <input name="password" type="password" placeholder="Password" onChange={handleChange}></input>
                    {errors.length > 0 ? <div className="error-container">{errors.map(error => <p className="error" key={error}>{error}</p>)}</div> : <div></div>}
                    <input type="submit" value="Sign Up"></input>
                </form>
                <div>
                    <p>Already a member? <NavLink
                                to="/login">Log in here. </NavLink></p>
                </div>
            </div>
        </div>
  );
}

export default Signup;
