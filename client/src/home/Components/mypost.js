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
       axios.get('http://localhost:8000/api/get/posts/'+user).then( res => (
            setPosts( res.data )
       ) );

    },[posts] )

    const deleteHandler = (id) => {
        const url = 'http://localhost:8000/api/delete/'+id;
        console.log(url);
        axios.delete(url);
        setShow(true);

        setTimeout(() => (
            setShow(false)
        ),1000);
        
        setPosts(posts);
    }

    const findpost = Object.keys(posts).filter( post => (
        posts[post].uid === user
    ) );

    return (
        <div>
            <div className="mypost-container">
                    { findpost.length > 0 && findpost.map( post => {
                        return (
                        <div className="post" key={posts[post]._id}>
                           <img alt="hostel" src={posts[post].image1}/>
                           <div className="post-body">
                              <h2 className="text-dark"><strong>{posts[post].name.toUpperCase()}</strong></h2>
                              <p>Room Available: <span className="font-color-2">{posts[post].lookingfor}</span></p>
                              <p>{posts[post].address}</p>
                              <h6><i className="fa fa-map-marker-alt"></i> {posts[post].area},{posts[post].pincode}</h6>
                              <p><strong className="text-danger">₹{posts[post].rent} </strong>/month</p>
                              <Link className="btn btn-outline-success mt-2 mr-2" to={"/fullpost?post=" + post}>
                                <i className="fa fa-eye"></i> View Details
                              </Link>
                              <button className="btn btn-outline-info mt-2 mr-2" onClick={() => props.history.push('/editpost?post='+post)}>
                                 <i className="fa fa-trash"></i> Edit post
                              </button>
                              <button className="btn btn-outline-danger mt-2" onClick={() => deleteHandler(posts[post]._id)}>
                                 <i className="fa fa-trash"></i> Delete post
                              </button>
                           </div>
                      </div>
                        )
                    } )
                
            }
                     { findpost.length > 0 ? "" : (<p className="p-5 text-center text-danger"><strong>NO POSTS FOUND!!</strong></p>) } 
            </div>
            <Backdrop show={show} />
               
              <div className={show ? "deleteModal modalOpen" : "deleteModal modalClosed" }>
                  <p><i className="fa fa-check-circle"></i> Deleted</p>
               </div>
        </div>
    )
};

export default withRouter( Mypost );
