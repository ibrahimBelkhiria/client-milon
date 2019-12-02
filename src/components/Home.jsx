import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import { MyTable } from './MyTable';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const invertDirection = {
    asc: "desc",
    desc: "asc"
};

class Home extends Component {

    sort = {
        sortDirection: "desc", 
        columnToSort: ""
    }
    componentDidMount() {
        this.props.fetchUsers();
        this.props.sortUsers(this.props.users,this.sort.columnName,this.sort.sortDirection); 
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

    handleSort = (columnName) => {
        
          this.sort.columnToSort = columnName;
          this.sort.sortDirection = this.sort.columnToSort === columnName ? invertDirection[this.sort.sortDirection]: "asc";
          this.props.sortUsers(this.props.users,columnName,this.sort.sortDirection); 
        console.log(this.sort);
    };

    render() {
       const {users} = this.props;
        console.log(users);
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
                <MyTable columnToSort={this.sort.columnToSort}
                            sortDirection={this.sort.sortDirection} 
                            rows={Array.from(users)}
                            handleSort={this.handleSort}
                            handleDelete={this.handleDelete} 
                            handleEdit={this.handleEdit}>
                </MyTable>
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