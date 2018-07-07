import React, { Component } from "react";
import API from '../../utils/API'
import UserResult from "../UserResult/UserResult"
import "./AdminShowAllUsers.css"


class AdminShowAllUsers extends Component {

    state = {
        users: []
    };

    componentDidMount() {
        this.loadUsers();

    }

    loadUsers = () => {
        // console.log("Loading All Users")
        API.getUsers()
            .then(res =>
                this.setState({ users: res.data })
            )
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="container">
                <h1>Show All Users</h1>
                {this.state.users.map(user => {
                    return (
                        <UserResult defaultActiveKey={2}>

                            {user}

                        </UserResult>

                    )

                })}

            </div >
        );
    }
}

export default AdminShowAllUsers