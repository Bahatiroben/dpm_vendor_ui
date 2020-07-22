import React, { Component } from 'react';
import { Paper, Grid, Input, Button, FormControl, MenuItem, InputLabel, Select } from '@material-ui/core';
import {connect} from 'react-redux';
import { getVehicles } from '../../redux/actions/getVehiclesAction';
import { getRoutes } from '../../redux/actions/getRoutesAction';
import { addTrip } from '../../redux/actions/addTripAction'
import moment from 'moment';

class AddTrip extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }

    componentDidMount() {
        const {getRoutes, getVehicles} = this.props;
        getRoutes();
        getVehicles();
    }

    componentWillReceiveProps(nextProps) {
        // find a way to add only unassigned vehicles. maybe reach out to Eric.
        const {vehicles, routes} = nextProps;
        if(vehicles.data && routes.data) {
            this.setState({vehicles: vehicles.data, routes: routes.data});
        }

    }

    handleChange = ({target}) => {
        const {name, value} = target;
        this.setState({[name]: value});
    }

    handleSubmit = async () => {
        const {setoff_time, tp_fare, route_id, vehicle_id} = this.state;
        const dateTime = moment(setoff_time, 'YYYY-MM-DDTHH:mm').format('DD/MM/YYYY HH:mm:ss')
        const result = await addTrip({setoff_time: dateTime, tp_fare, route_id, vehicle_id});
        if(result === true) {
            this.props.toggleAdd();
        }
    }

    render() {
        const {vehicles, routes, route_id, vehicle_id, tp_fare, setoff_time} = this.state; 
        return ( <Paper style={{width: '100vw', 
        height: '100vh', padding: '0px', outline: '0px',
        position: 'absolute', margin: '0px',
        left: '0px', background: 'rgba(146, 146, 146, 0.54)',
        right: '0px', zIndex: '100',
        }}>
            <Grid style={{ padding: '5px 0px', borderRadius: '5px', width: '40%', background: '#F6F8FA', margin : '10% auto 0px auto'}}>
                <Grid style={{ 
                                width: '90%', 
                                padding: '25px 30px',
                                display: 'flex', 
                                margin: 'auto', 
                                justifyContent: 'space-between'}}>
                <FormControl style={{width: '45%'}}>
                    <InputLabel id="route-select-label">Route</InputLabel>
                    <Select
                    onChange={this.handleChange}
                    labelId="route-select-label"
                    id="route-select-label"
                    value={route_id}
                    name="route_id"
                    >
                        {routes && routes.map(route => <MenuItem value={route.id}>{route.route_code}</MenuItem>)}
                    </Select>
                </FormControl>
                <FormControl style={{width: '45%'}}>
                    <InputLabel  htmlFor="tp-fare">Fare (UGX)</InputLabel>
                    <Input name="tp_fare" value={tp_fare} onChange={this.handleChange} type="number"  id="tp-fare"/>
                </FormControl>
                </Grid>
                <Grid style={{ 
                                width: '90%', 
                                padding: '25px 30px',
                                display: 'flex', 
                                margin: 'auto', 
                                justifyContent: 'space-between'}}>
                    
                <FormControl style={{width: '45%'}}>
                    <InputLabel id="vehicle-select-label">Vehicle</InputLabel>
                    <Select
                    onChange={this.handleChange}
                    labelId="vehicle-select-label"
                    id="vehicle-select-label"
                    value={vehicle_id}
                    name="vehicle_id"
                    >
                        {vehicles && vehicles.map(vehicle => <MenuItem value={vehicle.id}>{vehicle.number_plate}</MenuItem>)}
                    </Select>
                </FormControl>
                <FormControl style={{width: '45%'}}>   
                    <InputLabel  id="time-select-label">SetOff Time</InputLabel>
                    <Input
                        id="time-select-label"
                        onChange={this.handleChange}
                        name="setoff_time"
                        label="Setoff Time"
                        type="datetime-local"
                        value={setoff_time}
                    />
                </FormControl>     
                </Grid>
                <Button onClick={this.handleSubmit} 
                        style={{padding: '5px 35px', 
                                display: 'block', 
                                margin: 'auto auto 20px auto'}} 
                        size="medium" 
                        variant="contained" 
                        color="primary">Submit</Button>
            </Grid>
        </Paper> );
    }
}

const mapStateToProps = ({routes, vehicles}) => {
    return {routes, vehicles}
}

const mapDispatchToProps = {
    getRoutes,
    getVehicles
}
 
export default connect(mapStateToProps, mapDispatchToProps)(AddTrip);