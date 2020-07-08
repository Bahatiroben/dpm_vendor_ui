import React from 'react';
import { Grid, Paper, Container, makeStyles, Typography} from '@material-ui/core';
import { DirectionsBus, MoreVert, DateRange, Alarm } from '@material-ui/icons';

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
        display: 'block',
        color: '#A09D96',
    }
}));

export const TripCard = (props) => {
    const classes = useStyles();

    return(
    <Paper className={classes.root}>

        <Grid>
        <Typography className={classes.source}>Kampala</Typography>
        <Grid style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center'}}>
            <Grid style={{color: '#A09D96'}}>
                <MoreVert style={{display: 'block', fontSize: '47px', height: '47px'}}/>
                <MoreVert style={{display: 'block', fontSize: '47px', height: '47px'}}/>
            </Grid>
            <Grid className={classes.busTrips}>
                <Grid style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '5px'}}>
                    <DateRange style={{fontSize: '23px', padding: '0px 10px'}}/>
                    <Typography style={{fontSize: '20px'}}>22/08/2020</Typography>
                </Grid>
                <Grid style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '5px'}}>
                    <Alarm style={{fontSize: '23px', padding: '0px 10px'}}/>
                    <Typography style={{fontSize: '20px'}}>1: 30 pm</Typography>
                </Grid>
            </Grid>
        </Grid>
        <Typography className={classes.destination}>Mukono</Typography>
        </Grid>
    </Paper>
)}