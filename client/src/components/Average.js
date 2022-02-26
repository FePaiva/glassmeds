import Post from './Post';
import React, { useState, useEffect } from "react";




function Average ({posts, setUser, user}){
  
  const [procedures, setProcedures] = useState ([])
  const [filteredProcedure, setFilteredProcedure] = useState ("")

  useEffect(() => {
    fetch(`/posts/${procedures}`)
      .then((r) => r.json())
      .then(setProcedures);
  }, []);

 // const [averageCost, setAverageCost] = useState([0]) 
  // const [sumOfPatientCosts, setSumOfPatientCosts] = useState(0)
  // const [numberOfPatientCosts, setNumberOfPatientCosts] = useState(0)
  // const procedureAverage = posts.map(post  => { 
  //   setNumberOfPatientCosts(...numberOfPatientCosts += 1) 
  //   setSumOfPatientCosts(...sumOfPatientCosts += post.patient_cost) 
  // })


    //  get the filtered procedure array

    function handleProcedureChange(procedure) {
      setFilteredProcedure(procedure);
      console.log(procedure)
    }

    function handleFindProcedure () { 
      let url = `/posts/${procedures}`
      if (posts.filteredProcedure ) {
        url += `procedure=${posts.filteredProcedure}`;
      }
      fetch(url)
      .then((r) => r.json())
      .then((procedureArray) => {
        setFilteredProcedure(procedureArray);
      });
    }

    function handleChange(e) {
      handleProcedureChange(e.target.value);
      console.log(e.target.value)
    }

  // const procedureToDisplay = posts.filter((post) => {
  //   if (filteredProcedure === "") {
  //     return true;
  //   } else {
  //     // console.log(post.procedure)
  //     return post.procedure === filteredProcedure
  //   }
  // })



   // get the length of the filtered procedure array
    // divide the patient_cost sum by the length of the filtered procedure array

  

  // const getAverage = costArray => {
  

    // sum the patient_cost of the filtered procedure
    // const sum = costArray.reduce ((total, currentValue) => total + currentValue)
    // get the length of the filtered procedure array
    // divide the patient_cost sum by the length of the filtered procedure array
    // return sum / costArray.length;
    // }
    // getAverage()
  

  return (

    <div >
               {/* {posts.map(post => <Post user={user} setUser={setUser} post={post} key={post.id}/>)} */}

      {/* <div >
        <select name="filter" onChange={handleProcedureChange}>
          <option value="">Filter by procedure</option>
          {/* <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option> */}
        {/* </select> */}
      {/* </div>
      <ul className="Items">
        {procedureToDisplay.map((post) => (
          <Post key={post.id} name={post.procedure} /> */}
        {/* ))}
      </ul>  */}

      <div >
      <label htmlFor="procedure">Procedure:</label>
      <select
        id="procedure"
        name="procedure"
        value={filteredProcedure}
        onChange={handleChange}      >
        <option value="">Select Procedure</option>
        {procedures.map((procedure) => (
          <option key={procedure.id} value={procedure.name}>
            {procedure.procedure} 
           {procedure.patient_cost}
          </option>
        ))}
      </select>
          </div>
          <div>
          {/* {procedures.map(procedure => {
            return (
              <li key={procedure.id}>
                {procedure.patient_cost}
              </li>
            )
          })} */}

          </div>

    </div>
  )
}

export default Average;