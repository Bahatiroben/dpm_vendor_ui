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
        this.state = { trips:[]}
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
    
    render() { 
        const headers = [
         {label: 'Vehicle', key: 'number_plate'}, 
         {label: 'From', key: 'start_point'},
         {label: 'To', key: 'destination'}, 
         {label: 'Fare', key: 'tp_fare'},
         {label: 'Travel Date', key: 'date'},
         {label: 'Time', key: 'time'}];
        return ( 
        <Container maxWidth={false} >
            <SharedTable tableBody={this.state.trips} headers={headers} buses={this.state.buses}/>
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