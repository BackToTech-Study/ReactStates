import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Welcome from './components/layout/Welcome';
import Application from './components/layout/Application';
import Simulation from './components/layout/Simulation'
import UserContext from './contexts/UserContext'
import User from './models/User';
import UserInLocalStorage from './services/LocalStorage'
import { useState } from 'react';

function App() {

  // This function is used to read user from local storage
  function readUserFromStorage() {
    let userData = UserInLocalStorage.get();
    return userData ? new User(userData) : undefined;  
  }

  const [user, updateUser] = useState(readUserFromStorage())

  // This function is used to update the value field in the context
  function setUser(userData) {
    if (userData) {
      UserInLocalStorage.set(userData);
    } else {
      UserInLocalStorage.remove();
    }
    updateUser(readUserFromStorage());
  }

  return (
    // Define the provider with the desired value. 
    // The value of the context composed out of the value field "user" and a function that updates the value field "setUser"
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <div>
            <Navbar />
        </div>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome" component={Welcome} />
          <Route path="/application" component={Application} />
          <Route path="/sim" component={Simulation} />
        </Switch>
      </div>
    </UserContext.Provider>
  );
}

export default App;
