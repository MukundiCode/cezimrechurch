import { useState } from "react";
import { useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FormField from "../../templates/FormField";

const Register = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const history = useHistory();
  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccessfullySubmitted(true)
    const member = { 
                    username: name + surname,
                    first_name: name, 
                    last_name: surname, 
                    email: email, 
                    password: password, 
                    password2: password2, 
                    };
    console.log(member);
    fetch('http://127.0.0.1:8000/auth/register/', {
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
                { value: password, onChange: setPassword, id: "inputPassword", placeholder: "Password", type: "password" },
                { value: password2, onChange: setPassword2, id: "inputPassword", placeholder: "Enter Password Again", type: "password" },
              ]

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '70vh' }}>
      <div className="w-10">                      
        <form onSubmit={handleSubmit} class="justify-content-center">

          {formFileds.map(field => (
            <FormField form = {field} ></FormField>
          ))}
          <button type="submit" class="btn btn-primary mt-3">Register</button>

          {isSuccessfullySubmitted && (
            <div className="success">Form submitted successfully</div>
          )}
    </form>
    </div>
     </div>
  );
  
}
 
export default Register;