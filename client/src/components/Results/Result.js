import React, { Component } from "react";
import "./Results.css";
import {CollapsibleItem, Button, Icon,} from "react-materialize";
import API from "../../utils/API";

class Results extends Component {

  state = {
    title: "",
    category: "",
    createAd: "",
    createdAt: "",
    description: "",
    link: "",
    voteCount: "",
    _id: "",
    author: ""
  }

  componentDidMount() {
    const { title, category, createAt, createAd, description, link, voteCount, _id, author } = this.props.children

    this.setState({
      title,
      category,
      createAt,
      createAd,
      description,
      link,
      voteCount,
      _id,
      author
    })
  }

  vote = (direction) => {
    let { voteCount } = this.state;
    if (direction === 'up') {
      API.castVote(this.state._id, { voteCount: 1 })
        .then((data) => {
          // console.log('data', data);
          if (data.status === 200) {
            voteCount += 1;
            this.setState({ voteCount });
          }
        });
    } else if (direction === 'down') {
      API.castVote(this.state._id, { voteCount: -1 })
        .then((data) => {
          // console.log('data', data);
          voteCount -= 1;
          this.setState({ voteCount });
        });
    } else {
      console.log(`${direction} is not valid!`);
    }
  }

  //This section will render the category results on the main page

  render() {
    
    return (

      <CollapsibleItem
        header={`${this.state.title}  |  Rank: ${this.state.voteCount}`}
      >
        <div>

          {<p>{this.state.description}</p>}
          <p>
            <a className="blue-text"
              rel="noreferrer noopener"
              target="_blank"
              href={this.state.link}>{this.state.link}
            </a>

            <br />

            <Button
              id="upvote"
              className="btn-upvote green"
              waves='light'
              onClick={() => this.vote('up')}
            >
              <Icon center>thumb_up</Icon>

            </Button>

            <Button
              id="downvote"
              className="btn-downvote red"
              waves='light'
              onClick={() => this.vote('down')}
              disabled={this.state.voteCount === 0 ? true : false}
            >
              <Icon center>thumb_down</Icon>
            </Button>

          </p>
        </div>

      </CollapsibleItem>
    );
  }
}

export default Results;