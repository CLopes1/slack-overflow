import React, { Component } from 'react'
import { Modal, Button, Row, Input, Icon } from 'react-materialize'
import API from '../../utils/API'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Suggestor from 'ssuggestor'

class NewPost extends Component {

  notify = () => toast.success("Thank you for submitting " + this.state.title)

  state = {
    username: "",
    password: "",
    redirect: false,
    link: '',
    title: '',
    description: '',
    category: '',
  };

  // Send new post to database
  handleFormSubmit = event => {
    event.preventDefault();
    API.saveResource(
      {
        link: this.state.link,
        title: this.state.title,
        description: this.state.description,
        // category: this.state.category
        category: this.state.category,
      }
    )
      // .then(res => console.log(res.data))

      // .then(res => console.log(instance.close()))
      .catch(err => console.log(err))
  };

  handleButtonClick = (event) => {
    this.handleFormSubmit(event)
    this.notify()
  }

  // Allows inputs to be manipulated while typing
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleTestButton = () => {
    // console.log(this.state)
  }

  render() {
    const catArray = [
      "General Tools",
      "Teaching Resource",
      "CSS",
      "Testing",
      "Javascript",
      "API",
      "Databases",
      "NPM Packages",
      "Templates",
      "Common Issues",
      "Job Resources",
      "HTML",
      "Random",
      "Podcasts",
      "Slack Submissions"
    ]
    return (

      <div>

        <Modal
          header='Add your New Link Here'
          trigger={<Button
            className='green'
            icon="add"
            floating
            large
          >
          </Button>}>
          <Row>
            <form>
              <Input
                s={12}
                value={this.state.link}
                onChange={this.handleInputChange}
                name="link"
                type="text"
                label="Link"
              // placeholder="Username (required)"
              >
                <Icon large>insert_link</Icon>
              </Input>
              <Input
                s={12}
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                type="text"
                label="Title"
              // placeholder="Password (required)"
              >
                <Icon large>title</Icon>
              </Input>
              <Input
                s={12}
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                type="textarea"
                label="Description"
              
              >
                <Icon large>info</Icon>
              </Input>
              <Suggestor
                label="LABEL"
                list={catArray}
                onChange={value => {}}
                onSelect={(value, suggestion) => {this.setState({ category : suggestion })}}
                placeholder="Choose a Category"
              />
            

            </form>


          </Row>
          <Button onClick={this.handleButtonClick} className="green modal-close">Submit</Button>

        </Modal>
      </div>
    )
  }
}

// NewPost.propTypes = {
//   hideModal: PropTypes.func
// }

export default NewPost;