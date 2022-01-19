import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Welcome from './components/layout/Welcome';
import Application from './components/layout/Application';

function App() {
  return (
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
