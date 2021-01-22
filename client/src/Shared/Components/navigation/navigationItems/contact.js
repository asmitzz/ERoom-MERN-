import React,{ Component } from 'react';

import logo from '../../../../assets/Images/contact.svg';
import axios from 'axios';
import './contact.css';
import Backdrop from '../../UIElements/backdrop';
import { withRouter } from 'react-router';

class Contact extends Component{

  state = { 
    name:"",
    email:"",
    subject:"",
    message:"",
    show:false
  };

  nameHandler = (e) => {
      this.setState( {name:e.target.value} )
  };

  emailHandler = (e) => {
    this.setState( {email:e.target.value} )
  };

  subjectHandler = (e) => {
  this.setState( {subject:e.target.value} )
  };

  messageHandler = (e) => {
  this.setState( {message:e.target.value} )
  };

  submitHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/insert/feedbacks',this.state);
    this.setState({show:true});
    
    setTimeout(() => (
      this.setState({show:false})
      ),1000)

      setTimeout(() => (
        this.props.history.push('/')
    ),1100);
  }

  render(){
    return(

      <React.Fragment>
        <div className="contact-container"> 
           <img src={logo} alt="contact" style={{width:'70%'}} className="d-block m-auto mt-5"/>
           <section className="main-section">
               <h2 className="contactUs">CONTACT US</h2>
               <i className="fas fa-phone-alt">&nbsp; 1-80-00330808</i>
               <i className="pl-5 fas fa-envelope">&nbsp;brandname@gmail.com</i>
               <hr/>
               <strong>Fancy working together or just say hi? Drop us a message below.</strong>
               <form className="mt-3" onSubmit={this.submitHandler}>
                 <div>
                   <label className="contact-label">Your Name</label>
                   <input className="form-control" onChange={this.nameHandler} type="text" placeholder="Enter your name.." required/>
                 </div>

                 <div>
                   <label className="contact-label">Your Email</label>
                   <input className="form-control" onChange={this.emailHandler} type="text" placeholder="Enter your email.." required/>
                 </div>

                 <div>
                   <label className="contact-label">Subject</label>
                   <input className="form-control" onChange={this.subjectHandler} type="text" placeholder="What would you like to talk us about?" required/>
                 </div>

                 <div>
                   <label className="contact-label">Message</label>
                   <textarea className="form-control" onChange={this.messageHandler} type="text" placeholder="Type away :)" required></textarea>
                 </div>

                 <input type="submit" className="send" value="SEND"/>
               </form>
           </section>
               
      </div>
      <Backdrop show={this.state.show} />
               
      <div className={this.state.show ? "feedModal feedOpen" : "feedModal feedClosed" }>
          <p><i className="fa fa-check-circle"></i> Thanks for your feedback we will contact you soon!!</p>
       </div>
       </React.Fragment>

    );
  };
};
export default withRouter(Contact);