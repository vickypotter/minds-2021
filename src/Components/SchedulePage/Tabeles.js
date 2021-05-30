import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#0088DA",
    color: theme.palette.common.white,
    fontSize:16,
  },
  body: {
    fontSize: 14,
    border:'none',
    borderLeft : '.01rem solid #999', 
    borderRight : '.01rem solid #999', 
    borderBottom : '.01rem solid #999', 
  },
}))(TableCell);

// const StyledTableRow = withStyles((theme) => ({
//   root: {
//     '&:nth-of-type(odd)': {
//       backgroundColor: theme.palette.action.hover,
//     },
//   },
// }))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
  container: {
    maxWidth: 900,
    maxHeight:600
  },
});


// const StyledTableCell = withStyles((theme) => ({
//     head: {
//       backgroundColor: "#0088DA",
//       color: theme.palette.common.white,
//     //   height:50,
//       fontSize:16
//     },
//     body: {
//       fontSize: 14,
//       border:'none',
//       borderLeft : '.2px solid #999', 
//       borderRight : '.2px solid #999', 
//       borderBottom : '.2px solid #999',            
//     },
// }))(TableCell);


export default function Tables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.container}>
        <Table className={classes.table} stickyHeader aria-label="sticky table">
            <TableHead>
                <TableRow>
                    <StyledTableCell align="center">Event</StyledTableCell>
                    <StyledTableCell align="center">Date</StyledTableCell>
                    <StyledTableCell align="center">Duration</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {/* Row - Invenirer */}
                <TableRow >                            
                    <StyledTableCell align="center">
                        <Typography component={Link} to='/invenirer' variant='subtitle1' style={{textDecoration:'none', color:'black'}}>Invenirer</Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center">04-06-2021</StyledTableCell>
                    <StyledTableCell align="center">05:00pm - 06:30pm</StyledTableCell>
                </TableRow>

                {/* Row - Thinklytics 1st */}
                <TableRow>                            
                    <StyledTableCell align="center">
                        <Typography component={Link} to='/thinklytics' variant='subtitle1' style={{textDecoration:'none', color:'black'}}>Thinklytics - 1st Round</Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center">05-06-2021</StyledTableCell>
                    <StyledTableCell align="center">05:00pm - 05:30pm</StyledTableCell>
                </TableRow>           

                {/* Row - Thinklytics 2nd */}
                <TableRow >                            
                    <StyledTableCell align="center">
                        <Typography component={Link} to='/thinklytics' variant='subtitle1' style={{textDecoration:'none', color:'black'}}>Thinklytics - Final Round</Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center">07-06-2021</StyledTableCell>
                    <StyledTableCell align="center">05:00pm - 06:00pm</StyledTableCell>
                </TableRow>          

                {/* Row - Kode Kombat 1st */}
                <TableRow >                            
                    <StyledTableCell align="center">
                        <Typography component={Link} to='/kodekombat' variant='subtitle1' style={{textDecoration:'none', color:'black'}}>Kode Kombat - 1st Round</Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center">08-06-2021</StyledTableCell>
                    <StyledTableCell align="center">05:00pm - 06:00pm</StyledTableCell>
                </TableRow>                

                {/* Row - Kode Kombat 2nd */}
                <TableRow >                            
                    <StyledTableCell align="center">
                        <Typography component={Link} to='/kodekombat' variant='subtitle1' style={{textDecoration:'none', color:'black'}}>Kode Kombat - Final Round</Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center">10-06-2021</StyledTableCell>
                    <StyledTableCell align="center">05:00pm - 06:00pm</StyledTableCell>
                </TableRow>   

                {/* Row - NetHunt */}
                <TableRow >                            
                    <StyledTableCell align="center" rowSpan={3}>
                        <Typography component={Link} to='/nethunt' variant='subtitle1' style={{textDecoration:'none', color:'black'}}>NetHunt</Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center">12-06-2021</StyledTableCell>
                    <StyledTableCell align="center"  rowSpan={2}>2 Days</StyledTableCell>
                </TableRow>

                <TableRow > 
                    <StyledTableCell align="center">13-06-2021</StyledTableCell>
                </TableRow>
                      
            </TableBody>                    
        </Table>
    </TableContainer>
  );
}
