import React, { Component } from 'react'
import {UserForm} from '../UserForm';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import { store } from 'react-notifications-component';
import 'animate.css';

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
    };

    addUser = ()=> {
        this.props.addUser(this.user,this.props.history);
        store.addNotification({
            title: "User created!",
            message: "User created successfully",
            type: "success",
            insert: "top",
            container: "bottom-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
              duration: 5000,
              onScreen: true
            }
          });
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
        users : state,
        errors : state.errors 
    }
}

export default connect(mapStateToProps,actions)(AddUser);