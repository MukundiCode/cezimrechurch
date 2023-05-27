import './App.css';
import NameList from './templates/NameList';
import Navbar from './templates/Navbar';
import MembersList from './templates/MembersList';
import AddOffering from './templates/AddOffering';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import AddUser from './templates/AddUser';
import "bootstrap/dist/css/bootstrap.min.css";
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Offerings from './templates/Offerings';
import Home from './templates/Home';
import Register from './templates/Register';
import Login from './templates/Login';


function App() {
  
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route exact path="/home">
                <Home/>
              </Route>
              <Route exact path="/members">
                <MembersList/>
              </Route>
              <Route exact path="/offerings">
                <Offerings/>
              </Route>
              <Route exact path="/addMember">
                <AddUser />
              </Route>
              <Route exact path="/addOffering">
                <AddOffering />
              </Route>
              <Route exact path="/register">
                <Register />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
}

export default App;
