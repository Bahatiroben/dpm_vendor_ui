import React from 'react';
import {Paper, makeStyles, Grid, StepButton, Link} from '@material-ui/core';
import { Dashboard, DirectionsBus, DepartureBoard, CompareArrows, Apps } from '@material-ui/icons';

const styles = makeStyles(theme => ({

    record: {
        textAlign: 'left',
        marginTop: '40px',
        paddingRight: '30px',
        paddingLeft: '14px'
    }
}))


const SideIconsMenu = () => {
    const classes = styles();
    return(
    <Grid style={{background: 'linear-gradient(180deg, #FFFFFF 100%, rgba(255, 255, 255, 0) 100%)', top: '0px', height: '100vh', borderRadius: '5px', position: 'fixed', left: '0px', color: '#A2302F', fontSize: '20px', fontWeight: '500', marginTop: '50px'}}>
        <Grid className={classes.record}>
            <Link href="/" >
                <Dashboard/>
            </Link>
        </Grid>
        <Grid className={classes.record}>
            <Link href="/buses">
                <DirectionsBus/>
            </Link>
        </Grid>
        <Grid className={classes.record}>
            <Link href="/trips">
                <DepartureBoard/>
            </Link>
        </Grid>
        <Grid className={classes.record}>
            <Link href="/routes">
                <CompareArrows/>
            </Link>
        </Grid>
    </Grid>)
}

export default SideIconsMenu;