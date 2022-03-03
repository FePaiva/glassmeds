import { useState, useEffect } from "react";
import './App.css';
import NavBar from './components/NavBar';
import Landing from './components/Landing';
import Signup from './components/Signup';
import Login from "./components/Login";
import Home from './components/Home';
import { Routes, Route } from "react-router-dom";
import AddPostForm from './components/AddPostForm'
import SearchBar from "./components/SearchBar";
import Average from "./components/Average";
import BarChart from "./components/BarChart";


function App() {
  const [user, setUser ] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [posts, setPosts] = useState ([])
  const [filteredPosts, setFilteredPosts] = useState([])
  const [errors, setErrors] = useState(false)

//   const [userData, setUserData] = useState ({
//   labels: posts.map((data) => data.facility_id),
//   datasets: [{
//     label: "Procedures",
//     data: posts.map((data) => data.procedure)
//   }]
// })  


  function handleSearch (e) {
    const filteredPosts = posts.filter(post => {
      return post.procedure.toLowerCase().includes(e.target.value.toLowerCase()) || post.facility.name.toLowerCase().includes(e.target.value.toLowerCase())
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
          setPosts([...posts, data])
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
      <SearchBar handleSearch={handleSearch} setUser={setUser} user={user}/>
      {/* <BarChart chartData={userData} /> */}
    <Routes> 

      <Route path='/average' element = {<Average posts={filteredPosts}/>} />
      <Route path='/signup' element = {(!user) ? <Signup setUser={setUser} /> : <div></div>}/>
      <Route path='/login' element = {(!user) ? <Login setUser={setUser} setIsAuthenticated={setIsAuthenticated} setUser={setUser}/> : <Home setUser={setUser} user={user} posts={filteredPosts}/>}/>
      <Route path="/addpost" element={<AddPostForm setUser={setUser} posts={filteredPosts} user={user} handlePost={handlePost} errors={errors}/>} />
      <Route path="/" element={user ? <Home setUser={setUser} user={user} posts={filteredPosts}/> : <Landing posts={filteredPosts} />}/>

    </Routes>

   
  </div>
)
}


export default App;