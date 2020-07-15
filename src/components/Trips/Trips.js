import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import SharedTable from '../shared/sharedTable/SharedTable';
// import {} from '@material-ui/icons';

class Trips extends Component {
    constructor(props) {
        super(props);
        this.state = { trips: [
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
        const headers = ['PlateNo', 'From', 'To', 'Name', 'Capacity'];
        return ( 
        <Container maxWidth={false} >
            <SharedTable tableBody={this.state.trips} headers={headers} buses={this.state.buses}/>
        </Container> );
    }
}
 
export default Trips;