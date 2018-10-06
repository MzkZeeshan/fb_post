import React, { Component } from 'react';
//import logo from './logo.svg';
import '../../App.css'

import FacebookEmoji from 'react-facebook-emoji';
import FbImageLibrary from 'react-fb-image-grid';


class Facebook_Post extends Component {
  constructor()
  {
    super();

  }
  header()
  {
    const {fb_post} =this.props;
  return  <div className="row"> </div>
    
  }
  imagess()
  {
    const {fb_post} =this.props;
  return  <div className="row"> <FbImageLibrary images={fb_post.images} countFrom={4} width={50} /></div>
    
  }
  mouseEnter()
  {
    return(
   
  
  
   
    )
  
    
  }
  render() {
    const {fb_post} =this.props;

    return (

      <div className="App">

          <div className="row">
          <div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" onMouseOver={()=>this.mouseEnter()} class="btn btn-secondary">Like</button>
  <button type="button" class="btn btn-secondary">Comment</button>
  <button type="button" class="btn btn-secondary">Share</button>
</div>
          </div>
      </div>

    );
  }
}

export default Facebook_Post;
