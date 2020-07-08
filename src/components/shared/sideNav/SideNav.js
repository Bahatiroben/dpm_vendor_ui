import React from 'react';
import {Paper, makeStyles, Grid, Typography, StepButton} from '@material-ui/core';
import { PersonPin, Dashboard, DirectionsBus, DepartureBoard, CompareArrows, PlayArrow, Apps } from '@material-ui/icons';
import TouchRipple from '@material-ui/core/ButtonBase/TouchRipple'


const styles = makeStyles(theme => ({
    container: {
        width: '15%', 
        height: '100vh', 
        background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)',
        // borderRadius: '0px 80px 0px 0px',
        display: 'inline-flex',
        justifyContent: 'center',
        position: 'fixed',
    },
    logo: {
        borderRadius: '50%',
        width: '120px',
        height: '120px',
        margin: 'auto',
        display: 'block'
    },
    label: {
        position: 'relative', 
        top: '-4px'
    },
    record: {
        textAlign: 'left',
        marginBottom: '40px',
        paddingLeft: '30px'
    }
}))

export const SideNav = (props) => {
    const classes = styles();
return (
    <Paper className={classes.container} elevation={1}>
        <StepButton style={{position: 'fixed', cursor: 'pointer', borderRadius: '50%', left: '0px', width: '60px', top: '10px', fontWeight: 'bold'}}>
            <Apps style={{fontSize: '40px', color: '#A2302F'}}/>
        </StepButton>
        <Grid style={{width: '100%', position: 'relative', top: '50px'}}>
            <img className={classes.logo} alt="Bus operator logo" src='https://via.placeholder.com/150'/>
            <Grid style={{color: '#A2302F', fontSize: '20px', fontWeight: '500', marginTop: '50px'}}>
                <Grid className={classes.record}>
                    <Dashboard/>
                    <span className={classes.label}>Dashboard</span>
                </Grid>
                <Grid className={classes.record}>
                    <DirectionsBus/>
                    <span className={classes.label}>Buses</span>
                </Grid>
                <Grid className={classes.record}>
                    <DepartureBoard/>
                    <span className={classes.label}>Trips</span>
                </Grid>
                <Grid className={classes.record}>
                    <CompareArrows/>
                    <span className={classes.label}>Routes</span>
                </Grid>
            </Grid>
        </Grid>
    </Paper>
    )
};