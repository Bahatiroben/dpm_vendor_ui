import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import SharedTable from '../shared/sharedTable/SharedTable';
import { getRoutes } from '../../redux/actions/getRoutesAction';
import { connect } from 'react-redux';
import {toast} from 'react-toastify';
import AddRoute from './AddRoute';
// import {} from '@material-ui/icons';

class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = { routes: [],
        headers: [{label: 'Route Code', key: 'route_code'}, 
        {label: 'From', key: 'start_point'}, 
        {label: 'To', key: 'destination'}] }
    }

    componentDidMount() {
        const { getRoutes } = this.props;
        getRoutes();
    }

    componentWillReceiveProps(nextProps) {
        console.log(">>>>>>>>>>", nextProps)
        const {routes: {data, error}} = nextProps;

        if(error) {
            toast.error(error.message);
        } else {
            this.setState({routes: data});
        }
    }

    handleCheck = ({target}) =>{
        const {checked, id} = target;
        const {routes} = this.state;
        const checkedRoutes = routes.map(route => {
            if(id === 'header') {
                route.checked = checked;
            }
            if(route.id == id) {
                route.checked = checked
            }
            return route;
        });

        this.setState({routes: checkedRoutes});
    }
    toggleAdd = () => {
        const {showAdd} = this.state;
        this.setState({showAdd: !showAdd})
    }
    render() { 
        const {headers, routes, showAdd} = this.state;
        const allChecked = routes.every(route => route.checked == true);
        return ( 
        <Container  maxWidth={false}>
            {showAdd ? <AddRoute toggleAdd={this.toggleAdd} /> : ''}
            <SharedTable toggleAdd={this.toggleAdd} handleCheck={this.handleCheck} tableBody={routes} headers={headers} allChecked={allChecked}/>
        </Container> );
    }
}

const mapStateToProps = ({routes}) => {
    return {routes}
}

const mapDispatchToProps = {
    getRoutes
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Routes);