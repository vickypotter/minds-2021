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
import RendezvousLogo from '../../../assets/EventLogo/rendezvous_logo.jpg';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import PersonIcon from '@material-ui/icons/Person';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link } from 'react-router-dom';
import ReactParticles from 'react-particles-js';

function RendezvouEvent() {
    const [expanded, setExpanded] = React.useState('round1');
    const AccordionStateChange = (round) => (event, newExpanded) => {
        setExpanded(newExpanded ? round : false);
      };
    return (
        <Particles>
         <Container component='div' maxWidth='lg' className='container'>
            <div className="event-title-box">
                <div className="event-info">
                    <Typography variant="h3" align='left'>Rendezvous</Typography>
                    <hr className='hard-line'/>
                    <Typography variant='h6' align='left' gutterBottom> <br/>
                        <q>
                            Is there a way to test your soft skill, technical skill, and know where you stand among all of the participants? Rendezvous is an interview event that helps the participants to know their skills
                        </q>
                    </Typography>
                </div>
                <div className="event-logo">
                    <img src={RendezvousLogo} alt="Rendezvous logo"/>
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
                            <Typography variant='h5' className='round-1-txt'>Round #1 <b>Aptitude and Coding MCQ</b> <span className='event-mode'>Online</span></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ul className='rules-list'>
                                <li>
                                    <span className='list-arrow'>&#10149;</span>
                                    This round will be held in Kahoot!
                                </li>
                                <li>
                                    <span className='list-arrow'>&#10149;</span>
                                    Aptitude and Technical tests are conducted to enhance the skills of the participants
                                </li>
                                <li>
                                    <span className='list-arrow'>&#10149;</span>
                                    The aptitude test consists of 20 questions from quants, reasoning and verbal 
                                </li>
                                <li>
                                    <span className='list-arrow'>&#10149;</span>
                                    The technical test consists of 10 questions from DBMS, OS, C++, Python, Java, etc.,
                                </li>
                                <li>
                                    <span className='list-arrow'>&#10149;</span>
                                    Top 20 participants will enter Round 2
                                </li>
                            </ul>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion square expanded={expanded === 'round2'} onChange={AccordionStateChange('round2')}>
                        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                            <Typography variant='h5' className='round-2-txt'>Round #2 <b>Group Discussion</b> <span className='event-mode'>Online</span></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ul className='rules-list'>
                                <li>
                                    <span className='list-arrow'>&#10149;</span> 
                                    This round will be held in Google meet
                                </li>
                                <li>
                                    <span className='list-arrow'>&#10149;</span> 
                                    There will be 4 teams consisting of 5 members each
                                </li>
                                <li>
                                    <span className='list-arrow'>&#10149;</span> 
                                    For each team, there will be at least two judges to lead the group discussion
                                </li>
                                <li>
                                    <span className='list-arrow'>&#10149;</span> 
                                    Judging criteria focuses on soft skill of the participants 
                                </li>
                                <li>
                                    <span className='list-arrow'>&#10149;</span> 
                                    The best participant from each team will enter Round 3
                                </li>
                            </ul>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion square expanded={expanded === 'round3'} onChange={AccordionStateChange('round3')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                            <Typography variant='h5' className='round-2-txt'>Round #3 <b>HR</b> <span className='event-mode'>Online</span></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ul className='rules-list'>
                                <li>
                                    <span className='list-arrow'>&#10149;</span> 
                                    Before starting the HR round, all the selected participants are expected to upload their resume 
                                </li>
                                <li>
                                    <span className='list-arrow'>&#10149;</span> 
                                    This round concentrates on both soft and technical skills
                                </li>
                                <li>
                                    <span className='list-arrow'>&#10149;</span> 
                                    The best participant would be the winner
                                </li>
                                <li>
                                    <span className='list-arrow'>&#10149;</span> 
                                    15-20 minutes duration per participant
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
                        <Typography variant='h5' >05/02/2021</Typography>
                        <Typography variant='h2' gutterBottom>
                            <span>60</span> <br/>
                            Minutes
                        </Typography>                        
                    </div>
                    <div className="round-2-duration">
                        <Typography variant='h6' gutterBottom>Round #2</Typography> 
                        <Typography variant='h5' >09/02/2021</Typography>
                        <Typography variant='h2' gutterBottom>
                            <span>30</span> <br/>
                            Minutes
                        </Typography>                        
                    </div>
                    <div className="round-2-duration">
                        <Typography variant='h6' gutterBottom>Round #3</Typography> 
                        <Typography variant='h5' >11/02/2021</Typography>
                        <Typography variant='h2' gutterBottom>
                            <span>20</span> <br/>
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
                            <Tooltip title='19MX223' placement="top-end">                            
                                <span> Thilakalakshmi V </span>
                            </Tooltip>
                    </Typography>
                                        
                    <Typography variant='h6' gutterBottom>
                        <MailIcon className='icon'/> 
                        <span> 
                            <a className="member-contact" href="mailto:thilakalakshmi99@gmail.com">thilakalakshmi99@gmail.com</a> </span>
                    </Typography>
                    <Typography variant='h6'gutterBottom>
                        <PhoneIphoneIcon className='icon'/>  
                        <span>
                            <a className="member-contact" href="tel:7538889489">+91 7538889489 </a> 
                        </span>
                    </Typography>
                </div>

                <div className="member-1">
                    <Typography variant='h6' gutterBottom>
                        <PersonIcon/> 
                            <Tooltip title='19MX218' placement="top-end">                            
                                <span> Selva Bharathi S </span>
                            </Tooltip>
                    </Typography>
                                        
                    <Typography variant='h6' gutterBottom>
                        <MailIcon className='icon'/> 
                        <span> 
                            <a className="member-contact" href="mailto:bharathiselvam.sb20@gmail.com">bharathiselvam.sb20@gmail.com</a> </span>
                    </Typography>
                    <Typography variant='h6'gutterBottom>
                        <PhoneIphoneIcon className='icon'/>  
                        <span>
                            <a className="member-contact" href="tel:8838546085">+91 8838546085 </a> 
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
                        <IconButton component={Link} to='/nethunt' ><ArrowBackIosIcon/></IconButton>
                        <Typography variant='subtitle1' className="bottom-nav-txt">Rendezvous</Typography>
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

export default RendezvouEvent
