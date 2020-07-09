import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, Grid, Input } from '@material-ui/core';
import {Edit, Delete, Add, Search} from '@material-ui/icons'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#CFCECA',
    color: '#A2302F',
    // fontSize: '20px'
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '20px',
    lineHeight: '42px',
    padding: '5px'
  },
  body: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '15px',
    lineHeight: '35px',
    padding: '0px 5px'
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:hover': {
        backgroundColor: '#FFEFEF',
        transition: 'background-color 0.5s'
    }
  },
}))(TableRow);


const useStyles = makeStyles({
  table: {
    width: '100%'
  },
  check: {
      margin: '0px 20px 4px 10px'
  },
  tableContainer: {
    width: '90%',
    margin: 'auto',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});

export default function BusesTable(props) {
  const classes = useStyles();
  const {buses} = props;
  return (
      <>
    <Grid className={classes.tableContainer}>
        <Input placeholder="Search Bus" disableUnderline style={{padding: '0px 20px', width: '30%', backgroundColor: '#FFFFFF', border: '1px solid #A2302F', borderRadius: '50px'}}/>
        
        <Grid>
            <Edit style={{padding: '5px 0px 5px 30px'}}/>
            <Delete style={{padding: '5px 0px 5px 30px'}}/>
            <Add style={{padding: '5px 5px 5px 30px', fontWeight: 'bold'}}/>
        </Grid>
    </Grid>
    <TableContainer className={classes.tableContainer} component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left"><Checkbox size="medium" className={classes.check}  style={{color: '#A2302F'}}/>Plate No</StyledTableCell>
            <StyledTableCell align="left">From</StyledTableCell>
            <StyledTableCell align="left">To</StyledTableCell>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="left">Capacity</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {buses.map((bus) => (
            <StyledTableRow key={bus.plateNo}>
              <StyledTableCell component="th" scope="row">
                <Checkbox size="medium" className={classes.check}  style={{color: '#A2302F'}}/>
                {bus.plateNo}
              </StyledTableCell>
              <StyledTableCell align="left">{bus.from}</StyledTableCell>
              <StyledTableCell align="left">{bus.to}</StyledTableCell>
              <StyledTableCell align="left">{bus.name}</StyledTableCell>
              <StyledTableCell align="left">{bus.capacity}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
