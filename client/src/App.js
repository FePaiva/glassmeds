import { useState, useEffect } from "react";
import { useNavigate } from 'react-router';
import './App.css';
import NavBarComp from './components/NavBarComp';
import Landing from './components/Landing';
import Signup from './components/Signup';
import Login from "./components/Login";
import Home from './components/Home';
import { Routes, Route, useParams } from "react-router-dom";
import AddPostForm from './components/AddPostForm'
import About from "./components/About";
import Average from "./components/Average";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";
import 'bootstrap/dist/css/bootstrap.min.css';
// import GoogleMapComponent from "./components/GoogleMapComponent";
import { GoogleMap } from "@react-google-maps/api";

function App() {
  const [user, setUser ] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [posts, setPosts] = useState ([])
  const [filteredPosts, setFilteredPosts] = useState([])
  const [isUpdated, setIsUpdated] = useState (false)
  const [errors, setErrors] = useState(false)

  const {id} = useParams();

  let navigate = useNavigate();

  function handleSearch (e) {
    const filteredPosts = posts.filter(post => {
      return post.procedure.toLowerCase().includes(e.target.value.toLowerCase()) || post.facility.name.toLowerCase().includes(e.target.value.toLowerCase()) || post.facility.state.toLowerCase().includes(e.target.value.toLowerCase()) || post.facility.city.toLowerCase().includes(e.target.value.toLowerCase())
    })
    setFilteredPosts(filteredPosts)
  }
  
  useEffect (() => {
    setFilteredPosts(posts)
  }, [posts])

  useEffect(() => {
    fetch('/me')
    .then(res => {
      if (res.ok) {
        res.json().then((user) => {
          setUser(user);
          setIsAuthenticated(true);
          setIsUpdated(true)
        });
        }
      });

    fetch('/posts')
    .then(res => res.json())
    .then(setPosts);
    // setIsLoaded(true)
  },[isUpdated]);

    function handlePost(obj){
      fetch('/posts',{
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(obj)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.errors){
          setErrors(data.errors)
        } else {
          setPosts([data, ...posts ])
          setIsUpdated(!isUpdated)
          navigate('/')
        }
      })
  }

  function handleRemovePost(id) {
      fetch(`/posts/${id}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
      
      }).then(setIsUpdated(user.posts.filter((post) => post.id !== (id))));
  };   

    // function handleEditProfile(user){
    //   fetch(`/users/${id}`, {
    //     method: 'PATCH',
    //     headers: {'Content-Type': 'application/json'},
    //     body: JSON.stringify({user})
    //   }).then(
    //     setIsUpdated(isUpdated));
    //     navigate('/profile')
    // } 
  
    

  return (
    <div className="App">
      <header> 
      <NavBarComp setUser={setUser} user={user}  />
      {/* <SearchBar handleSearch={handleSearch} setUser={setUser} user={user}/> */}
      {/* <BarChart chartData={userData} /> */}
      </header>
    <Routes> 

          <Route 
              path='/average' 
              element = {
              <Average 
                posts={filteredPosts} 
                setUser={setUser} 
                user={user}
              />} 
          />
          <Route 
              path='/signup' 
              element = {
              (!user) ? 
              <Signup 
                setUser={setUser} 
              /> 
              : <div></div>}
          />
          <Route 
              path='/login' 
              element = {
              (!user) ? 
              <Login 
                setUser={setUser} 
                setIsAuthenticated={setIsAuthenticated} 
              /> : 
              <Home 
                setUser={setUser} 
                user={user} 
                posts={filteredPosts} 
                handleSearch={handleSearch} 
              />}
          />
          <Route 
              path='/editProfile' 
              element={
              <EditProfile 
                setUser={setUser} 
                user={user} 
                setIsUpdated={setIsUpdated} 
                isUpdated={isUpdated} 
              />}
          />
          <Route 
              path="/addpost" 
              element={
              
              <AddPostForm 
                setUser={setUser} 
                posts={filteredPosts} 
                user={user} 
                handlePost={handlePost} 
                errors={errors}
              />} 
          />
          <Route 
              path='/profile' 
              element={
              <Profile 
                setUser={setUser}
                user={user} 
                posts={filteredPosts} 
                handleRemovePost={handleRemovePost}
                errors={errors}
              />}
          />
          <Route 
          path="/about" 
          element={
          <About 
          />} 
          />

          <Route 
              path="/" 
              element={
              user ? 
              <Home 
                setUser={setUser} 
                user={user} 
                posts={filteredPosts} 
                handleSearch={handleSearch}
              /> : 
              <Landing 
                posts={filteredPosts} 
                handleSearch={handleSearch} 
              />}
          />
          
    </Routes>

   
  </div>
)
}


export default App;