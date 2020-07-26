import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import SharedTable from '../shared/sharedTable/SharedTable';
import { getTrips} from '../../redux/actions/getTripsAction';
import {connect} from 'react-redux';
import { toast } from 'react-toastify';
import AddTrip from './AddTrip';
import moment from 'moment';
import { addTrip, updateTrip } from '../../redux/actions/addTripAction';
// import {} from '@material-ui/icons';

class Trips extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            showAdd: false,
            showUpdate: false,
            trips:[],
            headers: [
                {label: 'Vehicle', key: 'number_plate'}, 
                {label: 'From', key: 'start_point'},
                {label: 'To', key: 'destination'}, 
                {label: 'Fare', key: 'tp_fare'},
                {label: 'Travel Date', key: 'date'},
                {label: 'Time', key: 'time'}]
        }
    }

    componentDidMount() {
        const {getTrips} = this.props;
        getTrips();
    };

    componentWillReceiveProps(nextProps) {
        const {trips: {data, error}} = nextProps;
        if(error) {
            toast.error(error.message)
        } else {
           this.setState({trips: data}); 
        }
    }

    handleCheck = ({target}) =>{
        const {checked, id} = target;
        const {trips} = this.state;
        const checkedTrips = trips.map(trip => {
            if(id === 'header') {
                trip.checked = checked;
            }
            if(trip.id == id) {
                trip.checked = checked
            }
            return trip;
        });

        this.setState({trips: checkedTrips});
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
        const {name, value} = target;
        this.setState({[name]: value});
    }

    handleUpdateChange = ({target}) => {
        const {trips} = this.state;
        const {name, value} = target;
        const updatedtrips = trips.map(trip => {
            if(trip.checked === true) {
                trip[name] = value
            } 
            return trip;
        });
        this.setState({trips: updatedtrips})
    }

    handleSubmit = async () => {
        const {setoff_time, tp_fare, route_id, vehicle_id} = this.state;
        const dateTime = moment(setoff_time, 'YYYY-MM-DDTHH:mm').format('DD/MM/YYYY HH:mm:ss')
        const result = await addTrip({setoff_time: dateTime, tp_fare, route_id, vehicle_id});
        if(result === true) {
            this.toggleAdd();
        }
    }

    handleSubmitUpdate = async () => {
        const {trips} = this.state;
        const trip = trips.filter(trip => trip.checked === true);
        const {
            id,
            setoff_time,
            tp_fare,
            route_id,
            vehicle_id
            } = trip[0];
        const result = await updateTrip({
            id,
            setoff_time,
            tp_fare,
            route_id,
            vehicle_id });
        if(result) {
            this.toggleUpdate()
        }
        
    }

    render() { 
        const {headers, trips, showAdd, route_id, vehicle_id, tp_fare, setoff_time, showUpdate } = this.state;
        const allChecked = trips.every(trip => trip.checked == true);
        const checkedTrips = trips.filter(trip => trip.checked === true);
        const {route_id: routeId, vehicle_id: vehicleId, tp_fare: tpFare, setoff_time: setoffTime} = checkedTrips[0] ? checkedTrips[0] : [{}];
        const oneChecked = checkedTrips.length === 1;
        return ( 
        <Container maxWidth={false} >
            {showAdd ? <AddTrip
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit} 
            route_id={route_id} vehicle_id={vehicle_id}
             tp_fare={tp_fare} setoff_time={setoff_time} 
            toggleAdd={this.toggleAdd}/> : ''}

        {showUpdate && oneChecked ? <AddTrip
            route_id={routeId} vehicle_id={vehicleId}
            tp_fare={tpFare} setoff_time={setoffTime} 
            handleChange={this.handleUpdateChange} 
            handleSubmit={this.handleSubmitUpdate} 
            toggleAdd={this.toggleUpdate} /> : ''}
            <SharedTable toggleUpdate={oneChecked && this.toggleUpdate} toggleAdd={this.toggleAdd} handleCheck={this.handleCheck} tableBody={trips} headers={headers} allChecked={allChecked}/>
        </Container> );
    }
}

const mapStateToProps = ({trips}) => {
    return {trips}
    };

const mapDispatchToProps = {
    getTrips
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Trips);