import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class UserForm extends Component {
    render() {
        const {addUser,handleChange} = this.props;
       return (
            <div >
            <TextField
              placeholder="Enter Customer number"
              label="Customer number"
              margin="normal"
              onChange={handleChange('customernumber')} 
              required={true}
            />
            <br />
            <TextField
              placeholder="Enter Username"
              label="Username"
              margin="normal"
              onChange={handleChange('username')}
              required={true}
            />
            <br />
            <TextField
              placeholder="Enter Firstname"
              label="First name"
              margin="normal"
              onChange={handleChange('firstname')}
              required={true}
            />
            <br />
            <TextField
              placeholder="Enter Lastname"
              label="Last name"
              margin="normal"
              onChange={handleChange('lastname')}
              required={true}
            />
            <br />
            <TextField
              placeholder="Enter Email"
              label="Email"
              margin="normal"
              onChange={handleChange('email')}
              required={true}
            />
            <br />
            <TextField
              label="Date of Birth"
              margin="normal"
              type="date"
              InputLabelProps={{
                 shrink: true,
              }}
              onChange={handleChange('dateOfBirth')}
              required={true}
            />
            <br />
            <TextField
              placeholder="Enter Password"
              label="Password"
              margin="normal"
              onChange={handleChange('password')}
              required={true}
            />
            <br />
            <TextField
              placeholder="Repeat Password"
              label="Repeat Password"
              margin="normal"
              onChange={handleChange('repeatPassword')}
              required={true}
            />
            <br />
            <Button
              color="primary"
              variant="contained"
              onClick={addUser}
            > create user</Button>
            </div>
        )
    }
}
