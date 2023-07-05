import './App.css';
import Navbar from './templates/Navbar';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import { AuthProvider } from './context/AuthProvider';
import PrivateRoute from './templates/PrivateRoute';
import Home from './pages/dashboard/Home';
import MembersList from './pages/member/MembersList';
import Member from './pages/member/Member';
import Offerings from './pages/partnership/Offerings';
import AddMember from './pages/member/AddMember';
import AddOffering from './pages/partnership/AddOffering';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import Logout from './pages/auth/Logout';


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
