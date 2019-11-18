import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBFormInline } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faGoogle} from "@fortawesome/free-brands-svg-icons";


class Navigation extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
      <MDBNavbar style={{backgroundColor: "lightseagreen"}} dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">React</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/appliedJobs">Applied Jobs</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/displayjobinfo">Job Info</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline">Dropdown</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="/about">About</MDBDropdownItem>
                  <MDBDropdownItem href="/contact">Contact</MDBDropdownItem>
                  <MDBDropdownItem href="/wallet">Wallet</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBFormInline waves>
                <div className="md-form my-0">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                </div>
              </MDBFormInline>
            </MDBNavItem>

            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!" style={{"marginTop": "3px"}}>
                <FontAwesomeIcon icon={faGoogle} />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!"  style={{"marginTop": "3px"}} >
                <MDBIcon fab icon="google-plus-g" style={{"backgroundColor": "white"}}/>
                  <FontAwesomeIcon icon={faFacebook} />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown style={{"marginLeft": "10px"}}>
                <MDBDropdownToggle nav caret>
                <FontAwesomeIcon icon={faUser}/>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="/profile">Profile</MDBDropdownItem>
                  <MDBDropdownItem href="/account">Account</MDBDropdownItem>
                  <MDBDropdownItem href="/register">Register</MDBDropdownItem>
                  <MDBDropdownItem href="/login">Login</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>
    );
  }
}

export default Navigation;