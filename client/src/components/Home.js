import React from "react";
import Post from './Post';


function Home({setUser, user, posts}) {

console.log("posts", posts)
  return (
    <div >
        <h1>Welcome to Glassmeds!</h1>
         <p>Glassmeds' purpose is to bring more transparency to people who needs medical treatment and are not sure what to expect in terms of cost. </p>  
         <p>IMPORTANT: The information you see here is for reference only. Glassmeds has no responsibility if the costs of your procedure is different from what is indicated here. Please communicate with your insurance provider and/or facility for confirmation about your final cost.</p>      
         <div>
         POSTS HERE
         {posts.map(post => <Post post={post} key={post.id}/>)}
       </div>  
       </div>
  );
}

export default Home;