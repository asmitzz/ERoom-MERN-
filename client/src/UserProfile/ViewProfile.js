import React,{useState,useEffect} from 'react';

import axios from 'axios';
import './EditProfile.css';
import './ViewProfile.css';
import { withRouter } from 'react-router';

const ViewProfile = (props) => {

    const [uid,setUid] = useState(props.uid);
    const [users,setUsers] = useState("");
   
    useEffect(() => {
        axios.get('http://localhost:8000/api/get/users/'+uid).then( res => setUsers(res.data) )
    }, []);

    const submitHandler = (e) => {
       e.preventDefault();
       props.history.push('/editprofile');
    };

    const checkmale = () => {
        if( FindUserProfile.gender === "male"){
            return true;
        }
        else {
            return false;
        }
    }

    const checkfemale = () => {
        if( FindUserProfile.gender === "female"){
            return true;
        }
        else {
            return false;
        }
    }

    let FindUserProfile;
     
    if( users ){
        FindUserProfile = users.find( profile => profile.uid === uid );
    }
    return (
    
        <div className="profile-container">
            <div className="img-container">
              <img src={FindUserProfile ? FindUserProfile.pic : "https://st3.depositphotos.com/4111759/13425/v/1600/depositphotos_134255710-stock-illustration-avatar-vector-male-profile-gray.jpg"} alt="profile"/>
            </div>
            <div className="profile-container__content">
            <form onSubmit={submitHandler}>
                   <div>
                      <label>FirstName :</label>
                      <input type="text" value={FindUserProfile ? FindUserProfile.firstName: ""} disabled/>
                   </div>
                   <div>
                     <label>LastName : </label>
                     <input type="text" value={FindUserProfile ? FindUserProfile.lastName: ""} disabled />
                   </div>

                   <div>
                      Gender :
                     <input type="radio" defaultChecked={ FindUserProfile && checkmale()} name="gender" />
                     <label>&nbsp; Male</label>

                     <input type="radio" defaultChecked={ FindUserProfile && checkfemale()} name="gender"  />
                     <label>&nbsp; Female</label>
                   </div>

                   <div>
                       <button className="viewprofile-button">Edit info</button>
                   </div>

               </form>
            </div>
        </div>
    );
};

export default withRouter(ViewProfile);
