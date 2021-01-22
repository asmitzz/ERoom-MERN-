import React,{ Component } from 'react';
import { BrowserRouter as Router,Switch,Route, Redirect} from 'react-router-dom';
import './App.css';
import Home from './home/Pages/Home';
import About from './Shared/Components/navigation/navigationItems/about';
import Work from './Shared/Components/navigation/navigationItems/work';
import Contact from './Shared/Components/navigation/navigationItems/contact';
import Login from './Authorization/login/login';
import Signup from './Authorization/signup/signup';
import fire from './Authorization/auth';
import NewPost from './home/Components/NewPost';
import FullPost from './home/Components/fullpost';
import Myposts from './home/Components/mypost';
import Nav from './Shared/Components/navigation/navigation';
import EditProfile from './UserProfile/EditProfile';
import ViewProfile from './UserProfile/ViewProfile';
import axios from "axios";
import EditMyPosts from './home/Components/EditMyPosts';
class App extends Component{

   state={
     user:"",
     uid:"",
     posts: []
   }

   componentDidMount = async() => {
       fire.auth().onAuthStateChanged( user => {
           if(user){
             this.setState({ user : user, uid: user.providerData[0].uid});
           }
           else{
             this.setState({ user : null })
           }
       });

       await axios.get("http://localhost:8000/api/get/posts").then((res) => {
        this.setState({
          posts: res.data
        });
      });

   }

  render(){
    const App = (
      <Router>
         <Nav/>
         <main>
         <Switch>
             <Route exact path="/">
                <Home postdb = {this.state.posts}/>
             </Route>
             <Route exact path="/about">
                <About/>
             </Route>
             <Route exact path="/work">
                <Work/>
             </Route> 
             <Route exact path="/contact">
               <Contact/>
             </Route>
             <Route exact path="/newpost">
                <NewPost uid={this.state.uid}/>
             </Route>
             <Route exact path="/fullpost">
                <FullPost postdb = {this.state.posts}/>
             </Route>
             <Route exact path="/myposts">
                 <Myposts uid={this.state.uid}/>
             </Route>
             <Route exact path="/editpost">
                 <EditMyPosts uid={this.state.uid}/>
             </Route>
             <Route exact path="/editprofile">
                 <EditProfile uid={this.state.uid}/>
             </Route>
             <Route exact path="/viewprofile">
                 <ViewProfile uid={this.state.uid}/>
             </Route>
             <Redirect to="/"/>
         </Switch>
         </main>
     </Router>
    );
    
    const auth = (
      <Router>
        <Switch>
           <Route exact path="/" component={Login}/>
           <Route exact path="/signup" component={Signup}/>
           <Redirect to="/"/>
        </Switch>
      </Router>
    )

    return(
        <div>
            { this.state.user ? App : auth }
        </div>
    );
  };
};

export default App;
