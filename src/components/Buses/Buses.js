import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import BusesTable from '../shared/sharedTable/SharedTable';
import {getVehicles} from '../../redux/actions/getVehiclesAction';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import AddBus from './AddBus';
import { addVehicle } from '../../redux/actions/addVehicleAction'
// import {} from '@material-ui/icons';

class Buses extends Component {
    constructor(props) {
        super(props);
        this.state = { buses: [], newVehicle: {}, showAdd: false,
        headers: [{label: 'PlateNo', key: 'number_plate'}, {label: 'Capacity', key: 'capacity'}, {label: 'Trips', key: 'trips'}]}
    }

    componentDidMount() {
        const { getVehicles } = this.props;
        getVehicles();
    }

    componentWillReceiveProps(nextProps) {
        const {vehicles, createdVehicle} = nextProps;
        if(createdVehicle.data || vehicles.data) {
            if(createdVehicle.data) {
                this.toggleAdd();
                window.location.reload();
            } else {
                const {data} = vehicles;
                const mappedData = data.map(entry => {
                    entry.trips = entry.trips.length;
                    return entry
                })
                this.setState({buses: mappedData})
            }
        } else {
            let error;
            if(createdVehicle.error) {
                error = createdVehicle.error
            } else {
                error = vehicles.error;
            }
            toast.error(error.message)
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

    toggleAdd = () => {
        const {showAdd} = this.state;
        this.setState({showAdd: !showAdd})
    }

    handleChange = ({target}) => {
        const {name, value} = target
        const {newVehicle} = this.state;
        this.setState({newVehicle: {...newVehicle, [name]: value}});
    }

    handleSubmit = () => {
        const { newVehicle } = this.state;
        const { addVehicle } = this.props;
        addVehicle(newVehicle);
    };

    render() { 
        const {headers, buses, showAdd, newVehicle: {capacity, number_plate}} = this.state;
        const allChecked = buses.every(bus => bus.checked == true);
        return (
        <Container  maxWidth={false} >
            {showAdd ? <AddBus handleSubmit={this.handleSubmit} number_plate={number_plate} capacity={capacity} handleChange={this.handleChange}  toggleAdd={this.toggleAdd} /> : ''}
            <BusesTable toggleAdd={this.toggleAdd} handleCheck={this.handleCheck} tableBody={buses} headers={headers} allChecked={allChecked}/>
        </Container> );
    }
}

const mapStateToProps = ({vehicles, createdVehicle}) => {
    return {vehicles, createdVehicle}
};

const mapDispatchToprops = {
    getVehicles,
    addVehicle
};
 
export default connect(mapStateToProps, mapDispatchToprops)(Buses);