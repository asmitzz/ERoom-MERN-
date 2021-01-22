import React,{ Component } from 'react';

import './work.css';

class Work extends Component{
  render(){
    return(
        <div className="work-container"> 
              <div className="main">
                 <h2 className="heading text-center ">Work With Us</h2>
                 <p className="pt-2">
                    Welcome to E-room, dedicated to the temporary accommodation of students and other guests ,
                    with the goal of providing a comprehensive accommodation service for people of all ages looking for an
                    inexpensive place to stay in the city of Jabalpur, with good services and personalized attention.
                    We are keen to see you made your way and are interested in a collaboration.
                    we highlight the finest hostels in Jabalpur(MP).
                 </p>
                 
                 <p className="pt-2">
                 In order to keep things simple and efficient, please read our guide lines before contacting us.
                 We do not work for free.
                 We do not advertise your accommodation or product for free.
                 We never sell links on our website.
                 Please get in touch when you have a sales budget and a proposal we cannot decline.
                 </p>

                 <h1 className="display-5 pt-5">For travelers</h1>
                 <p className="pt-3">
                      We are always keen to hear from you. Throw your hostel question at us, 
                      we will be happy to help you to find the coolest hostel
                      in town when you cannot find your desired destination in our guide.
                      The intention was to provide an accommodation option for guests traveling alone or 
                      in small groups, who had shorter stays in Barcelona and therefore different needs.
                      In this way a more personalized service would be provided including individualized information and attention.
                 </p>

                <h1 className="pl-3">We are looking for people who are:</h1>
                   <ul className="pt-2 pl-5">
                     <li>Self motivated</li>
                     <li>Happy and friendly</li>
                     <li> Fun and easy-going</li>
                     <li>Enthusiastic</li>
                     <li>Patient</li>
                     <li> Organized and responsible</li>
                     <li>Proactive and creative</li>
                     <li>Speak at least two languages (Hindi and English preferred)</li>
                   </ul>
              </div>
        </div>
    );
  };
};

export default Work;