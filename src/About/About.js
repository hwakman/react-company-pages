import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css'

const BgImg = {backgroundImage:"url('https://source.unsplash.com/LAaSoL0LrYs/1920x1080')",minHeight:"95vh"};

class About extends Component {
    render(){
        return(
            <div className="container-fluid" style={BgImg}>
            <div className="row content-about">
                <div className="col-10 text-light content-about-text shadow">
                    <h1>About</h1>
                    <hr />
                    <p >
                    Nike might seem like a company that's too big to inspire smaller businesses. <br />
                    You might even wonder if Nike even still has an "About Us" page. <br />
                    As a matter of fact, it does, and it hasn't forgotten the company's roots.<br />
                    Nike began on the campus of the University of Oregon by the hand of the college's track coach, Bill Bowerman. <br />
                    And even though he no longer works at the company, <br />
                    one of his beloved quotes still brands the bottom of Nike's "About Us" page below: "If you have a body,
                    you are an athlete."<br />
                    This bold sentence, referenced by the asterisked "Athlete" in the words right above it, <br />
                    sheds important light on Nike's audience. The brand may be big today, <br />
                    but Nike is all about the rising stars -- who Nike depends on to, according to the rest of its "About Us" page, <br />
                    "expand human potential."<br />
                    The takeaway for marketers? Know your audience, and make it obvious to that audience the instant they read about you on your website.
                    </p>
                    <hr />
                    <p>
                        E-mail : example@gmail.com <br />
                        Phone : +66 xxx xxxx ||
                        Phone2 : +66 xxx xxxx <br />
                        Address : xxx xxx xxxx at xxxx <br />
                    </p>
                </div>
            </div>
            </div>
        )
    }
}

export default About;