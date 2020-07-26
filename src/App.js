import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch, Redirect } from "react-router";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux'
import './App.css';
import configureStore from './redux/store';
import LoginPage from './components/login/LoginPage';
import { MuiThemeProvider } from '@material-ui/core/styles';
import AppTheme from './assets/styles/index';
import Dashboard from './components/dashboard/DashboardPage';
import { SideNav } from './components/shared/sideNav/SideNav'
import Buses from './components/Buses/Buses';
import Trips from './components/Trips/Trips'
import { WithAuth } from './components/withAuth/WithAuth'
import Routes from './components/routes/RoutesPage';
import SingleRoute from './components/singleRoute/SingleRoute';

function App(props) {
  return (
    <MuiThemeProvider theme={AppTheme}>
      <Provider store={configureStore()}>
        <ToastContainer />
      <div className="App">
        <Router>
          <Route component={WithAuth(SideNav)}/>
          <Switch>
          <Route exact path="/" component={WithAuth(Dashboard)}/>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/vehicles" component={WithAuth(Buses)} />
          <Route exact path="/trips" component={WithAuth(Trips)} />
          <Route exact path="/routes" component={WithAuth(Routes)} />
          <Route exact path="/routes/:id" component={WithAuth(SingleRoute)} />
          <Redirect to="/404" />
          </Switch>
        </Router>
      </div>
      </Provider>
    </MuiThemeProvider>
  );
}


export default App;
