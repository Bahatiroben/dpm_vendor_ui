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
        headers: [{label: 'PlateNo', key: 'number_plate'}, {label: 'Capacity', key: 'capacity'}, {label: 'Trips', key: 'trips'}]}
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

    handleCheck = ({target}) =>{
        const {checked, id} = target;
        const {buses} = this.state;
        const checkedBuses = buses.map(bus => {
            if(id === 'header') {
                bus.checked = checked;
            }
            if(bus.id == id) {
                bus.checked = checked
            }
            return bus;
        });

        this.setState({buses: checkedBuses});
    }

    render() { 
        const {headers, buses} = this.state;
        const allChecked = buses.every(bus => bus.checked == true);
        return ( 
        <Container  maxWidth={false} >
            <BusesTable handleCheck={this.handleCheck} tableBody={buses} headers={headers} allChecked={allChecked}/>
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