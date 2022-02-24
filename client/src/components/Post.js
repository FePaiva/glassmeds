import React, { useEffect, useState } from "react";
import AddPostForm from "./AddPostForm";
import { useParams } from "react-router-dom";


function Post({post}) {

  // const [isLoaded, setIsLoaded] = useState(false);

  // console.log(post)

  //   const { id } = useParams();

  //   useEffect(() => {
  //     fetch(`/users/${id}`)
  //     .then((r) => r.json())
  //     .then(post => {
  //     setProfile(post);
  //     setIsLoaded(true)
  //     })
  //   }, [id])

  //   if (!isLoaded) return <h2>Loading...</h2>;

console.log(post.facility)
  return (
   
      <div>
        <h3>Facility: {post.facility.name} </h3>
        <h4>Procedure: {post.procedure} </h4>
        <h5>Patient cost: ${post.patient_cost}</h5>
        <h5>Insurance cost: ${post.insurance_cost}</h5>
        <h5>Date of procedure: {post.date_of_procedure}</h5>
        <h5>Date of invoice: {post.date_of_invoice}</h5>
        <p>Comments: {post.comments} </p>
      </div>
  
  );
}

export default Post;
