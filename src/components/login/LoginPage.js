import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, 
    Container, FormControl, InputLabel, Input, Grid
 } from '@material-ui/core'
import TopNav from '../shared/topNav/Topnav';
import {PersonPin, Person, Lock} from '@material-ui/icons';
import {useStyles} from './login.styles';
import { login } from '../../redux/actions/login';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '', buttonDisabled: true }
    }

    handleChange = ({target}) => {
        this.setState({[target.name]: target.value});
        if(this.state.username !== '' && this.state.password !== '') {
            this.setState({buttonDisabled: false})
        } else {
            this.setState({buttonDisabled: true}) 
        }
    }

    submit = () => {
        const {username, password} = this.state;
        const {login} = this.props;
        login({username, password});
    }

    componentWillReceiveProps(nextProps) {
        const {data, error, history} = nextProps;
        if(data) {
            toast.success(data.message);
            localStorage.setItem('DPMAccessToken', data.access_token);
            localStorage.setItem('DPMRefreshToken', data.refresh_token)
            history.push('/');
        } else {
            toast.error(error.message);
        }
    }

    render() { 
        const {username, password, buttonDisabled} = this.state;
        const classes = useStyles;
        return (<Container style={classes.authContainer} maxWidth={false}>
            <TopNav/>
            <Grid style={classes.formContainer}>
              <PersonPin style={classes.userIcon}/>
              <div style={classes.fieldsContainer} >
                <FormControl style={classes.root}>
                    <InputLabel style={classes.inputLabel} htmlFor="email-login"><Person/><span style={classes.fieldIcons}>Email</span></InputLabel>
                    <Input name="username" value={username} onChange={this.handleChange} style={classes.inputField}  id="email-login"/>
                </FormControl>
    
                <FormControl style={classes.root}>
                    <InputLabel style={classes.inputLabel} htmlFor="password-login"><Lock/><span style={classes.fieldIcons}>Password</span></InputLabel>
                    <Input name="password" value={password} onChange={this.handleChange} type="password" style={classes.inputField} id="password-login"/>
                </FormControl>
            </div>
                <Button disabled={buttonDisabled} onClick={this.submit} style={classes.submitButton} size="medium" variant="contained" color="primary">Login</Button>
            </Grid>
        </Container> );
    }
}

const mapStateToProps = ({loginReducer}) => {
    return loginReducer
}

const mapDispatchToProps = {
    login
}
 
LoginPage.propTypes = {
    login: PropTypes.func.isRequired
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);