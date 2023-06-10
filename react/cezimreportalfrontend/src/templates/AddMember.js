import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FormField from "./FormField";
import AuthContext from "../context/AuthProvider";
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import GenerictPost from "./usePost";

const AddMember = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [birthday, setBirthday] = useState(new Date());
  const history = useHistory();
  const { authTokens, logoutUser } = useContext(AuthContext);
  let [response, setResponse] = useState()


  const handleSubmit = async (e) => {
    e.preventDefault();
    const member = {
      name: name,
      surname: surname,
      email: email,
      address: address,
      phoneNumber: phoneNumber,
      birthday: birthday.getFullYear() + "-" + birthday.getMonth() + "-" + birthday.getDate()
    };
    response = setResponse(await GenerictPost('http://127.0.0.1:8000/members/addMember', member, authTokens))
  }

  const formFileds = [
    { value: name, onChange: setName, id: "inputName", placeholder: "Name" },
    { value: surname, onChange: setSurname, id: "inputSurname", placeholder: "Surname" },
    { value: email, onChange: setEmail, id: "inputEmail4", placeholder: "Email" },
    { value: address, onChange: setAddress, id: "inputAddress", placeholder: "Address" }
  ]

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '70vh' }}>
      <div className="w-10">
        <form onSubmit={handleSubmit} class="justify-content-center">

          {formFileds.map(field => (
            <FormField form={field} ></FormField>
          ))}

          <div class="form-group mt-3">
            <PhoneInput
              placeholder="Phone Number"
              international
              defaultCountry="ZW"
              value={phoneNumber}
              onChange={setPhoneNumber} />
          </div>
          <div class="form-row">
            <div class="form-group ">
              <div id="date-picker-example" class="md-form md-outline input-with-post-icon datepicker" inline="true">
                <label for="inputDate">Birthday</label>
                <DatePicker selected={birthday} onChange={(date) => setBirthday(date)} />
              </div>
            </div>
          </div>
          <button type="submit" class="btn btn-primary mt-3">Add Member</button>
          {
            response != null && (
            (response.status == 200 && (<div className="success">The form was submitted successfully</div>)) || 
            (response.status == 400 && (<div className="success">There was an error in submitting the form</div>)) || 
            (response.status == 401 && (<div className="success">You are not authorized to add a member, please log in</div>))
            )
          }
        </form>
      </div>
    </div>
  );

}

export default AddMember;