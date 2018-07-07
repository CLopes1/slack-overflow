import React, { Component } from "react";
import "./AdminHelp.css"

class AdminHelp extends Component {

    state = {

    };

    render() {
        return (
            <div className="container">
                <div className="adminIntro">
                    <h2>Welcome to the Admin Help Page</h2>
                    <p>This page allows admins to add and remove resources and users. Choose what you
                        would like to do from the navigation bar. Instructions on how to use each
                        ability are detailed below.
                </p>
                </div>

                {/* Add Post */}
                <h4>Add Post</h4>
                <ol>
                    <li>
                        Link, title, and category are required to create a new post.
                    </li>
                    <li>
                        Description is optional.
                    </li>
                    <li>
                        Clicking on the category section will display all categories.
                    </li>
                    <li>
                        Typing into the category section will search for your desired catigory.
                    </li>
                </ol>
                {/* Remove Post */}
                <h4>Remove Post</h4>
                <ol>
                    <li>
                        Enter the exact title of the post you would like to remove
                    </li>
                </ol>
                {/* Add User */}
                <h4>Add User</h4>
                <ol>
                    <li>
                        Name and password are required to create a new user
                    </li>
                    <li>
                        At this time, all users are given full admin rights
                    </li>
                </ol>
                {/* Remove User */}
                <h4>Remove User</h4>
                <ol>
                    <li>
                        The exact name of the user is required to remove a user
                    </li>
                </ol>
                {/* Show Users */}
                <h4>Show Users</h4>
                <ol>
                    <li>
                        All registered users will be displayed upon loading
                    </li>
                </ol>
                </div >
        );
    }
}

export default AdminHelp