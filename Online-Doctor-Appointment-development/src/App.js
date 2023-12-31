import { createContext, useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appointment from './components/Home/Appointment/Appointment';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AddDoctor from './components/Dashboard/AddDoctor/AddDoctor';
import AppointMent from './components/AppointMent/AppointMent/AppointMent';
import AllPatients from './components/AppointMent/AllPatients/AllPatients';
import Login from './components/Login/Login/Login';
import { useFormContext } from 'react-hook-form';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import SignUp from './components/Login/SignUp/SignUp';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/signup">
            <SignUp />
          </Route>

          {/* <PrivateRoute path="/AllPatients"> */}
          <Route path="/allpatient">
            <AllPatients />
          </Route>
          {/* </PrivateRoute> */}

          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>

          <PrivateRoute path="/addDoctor">
            <AddDoctor></AddDoctor>
          </PrivateRoute>

          <PrivateRoute path="/appointment">
            <AppointMent></AppointMent>
          </PrivateRoute>

        </Switch>
      </Router>
    </UserContext.Provider>

  );
}
export default App;
