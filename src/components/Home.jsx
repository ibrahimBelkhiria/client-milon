import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import { MyTable } from './MyTable';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Home extends Component {

    componentDidMount() {
        this.props.fetchUsers();
    }

    handleSearch = (e)=> {
        this.props.searchUsers({keyword:e.target.value});
    }
    handleDelete = (id)=> {
        console.log('deleteing user '+id);
        this.props.deleteUser(id);
    }
    handleEdit = (id) =>{
        this.props.history.push(`update/${id}`);
    }
    render() {
       const {users} = this.props;
        return (
            <div>
                <h3 style={{textAlign:'center'}}>List of Users</h3>
                <div style={{textAlign:'center'}}>
                <TextField
                    placeholder="Enter keyword"
                    label="Search"
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={this.handleSearch}
                />
                </div>
                <Button align="right" variant="contained" color="primary" onClick={()=>{
                    this.props.history.push('/add')
                    }}>Add User</Button>          
                <MyTable rows={Array.from(users)} handleDelete={this.handleDelete} handleEdit={this.handleEdit}></MyTable>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        users : state 
    }
}

export default connect(mapStateToProps,actions)(Home);