import React from 'react';
import ReactParticles from "react-particles-js";
import './MainAnimation.css';
import MindsLogo from '../../../assets/minds_2021_Logo.png';
import Tilt from 'react-parallax-tilt';

function MainAnimation() {
    return (
        <div className='main-page'>            
          <Particles>          
            <div className="main-page-logo-box">
                <Tilt tiltReverse={true}>
                    <img src={MindsLogo} alt="" className="main-page-minds-logo"/>
                </Tilt>
                <a href="#about" className='read-more-btn'><span className='explore-span'>Explore</span></a>
            </div>
          </Particles>            
        </div>
    )
}


function Particles({ children }) {
    return (
      <div style={{ position: 'relative', minHeight:'100vh' }} id="home-page-particles">
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
          
        />
        {children && <div className="child-box">{children}</div>}
      </div>
    );
  }
export default MainAnimation
