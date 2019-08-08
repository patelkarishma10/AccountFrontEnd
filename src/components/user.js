import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class User extends Component {
    render(props) {

        const {
    firstname
} = this.props
        return (

            <tr>
                <button className="btn btn-dark">
                    <Link to={"/user/" + firstname}>{firstname}</Link>
                </button>
            </tr>


        );
    }
}