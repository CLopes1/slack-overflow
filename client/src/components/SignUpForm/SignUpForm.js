import React, { Component } from "react";
import "./SignUpForm.css";
import API from '../../utils/API'
import { Input, FormBtn } from "../../components/Form";
import './SignUpForm.css'

class SignUpForm extends Component {

    state = {
        username: "",
        password: "",
    };

    // Test Button
    handleTestButton = () => {
        this.loadUsers()
        console.log('button pressed')
        // console.log(this.state)
    }

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
        // console.log(this.state.username)
        API.saveUser(
            {
                username: this.state.username,
                password: this.state.password,
                accountLevel: 'Admin',
                // cohortname: 'test'
            }
        )
            // .then(res => this.loadUsers())
            .catch(err => console.log(err));

    };

    render() {
        return (
            <div className="SignUpForm">
                <h1>Add a new user</h1>
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
                    <FormBtn
                        disabled={!(this.state.username && this.state.password)}
                        onClick={this.handleFormSubmit}
                    >
                        Add User
              </FormBtn>
                </form>
            </div >
        );
    }
}

export default SignUpForm