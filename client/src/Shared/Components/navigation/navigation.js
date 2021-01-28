import React,{ useState } from 'react';
import fire from '../../../Authorization/auth';
import './navigation.css';
import {NavLink,Link, withRouter} from 'react-router-dom';
import Backdrop from '../UIElements/backdrop';
import Switch from './../UIElements/switch';
import logo from '../../../assets/logos/profile.png'
import SearchBar from '../UIElements/SearchBar';

const Nav = (props) => {

  const [show, setShow] = useState(false);

   const signoutHandler = () => {
     fire.auth().signOut();
     props.history.push('/');
   };

   const toggleHandler = () => {
     setShow(!show);
   };

    return(
        <div> 
             <Backdrop show={show} onClick={toggleHandler}/>
	               <input type="checkbox" checked={show} onChange={()=>setShow(show)} id="check"/>
	               <label htmlFor="check">
		                <i className="fa fa-bars" id="btn" onClick={toggleHandler}></i> 
	               </label>

             <div className="side" onClick={toggleHandler}>
		             <header>MY MENU</header>
                 <NavLink to="/viewprofile"><i className="fa fa-user"></i> Profile</NavLink>
	               <NavLink to="/about" exact><i className="fa fa-info-circle"></i> ABOUT</NavLink>
	               <NavLink to="/work"><i className="fa fa-wrench"></i> WORK WITH US</NavLink>
	               <NavLink to="/contact"><i className="fa fa-phone"></i> CONTACT</NavLink>
	               <NavLink to="/signout" onClick={signoutHandler}><i className="fa fa-arrow-right"></i> SIGNOUT</NavLink>
             </div>
             
              <div className="topnav">
                  <nav>
                     <ul>
                       <li>
                          <Link to="/" style={{border:'none'}}>
                            <img src={logo} alt="logo" width="150" style={{marginRight:'16rem'}} />
                          </Link>
                       </li>
                        <li>
                           <SearchBar/>
                        </li>
                        {/* <li>
                        	<NavLink to="/" exact><i className="fa fa-home"></i> Home</NavLink>
                        </li> */}
                        <li>
                         	<NavLink to="/myposts"> <i className="fas fa-audio-description"> </i> My Posts</NavLink>
                        </li>
                        <li>
                	         <NavLink to="/newpost"> <i className="fa fa-plus-square"> </i> Add Post</NavLink>
                        </li>
                        <li>
                          <Switch/>
                        </li>
                     </ul>
                  </nav>
             	</div> 
        </div>
    );
};

export default withRouter(Nav);


