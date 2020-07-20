import React from 'react';
import { StyledTableCell } from '../tableCell/StyledTableCell'
import { Checkbox } from '@material-ui/core';

export const MakeRow = function ({record, classes, content, handleCheck, header, allChecked}) {
    let TableRecord = [];
    const checked = header ? allChecked : content && (content.checked === undefined ? false : content.checked)
    const id = header ? 'header' : content && content.id
    record.forEach((element, index) => {
      if(index === 0) {
        TableRecord.push(<StyledTableCell 
          key={index} align="left">
            <Checkbox 
            onChange={handleCheck} 
            checked={checked}  
            id={id} 
            size="medium" 
            className={classes.check} 
            style={{color: '#A2302F'}}/>
            {content ? content[element.key] : element.label}
            </StyledTableCell>);
      } else {
        TableRecord.push(<StyledTableCell key={index} align="left">{content ? content[element.key] : element.label}</StyledTableCell>);
      }
    });
    return TableRecord;
  }