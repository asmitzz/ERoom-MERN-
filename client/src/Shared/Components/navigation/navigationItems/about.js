import React,{ Component } from 'react';

import './about.css';

class About extends Component{
  render(){
    return(
        <div className="about-container"> 

              <div className="main-div pb-5"> 
                  
                  <h1 className="heading pt-5">About Us</h1>
                  <h2 className="mt-5">What is E-Room?</h2>
                  <p>
                  For bachelors and working professionals, a fully furnished house and privacy at an affordable rent might seem like too much to ask in a city like Bangalore. Even if you and your friends finally land an apartment, the problem almost never ends there. There is the constant hassle of buying or renting appliances and furniture, splitting bills, looking for domestic help at reasonable prices, dealing with suspicion from neighbours and so on. Ultimately, most youngsters just give up on their dreams of a home in the city and hole themselves up in PGs and hostels that are bad in terms of food and worse in terms of privacy.
                  </p>
                  <p>
                      E-Room, started in 20__, is a technology-based solution to the problem.
		                  We are the fastest growing website in the real estate space.All partners had experienced  a common problem of finding a room in the city.Young people faced different kinds of discrimination.
                      E-room is a room rental platform that makes it easier to find your best rooms in your choice places.we created a unique rooms search platform that are available in the city.
	                </p>
                  <h2 className="pt-2">Our Vision</h2>

                  <p>
                    We believe every day is an opportunity to further perfect our strategy
                    and spur you on to achieve your organizational goals.
                    Our vision is to make you succed in yours.
                    Delivering trustworthy experiences that you cherish for a lifetime.
                  </p>
                  <h2 className="pt-2">Our Mission</h2>
                  <p>
                    Our objective to provide the client satisfaction and creativity at lowest and normal rates.
                  </p>
                  <blockquote className="quote">"To empower our clients to use the web to its full potential by
                  providing affordable,effective,custom solutions."</blockquote>
              </div>
        </div>
    );
  };
};

export default About;