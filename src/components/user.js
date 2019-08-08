import React, { Component } from 'react';

export class User extends Component {
    render(props) {
        return (

            <tr>
                <td>{this.props.firstname}</td>
                <td>{this.props.lastname}</td>
            </tr>


        );
    }
}