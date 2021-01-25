import React from 'react';
import {Link} from 'react-router-dom';
import { Card } from '@material-ui/core';
import { Artistry,Invernier,Kodekombat,Nethunt,Rendezvous,Thinklytics } from '../../assets/index';
import { ParallaxDepthCard } from 'experiment-parallax-depth-card';
import 'experiment-parallax-depth-card/dist/index.css';
import './EventListStyle.css';
import ReactParticles from 'react-particles-js';
import MindsLogo from '../../assets/minds2021logowhite.png';

function EventList() {
    return (
        <div className="event-list-page">
            <div className="event-list-minds-logo">
                <a href='/'>
                    <img src={MindsLogo} alt="Minds logo"/>
                </a>
            </div>
            <Particles>                            
            <div className="eventPageTitle">
                <h1>Events</h1>
            </div>
            <div className="eventsBox">
                <div className="event-card" >
                    <Card component={Link} to='/artistry'>
                        <ParallaxDepthCard backgroundUrl={Artistry} title='Artistry'>
                            <p><q>Test your Creativity</q></p>
                        </ParallaxDepthCard>
                    </Card>
                </div>
                <div className="event-card">
                    <Card component={Link} to='/invenirer'>
                        <ParallaxDepthCard backgroundUrl={Invernier} title='Invenirer'>
                            <p><q>Begin From Where It Ends</q></p>
                        </ParallaxDepthCard>
                    </Card>
                </div>
                <div className="event-card">
                    <Card component={Link} to='/kodekombat'>
                        <ParallaxDepthCard backgroundUrl={Kodekombat} title='Kode Kombat'>
                            <p><q>Crack The Toughness</q></p>
                        </ParallaxDepthCard>
                    </Card>
                </div>
                <div className="event-card">
                    <Card component={Link} to='/nethunt'>
                        <ParallaxDepthCard backgroundUrl={Nethunt} title='NetHunt'>
                            <p><q>Believe in intuitions, solve the mysteries</q></p>
                        </ParallaxDepthCard>
                    </Card>
                </div>
                <div className="event-card">
                    <Card component={Link} to='/rendezvous'>
                        <ParallaxDepthCard backgroundUrl={Rendezvous} title='Rendezvous'>
                            <p><q>Test your Aptness</q></p>
                        </ParallaxDepthCard>
                    </Card>
                </div>
                <div className="event-card">
                    <Card component={Link} to='/thinklytics'>
                        <ParallaxDepthCard backgroundUrl={Thinklytics} title='Thinklytics'>
                            <p><q>Dive Deeper into the Data glut</q></p>
                        </ParallaxDepthCard>
                    </Card>
                </div>
            </div>
            </Particles>
            <footer></footer> 
        </div>
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
                    "color": '#000000'
                  }
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
                    "color": '#ffffff',
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

export default EventList

