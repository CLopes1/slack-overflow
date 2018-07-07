import React, { Component } from "react";
import API from '../../utils/API'
import './AdminAddNewUser.css'
import { Button, Input } from 'react-materialize'

class AdminAddNewUser extends Component {

    state = {
        username: "",
        password: "",
    };

    // Handles updating component state when the user types into the input field
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    // Send data to database when form is submitted
    handleFormSubmit = event => {
        event.preventDefault();
        // console.log(this.state.username)
        API.saveUser(
            {
                username: this.state.username,
                password: this.state.password,
                accountLevel: 'Admin',
            }
        )
            .catch(err => console.log(err));

    };

    render() {
        return (
            <div className="container">
                <h1>Add a new user</h1>
                {/* Form for adding new user */}
                <form>
                    <Input
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        name="username"
                        placeholder="Name (required)"
                    />
                    <Input
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        name="password"
                        placeholder="Password (required)"
                    />
                    <Button
                        disabled={!(this.state.username && this.state.password)}
                        onClick={this.handleFormSubmit}
                        className="green modal-close"
                    >
                        Add User
              </Button>
                </form>
            </div >
        );
    }
}

export default AdminAddNewUser