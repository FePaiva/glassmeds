import Post from './Post';
import React, { useState, useEffect, useMemo } from "react";

function Average ({posts, setUser, user}){
  
  const [procedures, setProcedures] = useState ([])
  const [filteredProcedure, setFilteredProcedure] = useState ("")
  const [averageCost, setAverageCost] = useState (0)
  const uniques = procedures.map(procedure => procedure.procedure)
  .filter((value, index, self) => self.indexOf(value) === index )
console.log(uniques)

  
  console.log("procedure for average:", procedures)
  console.log("posts for average:", filteredProcedure)



  useEffect(() => {
    fetch(`/posts/${procedures}`)
      .then((r) => r.json())
      // get rid of duplicates objects before here (filter, reduce, object.assignent). Look for name and index
      .then(setProcedures);
  }, [posts]);
  // useEffect (() => {
  //   setFilteredProcedure(procedures)
  // }, [procedures])

    //  get the filtered procedure array

    function handleProcedureChange(procedure) {
      setFilteredProcedure(procedure);
      let filteredObject = procedures.filter (p=> p.procedure === procedure)
      console.log(filteredObject)
    }

    const getAverage = filteredObject => {
    // sum the patient_cost of the filtered procedure
    const sum = filteredObject.reduce ((total, currentValue) => total + currentValue)
    // get the length of the filtered procedure array
    // divide the patient_cost sum by the length of the filtered procedure array
    return sum / filteredObject.length;
    }
    // getAverage(averageCost)

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

  
    //  const getAverage = costArray => {
    // // sum the patient_cost of the filtered procedure
    // const sum = costArray.reduce ((total, currentValue) => total + currentValue)
    // // get the length of the filtered procedure array
    // // divide the patient_cost sum by the length of the filtered procedure array
    // return sum / costArray.length;
    // }
    // getAverage()
  

  return (

    <div >

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
        <option>Select Procedure</option>
        {uniques.map((procedure) => (
          <option key={procedure} value={procedure}>
            {procedure} 
            {/* {unique.procedure}  */}

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
          average: {averageCost}
    </div>
  )
}

export default Average;