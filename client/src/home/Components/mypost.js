import React, { useEffect,useState } from 'react';

import axios from 'axios';
import './mypost.css';
import { Link, withRouter } from 'react-router-dom';
import Backdrop from '../../Shared/Components/UIElements/backdrop';


const Mypost = (props) => {

    const [ posts, setPosts ] = useState("");
    const [ user, setUser ] = useState(props.uid);
    const [ show, setShow ] = useState(false);

    useEffect( () => {

        async function fetchData(){
            await axios.get('http://localhost:8000/api/get/posts/'+user).then( res => (
                setPosts( res.data )
            ));
        }

        fetchData();
    },[show] );


    const deleteHandler = (id) => {
        const url = 'http://localhost:8000/api/delete/'+id;
        axios.delete(url);
        setShow(true);

        setTimeout(() => (
            setShow(false)
        ),1000);
        
    }

    return (
        <div>
            <div className="mypost-container">
                    { posts.length > 0 && posts.map( post => {
                        return (
                        <div className="post" key={post._id}>
                           <img alt="hostel" src={post.image1}/>
                           <div className="post-body">
                              <h2 className="text-dark"><strong>{post.name.toUpperCase()}</strong></h2>
                              <p>Room Available: <span className="font-color-2">{post.lookingfor}</span></p>
                              <p>{post.address}</p>
                              <h6><i className="fa fa-map-marker-alt"></i> {post.area},{post.pincode}</h6>
                              <p><strong className="text-danger">₹{post.rent} </strong>/month</p>
                              <Link className="btn btn-outline-success mt-2 mr-2" to={"/fullpost?post=" + post._id}>
                                <i className="fa fa-eye"></i> View Details
                              </Link>
                              <button className="btn btn-outline-info mt-2 mr-2" onClick={() => props.history.push('/editpost?post='+post._id)}>
                                 <i className="fa fa-trash"></i> Edit post
                              </button>
                              <button className="btn btn-outline-danger mt-2" onClick={() => deleteHandler(post._id)}>
                                 <i className="fa fa-trash"></i> Delete post
                              </button>
                           </div>
                      </div>
                        )
                    } )
                
            }
                     { posts.length > 0 ? "" : (<p className="p-5 text-center text-danger"><strong>NO POSTS FOUND!!</strong></p>) } 
            </div>
            <Backdrop show={show} />
               
              <div className={show ? "deleteModal modalOpen" : "deleteModal modalClosed" }>
                  <p><i className="fa fa-check-circle"></i> Deleted</p>
               </div>
        </div>
    )
};

export default withRouter( Mypost );
