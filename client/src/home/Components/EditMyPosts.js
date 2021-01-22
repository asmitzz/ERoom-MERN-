import React, {Component} from 'react';
import axios from 'axios';
import './fullpost.css';
import {withRouter} from 'react-router-dom';
import Backdrop from '../../Shared/Components/UIElements/backdrop';

class EditMyPost extends Component{

    componentDidMount = () =>{
       const url = new URLSearchParams(window.location.search);
        axios.get('http://localhost:8000/api/get/posts').then( res => {
            this.setState({
                Id:res.data[url.get('post')].Id,
                name:res.data[url.get('post')].name,
                rent:res.data[url.get('post')].rent,
                describe:res.data[url.get('post')].description,
                address:res.data[url.get('post')].address,
                area:res.data[url.get('post')].area,
                pincode:res.data[url.get('post')].pincode,
                phone:res.data[url.get('post')].phone
            })
        } );
    }

    state = {
       Id:"",
       name:"",
       rent:"",
       lookingfor:"For Boys",
       describe:"",
       address:"",
       area:"",
       pincode:"",
       phone:"",
       image1:"",
       image2:"",
       image3:"",
       image4:"",
       uid:this.props.uid,
       isphonetrue:"",
       ispintrue:"",
       show:false
    };

    nameHandler = (e) => {
        this.setState({name:e.target.value})
    }

    rentHandler = (e) => {
        this.setState({rent:e.target.value})
    }

    lookingForHandler = (e) => {
        this.setState({lookingfor:e.target.value})
    }

    describeHandler = (e) => {
        this.setState({ describe: e.target.value })
    }

    addressHandler = (e) => {
        this.setState({address:e.target.value})
    }

    areaHandler = (e) => {
        this.setState({area:e.target.value})
    }

    pincodeHandler = (e) => {
        this.setState({pincode:e.target.value})
    }

    phoneHandler = (e) => {
        this.setState({phone:e.target.value})
    }

    fileHandler1 = (e) => {
        const img1 = new FileReader();
        img1.readAsDataURL(e.target.files[0]);
        img1.onloadend = () => {
        this.setState({ image1:img1.result })
        }
    }

    fileHandler2 = (e) => {
        const img2 = new FileReader();
        img2.readAsDataURL(e.target.files[0]);
        img2.onloadend = () => {
         this.setState({ image2:img2.result })
        }
    }

    fileHandler3 = (e) => {
        const img3 = new FileReader();
        img3.readAsDataURL(e.target.files[0]);
        img3.onloadend = () => {
        this.setState({ image3:img3.result })
        }
    }

    fileHandler4 = (e) => {
        const img4 = new FileReader();
        img4.readAsDataURL(e.target.files[0]);
        img4.onloadend = () => {
        this.setState({ image4:img4.result })
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        
        if( this.state.pincode.length !== 6 ){
            this.setState({ ispintrue:"please enter valid pincode" })
        }
        else if( this.state.phone.length === 10 ){
            axios.post('http://localhost:8000/api/insert/posts',this.state);
            
            this.setState({show:true});

            setTimeout(() => (
                this.setState({show:false})
            ),1000);

            setTimeout(() => (
                this.props.history.push('/')
            ),1100);
        }
        else{
            this.setState({ ispintrue:"" })
            this.setState({ isphonetrue:"please enter valid number" })
        }
            
    }

    render(){
        return(
            <div>
                <div className="newpost-container mt-3">
                <h1 className="heading text-left">E-Room</h1>
                 <form onSubmit={this.submitHandler}>
                    <div className="form-group">
                      <label className="newpost-label">Enter Hostel Name:</label>
                      <input type="text" minLength="3" value={this.state.name} maxLength="30" onChange={this.nameHandler} className="form-control" placeholder="Enter your hostel name.." required/>
                    </div>

                    <div className="form-group">
                      <label className="newpost-label">Enter Amount:</label>
                      <input type="number" value={this.state.rent} onChange={this.rentHandler} className="form-control" placeholder="Enter rent amount.." required/>
                    </div>

                    <div className="form-group">
                       <label className="newpost-label">Choose a option:</label>
                       <select onChange={this.lookingForHandler} className="form-control" >
                           <option>For Boys</option>
                           <option>For Girls</option>
                           <option>Both</option>
                       </select>
                    </div>

                    <div className="form-group">
                      <label className="newpost-label">Description:</label>
                      <input type="text" value={this.state.describe} minLength="10" maxLength="500" onChange={this.describeHandler} className="form-control" placeholder="describe your room.." required/>
                    </div>

                    <div className="form-group">
                      <label className="newpost-label">Enter Address:</label>
                      <input type="text" value={this.state.address} minLength="10" maxLength="100" onChange={this.addressHandler} className="form-control" placeholder="Enter address.." required/>
                    </div>

                    <div className="form-group">
                      <label className="newpost-label">Area:</label>
                      <input type="text" value={this.state.area} minLength="4" maxLength="20" onChange={this.areaHandler} className="form-control" placeholder="Enter area.." required/>
                    </div>

                    <div className="form-group">
                      <label className="newpost-label">Enter Pincode:</label>
                      <input type="number" value={this.state.pincode} onChange={this.pincodeHandler} className="form-control" placeholder="Enter pincode.." required/>
                      <span className="text-danger position-absolute"> { this.state.ispintrue }</span>
                    </div>
                    <div className="form-group">
                      <label className="newpost-label">Phone Number:</label>
                      <input type="number" value={this.state.phone} onChange={this.phoneHandler} placeholder="Enter phone number.." className="form-control"/>
                      <span className="text-danger position-absolute">{this.state.isphonetrue}</span>
                    </div>
                    
                    <div className="form-group">
                      <label className="newpost-label">UPLOAD PHOTOS OF HOSTEL</label>
                      <input type="file" onChange={this.fileHandler1} className="form-control mb-1" required/>
                      <input type="file" onChange={this.fileHandler2} className="form-control mb-1" required/>
                      <input type="file" onChange={this.fileHandler3} className="form-control mb-1" required/>
                      <input type="file" onChange={this.fileHandler4} className="form-control mb-1" required/>
                    </div>
                   
                    <input type="submit" className="submitBtn" value="submit"/>
                       </form>
                 </div>
                 <Backdrop show={this.state.show} />
               
              <div className={this.state.show ? "uploadPost uploadOpen" : "uploadPost uploadClosed" }>
                  <p><i className="fa fa-check-circle"></i> Successfully Updated</p>
               </div>
            </div>
        );
    };
};

export default withRouter(EditMyPost);