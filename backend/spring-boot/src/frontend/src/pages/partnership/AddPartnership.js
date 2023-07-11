import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select';
import FormField from "../../templates/FormField";
import axios from "axios";


const AddPartnership = () => {
  const [member, setMember] = useState('');
  const [offeringType, setOfferingType] = useState('');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');
  const [date, setDate] = useState(new Date());
  let [response, setResponse] = useState()

  const nameMap = new Map();
  const [membersAray, setMembersArray] = useState([]);
  const [partnershipTypes, setPartnershipTypes] = useState([])
  const currencies = [{ label: "USD", value: "USD" }, { label: "ZWL", value: "ZWL" }, { label: "ZAR", value: "ZAR" }];

  const loadMembers = async () => {
    fetch('/api/member/all', {
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then(res => {
        if (!res.ok) { // error coming back from server
          console.log(res.status)
          if (res.status == 401) {
            window.location.replace("/logout");
          }
          throw Error('could not fetch the data for that resource');
        }
        return res.json();
      })
      .then(data => {
        let arr = []
        data.forEach(element => {
          nameMap.set(element.name, element.id);
          arr.push({ label: element.name, value: element });
        })
        setMembersArray(arr)
      });
  }

  const loadPartnershipTypes = async () => {
    fetch('/api/offering/partnershipTypes', {
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then(res => res.json())
      .then(data => {
        let arr = []
        data.forEach(element => {
          arr.push({ label: element, value: element })
        })
        setPartnershipTypes(arr)
      });
  }

  useEffect(() => {
    loadMembers()
  }, [])

  useEffect(() => {
    loadPartnershipTypes()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("called 3")
    response = setResponse(await axios
      .post("/api/offering/new", {
        member, offeringType, amount, currency, date
      })
      .then((response) => {
        if (response.status == 401) {
          window.location.replace("/logout");
        }
        return response;
      }))

  }

  const formFileds = [
    { value: amount, onChange: setAmount, id: "inputAmount", placeholder: "Amount" }
  ]

  return (
    <div className="d-flex  justify-content-center align-items-center" style={{ height: '70vh' }}>
      <div className="w-10">
        <form onSubmit={handleSubmit} >

          <div class="form-group">
            <Select
              options={membersAray}
              onChange={(e) => setMember(e.value)}
              placeholder="Member"
            />
          </div>

          <div class="form-group mt-3">
            <Select
              options={partnershipTypes}
              onChange={(e) => setOfferingType(e.value)}
              placeholder="Partnership Category"
            />
          </div>

          {formFileds.map(field => (
            <FormField form={field} ></FormField>
          ))}

          <div class="form-group mt-3">
            <Select
              options={currencies}
              onChange={(e) => setCurrency(e.value)}
              placeholder="Currency"
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

export default AddPartnership;