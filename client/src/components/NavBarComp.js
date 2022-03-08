import { Link, useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
// import Login from './Login'
import logo from '../assets/glassmeds.png';
import { Nav, NavDropdown, Container, Navbar, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Signup'


  function NavBarComp({ user, setUser }) {
    const navigate = useNavigate();
    function handleLogout() {
        fetch('/logout', {
            method: 'DELETE'
        })
        .then(setUser(''))
        .then(navigate('/'))
    }
    
    console.log("who is the user now?",user)
//     if (user) {
//       return (
//           <div>
//               <div>
//                   <Link
//                       to="/"> 
//                       <img src={logo} alt="GlassMeds"/> 
//                   </Link>
//               </div>
//           <nav>
             
//                   <h2>Welcome, {user.username}.</h2>
//                   <h1><Link
//                           to="/"> 
//                       Home
//                       </Link></h1>
//                       <h1><Link
//                           to="/addpost"> 
//                       Add MedCost
//                       </Link></h1>
//                       <h1><Link
//                           to="/average"> 
//                       Check Average Cost
//                       </Link></h1>
//                   <Button><button onClick={handleLogout}>Logout</button></Button>
                  

             
//           </nav>
//       </div>
//       )
//   }

    if (user) {
      return (
        
        <Navbar fixed="top" bg="light" expand="lg">
          <Container>
          <Navbar.Brand as={Link} to={"/"}><img src={logo} alt="GlassMeds" width="100px" height="100px"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to={"/addpost"}>Add Your Cost</Nav.Link>
                <Nav.Link as={Link} to={"/average"}>Check Average Costs</Nav.Link>
                <Nav.Link as={Link} to={"/about"}>About GlassMeds</Nav.Link>


                <NavDropdown title="Members" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to={"/profile"}>Profile</NavDropdown.Item>
                  <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                  {/* <NavDropdown.Item href="/">For non-users</NavDropdown.Item> */}
                  {/* <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
                  
        </Navbar>
      )}

  
  return (
      // <div>
      //     <div>
      //             <Link
      //                 to="/"> 
      //                 <img src={logo} alt="GlassMeds"/> 
      //             </Link>
      //         </div>
      //     <nav>
           
      //             <h1><Link
      //                     to="/"> 
      //                 Home
      //                 </Link></h1>
      //             <h1><Link
      //                     to="/login"> 
      //                 <button className="auth-button">Login</button>
      //                 </Link></h1>
      //             <h1><Link
      //                     to="/signup"> 
      //                 <button className="auth-button">Signup</button>
      //                 </Link></h1>
      //                 <h1><Link
      //                     to="/average"> 
      //                 Check Average Cost
      //                 </Link></h1>
      //     </nav>
      // </div>
      <Navbar fixed="top"  bg="light" variant="light" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to={"/"}><img src={logo} alt="GlassMeds" width="100px" height="100px"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to={"/average"}>Check Average Costs</Nav.Link>
                <Nav.Link  as={Link} to={"/login"}>Login</Nav.Link>
                {/* <Route path='/signup' component={Signup}/> */}
                <NavDropdown title="Not a member?" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to={"/signup"}>Sign Up</NavDropdown.Item>
                  <NavDropdown.Item href="/about">About GlassMeds</NavDropdown.Item>
                  <NavDropdown.Item href="/facilities">For Facilities</NavDropdown.Item>
                  {/* <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
  )
}

export default NavBarComp;