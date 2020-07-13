import React from 'react';
import { StyledTableCell } from '../tableCell/StyledTableCell'
import { Checkbox } from '@material-ui/core';

export const MakeRow = function ({record, classes}) {
    let TableRecord = [];
    record.forEach((element, index) => {
      if(index === 0) {
        TableRecord.push(<StyledTableCell key={index} align="left"><Checkbox size="medium" className={classes.check} style={{color: '#A2302F'}}/>{element}</StyledTableCell>);
      } else {
        TableRecord.push(<StyledTableCell key={index} align="left">{element}</StyledTableCell>);
      }
    });
    return TableRecord;
  }