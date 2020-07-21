import React, { Component } from 'react';
import { Paper, Grid, Input, Button } from '@material-ui/core'

class AddTrip extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() { 
        const {toggleAdd} = this.props;
        return ( <Paper style={{width: '100vw', 
        height: '100vh', padding: '0px', outline: '0px',
        position: 'absolute', margin: '0px',
        left: '0px', background: 'rgba(146, 146, 146, 0.54)',
        right: '0px', zIndex: '100',
        }}>
            <Grid style={{ padding: '5px 0px', borderRadius: '5px', width: '40%', background: '#F6F8FA', margin : '10% auto 0px auto'}}>
                <Grid style={{ 
                    width: '80%', padding: '50px 30px',
                                display: 'flex', 
                                margin: 'auto', justifyContent: 'space-between'}}>
                    <Input style={{color: '#A2302F'}} placeholder='Setoff Time'/>
                    <Input style={{color: '#A2302F'}} type='number' placeholder='Fare'/>
                </Grid>
                <Grid style={{ 
                    width: '80%', padding: '50px 30px',
                                display: 'flex', 
                                margin: 'auto', justifyContent: 'space-between'}}>
                    <Input style={{color: '#A2302F'}} placeholder='Route'/>
                    <Input style={{color: '#A2302F'}} type='number' placeholder='Vehicle'/>
                </Grid>
                <Button onClick={toggleAdd} 
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
 
export default AddTrip;