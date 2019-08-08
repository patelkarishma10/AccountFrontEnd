import React, { Component } from 'react';
import { Table } from "reactstrap";

import { User } from './user';

export class UserList extends Component {

    render() {

        return (
            <div className="formDiv">
                <h2>Users</h2>
                <Table >
                    <tbody>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                        </tr>

                        {this.props.dataSent.map((item) => (

                            <User key={item._id}
                                
                                firstname={item.firstname} 
                                lastname= {item.lastname}/>

                        ))}

                    </tbody>
                </Table>
            </div>

        );
    }
}