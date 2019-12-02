import React, { Component } from 'react'
import {UserForm} from '../UserForm';
import {connect} from 'react-redux';
import * as actions from '../../actions';

class AddUser extends Component {

    user = {
        customernumber: '',
        username : '',
        firstname: '',
        lastname: '',
        email: '',
        dateOfBirth: undefined,
        password: '',
        repeatPassword: ''
    }

    handleChange = input => e => {
        e.preventDefault();
        this.user[input] = e.target.value;
        console.log(this.user);
    };

    addUser = ()=>{
        console.log('add user')
        this.props.addUser(this.user,this.props.history);
    }
    render() {
        return (
            <div className="container" style={{textAlign:'center'}}>
              <h1>Please fill in the form below </h1>
                <UserForm addUser={this.addUser} handleChange={this.handleChange}></UserForm>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        users : state 
    }
}

export default connect(mapStateToProps,actions)(AddUser);