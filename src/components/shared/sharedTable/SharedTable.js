import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, Grid, Input } from '@material-ui/core';
import {Edit, Delete, Add, Search} from '@material-ui/icons';
import { MakeRow } from '../tableRow/TableRow'

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
    margin: '5px auto auto 5%',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});

export default function SharedTable(props) {
  const classes = useStyles();
  const {tableBody, headers} = props;

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
            {MakeRow({record: headers, classes})}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableBody.map((row, index) => (
            <StyledTableRow>
              {
                MakeRow({record: headers, classes, content: row})
              }
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
