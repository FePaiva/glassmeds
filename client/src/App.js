import { useState, useEffect } from "react";
import './App.css';
// import NavBar from './components/NavBar';
// import Landing from './components/Landing';
// import Signup from './components/Signup';
// import Login from "./components/Login";
// import Home from './components/Home';

// import { Routes, Route } from 'react-router-dom'

function App() {
  const [ user, setUser ] = useState('')
  const [posts, setPosts] = useState([])


  useEffect(() => {
    fetch('/auth')
    .then(res => {
      if (res.ok) {
        res.json().then(user => setUser(user))
      }
    })}, [])

    useEffect(() => {
      if (user.id) {
       fetch('/posts')
        .then(res => res.json())
        .then(posts => setPosts(posts))
       }
     }, [user])
 
  //  console.log('User: ', user)

  return (
    <div className="App">hi there.
    <NavBar />
    <Routes>
      <Route path='/signup' element = {(!user) ? <Signup setUser={setUser} /> : <div></div>}/>
      <Route path='/login' element = {(!user) ? <Login setUser={setUser} /> : <div></div>} />
      <Route path="/" element = {(!user) ? <Landing /> : <Home />}/>
      
    </Routes>
  </div>
)
}


export default App;