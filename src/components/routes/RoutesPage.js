import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import SharedTable from '../shared/sharedTable/SharedTable';
import { getRoutes } from '../../redux/actions/getRoutesAction';
import { connect } from 'react-redux';
import {toast} from 'react-toastify';
// import {} from '@material-ui/icons';

class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = { routes: [],
        headers: [{label: 'Route Code', key: 'route_code'}, 
        {label: 'From', key: 'start_point'}, 
        {label: 'To', key: 'destination'}] }
    }

    componentDidMount() {
        const { getRoutes } = this.props;
        getRoutes();
    }

    componentWillReceiveProps(nextProps) {
        console.log(">>>>>>>>>>", nextProps)
        const {routes: {data, error}} = nextProps;

        if(error) {
            toast.error(error.message);
        } else {
            this.setState({routes: data});
        }
    }

    render() { 
        return ( 
        <Container  maxWidth={false} >
            <SharedTable tableBody={this.state.routes} headers={this.state.headers} />
        </Container> );
    }
}

const mapStateToProps = ({routes}) => {
    return {routes}
}

const mapDispatchToProps = {
    getRoutes
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Routes);