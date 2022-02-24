import { Link, useNavigate } from "react-router-dom";


  function NavBar({ user, setUser }) {
    const navigate = useNavigate();
    function handleLogout() {
        fetch('/logout', {
            method: 'DELETE'
        })
        .then(setUser(''))
        .then(navigate('/'))
    }

    if (user) {
      return (
          <div>
              <div>
                  <Link
                      to="/"> 
                      {/* <img src={logo} alt="logo"/> add logo here */}
                  </Link>
              </div>
          <nav>
             
                  <h3>Welcome, {user.username}.</h3>
                  <h1><Link
                          to="/"> 
                      Home
                      </Link></h1>
                      <h1><Link
                          to="/addpost"> 
                      Add MedCost
                      </Link></h1>
                  <h1><button onClick={handleLogout}>Logout</button></h1>
             
          </nav>
      </div>
      )
  }
  
  return (
      <div>
          <div>
                  <Link
                      to="/"> 
                      {/* <img src={logo} alt="logo"/> add logo here */}
                  </Link>
              </div>
          <nav>
           
                  <h1><Link
                          to="/"> 
                      Home
                      </Link></h1>
                  {/* <li><NavLink
                          to="/generate-a-post"> 
                      Add MedCost
                      </NavLink></li> */}
                  <h1><Link
                          to="/login"> 
                      <button className="auth-button">Login</button>
                      </Link></h1>
                  <h1><Link
                          to="/signup"> 
                      <button className="auth-button">Signup</button>
                      </Link></h1>
            
          </nav>
      </div>
  )
}

export default NavBar;