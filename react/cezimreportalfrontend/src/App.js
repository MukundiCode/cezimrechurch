import './App.css';
import NameList from './templates/NameList';
import Navbar from './templates/Navbar';
import Home from './templates/Home';
import AddOffering from './templates/AddOffering';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddUser from './templates/AddUser';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Switch>
              {/* <Route exact path="/">
                <NameList/>
              </Route> */}
              <Route exact path="/home">
                <Home/>
              </Route>
              <Route path="/addMember">
                <AddUser />
              </Route>
              <Route path="/addOffering">
                <AddOffering />
              </Route>
              {/*
              <Route path="*">
                <NotFound />
              </Route> */}
            </Switch>
          </div>
        </div>
      </Router>
    );
}

export default App;
