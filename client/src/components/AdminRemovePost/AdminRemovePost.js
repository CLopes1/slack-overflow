import React, { Component } from "react";
import API from '../../utils/API'
import { Button, Input } from 'react-materialize'
import "./AdminRemovePost.css"


class AdminRemovePost extends Component {

    state = {
        title: ''
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
        // console.log(this.state.title)
        // console.log("Removing Resource")
        this.removeResource(this.state.title)
    };

    removeResource = title => {
        API.deleteResource(title)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="container">
                <h1>Remove a Post</h1>
                <form>
                    <Input
                        value={this.state.title}
                        onChange={this.handleInputChange}
                        name="title"
                        placeholder="Title (required)"
                    />
                    <Button
                        onClick={this.handleFormSubmit}
                        disabled={!(this.state.title)}
                        className="green modal-close"
                    >
                        Remove Post
                </Button>
                </form>
            </div >
        );
    }
}

export default AdminRemovePost