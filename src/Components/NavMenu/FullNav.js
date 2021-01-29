import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import MenuIcon from '@material-ui/icons/Menu';
import { Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './FullNav.css';
import MindsLogo from '../../assets/minds2021_logo.png';

const useStyles = makeStyles((theme) => ({
  dialogBox:{
    backgroundImage: 'radial-gradient(circle, #1cb5e0, #0087c0, #005a9c, #002f73, #000046)'    
  },        
    box: 
    {
      height:'100%',
      overflow:'hidden',  
      // background: '#000046',  
      // background: '-webkit-linear-gradient(to right, #1CB5E0, #000046)' , 
      // background: 'linear-gradient(to right, #1CB5E0, #000046)',
      background : 'transparent',
      // backgroundImage: 'radial-gradient(circle, #1cb5e0, #0087c0, #005a9c, #002f73, #000046)'

      
    },
  appBar: {
    position: 'relative',
    boxShadow : 'none',
    color : '#000',
    // backgroundImage: 'radial-gradient(circle, #1cb5e0, #0087c0, #005a9c, #002f73, #000046)'
    background:'transparent'
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  closeBtn :{
    color:'#fff'
  },
  menuBtn:{
    float : 'right',
    margin : '10px',
    color : '#006eff',
    backgroundColor:'#fff',
    '&:hover':{
        color : '#000',
        backgroundColor:'#fff'
    }    
  },
  menuItemsBox:{
    display:'flex',
    alignItems:'center',
    flexDirection:'column',
    textAlign:'center',
    height : '100%',
    padding:0,
    marginTop:'20px'
  },
  menuLink:{
    width : '400px',
    textAlign:'center', 
  },
  menuLinkTxt:{
    "& span": {
        fontSize:'35px',
        fontWeight:'bolder',
        fontFamily:'Trebuchet MS',        
    },
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullNav() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div id="navigation">
      <IconButton variant="outlined" color="primary" className={classes.menuBtn} onClick={handleClickOpen}>
        <MenuIcon/>
      </IconButton>
      <Dialog fullScreen open={open} onClose={handleClose} className={classes.dialogBox} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}/>              
            <IconButton autoFocus color="inherit"  onClick={handleClose}>
              <CloseIcon className={classes.closeBtn}/>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box className={classes.box}>
          <center>
            <img src={MindsLogo} className='fullnav-minds-logo' alt="Minds 2021 logo"/>            
          </center>            
            <List component="ul" className={classes.menuItemsBox}>
                <ListItem component={Link} className={classes.menuLink} to='/' onClick={handleClose}>                    
                    <ListItemText  className={classes.menuLinkTxt} primary="Home" />
                    {/* <p>Home</p> */}
                </ListItem> <br/>
                <ListItem component={Link} to='/#about' className={classes.menuLink} onClick={handleClose}>                    
                    <ListItemText className={classes.menuLinkTxt} primary="About" />
                </ListItem> <br/>
                <ListItem component={Link} to='/events' className={classes.menuLink} onClick={handleClose}>                    
                    <ListItemText className={classes.menuLinkTxt} primary="Events" />
                </ListItem> <br/>                
                <ListItem component={Link} to='/schedule' className={classes.menuLink} onClick={handleClose}>                    
                    <ListItemText className={classes.menuLinkTxt} primary="Schedule" />
                </ListItem>
            </List>
        </Box>
      </Dialog>
    </div>
  );
}