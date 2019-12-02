import React, { Component } from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './Home';
import AddUser from './user/AddUser';
import UpdateUser from './user/UpdateUser';
import NotFoundPage from './NotFoundPage';
import {Header} from './Header';

export default class App extends Component {

  render() {
    return (
     <BrowserRouter>
     <Header></Header>
     <Switch>
     <Route  path='/' exact component={Home} ></Route>
     <Route  path='/add' exact component={AddUser} ></Route>
     <Route  path='/update/:id' exact component={UpdateUser} ></Route>
     <Route  path='/' component={NotFoundPage} ></Route>
     </Switch>
     </BrowserRouter>
    )
  }
}