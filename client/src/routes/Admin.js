// ---------- This file holds the jsx for the admin page ----------
//  -----------------------------------------------------------------------

import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AdminHelp from '../components/AdminHelp/AdminHelp'
import AdminRemovePost from '../components/AdminRemovePost/AdminRemovePost';
import AdminAddNewUser from '../components/AdminAddNewUser/AdminAddNewUser'
import './styles/Admin.css'
import { Redirect } from 'react-router'
import { Button } from 'react-materialize';
import Col from 'react-materialize/lib/Col';
import AdminShowAllUsers from '../components/AdminShowAllUsers/AdminShowAllUsers'
import AdminAddNewPost from '../components/AdminAddNewPost/AdminAddNewPost'
import AdminRemoveUser from '../components/AdminRemoveUser/AdminRemoveUser'

class Admin extends Component {

    state = {
        categoryName: '',
        resources: [],
        title: "",
        link: "",
        description: "",
        username: "",
        password: "",
        active: 'adminHelp',
        redirect: false
    };

    // Set active component on button click
    handleButtonClick = (component) => {
        // console.log('Button Clicked')
        // console.log(component)
        this.setState({ active: component })
    };

    // Back to main page on click
    handleBackButton = () => {
        // console.log('Back Button Pressed')
        this.setState({ redirect: true })

    }

    render() {

        var active = this.state.active;

        const { redirect } = this.state;

        // Redirect to main page
        if (redirect) {
            return <Redirect to='/main' />
        }

        return (

            // Navigation Bar
            <div className="mainContent">
                <AppBar position="absolute" className="appBar">
                    <Toolbar>
                        <Typography variant="title" color="inherit" noWrap>Admin Page</Typography>
                    </Toolbar>
                    <Col>
                        <Button className="transparent white-text z-depth-0" onClick={() => this.handleButtonClick("adminHelp")}>
                            Admin Help
                        </Button>
                        <Button className="transparent white-text z-depth-0" onClick={() => this.handleButtonClick("addNewPost")}>
                            Add Post
                        </Button>
                        <Button className="transparent white-text z-depth-0" onClick={(() => this.handleButtonClick("removePost"))}>
                            Remove Post
                        </Button>
                        <Button className="transparent white-text z-depth-0" onClick={() => this.handleButtonClick("addNewUser")}>
                            Add User
                        </Button>
                        <Button className="transparent white-text z-depth-0" onClick={() => this.handleButtonClick("removeUser")}>
                            Remove User
                        </Button>
                        <Button className="transparent white-text z-depth-0" onClick={() => this.handleButtonClick("showUsers")}>
                            Show Users
                        </Button>
                        <Button className="transparent white-text z-depth-0" onClick={this.handleBackButton}>
                            Main Page
                        </Button>
                    </Col>
                </AppBar>

            {/* Content Div */}
                <main className="contentDiv">
                    <div className="toolbar" />
                    <div className='content'>
                        {(active === 'addNewUser') && <AdminAddNewUser />}
                        {(active === 'adminHelp') && <AdminHelp />}
                        {(active === 'removePost') && <AdminRemovePost />}
                        {(active === 'showUsers') && <AdminShowAllUsers />}
                        {(active === 'addNewPost') && <AdminAddNewPost />}
                        {(active === 'removeUser') && <AdminRemoveUser />}
                    </div>
                </main>
            </div>
        );
    }
}

export default Admin
