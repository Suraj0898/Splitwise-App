import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './CRUD/Home';
import Groups from './CRUD/Groups';
import Expenses from './CRUD/Expenses';
import Status from './CRUD/Status'
import Login from './CRUD/Login'
import Userlist from "./CRUD/Userlist";
import Notfound from "./CRUD/Notfound";
import User from "./CRUD/User";
import GroupbyId from "./CRUD/GroupbyId";
import ExpensebyGroup from "./CRUD/ExpensebyGroup";

import { Route, Link, BrowserRouter as Router,Switch} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
const routing = (
  <Router>
    <div style={{
      backgroundColor:"white"
    }}>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <a class="navbar-brand" href="https://www.splitwise.com/">SPLITWISE</a>
    <ul class="navbar-nav mr-auto">
    <li class="nav-item">
      <Link to="/login" className="nav-link">Login</Link>
    </li>
    <li class="nav-item">
      <Link to="/Sign-Up" className="nav-link">Sign-Up</Link>
    </li>
    </ul>
    <ul class="navbar-nav ">
    <li class="nav-item">
      <Link to="/" className="nav-link">Home</Link>
    </li>
    <li class="nav-item">
      <Link to="/user" className="nav-link">User Details</Link>
    </li>
    <li class="nav-item">
      <Link to="/Logout" className="nav-link">Logout</Link>
    </li>
  </ul>
</nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/Sign-Up" component={App} />
        <Route path="/user" component={User} />
        <Route path="/userlist" component={Userlist} />
        <Route path="/groups" component={Groups}/>
        <Route path="/group" component={GroupbyId}/>
        <Route path="/expenses" component={Expenses}/>
        <Route path="/expense" component={ExpensebyGroup}/>
        <Route path="/status" component={Status}/>
        <Route path="/Logout" component={Login}/>
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
