import Post from './Post';
import React, { useState, useEffect, useMemo } from "react";


function Average ({posts, setUser, user}){
  
  const [procedures, setProcedures] = useState ([])
  const [filteredProcedure, setFilteredProcedure] = useState ("")
  const [averageCost, setAverageCost] = useState (0)
  const uniques = procedures.map(procedure => procedure.procedure)
  .filter((value, index, self) => self.indexOf(value) === index )
console.log("unique procedures:", uniques)

  // console.log("all procedures", procedures)
  // console.log("filtered procedure:", filteredProcedure)

  useEffect(() => {
    fetch(`/posts/${procedures}`)
      .then((r) => r.json())
      .then(setProcedures);
  }, [posts]);


    function handleProcedureChange(procedure) {
      setFilteredProcedure(procedure);
      let filteredObject = procedures.filter (p=> p.procedure === procedure)
      console.log("lenght of filtered procedure:", filteredObject)
      
      let total = 0;
      for (let ii = 0; ii < filteredObject.length; ii++) {
        total = total + filteredObject[ii].patient_cost
      }
      console.log("total:", total)
      let avg = total / filteredObject.length
      console.log("average:", avg)
      setAverageCost(avg.toFixed(2));


      // let total = filteredObject.patient_cost.reduce((sum, curr) => sum + curr, 0)
      // let avg = total /filteredObject.lenght
      // avg = averageCost
      // console.log(averageCost)
    }


    // const getAverage = filteredObject => {
    // // sum the patient_cost of the filtered procedure
    // const sum = filteredObject.reduce ((total, currentValue) => total + currentValue)
    // // get the length of the filtered procedure array
    // // divide the patient_cost sum by the length of the filtered procedure array
    // return sum / filteredObject.length;
    // }
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

          </option>
        ))}
      </select>
          </div>
          Average Patient Cost: $ {averageCost}
    </div>
  )
}

export default Average;