import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FormField from "./FormField";
import AuthContext from "../context/AuthProvider";

const Login = () => {
  const [username, setName] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = useState(false);
  let {loginUser} = useContext(AuthContext)


  let handleSubmit = async (e) => {
    e.preventDefault()
    loginUser(e, username, password)
    // const member = { 
    //   username: username ,
    //   password: password, 
    //   };
    // const response = await fetch('http://127.0.0.1:8000/auth/login/', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(member)
    // });

    // let data = await response.json();

    // if(data){
    //     console.log(data)
    // } else {
    //     alert('Something went wrong while loggin in the user!')
    // }
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