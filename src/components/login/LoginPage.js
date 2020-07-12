import React from 'react';
import PropTypes from 'prop-types';
import { Button, 
    Container, FormControl, InputLabel, Input, Grid
 } from '@material-ui/core'
import TopNav from '../shared/topNav/Topnav';
import {PersonPin, Person, Lock} from '@material-ui/icons';
import {useStyles} from './login.styles';
  
const LoginPage = (props) => {
    const classes = useStyles();
    return (
        <Container className={classes.authContainer} maxWidth={false}>
        <TopNav/>
        <Grid className={classes.formContainer}>
          <PersonPin className={classes.userIcon}/>
          <div className={classes.fieldsContainer} >
            <FormControl className={classes.root}>
                <InputLabel className={classes.inputLabel} htmlFor="email-login"><Person/><span className={classes.fieldIcons}>Email</span></InputLabel>
                <Input className={classes.inputField}  id="email-login"/>
            </FormControl>

            <FormControl className={classes.root}>
                <InputLabel className={classes.inputLabel} htmlFor="password-login"><Lock/><span className={classes.fieldIcons}>Password</span></InputLabel>
                <Input type="password" className={classes.inputField} id="password-login"/>
            </FormControl>
        </div>
            <Button className={classes.submitButton} size="medium" variant="contained" color="primary">Login</Button>
        </Grid>
    </Container>);
}
 
LoginPage.propTypes = {
    n: PropTypes.func.isRequired
}
export default LoginPage;