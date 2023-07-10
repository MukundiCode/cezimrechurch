import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FormField from "../../templates/FormField";
import AuthContext from "../../context/AuthProvider";

const Login = () => {
  const [username, setName] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = useState(false);
  let {loginUser} = useContext(AuthContext)


  let handleSubmit = async (e) => {
    e.preventDefault()
    loginUser(e, username, password)
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