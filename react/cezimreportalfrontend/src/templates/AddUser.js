import { useState } from "react";
import { useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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

  return (
    <form onSubmit={handleSubmit} class="justify-content-center">
      <div class="form-group col-md-6  ">
        <label for="inputName">Name</label>
        <input  value={name} 
                onChange={(e) => setName(e.target.value)} 
                type="text" 
                class="form-control" 
                id="inputName" 
                placeholder="Name">
          </input>
      </div>

      <div class="form-group col-md-6">
        <label for="inputSurname">Surname</label>
        <input  value={surname} 
                onChange={(e) => setSurname(e.target.value)} 
                type="text" 
                class="form-control" 
                id="inputSurname" 
                placeholder="Surname">
        </input>
      </div>

      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputEmail4">Email</label>
          <input  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email" 
                  class="form-control" 
                  id="inputEmail4" 
                  placeholder="Email">
          </input>
        </div>
      </div>

      <div class="form-group col-md-6">
        <label for="inputAddress">Address</label>
        <input  value={address}
                onChange={(e) => setAddress(e.target.value)} 
                type="text" 
                class="form-control" 
                id="inputAddress" 
                placeholder="1234 Main St">
        </input>
      </div>

      <div class="form-group col-md-6">
        <label for="inputPhoneNumber">Phone Number</label>
        <input  value={phoneNumber} 
                onChange={(e) => setPhoneNumber(e.target.value)} 
                type="text" 
                class="form-control" 
                id="inputPhoneNumber">
        </input>
      </div>

      <div class="form-row">
        <div class="form-group col-md-6">
          <div id="date-picker-example" class="md-form md-outline input-with-post-icon datepicker" inline="true">
            <label for="inputDate">Birthday</label>
            <i class="fas fa-calendar input-prefix"></i>
            <DatePicker selected={birthday} onChange={(date) => setBirthday(date)} />
          </div>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Add Member</button>

      {isSuccessfullySubmitted && (
        <div className="success">Form submitted successfully</div>
      )}
    </form>
  );
  
}
 
export default AddUser;