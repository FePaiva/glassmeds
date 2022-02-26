// import React from "react";
import Post from './Post';
import React, { useState, useEffect } from "react";


function Home({setUser, user, posts}) {

console.log("posts", posts)


  // const [averageCost, setAverageCost] = useState([0]) 
  // const [sumOfPatientCosts, setSumOfPatientCosts] = useState(0)
  // const [numberOfPatientCosts, setNumberOfPatientCosts] = useState(0)

  // {posts.map(post  => { 
  //   setNumberOfPatientCosts(...numberOfPatientCosts += 1) 
  //   setSumOfPatientCosts(...sumOfPatientCosts += post.patient_cost) 
  // })}


  return (
    <div >
        <h1>Welcome to Glassmeds!</h1>
         <p>Glassmeds' purpose is to bring more transparency to people who needs medical treatment and are not sure what to expect in terms of cost. </p>  
         <p>IMPORTANT: The information you see here is for reference only. Glassmeds has no responsibility if the costs of your procedure is different from what is indicated here. Please communicate with your insurance provider and/or facility for confirmation about your final cost.</p>      
         <div>
         
         {posts.map(post => <Post user={user} setUser={setUser} post={post} key={post.id}/>)}
       </div>  
       </div>
  );
}

export default Home;