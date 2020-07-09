import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import BusesTable from '../shared/busesTable/BusesTable';
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
        ] }
    }
    render() { 
        return ( 
        <Container maxWidth={false} >
            <BusesTable buses={this.state.buses}/>
        </Container> );
    }
}
 
export default Buses;