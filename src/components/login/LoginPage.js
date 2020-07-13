import React from 'react';
import PropTypes from 'prop-types';
import { Button, 
    Container, FormControl, InputLabel, Input, Grid
 } from '@material-ui/core'
import TopNav from '../shared/topNav/Topnav';
import {PersonPin, Person, Lock} from '@material-ui/icons';
import {useStyles} from './login.styles';
import { login } from '../../redux/actions/login';
import { connect } from 'react-redux';
  
const LoginPage = (props) => {
    const classes = useStyles();
    const { login } = props;

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
            <Button onClick={() => login({username: 'bahati@test.com', password: 'Root1123#'})} className={classes.submitButton} size="medium" variant="contained" color="primary">Login</Button>
        </Grid>
    </Container>);
}

const mapStateToProps = (state) => {
return state
}

const mapDispatchToProps = {
    login
}
 
LoginPage.propTypes = {
    login: PropTypes.func.isRequired
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);