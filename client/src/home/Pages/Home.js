import React,{ Component } from 'react';

import Posts from '../Components/posts';
import Filter from '../Components/filter';
import './Home.css';
class Home extends Component{
  render(){
    return(
        <div> 
           <p className="FilterNotMatch"><strong>No Posts Found!!</strong></p>
           <Filter postdb = {this.props.postdb}/>
           <Posts/>
        </div>
    );
  };
};

export default Home;