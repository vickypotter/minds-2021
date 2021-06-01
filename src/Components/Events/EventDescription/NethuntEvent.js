import React from 'react';
import { 
    Container,
    Divider,
    Typography,
    Accordion,
    AccordionSummary, 
    AccordionDetails,
    IconButton,
    Tooltip} from '@material-ui/core';
import './Event_Dec_Style.css';
import NethuntLogo from '../../../assets/EventLogo/nethunt_logo.jpg';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import PersonIcon from '@material-ui/icons/Person';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link } from 'react-router-dom';
import ReactParticles from 'react-particles-js';

function NethuntEvent() {
    const [expanded, setExpanded] = React.useState('round1');
    const AccordionStateChange = (round) => (event, newExpanded) => {
        setExpanded(newExpanded ? round : false);
      };
    return (
        <Particles>
         <Container component='div' maxWidth='lg' className='container'>
            <div className="event-title-box">
                <div className="event-info">
                    <Typography variant="h3" align='left'>NETHUNT</Typography>
                    <hr className='hard-line'/>
                    <Typography variant='h6' align='left' gutterBottom> <br/>                    
                    A picture can convey multiple things and it is mysteries abound. A single word may change your mind, but a single picture can twist your mind. This is a place where you can test your intuitions and decisions. You don't always need a plan, sometimes you just need to look for hidden things, notice every aspect, and see what happens. Are you a person who observes things accurately? If yes, we present you with a challenge. A challenge that twists every strand of neurons inside your head.
                    </Typography>
                </div>
                <div className="event-logo">
                    <img src={NethuntLogo} alt="Artistry logo"/>
                </div>
            </div>
            
            <br/>
            <Divider/>
            <br/>

            <div className="rules-box">
                <Typography variant='h2' align='center' gutterBottom>Rules</Typography>
                <div className="round-rules">
                    <Accordion square expanded={expanded === 'round1'} onChange={AccordionStateChange('round1')}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                            <Typography variant='h5' className='round-1-txt'>Round #1 <span className='event-mode'>Online</span></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ul className='rules-list'>
                                <li>
                                    <span className='list-arrow'>&#10149;</span> Guess the computer science related technical term from image displayed.
                                </li>
                                <li>
                                    <span className='list-arrow'>&#10149;</span> Answers should be entered in text box provided.
                                </li>
                                <li>
                                    <span className='list-arrow'>&#10149;</span> Clues will be provided for every image after few tries.
                                </li>
                                <li>
                                    <span className='list-arrow'>&#10149;</span> For every image
                                    <li>
                                        <span className='list-arrow'>&#8658;</span> First clue appears after <b>50 hits</b> (“Hit” - Each try of word).
                                    </li>
                                    <li>
                                        <span className='list-arrow'>&#8658;</span> Second clue appears after <b>125 hits.</b>
                                    </li>
                                </li>
                                <li>
                                    <span className='list-arrow'>&#10149;</span> The answers should not contain any special characters ( , + * / &#60; &#62; &#38; ).
                                </li>
                                <li>
                                    <span className='list-arrow'>&#10149;</span> Ignore the space between the words in the answer.
                                    <li>
                                        <span className='list-arrow'>&#8658;</span> Example: “Net-Hunt” must be entered as “nethunt”, 1 must be entered as “one”.
                                    </li>
                                </li> 
                                <li>
                                    <span className='list-arrow'>&#10149;</span> In case of tie, winner will be selected based on less number of tries.
                                </li>
                                <li>
                                    <span className='list-arrow'>&#10149;</span> Any form of malpractice will lead to disqualification. Organisers have all the rights to disqualify anyone without any prior notice.
                                </li>
                                {/* <li>
                                    <span className='list-arrow'>&#10149;</span> Selection will be made after verification of student’s credentials. Students with invalid credentials will be disqualified.
                                </li>  */}
                                <li>
                                    <span className='list-arrow'>&#10149;</span> Scores will be reduced according to your hit counts.
                                </li>
                                <li>
                                    <span className='list-arrow'>&#10149;</span> Winners and runners will be decided based on the leaderboard.
                                </li>                                                              
                            </ul>
                        </AccordionDetails>
                    </Accordion>                    
                </div>
            </div>
            
            <br/>
            <Divider/>
            <br/>

            <div className="duration">
                <Typography variant='h2' align='center' id='Duration-title' gutterBottom>Schedule</Typography>
                <div className="duration-box">
                    <div className="round-1-duration">
                        <Typography variant='h6' gutterBottom>Round #1</Typography>
                        <Typography variant='h5' >12-Jun to 13-Jun</Typography>
                        <Typography variant='h2' gutterBottom>
                            <span>2</span> <br/>
                            Days
                        </Typography>                        
                    </div>
                </div>
            </div>

            <br/>
            <Divider/>
            <br/>

            <div className="coordinators">
                <Typography variant='h4' gutterBottom>Event Co-Ordinator(s) </Typography>
                <hr className="head-line-2"/>
                <div className="member-1">
                    <Typography variant='h6' gutterBottom>
                        <PersonIcon/> 
                            <Tooltip title='19MX113' placement="top-end">                            
                                <span> Logesh Kumar S </span>
                            </Tooltip>
                    </Typography>
                                        
                    <Typography variant='h6' gutterBottom>
                        <MailIcon className='icon'/> 
                        <span> 
                            <a className="member-contact" href="mailto:logeshkumarsuresh@gmail.com">logeshkumarsuresh@gmail.com</a> </span>
                    </Typography>
                    <Typography variant='h6'gutterBottom>
                        <PhoneIphoneIcon className='icon'/>  
                        <span>
                            <a className="member-contact" href="tel:8778714279">+91 8778714279 </a> 
                        </span>
                    </Typography>
                </div>

                {/* <div className="member-1">
                    <Typography variant='h6' gutterBottom>
                        <PersonIcon/> 
                            <Tooltip title='19MX120' placement="top-end">                            
                                <span> Mirrudu Bashini S </span>
                            </Tooltip>
                    </Typography>
                                        
                    <Typography variant='h6' gutterBottom>
                        <MailIcon className='icon'/> 
                        <span> 
                            <a className="member-contact" href="mailto:mirrudubashini.sakthi@gmail.com"> mirrudubashini.sakthi@gmail.com</a> </span>
                    </Typography>
                    <Typography variant='h6'gutterBottom>
                        <PhoneIphoneIcon className='icon'/>  
                        <span>
                            <a className="member-contact" href="tel:9952730885">+91 9952730885 </a> 
                        </span>
                    </Typography>
                </div> */}
            </div>

            <br/>
            <Divider/>
            <br/>

            <div className="bottom-nav">
                <center>
                    <div className="bottom-nev-box">
                        <IconButton component={Link} to='/kodekombat' ><ArrowBackIosIcon/></IconButton>
                        <Typography variant='subtitle1' className="bottom-nav-txt">NetHunt</Typography>
                        <IconButton component={Link} to='/thinklytics'><ArrowForwardIosIcon/></IconButton>
                    </div>
                </center>
            </div>

        </Container>   
        </Particles>
    )
}


