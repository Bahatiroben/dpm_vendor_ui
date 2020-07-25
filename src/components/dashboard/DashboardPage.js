import React, {useState, useEffect} from 'react';
import { SideNav } from '../shared/sideNav/SideNav';
import { Paper, Button, Container, Typography, makeStyles, Grid } from '@material-ui/core';
import { TrendingUp, Alarm } from '@material-ui/icons';
import { RouteCard } from '../shared/routeCard/RouteCard';
import { TripCard} from '../shared/tripCard/TripCard';
import { getTrips } from '../../redux/actions/getTripsAction';
import { getRoutes } from '../../redux/actions/getRoutesAction';
import {connect} from 'react-redux';
import { toast } from 'react-toastify';

export const useStyles = makeStyles((theme) => ({
    container: {
        width: '100%',
        display: 'block',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: '100',
        padding: '0px 0px 0px 5%'
    },
    title: {
        display: 'inline-flex',
        color: '#A2302F'
    }
  }));

const Dashboard = (props) => {
    const classes=useStyles();
    const [trips, setTrips]=useState([]);
    const [routes, setRoutes]=useState([]);

    useEffect(() => {
        const {getRoutes, getTrips} = props;
        getRoutes();
        getTrips();
    }, []);

    useEffect(() => {
        const {trips, routes} = props;
        if(trips.error || routes.error) {
            if(trips.error) {
                toast.error(trips.error.message);
            }

            if(routes.error) {
                toast.error(routes.error.message);
            }
        };

        if(trips.data || routes.data) {
            if(routes.data) {
                setRoutes(routes.data);
            }

            if(trips.data) {
                setTrips(trips.data);
            }
        }
    }, [props.routes, props.trips]);

    return (
        <Container maxWidth={false} className={classes.container}>
            <Grid style={{color: '#A2302F', fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 'normal', fontSize: '48px', lineHeight: '56px', textAlign: 'center' }}>Dashboard</Grid>
            <Grid className={classes.title}>
                <TrendingUp style={{padding: '0 5px', fontSize: '35px'}}/>
                <Typography style={{fontSize: '25px'}}>Trending Routes</Typography>
            </Grid>
            <Container maxWidth={false} style={{display: 'flex', flexWrap: 'wrap'}}>
                {
                    routes.map(route => <RouteCard route={route}/>)
                }
            </Container>
            <Grid className={classes.title}>
                <Alarm style={{padding: '0 5px', fontSize: '35px'}}/>
                <Typography style={{fontSize: '25px'}}>Upcoming Trips</Typography>
            </Grid>
            <Container maxWidth={false} style={{display: 'flex', flexWrap: 'wrap'}}>
                {
                    trips.map(trip => <TripCard trip={trip}/>)
                }
            </Container>
        </Container>)
};

const mapStateToProps = ({trips, routes}) => {
    return {trips, routes}
};

const mapDispatchToProps = {
    getRoutes,
    getTrips
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)