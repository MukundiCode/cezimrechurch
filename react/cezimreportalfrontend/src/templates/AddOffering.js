import { useState } from "react";
import { useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddOffering = () => {
  const [member, setMember] = useState('');
  const [offeringType, setOfferingType] = useState('');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');
  const [date, setDate] = useState(new Date());
  const history = useHistory();
  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccessfullySubmitted(true)
    const offering = { 
                    member: member, 
                    offeringType: offeringType, 
                    amount: amount, 
                    currency: currency, 
                    date: date, 
                    };

    fetch('http://127.0.0.1:8000/members/addOffering', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(offering)
    }).then(() => {
      history.push('/');
    })
  }

  return (
    <form onSubmit={handleSubmit} class="justify-content-center">
      <div class="form-group col-md-6  ">
        <label for="inputName">Member</label> 
        <input  value={member} 
                onChange={(e) => setMember(e.target.value)} 
                type="text" 
                class="form-control" 
                id="inputName" 
                placeholder="Member">
          </input>
      </div>

      <div class="form-group col-md-6">
        <label for="inputSurname">Offering Type</label> 
        <input  value={offeringType} 
                onChange={(e) => setOfferingType(e.target.value)} 
                type="text" 
                class="form-control" 
                id="inputSurname" 
                placeholder="Surname">
        </input>
      </div>

      <div class="form-group col-md-6">
        <label for="inputSurname">Amount</label>
        <input  value={amount} 
                onChange={(e) => setAmount(e.target.value)} 
                type="text" 
                class="form-control" 
                id="inputSurname" 
                placeholder="Surname">
        </input>
      </div>

      <div class="form-group col-md-6">
        <label for="inputSurname">Currency</label>
        <input  value={amount} 
                onChange={(e) => setCurrency(e.target.value)} 
                type="text" 
                class="form-control" 
                id="inputSurname" 
                placeholder="Surname">
        </input>
      </div>

      <div class="form-row">
        <div class="form-group col-md-6">
          <div id="date-picker-example" class="md-form md-outline input-with-post-icon datepicker" inline="true">
            <label for="inputDate">Date</label>
            <i class="fas fa-calendar input-prefix"></i>
            <DatePicker selected={date} onChange={(date) => setDate(date)} />
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
 
export default AddOffering;