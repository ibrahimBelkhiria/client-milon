import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const  Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          <Link to='/' style={{color:"white"}}> Milon</Link>
          </Typography>
          <Link to='/add'  style={{color:"white"}}> Add User</Link>
          <span> &nbsp;&nbsp;   </span>
          <Link to='/'  style={{color:"white"}}> List Users</Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}