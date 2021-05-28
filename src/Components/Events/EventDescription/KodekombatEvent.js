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
import KodekombatLogo from '../../../assets/EventLogo/kodekombat_logo.jpg';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import PersonIcon from '@material-ui/icons/Person';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link } from 'react-router-dom';
import ReactParticles from 'react-particles-js';

function KodekombatEvent() {
    const [expanded, setExpanded] = React.useState('round1');
    const AccordionStateChange = (round) => (event, newExpanded) => {
        setExpanded(newExpanded ? round : false);
      };
    return (
        <Particles>
         <Container component='div' maxWidth='lg' className='container'>
            <div className="event-title-box">
                <div className="event-info">
                    <Typography variant="h3" align='left'>KODE KOMBAT</Typography>
                    <hr className='hard-line'/>
                    <Typography variant='h6' align='left' gutterBottom> <br/>                    
                        In this event, problem-solving skills will be tested. Snippets will be given and the 
                        participants will be given time to solve. The testing will be based on maximum problems 
                        solved and time taken. The participants who qualify for the second round will have to face 
                        an opponent and the one who finishes the task first will be the winner.
                    </Typography>
                </div>
                <div className="event-logo">
                    <img src={KodekombatLogo} alt="Artistry logo"/>
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
                            <Typography variant='h5' className='round-1-txt'>Round #1 <b className='round-type'>Puzzle Code</b> <span className='event-mode'>Online</span></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ul className='rules-list'>
                                <li>
                                    <span className='list-arrow'>&#10149;</span>
                                    This round consists of 20 code snippets.
                                </li>                                
                                <li>
                                    <span className='list-arrow'>&#10149;</span> 
                                    The participants will be solving either by rearranging the jumbled snippets or by solving the snippet to get the expected output.
                                </li>
                                <li>
                                    <span className='list-arrow'>&#10149;</span> 
                                    This event will be conducted in the online platform, Kahoot.
                                </li>
                                <li>
                                    <span className='list-arrow'>&#10149;</span> 
                                    Only individual participation is allowed.
                                </li>
                                <li>
                                    <span className='list-arrow'>&#10149;</span>Language: <b>C</b>
                                </li>
                            </ul>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion square expanded={expanded === 'round2'} onChange={AccordionStateChange('round2')}>
                        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                            <Typography variant='h5' className='round-2-txt'>Round #2 <b className='round-type'>Code Wrestling</b> <span className='event-mode'>Online</span></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ul className='rules-list'>
                                <li>
                                    <span className='list-arrow'>&#10149;</span>
                                    In this round, the selected participants from the first round will be competing against another participant (one to one).
                                </li>
                                <li>
                                    <span className='list-arrow'>&#10149;</span>
                                    The participant who completes the task in the shortest time will be declared as the winner.
                                </li>
                                <li>
                                    <span className='list-arrow'>&#10149;</span>Language: <b>C, C++, Java </b>                                   
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
                        <Typography variant='h5' >02/06/2021</Typography>
                        <Typography variant='h2' gutterBottom>
                            <span>30</span> <br/>
                            Minutes
                        </Typography>                        
                    </div>
                    <div className="round-2-duration">
                        <Typography variant='h6' gutterBottom>Round #2</Typography> 
                        <Typography variant='h5' >04/06/2021</Typography>
                        <Typography variant='h2' gutterBottom>
                            <span>30</span> <br/>
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
                            <Tooltip title='19MX222' placement="top-end">                            
                                <span> Susmitha J </span>
                            </Tooltip>
                    </Typography>
                                        
                    <Typography variant='h6' gutterBottom>
                        <MailIcon className='icon'/> 
                        <span> 
                            <a className="member-contact" id='long-mail' href="mailto:susmithajaganathan99@gmail.com">susmithajaganathan99@gmail.com</a> </span>
                    </Typography>
                    <Typography variant='h6'gutterBottom>
                        <PhoneIphoneIcon className='icon'/>  
                        <span>
                            <a className="member-contact" href="tel:9791408848">+91 9791408848 </a> 
                        </span>
                    </Typography>
                </div>

                <div className="member-1">
                    <Typography variant='h6' gutterBottom>
                        <PersonIcon/> 
                            <Tooltip title='19MX123' placement="top-end">                            
                                <span> Pooja M </span>
                            </Tooltip>
                    </Typography>
                                        
                    <Typography variant='h6' gutterBottom>
                        <MailIcon className='icon'/> 
                        <span> 
                            <a className="member-contact" href="mailto:poojamhk1221@gmail.com">poojamhk1221@gmail.com</a> </span>
                    </Typography>
                    <Typography variant='h6'gutterBottom>
                        <PhoneIphoneIcon className='icon'/>  
                        <span>
                            <a className="member-contact" href="tel:9952476890">+91 9952476890 </a> 
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
                        <IconButton component={Link} to='/invenirer' ><ArrowBackIosIcon/></IconButton>
                        <Typography variant='subtitle1' className="bottom-nav-txt"> Kode Kombat</Typography>
                        <IconButton component={Link} to='/nethunt'><ArrowForwardIosIcon/></IconButton>
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

export default KodekombatEvent
