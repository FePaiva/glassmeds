import React from "react";

function Post(post) {


  return (
    <li>
      <div>
        {post.facility}
        {post.procedure}
        {post.date_of_procedure}
        {post.date_of_invoice}
        {post.patient_cost}
        {post.insurance_cost}
        {post.comments}
      </div>
    </li>
  );
}

export default Post;
