import React, { Component } from "react";
import { Button,Icon } from 'react-materialize'
import "./Post.css";
import NewPost from '../NewPost/NewPost'



class Post extends Component {

  handleTopScroll = () => {
    // console.log('scroll top button pressed')
    window.scrollTo(0, 0)
  }


  render () {



    return(

  <div>
    <Button floating fab='vertical' faicon='fa fa-plus' className='red' large style={{ bottom: '45px', right: '24px' }}>
      
      <NewPost/>
      <Button
      onClick={this.handleTopScroll}
      floating
      className='grey'
      large
      >
      <Icon>arrow_drop_up</Icon>
      </Button>
      
      
    </Button>
  </div>
);

  }
}

export default Post;