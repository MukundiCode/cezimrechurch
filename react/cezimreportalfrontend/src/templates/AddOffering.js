import { useState } from "react";
import { useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select';
import FormField from "./FormField";

const AddOffering = () => {
  const [member, setMember] = useState('');
  const [offeringType, setOfferingType] = useState('');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');
  const [date, setDate] = useState(new Date());
  const history = useHistory();
  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = useState(false);

  const nameMap = new Map();
  const membersAray = [];
  const currencies = [{label:"USD", value: "USD"}, {label: "ZWL", value: "ZWL"}, {label: "ZAR", value: "ZAR"}];

  fetch('http://127.0.0.1:8000/members/')
  .then(res => res.json())
  .then(data => data.forEach(element => {
    nameMap.set(element.name, element.id);
    membersAray.push({label: element.name, value: element.id});
  }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccessfullySubmitted(true)
    const offering = { 
                    member: member, 
                    offeringType: offeringType, 
                    amount: amount, 
                    currency: currency, 
                    date: date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate()
                    };

    fetch('http://127.0.0.1:8000/members/addOffering', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(offering)
    }).then(() => {
      history.push('/');
    })
  }

  const formFileds = [
    { value: offeringType, onChange: setOfferingType, id: "inputOfferingType", placeholder: "Offering Type" },
    { value: amount, onChange: setAmount, id: "inputAmount", placeholder: "Amount" }
  ]

  return (
    <div className="d-flex  justify-content-center align-items-center" style={{ height: '70vh' }}>
      <div className="w-10">
    <form onSubmit={handleSubmit} >

      <div class="form-group">
          <Select 
            options = {membersAray}
            onChange = {(e) => setMember(e.value)} 
            placeholder = "Member"
          />
      </div>

      {formFileds.map(field => (
            <FormField form = {field} ></FormField>
          ))}

      <div class="form-group mt-3">
        <Select 
          options =  {currencies}
          onChange={(e) => setCurrency(e.value)} 
          placeholder = "Currency"
        />
      </div>

      <div class="form-row">
        <div class="form-group ">
          <div id="date-picker-example" class="md-form md-outline input-with-post-icon datepicker" inline="true">
            <label for="inputDate">Date</label>
            <i class="fas fa-calendar input-prefix"></i>
            <DatePicker selected={date} onChange={(date) => setDate(date)} />
          </div>
        </div>
      </div>
      <button type="submit" class="btn btn-primary mt-3">Submit</button>

      {isSuccessfullySubmitted && (
        <div className="success">Form submitted successfully</div>
      )}
    </form>
    </div>
     </div>
  );
  
}
 
export default AddOffering;