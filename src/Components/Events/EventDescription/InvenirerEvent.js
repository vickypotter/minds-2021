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
import InvernirerLogo from '../../../assets/EventLogo/invernier_logo.jpg';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import PersonIcon from '@material-ui/icons/Person';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link } from 'react-router-dom';
import ReactParticles from 'react-particles-js';

function InvenirerEvent() {
    const [expanded, setExpanded] = React.useState('round1');
    const AccordionStateChange = (round) => (event, newExpanded) => {
        setExpanded(newExpanded ? round : false);
      };
    return (
        <Particles>
         <Container component='div' maxWidth='lg' className='container'>
            <div className="event-title-box">
                <div className="event-info">
                    <Typography variant="h3" align='left'>INVENIRER</Typography>
                    <hr className='hard-line'/>
                    <Typography variant='h6' align='left' gutterBottom> <br/>                    
                        Are you crazy about your knowledge in computer science and programming? Come and show all your craziness about computer science and justify your love for programming. Invenirer is a coding event where you need to find a solution for the first question and have to use the result of the first question to unleash the second question.
                    </Typography>
                </div>
                <div className="event-logo">
                    <img src={InvernirerLogo} alt="Artistry logo"/>
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
                                    <span className='list-arrow'>&#10149;</span>
                                    The participants have to solve two problems. Solve the second problem using the output of the first problem.
                                </li> 
                                <li>
                                    <span className='list-arrow'>&#10149;</span>
                                    Winners and runners will be decided based on the completion time and efficiency.
                                </li> 
                                <li>
                                    <span className='list-arrow'>&#10149;</span>
                                    Only individual participation is allowed.
                                </li>
                                <li>
                                    <span className='list-arrow'>&#10149;</span>
                                    The participants can choose their preferred programming language.
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
                        <Typography variant='h5' >31/05/2021</Typography>
                        <Typography variant='h2' gutterBottom>
                            <span>90</span> <br/>
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
                            <Tooltip title='19MX108' placement="top-end">                            
                                <span> Indhu V</span>
                            </Tooltip>
                    </Typography>                                        
                    <Typography variant='h6' gutterBottom>
                        <MailIcon className='icon'/> 
                        <span> 
                            <a className="member-contact" href="mailto:indhu.v96@gmail.com">indhu.v96@gmail.com</a> </span>
                    </Typography>
                    <Typography variant='h6'gutterBottom>
                        <PhoneIphoneIcon className='icon'/>  
                        <span>
                            <a className="member-contact" href="tel:9698914478">+91 9698914478 </a> 
                        </span>
                    </Typography>
                </div>
                <div className="member-1">
                    <Typography variant='h6' gutterBottom>
                        <PersonIcon/> 
                            <Tooltip title='19MX204' placement="top-end">                            
                                <span> Indhumathi D </span>
                            </Tooltip>
                    </Typography>                                        
                    <Typography variant='h6' gutterBottom>
                        <MailIcon className='icon'/> 
                        <span> 
                            <a className="member-contact" href="mailto:indhumathi.dcs@gmail.com">indhumathi.dcs@gmail.com</a> </span>
                    </Typography>
                    <Typography variant='h6'gutterBottom>
                        <PhoneIphoneIcon className='icon'/>  
                        <span>
                            <a className="member-contact" href="tel:8639401593">+91 8639401593 </a> 
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
                        <IconButton component={Link} to='/thinklytics' ><ArrowBackIosIcon/></IconButton>
                        <Typography variant='subtitle1' className="bottom-nav-txt">Invenirer</Typography>
                        <IconButton component={Link} to='/kodekombat'><ArrowForwardIosIcon/></IconButton>
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


export default InvenirerEvent
