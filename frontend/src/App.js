import './App.css';
import Nav from './nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/home';
import Login from './components/login';
import Createpoll from './components/createpoll';
import results from './components/results';
import register from './components/register';
import Signup from './components/signup';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/createpoll' component={Createpoll} />
        <Route exact path='/results' component={results}></Route>
        <Route exact path='/register' component={register}></Route>
        <Route exact path='/signup' component={Signup}></Route>
      </Switch>
    </Router>
  );
}

export default App;
