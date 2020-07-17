import React from 'react';
import { StyledTableCell } from '../tableCell/StyledTableCell'
import { Checkbox } from '@material-ui/core';

export const MakeRow = function ({record, classes, content}) {
    let TableRecord = [];
    console.log(content);
    record.forEach((element, index) => {
      if(index === 0) {
        TableRecord.push(<StyledTableCell key={index} align="left"><Checkbox size="medium" className={classes.check} style={{color: '#A2302F'}}/>{content ? content[element.key] : element.label}</StyledTableCell>);
      } else {
        TableRecord.push(<StyledTableCell key={index} align="left">{content ? content[element.key] : element.label}</StyledTableCell>);
      }
    });
    return TableRecord;
  }