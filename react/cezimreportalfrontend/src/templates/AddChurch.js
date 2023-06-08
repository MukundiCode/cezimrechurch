import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FormField from "./FormField";
import AuthContext from "../context/AuthProvider";
import UsePost from "./usePost";

const AddChurch = () => {
  const [zone, setZone] = useState('');
  const [subgroup, setSubgroup] = useState('');
  const [location, setLocation] = useState('');
  const history = useHistory();
  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = useState(false);
  const { authTokens, logoutUser } = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();
    setIsSuccessfullySubmitted(true)
    const member = {
      zone: zone,
      subgroup: subgroup,
      location: location,
    };

    const { error, isPending, data: names } = UsePost('http://127.0.0.1:8000/members/addChurch', member)

    fetch('http://127.0.0.1:8000/members/addChurch', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + String(authTokens.access)
      },
      body: JSON.stringify(member)
    }).then(() => {
      history.push('/');
    })
  }

  const formFileds = [
    { value: zone, onChange: setZone, id: "inputZone", placeholder: "Zone" },
    { value: subgroup, onChange: setSubgroup, id: "inputGroup", placeholder: "Sub Group" },
    { value: location, onChange: setLocation, id: "inputLocation", placeholder: "Location" }
  ]

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '70vh' }}>
      <div className="w-10">
        <form onSubmit={handleSubmit} class="justify-content-center">

          {formFileds.map(field => (
            <FormField form={field} ></FormField>
          ))}

          <button type="submit" class="btn btn-primary mt-3">Create Church</button>

          {isSuccessfullySubmitted && (
            <div className="success">Form submitted successfully</div>
          )}
        </form>
      </div>
    </div>
  );

}

export default AddChurch;