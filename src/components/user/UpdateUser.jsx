import React, { Component } from 'react';
import {UpdateUserForm} from '../UpdateUserForm';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import { store } from 'react-notifications-component';
import 'animate.css';

class UpdateUser extends Component {

    user = {};

    componentDidMount() {
        this.props.getUser(this.props.match.params.id);
    }
    
    handleChange = input => e => {
        e.preventDefault();
        this.user[input] = e.target.value;
    };

    updateUser = ()=>{
        this.props.updateUser(this.props.match.params.id,this.user,this.props.history);
        store.addNotification({
            title: "User updated!",
            message: "User updated successfully",
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
        const {customernumber,username,firstname,lastname,email,password,repeatPassword,dateOfBirth} = this.props.user;
        const values = {customernumber,username,firstname,lastname,email,password,repeatPassword,dateOfBirth}
      return (
            <div className="container" style={{textAlign:'center'}}>
              <h1>Update user form </h1>
                <UpdateUserForm  values={values} updateUser={this.updateUser} handleChange={this.handleChange}></UpdateUserForm>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user : state 
    }
}

export default connect(mapStateToProps,actions)(UpdateUser);