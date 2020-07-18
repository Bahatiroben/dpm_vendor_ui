import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import BusesTable from '../shared/sharedTable/SharedTable';
import {getVehicles} from '../../redux/actions/getVehiclesAction';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
// import {} from '@material-ui/icons';

class Buses extends Component {
    constructor(props) {
        super(props);
        this.state = { buses: [],
        headers: [{label: 'PlateNo', key: 'plate'}, {label: 'Capacity', key: 'capacity'}, {label: 'Trips', key: 'trips'}]}
    }

    componentDidMount() {
        const { getVehicles } = this.props;
        getVehicles();
    }

    componentWillReceiveProps(nextProps) {
        const {vehicles: {data, error}} = nextProps;
        if(error) {
            console.log({...error})
            toast.error(error.message)
        } else {
            const mappedData = data.map(entry => {
                entry.trips = entry.trips.length;
                return entry
            })
            this.setState({buses: mappedData})
        }
    }

    render() { 
        return ( 
        <Container  maxWidth={false} >
            <BusesTable tableBody={this.state.buses} headers={this.state.headers} />
        </Container> );
    }
}

const mapStateToProps = ({vehicles}) => {
    return {vehicles}
};

const mapDispatchToprops = {
    getVehicles
};
 
export default connect(mapStateToProps, mapDispatchToprops)(Buses);