import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Welcome from './components/layout/Welcome';
import Application from './components/layout/Application';

function App() {

  // This function is used to read user from local storage

  // This function is used to update the value field in the context

  return (
    // Define the provider with the desired value. 
    // The value of the context composed out of the value field "user" and a function that updates the value field "setUser"
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
        </Switch>
      </div>
  );
}

export default App;
