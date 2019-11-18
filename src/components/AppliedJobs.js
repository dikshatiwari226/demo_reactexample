import React from "react";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Moment from 'react-moment';
import DayPicker from 'react-day-picker';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import MomentLocaleUtils, {formatDate,parseDate} from 'react-day-picker/moment';
import 'moment/locale/it';

class Appliedjobs extends React.Component {
  constructor(props){
  	super(props);
  	this.state ={
  		position:'',
  		company:'',
  		application_no:'',
  		applied_date:'',
  		application_status:'',
  		formErrors: {position: '', company: ''},
    	positionValid: false,
    	companyValid: false,
    	formValid: false
  	};

  	this.handleChange = this.handleChange.bind(this);
  	this.submitAppliedjobsForm = this.submitAppliedjobsForm.bind(this);

  }

  handleChange(event){
  	const name = e.target.name;
  	const value = e.target.value;
  	this.setState({[name]: value});

  	this.setState({ 
  		[event.target.position]: event.target.value,
  		[event.target.company]: event.target.value,
  		[event.target.application_no]: event.target.value,
  		[event.target.applied_date]: event.target.value,
  		[event.target.application_status]: event.target.value
  	});
  	 	
  }

  submitAppliedjobsForm(event){
  	event.preventDefault();
  	var data ={
  		"position": this.state.position,
  		"company": this.state.company,
  		"application_no": this.state.application_no,
  		"applied_date": this.state.applied_date,
  		"application_status": this.state.application_status
  	}
  		console.log(data);
	  	
  }

  render(){
  	const date = new Date();
	  return (
	  	<div className="container card" style={{"marginTop": "70px"}}>
	  		
  		 	<form className="form-horizontal" method="post" onSubmit= {this.submitAppliedjobsForm} noValidate>
  		 	<h1 className="text-center">Applied Job</h1><br/>
				  <div className="form-group row">
				    <label className="control-label col-sm-2">Position:</label>
				    <div className="col-sm-10">
				      <input type="position" name="position"
				       onChange={this.handleChange}
				      className="form-control" id="position" placeholder="Enter position"/>
				    </div>
				     <FormErrors formErrors={this.state.formErrors} />
				  </div>

				  <div className="form-group row">
				    <label className="control-label col-sm-2" >Company:</label>
				    <div className="col-sm-10">
				      <input type="company" name="company" 
				       onChange={this.handleChange}
				      className="form-control" id="company" placeholder="Enter company"/>
				    </div>
				  </div>

				  <div className="form-group row">
				    <label className="control-label col-sm-2" >Application no:</label>
				    <div className="col-sm-10">
				      <input type="application_no" name="application_no"
				       onChange={this.handleChange}
				      className="form-control" id="application_no" placeholder="Enter application no"/>
				    </div>
				  </div>

				  <div className="form-group row">
				    <label className="control-label col-sm-2" >Date Applied:</label>
				    <div className="col-sm-10">
			       	<DayPickerInput inputProps={{ className: 'form-control' }} name="applied_date"
			       	 onChange={this.handleChange}
					      formatDate={formatDate}
				        parseDate={parseDate}
				        format="LL"
				        placeholder={`${formatDate(new Date(),'LL')}`}
				        dayPickerProps={{
				          localeUtils: MomentLocaleUtils,
				        }}
    					/>
				    </div>
				  </div>

			   	<div className="form-group row">
					  <label className="control-label col-sm-2">Application Status:</label>
					  <div className="col-sm-10">
						  <select className="form-control" id="application_status" name="application_status"
						  	 onChange={this.handleChange} >
						    <option>Pending</option>
						    <option>Complited</option>
						  </select>
					  </div>
					</div> 

				  <div className="form-group row">
				    <div className="col-sm-offset-2 col-sm-10">
				      <div className="checkbox">
				        <label><input type="checkbox" name="resume_submit"/> Resume Submitted</label>
				      </div>
				    </div>
				  </div>

				  <div className="form-group">
				    <div className="col-sm-offset-4 col-sm-8 text-right">
				      <button type="submit" className="btn btn-primary col-md-3">Applied</button>
				    </div>
				  </div>
				</form> 
	  	</div>
	  )
  }
}

export default Appliedjobs;