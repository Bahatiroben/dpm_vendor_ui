import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import BusesTable from '../shared/sharedTable/SharedTable';
// import {} from '@material-ui/icons';

class Buses extends Component {
    constructor(props) {
        super(props);
        this.state = { buses: [
            {plateNo: 'RAB 234 Z', from: 'Kampala', to: 'Mukono', name: 'Roller coaster', capacity: 63},
            {plateNo: 'RAB 234 Z', from: 'Kampala', to: 'Mukono', name: 'Roller coaster', capacity: 63},
            {plateNo: 'RAB 234 Z', from: 'Kampala', to: 'Mukono', name: 'Roller coaster', capacity: 63},
            {plateNo: 'RAB 234 Z', from: 'Kampala', to: 'Mukono', name: 'Roller coaster', capacity: 63},
            {plateNo: 'RAB 234 Z', from: 'Kampala', to: 'Mukono', name: 'Roller coaster', capacity: 63},
            {plateNo: 'RAB 234 Z', from: 'Kampala', to: 'Mukono', name: 'Roller coaster', capacity: 63},
            {plateNo: 'RAB 234 Z', from: 'Kampala', to: 'Mukono', name: 'Roller coaster', capacity: 63},
        ],
        headers: ['PlateNo', 'From', 'To', 'Name', 'Capacity'] }
    }
    render() { 
        return ( 
        <Container  maxWidth={false} >
            <BusesTable tableBody={this.state.buses} headers={this.state.headers} />
        </Container> );
    }
}
 
export default Buses;