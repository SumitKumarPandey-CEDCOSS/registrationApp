import { Route, Switch, withRouter } from 'react-router-dom';
import Dashboard from './component/dashboard';
import './App.css';
import Registration from './component/registration';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Registration} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
