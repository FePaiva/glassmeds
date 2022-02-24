import { Link, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";


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
            <SearchBar/>
              <div>
                  <Link
                      to="/"> 
                      {/* <img src={logo} alt="logo"/> add logo here */}
                  </Link>
              </div>
          <nav>
              <ul>
                  <li>Welcome, {user.username}.</li>
                  <li><Link
                          to="/home"> 
                      Home
                      </Link></li>
                      <li><Link
                          to="/generate-a-post"> 
                      Add MedCost
                      </Link></li>
                  <li><button onClick={handleLogout}>Logout</button></li>
              </ul>
          </nav>
      </div>
      )
  }
  
  return (
      <div>
        <SearchBar/>
          <div>
                  <Link
                      to="/"> 
                      {/* <img src={logo} alt="logo"/> add logo here */}
                  </Link>
              </div>
          <nav>
              <ul>
                  <li><Link
                          to="/home"> 
                      Home
                      </Link></li>
                  {/* <li><NavLink
                          to="/generate-a-post"> 
                      Add MedCost
                      </NavLink></li> */}
                  <li><Link
                          to="/login"> 
                      <button className="auth-button">Login</button>
                      </Link></li>
                  <li><Link
                          to="/signup"> 
                      <button className="auth-button">Signup</button>
                      </Link></li>
              </ul>
          </nav>
      </div>
  )
}

export default NavBar;