function Particles({ children }) {
    return (
      <div style={{ position: 'relative' }}>
        <ReactParticles
          params={{
            "particles": {
                "number": {
                    "value": 200,
                    "density": {
                        "enable": false,
                        "value_area":600
                    }
                },
                "color":{ "value" : '#fff' },
                "shape": {
                  "type": 'circle',
                  "stroke": {
                    "width": 0,
                    "color": '#000'
                  },
                },
                "opacity": {
                  "value": 0.6,
                  "random": false,
                  "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                  }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "speed": 40,
                        "size_min": 0.1,
                        "sync":false
                    }
                },
                "line_linked": {
                    "enable": false,
                    "distance": 150,
                    "color": ' #00FFFF',
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "random": true,
                    "speed": 10,
                    "direction": "left",
                    "out_mode": "out",
                    "straight": true,
                    "bounce": false,
                    "attract": {
                      "enable": false,
                      "rotateX": 600,
                      "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "bubble"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "resize": true
                },
                "modes": {
                  "grab": {
                    "distance": 200,
                    "line_linked": {
                      "opacity": 1
                    }
                  },
                    "bubble": {
                        "distance": 250,
                        "duration": 2,
                        "size": 0,
                        "opacity": 0,
                        "speed":3

                    },
                    "repulse": {
                        "distance": 400,
                        "duration": 4
                    },
                    remove: {
                      "particles_nb": 2
                    }
                }
            }
        }}
          style={{
            position: 'absolute',
            zIndex: -2,
            left: 0,
            right: 0,
            bottom: 0,
            top: 0
          }}
        />
        {children && <div style={{ position: 'relative', zIndex:0 }}>{children}</div>}
      </div>
    );
}

export default NethuntEvent
