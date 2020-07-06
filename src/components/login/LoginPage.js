import React from 'react';
import PropTypes from 'prop-types';
import { Button, 
    Container, Typography, FormControl, InputLabel, Input, TextField, makeStyles, FormHelperText, Grid
 } from '@material-ui/core'
import TopNav from '../shared/topNav/Topnav';
import {PersonPin} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      margin: '10px auto'
    },
    common: {
        color: '#A2302F',
        background: '#F1F3F5'
    },
    container: {
        display: 'block',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#FFFFFF',
        width: '30%', 
        margin: '200px auto auto auto',
        padding: '10px',
        boxShadow: '5px 10px 100px rgba(0, 0, 0, 0.25)',
        borderRadius: '7px'
    },
    userIcon: {
        color: '#A2302F'
    }
  }));
  
const LoginPage = (props) => {
    const classes = useStyles();
    return ( 
        <Container style={{margin: '0px', padding: '0px'}} maxWidth={false}>
        <TopNav/>
        <Grid className={classes.container}>
          <PersonPin className={classes.userIcon} style={{fontSize: '80px', margin: 'auto', display: 'block'}}/>
          <div style={{alignItems: 'center', width: '70%', display: 'block', margin: '0px auto 30px auto'}}>
            <FormControl className={classes.root}>
                <InputLabel style={{ padding: '3px 10px', zIndex: 1, fontSize: '15px'}} htmlFor="email-login">Email</InputLabel>
                <Input style={{padding: '3px 10px', fontSize: '15px', backgroundColor: '#F1F3F5', color: '#A2302F', }} id="email-login"/>
            </FormControl>

            <FormControl className={classes.root}>
                <InputLabel style={{ padding: '3px 10px', zIndex: 1, fontSize: '15px'}} htmlFor="password-login">Password</InputLabel>
                <Input type="password" style={{ padding: '3px 10px', fontSize: '15px', backgroundColor: '#F1F3F5', color: '#A2302F'}} id="password-login"/>
            </FormControl>
        </div>
            <Button style={{padding: '5px 35px', display: 'block', margin: 'auto auto 20px auto'}} size="medium" variant="contained" color="primary">Login</Button>
        </Grid>
    </Container>);
}
 
LoginPage.propTypes = {
    n: PropTypes.func.isRequired
}
export default LoginPage;