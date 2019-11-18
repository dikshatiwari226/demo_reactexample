import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Register from './components/Register';
import Login from './components/Login';
import AppliedJobs from './components/AppliedJobs';
import Search from './components/Search';
import Wallet from './components/Wallet';
import Profile from './components/Profile';
import Account from './components/Account';
import Error from './components/Error';
import Navigation from './components/Navigation';
import DisplayJobsInfo from './components/DisplayJobsInfo';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
library.add(faStroopwafel)
class App extends Component {

  constructor() {
    super();
      this.state = { isAuthenticated: false, user: null, token: ''};
  }

  logout = () => {
      this.setState({isAuthenticated: false, token: '', user: null})
  };

  onFailure = (error) => {
    alert(error);
  }


  render() {
    return ( 
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/about" component={About}/>
             <Route path="/login" component={Login}/>
             <Route path="/register" component={Register}/>
             <Route path="/appliedJobs" component={AppliedJobs}/>
             <Route path="/search" component={Search}/>
             <Route path="/wallet" component={Wallet}/>
             <Route path="/profile" component={Profile}/>
             <Route path="/account" component={Account}/>
             <Route path="/contact" component={Contact}/>
             <Route path="/displayjobinfo" component={DisplayJobsInfo}/>
            <Route component={Error}/>
           </Switch>

        </div> 
      </BrowserRouter>

      
    );
  }
}


 
export default App;