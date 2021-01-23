import React,{useState} from 'react';

import axios from 'axios';
import './EditProfile.css';
import { withRouter } from 'react-router';

const EditProfile = (props) => {

    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [male,setMale] = useState("");
    const [female,setFemale] = useState("");
    const [pic,setPic] = useState("");
    const [uid,setUid] = useState(props.uid);

    const picHandler= (e) => {
         const uploadpic = new FileReader();
         uploadpic.readAsDataURL(e.target.files[0]);
         uploadpic.onloadend = () => {
          setPic(uploadpic.result)
         };
    };

    const checkgender = (props) => {
        if( male === "" ){
            return "female";
        }
        else
        {
            return "male";
        }
    }

    const submitHandler = (e) => {
       e.preventDefault();
       let gender = checkgender();
       axios.post('http://localhost:8000/api/insert/users',{firstName,lastName,gender,pic,uid});
       props.history.push('/viewprofile');
    };


    return (
    
        <div className="profile-container">
            <div className="img-container">
              <img src={ pic ? pic : "https://st3.depositphotos.com/4111759/13425/v/1600/depositphotos_134255710-stock-illustration-avatar-vector-male-profile-gray.jpg"} alt="profile"/>
            </div>
            <div className="profile-container__content">
               <form onSubmit={submitHandler}>
                   <div>
                      <label>FirstName :</label>
                      <input type="text" onChange={(e) => setFirstName(e.target.value)} required />
                   </div>
                  
                   <div>
                     <label>LastName : </label>
                     <input type="text" onChange={(e) => setLastName(e.target.value)} required/>
                   </div>

                   <div>
                      Gender :
                     <input type="radio" value="Male" name="gender" 
                     onChange={
                            (e) => {
                             setMale(e.target.value)
                             setFemale("") 
                            }} required/>
                     <label>&nbsp; Male</label>

                     <input type="radio" value="Female" name="gender" onChange={(e) => {
                        setFemale(e.target.value)
                        setMale("")
                     }
                        } required/>
                     <label>&nbsp; Female</label>
                   </div>

                   <div>
                       <label>Change Photo :</label>
                       <input type="file" onChange={picHandler} required/>
                   </div>

                   <div>
                       <button type="submit">save info</button>
                       <button type="button" onClick={()=>props.history.push('/viewprofile')}>discard</button>
                   </div>

               </form>
            </div>
        </div>
    );
};

export default withRouter(EditProfile);
