import React from 'react';
import { Typography, Tooltip, Button, IconButton } from '@material-ui/core'
import MailIcon from '@material-ui/icons/Mail';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import SendIcon from '@material-ui/icons/Send';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-box'>
            <div className='footer-content'>
                <Typography variant="h5" className='contact-title'>Contact <span className='dot'></span></Typography>
                <hr className="footer-line"/>
                <div className="footer-flex-box">
                    <div className="contact contact-1">
                        <Tooltip title='19MX126' placement="top"> 
                            <Typography variant="h6">Vishnubalaji R K <br/> <span className='roll'>Secretary</span></Typography>
                        </Tooltip>
                        <Button className='footer-contact-btn' href="mailto:caa_secretary@yahoo.com " color="primary" startIcon={<MailIcon/>}>caa_secretary@yahoo.com</Button> <br/>                        
                        <Button className='footer-contact-btn' href="tel:9677789028" color="primary" startIcon={<PhoneIphoneIcon/>}>+91 96777 89028</Button> 
                    </div> 
                    <div className="contact contact-2">
                        <Tooltip title='19MX116' placement="top">
                            <Typography variant="h6">Madhumitha G <br/><span className='roll'>Treasurer</span></Typography>
                        </Tooltip>
                        <Button className='footer-contact-btn'  href="mailto:madhumithagopi19@gmail.com" color="primary" startIcon={<MailIcon/>}>madhumithagopi19@gmail.com</Button> <br/>                        
                        <Button className='footer-contact-btn' href="tel:99420 53628" color="primary" startIcon={<PhoneIphoneIcon/>}>+91 99420 53628</Button> 
                    </div>                    
                </div>
                <center>
                    <Button href="mailto:minds2k21@gmail.com" className='minds-2021-mail' color="primary" startIcon={<MailIcon/>} endIcon={<SendIcon/>}>minds2k21@gmail.com</Button>
                </center>

                <div className="dev-team">
                    <Typography variant="h6" className='dev-team-tittle' color="white">Dev Team</Typography> <br/>
                    <div className="dev-team-flex-box">
                        <div className="dev-member dev-1">
                            <Tooltip title='19MX212' placement="top">
                                <Typography variant="h6">Raghul A <br/> <span className='dev-roll'>Web Dev</span></Typography>                            
                            </Tooltip>
                            <div className="dev-contact">
                                <IconButton href="mailto:ragrakarun36@gmail.com" ><MailOutlineOutlinedIcon className='dev-contact-icon'/></IconButton>
                                <IconButton href="https://www.linkedin.com/in/raghul-a-4931161b4/"><LinkedInIcon className='dev-contact-icon' /></IconButton>
                                <IconButton href="https://instagram.com/raghul_rx?r=nametag"><InstagramIcon className='dev-contact-icon' /></IconButton>
                            </div>
                        </div>
                        <div className="dev-member dev-3">
                            <Tooltip title="19MX214" placement="top">
                                <Typography variant="h6" gutterBottom>Ram Vignesh Kumar K <br/> <span className='dev-roll'>Web Dev</span> </Typography>                            
                            </Tooltip>
                            <div className="dev-contact">
                                <IconButton href="mailto:ramkumar.k.mrc03@gmail.com" ><MailOutlineOutlinedIcon className='dev-contact-icon'/></IconButton>
                                <IconButton href="https://www.linkedin.com/in/ram-vignesh-kumar-k-6635bb187/"><LinkedInIcon className='dev-contact-icon'/></IconButton>
                                <IconButton href="https://www.instagram.com/_.ramkarthik._rk?r=nametag"><InstagramIcon className='dev-contact-icon'/></IconButton>
                            </div>
                        </div>
                        <div className="dev-member dev-3">
                            <Tooltip title="19MX102" placement="top">
                                <Typography variant="h6" gutterBottom>Deepakkumar G <br/> <span className='dev-roll'> Graphics Designer</span> </Typography>
                                
                            </Tooltip>
                            <div className="dev-contact">
                                <IconButton href="mailto:deepakkumar88838666045@gmail.com" ><MailOutlineOutlinedIcon className='dev-contact-icon'/></IconButton>
                                <IconButton href="https://www.linkedin.com/in/deepak-kumar-gd"><LinkedInIcon className='dev-contact-icon'/></IconButton>
                                <IconButton href="https://instagram.com/deepak_gd_edeozer/"><InstagramIcon className='dev-contact-icon' /></IconButton>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-nav-link">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li> | </li>
                        <li>
                            <Link to="/#about">About</Link> 
                        </li>
                        <li> | </li>
                        <li>
                            <Link to="/events">Events</Link>
                        </li>
                        <li> | </li>
                        <li>
                            <Link to="/schedule">Schedule</Link> 
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
