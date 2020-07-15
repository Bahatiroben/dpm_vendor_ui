import React, {useState} from 'react';
import {Paper, makeStyles, Grid, Typography, StepButton, Link} from '@material-ui/core';
import { PersonPin, Dashboard, DirectionsBus, DepartureBoard, CompareArrows, PlayArrow, Apps } from '@material-ui/icons';
import TouchRipple from '@material-ui/core/ButtonBase/TouchRipple'


const styles = makeStyles(theme => ({
    container: {
        width: '15%', 
        height: '100vh', 
        background: 'linear-gradient(180deg, #FFFFFF 100%, rgba(255, 255, 255, 0) 100%)',
        // borderRadius: '0px 80px 0px 0px',
        display: 'inline-flex',
        justifyContent: 'center',
        position: 'fixed',
        zIndex: 100
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
    const [show, setShow] = useState(false);

    const toggleNav = () => {
        setShow(!show)
    }

return (
    <Paper style={show ? {left: '-15%', transition: 'left 0.5s'} : {left: '0px',  transition: 'left 0.5s'}} className={classes.container} elevation={1}>
        <StepButton style={{position: 'fixed', cursor: 'pointer', borderRadius: '50%', left: '0px', width: '60px', top: '10px', fontWeight: 'bold'}}>
            <Apps onClick={toggleNav} style={{fontSize: '40px', color: '#A2302F'}}/>
        </StepButton>
        <Grid style={{width: '100%', position: 'relative', top: '50px'}}>
            <img className={classes.logo} alt="Bus operator logo" src='https://via.placeholder.com/150'/>
            <Grid style={{color: '#A2302F', fontSize: '20px', fontWeight: '500', marginTop: '50px'}}>
                <Grid className={classes.record}>
                    <Link href="/" >
                        <Dashboard/>
                        <span className={classes.label}>Dashboard</span>
                    </Link>
                </Grid>
                <Grid className={classes.record}>
                    <Link href="/buses">
                        <DirectionsBus/>
                        <span className={classes.label}>Buses</span>
                    </Link>
                </Grid>
                <Grid className={classes.record}>
                    <Link href="/trips">
                        <DepartureBoard/>
                        <span className={classes.label}>Trips</span>
                    </Link>
                </Grid>
                <Grid className={classes.record}>
                    <Link href="/routes">
                        <CompareArrows/>
                        <span className={classes.label}>Routes</span>
                    </Link>
                </Grid>
            </Grid>
        </Grid>
    </Paper>
    )
};