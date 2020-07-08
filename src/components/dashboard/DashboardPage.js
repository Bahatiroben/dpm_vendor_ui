import React from 'react';
import { SideNav } from '../shared/sideNav/SideNav';
import { Paper, Button, Container, Typography, makeStyles, Grid } from '@material-ui/core';
import { TrendingUp, Alarm } from '@material-ui/icons';
import { RouteCard } from '../shared/routeCard/RouteCard';
import {TripCard} from '../shared/tripCard/TripCard';

export const useStyles = makeStyles((theme) => ({
    container: {
        width: '100%',
        display: 'block',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: '100',
        padding: '0px 0px 0px 13%'
    },
    title: {
        display: 'inline-flex',
        color: '#A2302F'
    }
  }));

export const Dashboard = (props) => {
    const classes=useStyles();
    return (
        <Container maxWidth={false} className={classes.container}>
            <Grid style={{color: '#A2302F', fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 'normal', fontSize: '48px', lineHeight: '56px', textAlign: 'center' }}>Dashboard</Grid>
            <Grid className={classes.title}>
                <TrendingUp style={{padding: '0 5px', fontSize: '35px'}}/>
                <Typography style={{fontSize: '25px'}}>Trending Routes</Typography>
            </Grid>
            <Container maxWidth={false} style={{display: 'flex', flexWrap: 'wrap'}}>
                <RouteCard/><RouteCard/><RouteCard/><RouteCard/><RouteCard/>
                <RouteCard/><RouteCard/><RouteCard/><RouteCard/><RouteCard/>
            </Container>
            <Grid className={classes.title}>
                <Alarm style={{padding: '0 5px', fontSize: '35px'}}/>
                <Typography style={{fontSize: '25px'}}>Upcoming Trips</Typography>
            </Grid>
            <Container maxWidth={false} style={{display: 'flex', flexWrap: 'wrap'}}>
                <TripCard/><TripCard/><TripCard/><TripCard/><TripCard/>
                <TripCard/><TripCard/><TripCard/><TripCard/><TripCard/>
            </Container>
        </Container>)
};
