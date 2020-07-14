import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch, Redirect } from "react-router";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux'
import './App.css';
import configureStore from './redux/store';
import LoginPage from './components/login/LoginPage';
import SignupPage from './components/signup/SignupPage'
import { MuiThemeProvider } from '@material-ui/core/styles';
import AppTheme from './assets/styles/index';
import {Dashboard} from './components/dashboard/DashboardPage';
import { SideNav } from './components/shared/sideNav/SideNav'
import Buses from './components/Buses/Buses';

function App(props) {
  return (
    <MuiThemeProvider theme={AppTheme}>
      <Provider store={configureStore()}>
        <ToastContainer />
      <div className="App">
        <Router>
          {/*<SideNav/> */}
          <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/register" component={SignupPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/buses" component={Buses} />
          <Redirect to="/404" />
          </Switch>
        </Router>
      </div>
      </Provider>
    </MuiThemeProvider>
  );
}


export default App;
