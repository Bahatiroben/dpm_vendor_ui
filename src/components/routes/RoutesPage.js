import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import SharedTable from '../shared/sharedTable/SharedTable';
// import {} from '@material-ui/icons';

class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = { routes: [
            {"destination": "Mbale", "route_code": "Kla-Mbale", "start_point": "Kampala"},
            {"destination": "Mbale", "route_code": "Kla-Mbale", "start_point": "Kampala"},
            {"destination": "Mbale", "route_code": "Kla-Mbale", "start_point": "Kampala"},
            {"destination": "Mbale", "route_code": "Kla-Mbale", "start_point": "Kampala"},
            {"destination": "Mbale", "route_code": "Kla-Mbale", "start_point": "Kampala"}
        ],
        headers: [{label: 'Route Code', key: 'route_code'}, 
        {label: 'From', key: 'start_point'}, 
        {label: 'To', key: 'destination'}] }
    }
    render() { 
        return ( 
        <Container  maxWidth={false} >
            <SharedTable tableBody={this.state.routes} headers={this.state.headers} />
        </Container> );
    }
}
 
export default Routes;