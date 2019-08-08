import React, { Component } from 'react';
import axios from "axios";
import { Table } from "reactstrap";


export class Register extends Component {

    constructor() {
        super();
        this.state = {
            responseData: ""
        };
    }

    register = (e) => {
        e.preventDefault();
        let newItem = {
            firstname: e.target[0].value,
            lastname: e.target[1].value
        }
        if (newItem.firstname === "" || newItem.lastname === "") {
            this.setState({ responseData: "Please fill all fields" })
        } else {
            axios
                .post("/producer/user/create", newItem)

                .then(response => {
                    this.props.passedFunction();
                });
        }

    }

    render() {

        return (
            <div className="formDiv">
                <h1>Register</h1>
                <form onSubmit={this.register}>
                    <label htmlFor="firstname">Fristname: </label>
                    <input type="text" id="firstname" className="form-control" />
                    <br />

                    <label htmlFor="lastname" >Lastname: </label>
                    <input type="text" id="lastname" className="form-control" />
                    <br />

                    <input type="submit" className="btn btn-dark" value="register" />
                </form>


                <Table style={{ color: 'red' }}>
                    <tbody>
                        <tr>
                            <td>{this.state.responseData}</td>
                        </tr>
                    </tbody>

                </Table>
            </div>

        );
    }
}
