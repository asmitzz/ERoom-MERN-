import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import fire from '../auth';
import firebase from 'firebase';
import './login.css';
import logo from '../../assets/logos/login.svg';
import GoogleBtn from 'react-google-button';
import FacebookBtn from 'react-facebook-login';

var provider = new firebase.auth.GoogleAuthProvider();
var Fbprovider = new firebase.auth.FacebookAuthProvider();

class Login extends Component{

    state = {
       email:"",
       password:"",
       error:"",
       show:false
    };

    emailHandler = (event) => {
        this.setState({ email: event.target.value });
        this.setState({ error: "" });
    };

    passwordHandler = (event) => {
        this.setState({ password: event.target.value });
        this.setState({ error: "" });
    };


    loginHandler = (e) => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).catch(err=>{
            this.setState({ error:err.message });
        });
    }


    signInWithGoogle = () => {
        fire.auth().signInWithPopup(provider).catch(err => this.setState({ error:err.message }));
    }

    signInwithFacebook = () => {
        fire.auth().signInWithPopup(Fbprovider).catch(err => this.setState({ error:err.message }))
    }


    render(){
        return(
           <div className="login-container">
                   <div className="loginSection">  
                        <div className="text-center">
                          <img className="w-50" src={logo} alt="LOGIN"/>
                        </div>
                     <div className="formSection">
                      <form onSubmit={this.loginHandler}>
                        <div className="form-group">
                           <label className="login-label">Email</label>
                           <input className="form-control" pattern=".+@gmail.com" title="example@gmail.com" type="email" onChange={this.emailHandler} placeholder="Email Address" />
                        </div>
                        <div className="form-group">
                            <label className="login-label">Password</label>
                            <input className="form-control" type={this.state.show?"text":"password"} title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" onChange={this.passwordHandler} placeholder="Password" />
                            <input type="checkbox" className="mt-3" onChange={()=>{this.setState({show:!this.state.show})}}/> <span className="text-white">show password</span>
                        </div>
                        <input type="submit" className="loginBtn mt-2" value="LOGIN"/>
                      </form>

                        <span className="text-danger">{this.state.error}</span>
                        <br/>
                       <span className="primary-color">Don't have an account? </span>  <Link className="link" to="/signup">SIGN UP</Link>
                     </div>
                     <p className="orSeperator"><hr/>&nbsp;OR&nbsp;<hr/></p>
                     <GoogleBtn className="d-inline-block mr-3 ml-5" onClick={this.signInWithGoogle}/>
                     <FacebookBtn icon="fa-facebook pr-3" onClick={this.signInwithFacebook} cssClass="fbBtn"/>
                   </div>
           </div>
        );
    };
};

export default Login;