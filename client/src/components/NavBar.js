import { NavLink, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";


  function NavBar({ user, setUser }) {
    const navigate = useNavigate();
    function handleLogout() {
        fetch('/logout', {
            method: 'DELETE'
        })
        .then(setUser(''))
        .then(navigate.push('/'))
    }

    if (user) {
      return (
          <div>
            <SearchBar/>
              <div>
                  <NavLink
                      to="/" 
                      exact
                      > 
                      {/* <img src={logo} alt="logo"/> add logo here */}
                  </NavLink>
              </div>
          <nav>
              <ul>
                  <li>Welcome, {user.username}.</li>
                  <li><NavLink
                          to="/home"> 
                      Home
                      </NavLink></li>
                      <li><NavLink
                          to="/generate-a-post"> 
                      Add MedCost
                      </NavLink></li>
                  <li><button onClick={handleLogout}>Logout</button></li>
              </ul>
          </nav>
      </div>
      )
  }
  
  return (
      <div>
        {/* <SearchBar/> */}
          <div>
                  <NavLink
                      to="/"> 
                      {/* <img src={logo} alt="logo"/> add logo here */}
                  </NavLink>
              </div>
          <nav>
              <ul>
                  <li><NavLink
                          to="/home"> 
                      Home
                      </NavLink></li>
                  <li><NavLink
                          to="/generate-a-post"> 
                      Add MedCost
                      </NavLink></li>
                  <li><NavLink
                          to="/login"> 
                      <button className="auth-button">Login</button>
                      </NavLink></li>
                  <li><NavLink
                          to="/signup"> 
                      <button className="auth-button">Signup</button>
                      </NavLink></li>
              </ul>
          </nav>
      </div>
  )
}

export default NavBar;