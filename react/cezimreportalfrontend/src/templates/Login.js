import { useState } from "react";
import { useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FormField from "./FormField";

const Login = () => {
  const [username, setName] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccessfullySubmitted(true)
    const member = { 
                    username: username ,
                    password: password, 
                    };
    console.log(member);
    fetch('http://127.0.0.1:8000/auth/login/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(member)
    }).then(() => {
      history.push('/');
    })
  }

  const formFileds = [
                { value: username, onChange: setName, id: "inputName", placeholder: "Username" },
                { value: password, onChange: setPassword, id: "inputPassword", placeholder: "Password", type: "password" },
              ]

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '70vh' }}>
      <div className="w-10">                      
        <form onSubmit={handleSubmit} class="justify-content-center">

          {formFileds.map(field => (
            <FormField form = {field} ></FormField>
          ))}
          <button type="submit" class="btn btn-primary mt-3">Login</button>

          {isSuccessfullySubmitted && (
            <div className="success">Form submitted successfully</div>
          )}
    </form>
    </div>
     </div>
  );
  
}
 
export default Login;