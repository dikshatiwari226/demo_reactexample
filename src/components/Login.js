import React, {Component} from 'react';
import {Redirect, Link, router } from 'react-router-dom';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey ,faLock } from "@fortawesome/free-solid-svg-icons";
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        

export default class Login extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  constructor(props) {
    super(props);
    this.state={
      email: '',
      password:'',
      errors: {}
  }

  this.handleChangeEmail = this.handleChangeEmail.bind(this);
  this.handleChangePassword = this.handleChangePassword.bind(this);
  this.submituserLoginForm = this.submituserLoginForm.bind(this);

}

  handleChangeEmail(e) {
    this.setState({email:e.target.value});
  }

  handleChangePassword(e) {
    this.setState({password:e.target.value});
  }

  submituserLoginForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      console.log(this.state);
      
      var data={
        "email":this.state.email,
        "password":this.state.password
      }

    var headers = {
      'Content-Type': 'application/json',
    }

    console.log(data);
      axios.post('http://localhost:3001/api/v1/sign_in', data, {headers: headers}).then(function (response){
    console.log(response);
      if(response.data.data.success){
        localStorage.setItem("u_code", encodeURIComponent(JSON.stringify(response.data.data)));
        localStorage.setItem('is_done', true);
        window.location.href = "/";
        console.log("Login successfull");
      }else{
        alert(response.data.message);
      }

      }).catch(function (error) {
          console.log(error);
        });
    }
  }

  

  validateForm() {

    let errors = {};
    let formIsValid = true;
    if (!this.state.email) {
      formIsValid = false;
      errors["email"] = "*Please enter your email-ID.";
    }

    if (typeof this.state.email !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if (!pattern.test(this.state.email)) {
      formIsValid = false;
      errors["email"] = "*Please enter valid email-ID.";
    }
    }

    if (!this.state.password) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    

    this.setState({
      errors: errors
    });
    return formIsValid;
  }

  render() {
      return (
        <div>
          <div className="container-fluid">
            <div className="row">
              <Form method="post" name="userRegistrationForm" className="register-form" onSubmit= {this.submituserLoginForm} style={{"marginTop": "70px"}}>
                  <p className="h1 text-center py-4" ><FontAwesomeIcon icon={faLock}/>Log in:</p>
                  <div className="col-md-4 col-sm-4 col-lg-4"> 
                    <label>
                       <FontAwesomeIcon icon={faEnvelope}/><br/>
                      <input className="form-control" type="email" name="email" id="exampleEmail" value={this.state.email} onChange={this.handleChangeEmail} placeholder="Email Id" />
                      <div className="errorMsg">{this.state.errors.emailid}</div>
                    </label>
                  </div>

                  <div className="col-md-4 col-sm-4 col-lg-4"> 
                    <label>
                      <FontAwesomeIcon icon={faKey}/><br/>
                      <input className="form-control" type="password" name="password" id="examplePassword" value={this.state.password} onChange={this.handleChangePassword} placeholder="Password" />
                      <div className="errorMsg">{this.state.errors.password}</div>
                    </label>
                  </div>
                  <hr style={{"backgroundColor": "white"}}/>
                  <div className="d-flex justify-content-center mt-3 login_container">
                    <button className="btn btn-default logbutton" >Login</button>
                  </div>

                <div className="mt-4">
                  <div className="d-flex justify-content-center links">
                    Don't have an account?  <Link href="/register" to="/register" className="links" style={{"paddingLeft": "10px"}}>Sign Up</Link>
                  </div>
                </div>
              </Form>
            
              <div className="col-md-8 banner-sec"></div>
            </div>
          </div>
        </div>

      )
  }

}