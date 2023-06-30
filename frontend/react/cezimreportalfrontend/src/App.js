import './App.css';
import NameList from './templates/NameList';
import Navbar from './templates/Navbar';
import MembersList from './templates/MembersList';
import AddOffering from './templates/AddOffering';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Offerings from './templates/Offerings';
import Home from './templates/Home';
import Register from './templates/Register';
import Login from './templates/Login';
import AddChurch from './templates/AddChurch';
import PrivateRoute from './templates/utils/PrivateRoute';
import { AuthProvider } from './context/AuthProvider';
import AddMember from './templates/AddMember';
import Member from './templates/Member';
import Logout from './templates/Logout';


function App() {

  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              </Route>
              <Route exact path="/home">
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              </Route>
              <Route exact path="/members">
                <PrivateRoute>
                  <MembersList />
                </PrivateRoute>
              </Route>
              <Route exact path="/member/:id">
                <PrivateRoute>
                  <Member />
                </PrivateRoute>
              </Route>
              <Route exact path="/offerings">
                <PrivateRoute>
                  <Offerings />
                </PrivateRoute>
              </Route>
              <Route exact path="/addMember">
                <PrivateRoute>
                  <AddMember />
                </PrivateRoute>
              </Route>
              <Route exact path="/addOffering">
                <PrivateRoute>
                  <AddOffering />
                </PrivateRoute>
              </Route>
              <Route exact path="/register">
                <Register />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/logout">
                <Logout />
              </Route>
            </Switch>
          </div>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
