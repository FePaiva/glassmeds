import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function AddPostForm({handlePost, user, setUser, post}) {
  const [facilities, setFacilities] = useState ([])

  useEffect(() => {
    fetch("/facilities")
      .then((r) => r.json())
      .then(setFacilities);
  }, []);

  const [formData, setFormData] = useState({
    // facility_id: "",
    procedure:'',
    date_of_procedure:'',
    date_of_invoice:'',
    patient_cost: "",
    insurance_cost: "",
    comments: ""
  })

  const { id } = useParams();

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const addMedCost = {
      ...formData,
      user_id: id,
      // facility_id: id,
    };

    fetch(`/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addMedCost),
    })
      .then((r) => r.json())
      .then(data => console.log(data));
  }
    

  return (
    <div >
       <form onSubmit={handleSubmit}>
       <h3>Please note that by sharing your costs will help other people to know before hand what to expect in terms of medical costs.</h3>
       <br></br>
        <h1>Please share your medical cost here:</h1>

        <label htmlFor="facility_id">Facility:</label>
      <select
        id="facility_id"
        name="facility_id"
        value={formData.facility_id}
        onChange={handleChange}      >
        <option value="">Select Facility</option>
        {facilities.map((facility) => (
          <option key={facility.id} value={facility.id}>
            {facility.name}
          </option>
        ))}
      </select>


        {/* <input
          type="text"
          name="facility"
          onChange={handleChange}
          value={formData.facility_id}
          placeholder="Select facility ..."
        /> */}
        <br></br>
        <label htmlFor="facility_id">Procedure:</label>
        <input
          type="text"
          name="procedure"
          onChange={handleChange}
          value={formData.procedure}
          // placeholder="Select procedure ..."
        />
        <br></br>
        <label htmlFor="facility_id">Procedure date:</label>
        <input
          type="date"
          name="date_of_procedure"
          onChange={handleChange}
          value={formData.date_of_procedure}
          // placeholder=""
        />
        <br></br>
        <label htmlFor="facility_id">Invoice date:</label>
        <input
          type="date"
          name="date_of_invoice"
          onChange={handleChange}
          value={formData.date_of_invoice}
          // placeholder="When did you receive the invoice?"
        />
        <br></br>
        <label htmlFor="facility_id">Procedure cost: $</label>
         <input
          type="text"
          name="patient_cost"
          onChange={handleChange}
          value={formData.patient_cost}
          // placeholder="How much did you pay?"
        />
        <br></br>
        <label htmlFor="facility_id">Insurance payment: $</label>
        <input
          type="text"
          name="insurance_cost"
          onChange={handleChange}
          value={formData.insurance_cost}
          placeholder="How much did your insurance pay?"
        />
        <br></br>
        <label htmlFor="facility_id">Comments:</label>
        <input
          type="text"
          name="comments"
          onChange={handleChange}
          value={formData.comments}
          placeholder="Anything else you would like to share?"
        />
        <br></br>
        <input
          type="submit"
          name="submit"
          value="Submit"
        />
      </form>
    </div>
  );
}
export default AddPostForm;