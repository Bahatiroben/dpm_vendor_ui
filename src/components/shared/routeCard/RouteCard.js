import React from 'react';
import { Grid, Paper, Container, makeStyles, Typography} from '@material-ui/core';
import { DirectionsBus, MoreVert } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '292px',
        height: '170px',
        background: '#EEEEEE',
        boxShadow: '4px 5px 6px rgba(162, 48, 47, 0.06)',
        borderRadius: '5px',
        margin: '20px 20px'
    },
    destination: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '24px',
        lineHeight: '28px',
        color: '#865E5D',
        padding: '0px 20px 10px 20px'
    },
    source: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '24px',
        lineHeight: '28px',
        color: '#865E5D', 
        padding: '7px 20px 0px 20px'
        
    },
    busTrips: {
        display: 'inline-flex',
        color: '#A09D96',
    }
}));

export const RouteCard = (props) => {
    const classes = useStyles();

    return(
    <Paper className={classes.root}>

        <Grid>
        <Typography className={classes.source}>Kampala</Typography>
        <Grid style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'cnter'}}>
            <Grid style={{color: '#A09D96'}}>
                <MoreVert style={{display: 'block', fontSize: '47px', height: '47px'}}/>
                <MoreVert style={{display: 'block', fontSize: '47px', height: '47px'}}/>
            </Grid>
            <Grid className={classes.busTrips}>
                <DirectionsBus style={{fontSize: '35px', padding: '0px 10px'}}/>
                <Typography style={{fontSize: '25px'}}>345 Trips</Typography>
            </Grid>
        </Grid>
        <Typography className={classes.destination}>Mukono</Typography>
        </Grid>
    </Paper>
)}