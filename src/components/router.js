import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Register } from './register';
import { UserList } from './userList';
import { NavBar } from './navBar';
import { Prize } from './prize';

export class RouterComponent extends Component {
    render() {
        return (
            <div>
                <Router>
                    <NavBar />
                    <Route exact path="/" render={(props) => <Register passedFunction={this.props.onLoad} />} />
                    <Route path="/userList" render={(props) => <UserList dataSent={this.props.dataSent} />} />
                
                    {this.props.dataSent.map((item, index) => (

                        <Route key={index} path={"/user/" + item.firstname} render={(props) =>
                            <Prize
                                passedFunction={this.props.onLoad}
                                firstname={item.firstname}
                                lastname={item.lastname}
                                prize={item.prize}
                                accountnumber={item.accountnumber}
                                id={item.id} />}
                        />

              ))}
                
                </Router>
            </div>
        )
    }
}
