import React,{Component} from 'react';
import fire from '../auth';
import logo from '../../assets/logos/register.svg';
import {Link} from 'react-router-dom';
import firebase from 'firebase/app';
import GoogleBtn from 'react-google-button';
import FacebookBtn from 'react-facebook-login';

var provider = new firebase.auth.GoogleAuthProvider();
var Fbprovider = new firebase.auth.FacebookAuthProvider();
class Signup extends Component{
    state = {
        email:"",
        password:"",
        error:"",
        show:false
     };
 
     emailHandler = (event) => {
         this.setState({ email: event.target.value })
     };
 
     passwordHandler = (event) => {
         this.setState({ password: event.target.value })
     };

     signupHandler = (e) => {
         e.preventDefault();
         fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
         .then( () => {
            this.props.history.push('/');
         } ).catch( err => {
             this.setState({ error:err.message })
         } );
     }

     signInWithGoogle = () => {
      fire.auth().signInWithPopup(provider).then( () => {
        this.props.history.push('/');
     } ).catch(err => this.setState({ error:err.message }));
    }

    signInwithFacebook = () => {
      fire.auth().signInWithPopup(Fbprovider).then( () => {
        this.props.history.push('/');
     } ).catch(err => this.setState({ error:err.message }))
    }
     
    render(){
        return(
               <div className="login-container">
                    <div className="loginSection">
                      <div className="text-center">
                        <img className="w-75" src={logo} alt="REGISTER"/>
                      </div>
                    <div className="formSection">
                  <form onSubmit={this.signupHandler}>
                      <div className="form-group">
                        <label className="login-label">Email</label>
                        <input className="form-control"  pattern=".+@gmail.com" title="example@gmail.com" type="email" onChange={this.emailHandler} placeholder="Enter email address" />
                      </div>
                     <div className="form-group">
                        <label className="login-label">Password</label>
                        <input  className="form-control" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" type={this.state.show?"text":"password"} onChange={this.passwordHandler} placeholder="Enter password" />
                        <input type="checkbox" className="mt-3" onChange={()=>{this.setState({show:!this.state.show})}}/> <span className="text-white">show password</span>
                     </div>
                     
                      <input type="submit" value="REGISTER" className="loginBtn mt-2"/>
                  </form>
                      <span className="text-danger">{this.state.error}</span>
                      <br/>
                       <span className="primary-color">Already have an account? </span>  <Link className="link" to="/">LOGIN</Link>
                     </div>
                     <div className="orSeperator"><hr/>&nbsp;OR&nbsp;<hr/></div>
                     <GoogleBtn className="d-inline-block mr-3 ml-4" onClick={this.signInWithGoogle}/>
                     <FacebookBtn icon="fa-facebook pr-3" onClick={this.signInwithFacebook} cssClass="fbBtn"/>
                  </div>
             </div>
        );
    };
};

export default Signup;