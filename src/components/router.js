import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Register } from './register';
import { UserList } from './userList';
import { NavBar } from './navBar';

export class RouterComponent extends Component {
    render() {
        return (
            <div>
                <Router>
                    <NavBar />
                    <Route exact path="/" render={(props) => <Register passedFunction={this.props.onLoad} />} />
                    <Route path="/userList" render={(props) => <UserList dataSent={this.props.dataSent} />} />
                </Router>
            </div>
        )
    }
}
