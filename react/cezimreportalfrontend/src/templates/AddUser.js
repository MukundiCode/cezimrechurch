import { useState } from "react";
import { useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FormField from "./FormField";

const AddUser = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [birthday, setBirthday] = useState(new Date());
  const history = useHistory();
  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccessfullySubmitted(true)
    const member = { 
                    name: name, 
                    surname: surname, 
                    email: email, 
                    address: address, 
                    phoneNumber: phoneNumber, 
                    birthday: birthday.getFullYear() + "-" + birthday.getMonth() + "-" + birthday.getDate()
                    };

    fetch('http://127.0.0.1:8000/members/addMember', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(member)
    }).then(() => {
      history.push('/');
    })
  }

  const formFileds = [
                { value: name, onChange: setName, id: "inputName", placeholder: "Name" },
                { value: surname, onChange: setSurname, id: "inputSurname", placeholder: "Surname" },
                { value: email, onChange: setEmail, id: "inputEmail4", placeholder: "Email" },
                { value: address, onChange: setAddress, id: "inputAddress", placeholder: "Address" },
                { value: phoneNumber, onChange: setPhoneNumber, id: "inputPhoneNumber", placeholder: "Phone Number" }
              ]

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '70vh' }}>
      <div className="w-10">                      
        <form onSubmit={handleSubmit} class="justify-content-center">

          {formFileds.map(field => (
            <FormField form = {field} ></FormField>
          ))}

          <div class="form-row">
            <div class="form-group ">
              <div id="date-picker-example" class="md-form md-outline input-with-post-icon datepicker" inline="true">
                <label for="inputDate">Birthday</label>
                {/* <i class="fas fa-calendar input-prefix"></i> */}
                <DatePicker selected={birthday} onChange={(date) => setBirthday(date)} />
              </div>
            </div>
          </div>
          <button type="submit" class="btn btn-primary mt-3">Add Member</button>

          {isSuccessfullySubmitted && (
            <div className="success">Form submitted successfully</div>
          )}
    </form>
    </div>
     </div>
  );
  
}
 
export default AddUser;