import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import SharedTable from '../shared/sharedTable/SharedTable';
import { getRoutes } from '../../redux/actions/getRoutesAction';
import { connect } from 'react-redux';
import {toast} from 'react-toastify';
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
            const checkedRoute = {...route};
            if(id === 'header') {
                checkedRoute.checked = checked;
            }
            if(route.id == id) {
                checkedRoute.checked = checked
            }
            return checkedRoute;
        });

        this.setState({routes: checkedRoutes});
    }

    render() { 
        const {headers, routes} = this.state;
        const allChecked = routes.every(route => route.checked == true);
        return ( 
        <Container  maxWidth={false}>
            <SharedTable hideDock={true} handleCheck={this.handleCheck} tableBody={routes} headers={headers} allChecked={allChecked}/>
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