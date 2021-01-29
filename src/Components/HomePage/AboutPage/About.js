import React from 'react';
import './About.css';
import MindsLogo from '../../../assets/minds2021logowhite.png';
function About() {
    return (
        <div className="about-page" id="about">
            <div className="about-minds-logo">
                <a href="/"><img src={MindsLogo} alt="Minds Logo"/></a>
            </div> 
            <center>           
                <div className="about-box">
                    <h3 className='about-title'>About</h3>
                    <p className='about-content'>
                        Presenting the most exciting tech fest MINDS-2k21 Organized by Computer 
                        Applications Association, Department of Computer Applications, PSG College of technology. <br/> <br/>
                        MINDS is an intra - departmental annual event hosted by the second year MCA students exclusively 
                        for the freshers featuring an array of technical and non - technical events that helps the student 
                        fraternity explore various dynamics of technology and knowledge. <br/> <br/>
                        The purpose of this event is to spread technical knowledge among students.
                        Unleash the creative genius in you by signing yourself up for a fun and interesting 10 day techno fest!
                    </p>
                </div>
            </center>
        </div>
    )
}

export default About
