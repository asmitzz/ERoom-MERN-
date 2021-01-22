import React,{ Component } from 'react';

import './fullpost.css';
import Spinner from '../../Shared/Components/UIElements/spinner';

class FullPost extends Component{

    state = {
        posts:this.props.postdb,
    }

    
    render(){
        const url = new URLSearchParams(window.location.search);
        return(

            <div className="fullpost-container pb-3">
                       {  this.state.posts ? 
                           (<div className="mt-4">  
                             <div id="slider" className="carousel slide " data-ride="carousel" key={this.state.posts[url.get('post')].Id}>
                                 <div className="carousel-inner">
                                     <div className="carousel-item active">
                                         <img className="fullpost-img" src={this.state.posts[url.get('post')].image1} alt="room"/>    
                                     </div>
                                     <div className="carousel-item">
                                         <img className="fullpost-img" src={this.state.posts[url.get('post')].image2} alt="room"/>    
                                     </div>
                                     <div className="carousel-item">
                                         <img className="fullpost-img" src={this.state.posts[url.get('post')].image3} alt="room"/>    
                                     </div>
                                     <div className="carousel-item">
                                         <img className="fullpost-img" src={this.state.posts[url.get('post')].image4} alt="room"/>    
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
                                     <p>{this.state.posts[url.get('post')].name}</p>
                                     <p>₹{this.state.posts[url.get('post')].rent}</p>
                                     <p>{this.state.posts[url.get('post')].lookingfor}</p>
                                     <p>{this.state.posts[url.get('post')].description}</p>
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
                                     <p>{this.state.posts[url.get('post')].address}</p>
                                     <p>{this.state.posts[url.get('post')].area}</p>
                                     <p>{this.state.posts[url.get('post')].pincode}</p>
                                     <p>{this.state.posts[url.get('post')].phone}</p>
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