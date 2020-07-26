import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import BusesTable from '../shared/sharedTable/SharedTable';
import {getVehicles} from '../../redux/actions/getVehiclesAction';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import AddBus from './AddBus';
import { addVehicle, updateVehicle } from '../../redux/actions/addVehicleAction'
// import {} from '@material-ui/icons';

class Buses extends Component {
    constructor(props) {
        super(props);
        this.state = { buses: [], newVehicle: {}, showAdd: false, showUpdate: false,
        headers: [{label: 'PlateNo', key: 'number_plate'}, {label: 'Capacity', key: 'capacity'}, {label: 'Trips', key: 'trips'}]}
    }

    componentDidMount() {
        const { getVehicles } = this.props;
        getVehicles();
    }

    componentWillReceiveProps(nextProps) {
        const {vehicles: {error, data}} = nextProps;
        if(data) {
            this.setState({buses: data})
        } else {
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

    toggleUpdate = () => {
        const {showUpdate} = this.state;
        this.setState({showUpdate: !showUpdate})
    }

    handleChange = ({target}) => {
        const {name, value} = target
        this.setState({[name]: value});
    }

    handleUpdateChange = ({target}) => {
        const {buses} = this.state;
        const {name, value} = target;
        const updatedvehicles = buses.map(bus => {
            if(bus.checked === true) {
                bus[name] = value
            } 
            return bus;
        });
        this.setState({buses: updatedvehicles})
    }

    handleSubmit = async () => {
        const { number_plate, capacity } = this.state;
        const result = await addVehicle({ number_plate, capacity });
        if(result) {
            this.toggleAdd()
        }
    };

    handleSubmitUpdate = async () => {
        const {buses} = this.state;
        const bus = buses.filter(bus => bus.checked === true);
        const {id, number_plate, capacity} = bus[0];
        const result = await updateVehicle({ id, number_plate, capacity });
        if(result) {
            this.toggleUpdate()
        }
        
    }

    render() { 
        const {headers, buses, showAdd, showUpdate, number_plate, capacity} = this.state;
        const allChecked = buses.every(bus => bus.checked === true);
        const checkedBuses = buses.filter(bus => bus.checked === true);
        const {capacity: busCapacity, number_plate: numberPlate} = checkedBuses[0] ? checkedBuses[0] : [{}]
        const oneChecked = checkedBuses.length === 1;
        return (
        <Container  maxWidth={false} >
            {showAdd ? <AddBus title="Add New Bus" number_plate={number_plate} capacity={capacity} handleChange={this.handleChange} handleSubmit={this.handleSubmit} toggleAdd={this.toggleAdd} /> : ''}
            {showUpdate && oneChecked ? <AddBus number_plate={numberPlate} capacity={busCapacity}  handleChange={this.handleUpdateChange} handleSubmit={this.handleSubmitUpdate} toggleAdd={this.toggleUpdate} /> : ''}
            <BusesTable toggleUpdate={oneChecked && this.toggleUpdate} toggleAdd={this.toggleAdd} handleCheck={this.handleCheck} tableBody={buses} headers={headers} allChecked={allChecked}/>
        </Container> );
    }
}

const mapStateToProps = ({vehicles}) => {
    return {vehicles}
};

const mapDispatchToprops = {
    getVehicles,
};
 
export default connect(mapStateToProps, mapDispatchToprops)(Buses);