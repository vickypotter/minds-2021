import React from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@material-ui/core";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import MindsLogo from '../../assets/minds2021logowhite.png';
import { Link } from 'react-router-dom';
import './Schedule.css';

const useStyles = makeStyles({
    table: {
      minWidth: 350,
      width:'100%',
      textAlign:'center',
      outline:'none',
      border:'none'
    },
    tableBox : {
        width : '70%',
        textAlign:'center',
        backgroundColor:'#fff',
        boxShadow: '0 0 7px black',
        display:'flex',
        alignItems:'center',
        marginBottom:'25px',
        padding:5
        // boxShadow:'none'
    },
    container_style : {
        padding:"20px",
        backgroundColor:'transparent',
        minHeight:'100vh',
        display:'flex',
        flexDirection:'column'
    },
    schedule:{
        fontSize:'35px',
        fontFamily:'Trebuchet MS',
        fontWeight:'bold',
        textAlign:'center',
        color:'#fff'
    }
});


const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: "#0088DA",
      color: theme.palette.common.white,
      height:50,
      fontSize:16
    },
    body: {
      fontSize: 14,
      border:'none',
      borderLeft : '.2px solid #999', 
      borderRight : '.2px solid #999', 
      borderBottom : '.2px solid #999',            
    },
}))(TableCell);


function Schedule() {
    const classes = useStyles();
    return (
        <div>
            <Container fixed  className={classes.container_style}>
                <div className="schedule-minds-logo">
                    <a href='/'>
                        <img src={MindsLogo} alt="Minds logo"/>
                    </a>
                </div>
                <div className="schedule-title">
                    <Typography variant="h4" className={classes.schedule} align="center" gutterBottom>Schedule</Typography>
                </div>
                <center>
                <TableContainer component={Paper} className={classes.tableBox} id='tableContainer'>
                    <Table className={classes.table} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center">Event</StyledTableCell>
                                <StyledTableCell align="center">Date</StyledTableCell>
                                <StyledTableCell align="center">Duration</StyledTableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {/* Row 1 */}
                            <TableRow >                            
                                <StyledTableCell align="center">
                                    <Typography component={Link} to='/nethunt' variant='subtitle1' style={{textDecoration:'none', color:'black'}}> NetHunt </Typography>
                                </StyledTableCell>
                                <StyledTableCell align="center">05-Feb to 07-Feb</StyledTableCell>
                                <StyledTableCell align="center">3 Days</StyledTableCell>
                            </TableRow>

                            {/* Row 2 */}
                            <TableRow >                            
                                <StyledTableCell align="center">
                                    <Typography component={Link} to='/artistry' variant='subtitle1' style={{textDecoration:'none', color:'black'}}>Artistry</Typography>
                                </StyledTableCell>
                                <StyledTableCell align="center">06-Feb to 09-Feb</StyledTableCell>
                                <StyledTableCell align="center">4 Days</StyledTableCell>
                            </TableRow>

                            {/* Row 3 */}    
                            <TableRow align="center">
                                <StyledTableCell align="center">
                                    <Typography component={Link} to='/rendezvous' variant='subtitle1' style={{textDecoration:'none', color:'black'}}>Rendezvous - 1st Round </Typography>                                    
                                </StyledTableCell>
                                <StyledTableCell align="center" rowSpan={2}>08/02/2021</StyledTableCell>
                                <StyledTableCell align="center">04:30 PM - 05:30 PM</StyledTableCell>
                            </TableRow>

                            {/* Row 4 */}
                            <TableRow align="center">
                                <StyledTableCell align="center">
                                    <Typography component={Link} to='/rendezvous' variant='subtitle1' style={{textDecoration:'none', color:'black'}}>Rendezvous - 2st Round</Typography>
                                </StyledTableCell>
                                <StyledTableCell align="center">05:30 PM - 06:00 PM</StyledTableCell>
                            </TableRow>

                            {/* Row 5 */}
                            <TableRow>
                                <StyledTableCell align="center">
                                    <Typography component={Link} to='/thinklytics' variant='subtitle1' style={{textDecoration:'none', color:'black'}}>Thinklytics – 1st Round</Typography>
                                </StyledTableCell>
                                <StyledTableCell align="center">09/02/2021</StyledTableCell> 
                                <StyledTableCell align="center">04:30 PM - 05:30 PM</StyledTableCell>                                
                            </TableRow>

                            {/* Row 6 */}
                            <TableRow>
                                <StyledTableCell align="center">
                                    <Typography component={Link} to='/invenirer' variant='subtitle1' style={{textDecoration:'none', color:'black'}}>Invenirer</Typography> 
                                </StyledTableCell>
                                <StyledTableCell align="center">10/02/2021</StyledTableCell> 
                                <StyledTableCell align="center">04:30 PM - 06:00 PM</StyledTableCell>                                
                            </TableRow>
                            <TableRow>
                                <StyledTableCell align="center">
                                    <Typography component={Link} to='/rendezvous' variant='subtitle1' style={{textDecoration:'none', color:'black'}}>Rendezvous - Final Round</Typography>
                                </StyledTableCell>
                                <StyledTableCell align="center">13/02/2021</StyledTableCell> 
                                <StyledTableCell align="center">04:30 PM - 05:30 PM</StyledTableCell>                                
                            </TableRow>
                            <TableRow>
                                <StyledTableCell align="center">
                                    <Typography component={Link} to='/thinklytics' variant='subtitle1' style={{textDecoration:'none', color:'black'}}>Thinklytics – Final Round</Typography>
                                </StyledTableCell>
                                <StyledTableCell align="center">15/02/2021</StyledTableCell> 
                                <StyledTableCell align="center">04:30 PM - 05:30 PM</StyledTableCell>                                
                            </TableRow>
                            <TableRow>
                                <StyledTableCell align="center">
                                    <Typography component={Link} to='/kodekombat' variant='subtitle1' style={{textDecoration:'none', color:'black'}}>Kode Kombat – 1st Round</Typography>
                                </StyledTableCell>
                                <StyledTableCell align="center">16/02/2021</StyledTableCell>                                
                                <StyledTableCell align="center">04:30 PM - 05:00 PM</StyledTableCell>                                
                            </TableRow>
                            <TableRow>
                                <StyledTableCell align="center">
                                    <Typography component={Link} to='/kodekombat' variant='subtitle1' style={{textDecoration:'none', color:'black'}}>Kode Kombat – Final Round</Typography>
                                </StyledTableCell>
                                <StyledTableCell align="center">17/02/2021</StyledTableCell>                                
                                <StyledTableCell align="center">04:30 PM - 05:00 PM</StyledTableCell>                                
                            </TableRow>
                        </TableBody>
                    </Table>
                    </TableContainer>
                    </center>
            </Container>
        </div>
    )
}

export default Schedule
