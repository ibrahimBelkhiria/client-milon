import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class UpdateUserForm extends Component {
    render() {
        const {values,updateUser,handleChange} = this.props;
       return (
            <div >
            <TextField
              placeholder={values.customernumber}
              label="Customer number"
              margin="normal"
              InputLabelProps={{
                 shrink: true,
              }}
              defaultValue= {values.customernumber}
              onChange={handleChange('customernumber')} 
              required={true}
            />
            <br />
            <TextField
              placeholder={values.username}
              label="Username"
              margin="normal"
              InputLabelProps={{
                 shrink: true,
              }}
              disabled={true}
              defaultValue= {values.username}
              onChange={handleChange('username')}  
              
            />
            <br />
            <TextField
              placeholder={values.firstname}
              label="First name"
              margin="normal"
              InputLabelProps={{
                 shrink: true,
              }}
              defaultValue= {values.firstname}
              onChange={handleChange('firstname')}
              required={true}
            />
            <br />
            <TextField
              placeholder={values.lastname}
              label="Last name"
              margin="normal"
              InputLabelProps={{
                 shrink: true,
              }}
              onChange={handleChange('lastname')}
              required={true}
            />
            <br />
            <TextField
              placeholder={values.email}
              label="Email"
              margin="normal"
              InputLabelProps={{
                 shrink: true,
              }}
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
              defaultValue={values.dateOfBirth}
              onChange={handleChange('dateOfBirth')}
            />
            <br />
            <TextField
              placeholder={values.password}
              label="Password"
              margin="normal"
              InputLabelProps={{
                 shrink: true,
              }}
              onChange={handleChange('password')}
            />
            <br />
            <TextField
              placeholder={values.repeatPassword}
              label="Repeat Password"
              margin="normal"
              InputLabelProps={{
                 shrink: true,
              }}
              onChange={handleChange('repeatPassword')}
            />
            <br />
            <Button
              color="primary"
              variant="contained"
              onClick={updateUser}
            > Update user </Button>
            </div>
        )
    }
}
