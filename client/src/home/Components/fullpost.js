import React,{ Component } from 'react';
import axios from "axios";

import './fullpost.css';
import Spinner from '../../Shared/Components/UIElements/spinner';

class FullPost extends Component{

    state = {
        posts:null,
    };

    componentDidMount = async() => {
        const url = new URLSearchParams(window.location.search);

        await axios.get("http://localhost:8000/api/get/post/"+url.get('post')).then((res) => {
          this.setState({
            posts: res.data
          });
        });
      };
    
    render(){
        return(

            <div className="fullpost-container pb-3">
                       {  this.state.posts ? 
                           (<div className="mt-4">  
                             <div id="slider" className="carousel slide " data-ride="carousel">
                                 <div className="carousel-inner">
                                     <div className="carousel-item active">
                                         <img className="fullpost-img" src={this.state.posts[0].image1} alt="room"/>    
                                     </div>
                                     <div className="carousel-item">
                                         <img className="fullpost-img" src={this.state.posts[0].image2} alt="room"/>    
                                     </div>
                                     <div className="carousel-item">
                                         <img className="fullpost-img" src={this.state.posts[0].image3} alt="room"/>    
                                     </div>
                                     <div className="carousel-item">
                                         <img className="fullpost-img" src={this.state.posts[0].image4} alt="room"/>    
                                     </div>                                     
                                 </div>
                                 <a href="#slider" className="carousel-control-prev" data-slide="prev"><span className="carousel-control-prev-icon"></span></a>
                                 <a href="#slider" className="carousel-control-next" data-slide="next"><span className="carousel-control-next-icon"></span></a>
                             </div>

                             
                             <div className="fullpost-details">
                                 <h1>DETAILS</h1>
                              <div className="row">
                                 <div className="col-3">
                                     <p>Hostel name:</p> 
                                     <p>Rent amount: </p>
                                     <p>Room available: </p>
                                     <p>Description: </p>
                                </div>
                                <div className="col-9">
                                     <p>{this.state.posts[0].name}</p>
                                     <p>₹{this.state.posts[0].rent}</p>
                                     <p>{this.state.posts[0].lookingfor}</p>
                                     <p>{this.state.posts[0].description}</p>
                                </div>
                               </div> 
                             </div>

                             <div className="fullpost-details mb-3">
                                 <h1>CONTACT</h1>
                              <div className="row">
                                 <div className="col-3">
                                     <p>Address:</p> 
                                     <p>Area: </p>
                                     <p>Pincode: </p>
                                     <p>Phone: </p>
                                </div>
                                <div className="col-9">
                                     <p>{this.state.posts[0].address}</p>
                                     <p>{this.state.posts[0].area}</p>
                                     <p>{this.state.posts[0].pincode}</p>
                                     <p>{this.state.posts[0].phone}</p>
                                </div>
                               </div> 
                             </div>
                           </div>) : (<Spinner/>)
                        
                       }
                    
            </div>
        )
    }
}
export default FullPost;