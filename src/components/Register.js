import { Link } from 'react-router-dom';
import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Jumbotron, Input} from 'reactstrap';
import axios from 'axios';
import '../App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faKey  } from "@fortawesome/free-solid-svg-icons";

export default class Register extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  constructor(props) {  
    super(props);
    this.state={
      email: '',
      name:'',
      password:'',
      errors: {}
    }

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
  }

  handleChangeName(e) {
    this.setState({name:e.target.value});
  }

  handleChangeEmail(e) {
    this.setState({email:e.target.value});
  }

  handleChangePassword(e) {
    this.setState({password:e.target.value});
  }

  submituserRegistrationForm(e) {
    e.preventDefault();
      if (this.validateForm()) {
        console.log(this.state);
        // var apiBaseUrl = "http://localhost:3001/api/v1/sign_up";
      var data={
        "name":this.state.name,
        "email":this.state.email,
        "password":this.state.password
      }

      var headers = {
        'Content-Type': 'application/json',
      }

      console.log(data);
      axios.post('http://localhost:3001/api/v1/sign_up', data, {headers: headers}).then(function (response) {

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
    if (!this.state.name) {
      formIsValid = false;
      errors["username"] = "*Please enter your username.";
    }
    if (typeof this.state.name !== "undefined") {
      if (!this.state.name.match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["username"] = "*Please enter alphabet characters only.";
      }
    }
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
            
              <Form method="post" name="userRegistrationForm" className="register-form "  onSubmit= {this.submituserRegistrationForm} style={{"marginTop": "70px"}}>
                  <p className="h1 text-center py-4">Sign up</p>
                  <div className="col-md-4 col-sm-4 col-lg-4"> 
                    <label>
                      <FontAwesomeIcon icon={faUser}/><br/>
                      <input className="form-control" type="text" name='name'  value={this.state.name} onChange={this.handleChangeName} placeholder ="Enter a name"/>
                      <div className="errorMsg">{this.state.errors.name}</div>
                    </label>
                  </div>

                  <div className="col-md-4 col-sm-4 col-lg-4"> 
                    <label>
                      <FontAwesomeIcon icon={faEnvelope}/><br/>
                      <input className="form-control" type="text" name='email'  value={this.state.email} onChange={this.handleChangeEmail} placeholder="Enter a email" />
                      <div className="errorMsg">{this.state.errors.emailid}</div>
                    </label>
                  </div>

                  <div className="col-md-4 col-sm-4 col-lg-4"> 
                    <label>
                      <FontAwesomeIcon icon={faKey}/><br/>
                      <input className="form-control" type="password" name='password' value={this.state.password} onChange={this.handleChangePassword} placeholder="Enter a password" />
                      <div className="errorMsg">{this.state.errors.password}</div>
                    </label>
                  </div>
                <hr style={{"backgroundColor": "white"}}/>

                <div className="d-flex justify-content-center mt-3 login_container col-md-6 col-sm-6 col-xs-6 col-lg-6">
                  <button className="btn btn-default regbutton" >Register</button><br/><br/>
                </div>

                <div className="mt-4">
                  <div className="d-flex justify-content-center links">
                    Already have an account? Click <Link href="/login" to="/login" className="link" style={{"paddingLeft": "10px"}}>here</Link>
                  </div>
                </div>
              </Form>
            </div>
              <div className="col-md-8 banner-sec"></div>
            </div>
          </div>
      )
    }

}