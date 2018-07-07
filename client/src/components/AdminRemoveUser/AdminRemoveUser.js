import React, { Component } from "react";
import API from '../../utils/API'
import "./AdminRemoveUser.css"
import { Button, Input } from 'react-materialize'


class AdminRemoveUser extends Component {

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

    // When the form is submitted, use the API method to save the data
    // Then reload data from the database
    handleFormSubmit = event => {
        event.preventDefault();
        this.removeUser(this.state.username)

    };

    removeUser = username => {
        API.removeUser(username)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="container">
                <h1>Remove a User</h1>
                <form>
                    <Input
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        name="username"
                        placeholder="Name (required)"
                    />
                    <Button
                        disabled={!(this.state.username)}
                        onClick={this.handleFormSubmit}
                        className="green modal-close"
                    >
                        Remove User
              </Button>
                </form>
            </div >
        );
    }
}

export default AdminRemoveUser