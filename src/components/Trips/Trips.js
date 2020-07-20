import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import SharedTable from '../shared/sharedTable/SharedTable';
import { getTrips} from '../../redux/actions/getTripsAction';
import {connect} from 'react-redux';
import { toast } from 'react-toastify';
// import {} from '@material-ui/icons';

class Trips extends Component {
    constructor(props) {
        super(props);
        this.state = { 
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
    
    render() { 
        const {headers, trips} = this.state;
        const allChecked = trips.every(trip => trip.checked == true);
        return ( 
        <Container maxWidth={false} >
            <SharedTable handleCheck={this.handleCheck} tableBody={trips} headers={headers} allChecked={allChecked}/>
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