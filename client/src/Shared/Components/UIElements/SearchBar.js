import React,{ useState,useEffect } from 'react';

import axios from 'axios';
import './SearchBar.css';
import { withRouter } from 'react-router';

const SearchBar = (props) => {
     const [search, setSearch] = useState(null);
     const [hostel, setHostel] = useState("");

     useEffect(() => {
        axios.get('http://localhost:8000/api/get/posts/name').then( res => (setSearch(res.data)) );
     },[]);

     const inputHandler = (e) => {
        setHostel(e.target.value);
     };

     const SubmitHandler = (e) => {
         e.preventDefault();
         props.history.push("/?hostel="+hostel.toLowerCase());
     }
       
    return (
        <form className="example" onSubmit={SubmitHandler}>
          <input type="list" list="search" onChange={inputHandler} placeholder="Search hostel..." name="search"/>
          <datalist id="search">
             { search && search.map( hostel => (
               <option key={hostel._id}>{hostel.name}</option>
             ) ) }
          </datalist>
          <button type="submit"><i className="fa fa-search"></i></button>
        </form>
    )
}

export default withRouter(SearchBar);
