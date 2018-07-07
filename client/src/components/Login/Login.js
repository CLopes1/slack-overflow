import React, { Component } from 'react';
import { Modal, Button, Icon, Row } from 'react-materialize';
import { Input, FormBtn } from "../Form";
import API from '../../utils/API'
import './Login.css';
import { Redirect } from 'react-router'

class Login extends Component {

  state = {
    username: "",
    password: "",
    redirect: false
  };


  // validateUser checks DB to make sure Admin username and Password match what is stored. If fails. throws alert warning to attempt again.
  validateUser = user => {
    if (user.password === this.state.password && user.accountLevel === 'Admin') {
      this.setState({ redirect: true })
    } else {
      alert('Wrong Password. please try again.')
    }
  }

  getUser = username => {
    // console.log('querying for: ' + username)
    API.getUser(username)
      .then(res =>
        this.validateUser(res.data[0])
      )
      .catch(err => console.log(err))
  }

  // handleFormSubmit grabs inputs of user login to pass the states to validation
  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({ username: this.state.username })
    this.setState({ password: this.state.password })
    this.getUser(this.state.username)
  };

  // changes the states from empty to user input data.
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {

    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to='/admin' />
    }

    return (
      <div>

        <Modal
          header='Welcome Admin, Please login'
          trigger={<Button floating large id="admin-btn" className="transparent col s12"><Icon large>settings</Icon></Button>}>
          <form>
            <Row>
            <Input
              s={12}
              value={this.state.username}
              onChange={this.handleInputChange}
              name="username"
              type="text"
              placeholder="Username (required)"
              />
            <Input
              s={12}
              value={this.state.password}
              onChange={this.handleInputChange}
              name="password"
              type="password"
              placeholder="Password (required)"
              />
            </Row>
            <FormBtn
              disabled={!(this.state.username && this.state.password)}
              onClick={this.handleFormSubmit}
              className='modal-close'
            >
              Login
            </FormBtn>

            </form>
        </Modal>

      </div>
    )
  }
}

export default Login
