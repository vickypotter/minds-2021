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
import ThinklyticsLogo from '../../../assets/EventLogo/thinklytics_logo.jpg';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import PersonIcon from '@material-ui/icons/Person';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link } from 'react-router-dom';
import ReactParticles from 'react-particles-js';

function ThinklyticsEvent() {
    const [expanded, setExpanded] = React.useState('round1');
    const AccordionStateChange = (round) => (event, newExpanded) => {
        setExpanded(newExpanded ? round : false);
      };
    return (
        <Particles>
         <Container component='div' maxWidth='lg' className='container'>
            <div className="event-title-box">
                <div className="event-info">
                    <Typography variant="h3" align='left'>Thinklytics</Typography>
                    <hr className='hard-line'/>
                    <Typography variant='h6' align='left' gutterBottom> <br/>
                        <q>
                            Are you a data abstractor? Ready to measure and manage the data? Are you looking for a platform to boost your critical thinking? Well, here is a fascinating event to explore your analytical skills. Questions get you answers. Let’s empower the world with your informational insights on data
                        </q>
                    </Typography>
                </div>
                <div className="event-logo">
                    <img src={ThinklyticsLogo} alt="Rendezvous logo"/>
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
                            <Typography variant='h5' className='round-1-txt'>Round #1 <span className='round-type'>Off-Stage</span> <span className='event-mode'>Online</span></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ul className='rules-list'>
                                <li>
                                    <span className='list-arrow'>&#10149;</span>  
                                    20 Multiple choice questions
                                </li>
                                <li>
                                    <span className='list-arrow'>&#10149;</span> 
                                    Participants should attend this round individually
                                </li>
                                <li>
                                    <span className='list-arrow'>&#10149;</span> 
                                    The questions will test both your reasoning and analytical skills
                                </li>
                            </ul>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion square expanded={expanded === 'round2'} onChange={AccordionStateChange('round2')}>
                        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                            <Typography variant='h5' className='round-2-txt'>Round #2 <span className='round-type'>On-Stage</span> <span className='event-mode'>Online</span></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ul className='rules-list'>
                                <li>
                                    <span className='list-arrow'>&#10149;</span> 
                                    Maximum 2 members per team
                                </li>
                                <li>
                                    <span className='list-arrow'>&#10149;</span> 
                                    Teams will be allotted by the coordinators based on the results from Round-1 
                                </li>
                                <li>
                                    <span className='list-arrow'>&#10149;</span> 
                                    Shortlisted teams will be announced a day before Round 2
                                </li>
                                <li>
                                    <span className='list-arrow'>&#10149;</span> 
                                    Each team will be provided with a particular data set wherein they are supposed to find out the key statistical facts from it
                                </li>
                                <li>
                                    <span className='list-arrow'>&#10149;</span> 
                                    Also, each team will be provided with a topic relevant to their dataset so that they should bring up an efficient Entity-Relationship model
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
                        <Typography variant='h5' >09/02/2021</Typography>
                        <Typography variant='h2' gutterBottom>
                            <span>60</span> <br/>
                            Minutes
                        </Typography>                        
                    </div>
                    <div className="round-2-duration">
                        <Typography variant='h6' gutterBottom>Round #2</Typography> 
                        <Typography variant='h5' >15/02/2021</Typography>
                        <Typography variant='h2' gutterBottom>
                            <span>60</span> <br/>
                            Minutes
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
                            <Tooltip title='19MX125' placement="top-end">                            
                                <span> Sanjana C </span>
                            </Tooltip>
                    </Typography>
                                        
                    <Typography variant='h6' gutterBottom>
                        <MailIcon className='icon'/> 
                        <span> 
                            <a className="member-contact" href="mailto:csanjana99@gmail.com">csanjana99@gmail.com</a> </span>
                    </Typography>
                    <Typography variant='h6'gutterBottom>
                        <PhoneIphoneIcon className='icon'/>  
                        <span>
                            <a className="member-contact" href="tel:9363388788">+91 9363388788 </a> 
                        </span>
                    </Typography>
                </div>
                
                <div className="member-1">
                    <Typography variant='h6' gutterBottom>
                        <PersonIcon/> 
                            <Tooltip title='19MX221' placement="top-end">                            
                                <span> Sophiarani S </span>
                            </Tooltip>
                    </Typography>
                                        
                    <Typography variant='h6' gutterBottom>
                        <MailIcon className='icon'/> 
                        <span> 
                            <a className="member-contact" href="mailto:sophiarani.saleem@gmail.com">sophiarani.saleem@gmail.com</a> </span>
                    </Typography>
                    <Typography variant='h6'gutterBottom>
                        <PhoneIphoneIcon className='icon'/>  
                        <span>
                            <a className="member-contact" href="tel:8838546085">+91 8778922598 </a> 
                        </span>
                    </Typography>
                </div>

                <div className="member-1">
                    <Typography variant='h6' gutterBottom>
                        <PersonIcon/> 
                            <Tooltip title='19MX111' placement="top-end">                            
                                <span>  Kiruthika Devi N </span>
                            </Tooltip>
                    </Typography>
                                        
                    <Typography variant='h6' gutterBottom>
                        <MailIcon className='icon'/> 
                        <span> 
                            <a className="member-contact" href="mailto:kiruthika.kd.99@gmail.com">kiruthika.kd.99@gmail.com</a> </span>
                    </Typography>
                    <Typography variant='h6'gutterBottom>
                        <PhoneIphoneIcon className='icon'/>  
                        <span>
                            <a className="member-contact" href="tel:8072856373">+91 8072856373 </a> 
                        </span>
                    </Typography>
                </div>
            </div>

            <br/>
            <Divider/>
            <br/>

            <div className="bottom-nav">
                <center>
                    <div className="bottom-nev-box">
                        <IconButton component={Link} to='/rendezvous' ><ArrowBackIosIcon/></IconButton>
                        <Typography variant='subtitle1' className="bottom-nav-txt">Thinklytics</Typography>
                        <IconButton component={Link} to='/artistry'><ArrowForwardIosIcon/></IconButton>
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

export default ThinklyticsEvent
