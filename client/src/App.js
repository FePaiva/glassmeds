import { useState, useEffect } from "react";
import './App.css';
import NavBar from './components/NavBar';
import Landing from './components/Landing';
import Signup from './components/Signup';
import Login from "./components/Login";
import Home from './components/Home';
import { Routes, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar";

function App() {
  const [user, setUser ] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [posts, setPosts] = useState ([])
  const [filteredPosts, setFilteredPosts] = useState([])
  const [errors, setErrors] = useState(false)


  function handleSearch (e) {
    const filteredPosts = posts.filter(post => {
      return post.procedure.toLowerCase().includes(e.target.value.toLowerCase()) || post.facility_id.name.toLowerCase().includes(e.target.value.toLowerCase())
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
        });
        }
      });

    fetch('/posts')
    .then(res => res.json())
    .then(setPosts);
  },[]);

    function handlePost(obj){
      fetch('/posts',{
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(obj)
      })
      .then(res => res.json())
      .then(data => {
        if(data.errors){
          setErrors(data.errors)
        } else {
          setPosts([...posts,data])
        }
      })
  }
  // if (!isAuthenticated) return <Login error={'please login'} setIsAuthenticated={setIsAuthenticated} setCurrentUser={setCurrentUser} />;

    // useEffect(() => {
    //   if (user.id) {
    //    fetch('/posts')
    //     .then(res => res.json())
    //     .then(posts => setPosts(posts))
    //    }
    //  }, [user])
 
  

  return (
    <div className="App">
      <NavBar setUser={setUser} user={user}  />
      {/* <SearchBar /> */}
    <h1>Welcome to Glassmeds!</h1>
       <p>Glassmeds' purpose is to bring more transparency to people who needs medical treatment and are not sure what to expect in terms of cost. </p> 
    <Routes> 
      <Route path="/" element={user ? <Home setUser={setUser} user={user}/> : <Landing posts={filteredPosts} />}/>
      <Route path='/signup' element = {(!user) ? <Signup setUser={setUser} /> : <div></div>}/>
      <Route path='/login' element = {(!user) ? <Login setUser={setUser} /> : <div></div>} />
      {/* <Route path="/" element = {(!currentUser) ? <Landing /> : <Home />}/> */}
    </Routes>

   
  </div>
)
}


export default App;