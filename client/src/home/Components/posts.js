import React, { Component } from "react";
import axios from "axios";
import "./posts.css";
import { withRouter, Link } from "react-router-dom";
import Spinner from '../../Shared/Components/UIElements/spinner';
 
class Posts extends Component {
   

  state = {
    posts: null,
  };

   componentDidMount = async() => {
    await axios.get("http://localhost:8000/api/get/posts").then((res) => {
      this.setState({
        posts: res.data,
      });
    });
  };

  render() {
    let url = new URLSearchParams(window.location.search);
    return (
      <div className="main-posts">
        { this.state.posts ? Object.keys(this.state.posts).map((posts) => {
          if ( this.state.posts[posts].area.toLowerCase().includes(url.get("location")) || url.get("location") === null) {
            if ( this.state.posts[posts].pincode.toString().includes(url.get("pincode")) || url.get("pincode") === null) {
              if( this.state.posts[posts].name.toLowerCase().includes(url.get("hostel")) || url.get("hostel") === null ){
              return (
                <div key={this.state.posts[posts]._id}>
                  <div className="posts-container d-md-flex">
                    <div id={this.state.posts[posts].Id} className="carousel slide col-md-6" data-ride="carousel">
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img className="d-block img-fluid" src={this.state.posts[posts].image1} alt="First Slide" />
                        </div>
                        <div className="carousel-item">
                          <img className="d-block img-fluid" src={this.state.posts[posts].image2} alt="Second Slide"/>
                        </div>
                        <div className="carousel-item">
                          <img className="d-block img-fluid" src={this.state.posts[posts].image3} alt="Third Slide"/>
                        </div>
                        <div className="carousel-item">
                          <img className="d-block img-fluid" src={this.state.posts[posts].image4} alt="Four Slide"/>
                        </div>
                      </div>
                      <a href={"#" + this.state.posts[posts].Id} className="carousel-control-prev" data-slide="prev">
                        <span className="carousel-control-prev-icon font-color-2"></span>
                      </a>
                      <a href={"#" + this.state.posts[posts].Id} className="carousel-control-next" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                      </a>
                    </div>

                    <div className="col-md-6">
                      <h3 className="hostel-name">
                        {this.state.posts[posts].name.toUpperCase()}
                      </h3>
                      <p className="room-details mt-3">
                        ROOM AVAILABLE:{" "}
                        <span className="font-color-2">{this.state.posts[posts].lookingfor.toUpperCase()}</span>
                      </p>
                      <p className="address">
                        {this.state.posts[posts].address.toUpperCase()}
                      </p>
                      <br />
                      <p className="area">
                        <i className="fa fa-map-marker-alt"></i>{" "}
                        {this.state.posts[posts].area.toUpperCase()} , 
                        {" "+ this.state.posts[posts].pincode}
                      </p>
                      <p className="rent col-md-6 mt-2">
                        <strong>₹{this.state.posts[posts].rent}</strong>
                        <span className="font-color-2"> /month</span>
                      </p>
                      <Link to={"/fullpost?post=" + posts} className="viewBtn mb-2">
                      <i className="fa fa-eye"></i> View Details
                      </Link>
                    </div>
                  </div>
                  <hr className="separate" />
                </div>
              );
              }else{
                return ""
              }
            } 
            else{
              return "";
            }
          } 
          else{
            return "";
          }
        })
         : (<Spinner/>)
      }
      </div>
    );
  }
}

export default withRouter(Posts);
