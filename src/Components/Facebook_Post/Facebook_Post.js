import React, { Component } from 'react';
//import logo from './logo.svg';


import FacebookEmoji from 'react-facebook-emoji';
import FbImageLibrary from 'react-fb-image-grid';


class Facebook_Post extends Component {
  constructor()
  {
    super();
    this.state={
      show:false
    }

  }
  header()
  {
    const {fb_post} =this.props;
  return  <div className="row"> </div>
    
  }
  imagess()
  {
    const {fb_post} =this.props;
  return  <div className="row"></div>
    
  }
  mouseEnter()
  {
   
    return(<div style={{marginTop:-40,position:"absolute"}}>
    <FacebookEmoji type="like" size="sm"/>
    <FacebookEmoji type="love" size="sm"/>
    <FacebookEmoji type="wow" size="sm"/>
    <FacebookEmoji type="yay" size="sm"/>
    <FacebookEmoji type="angry" size="sm"/>
    <FacebookEmoji type="haha" size="sm"/>
    <FacebookEmoji type="sad" size="sm"/>
</div>)
  
    
  }
  render() {
    const {show}=this.state;
    const {fb_post} =this.props;

    return (

      <div className="container">
      <div className="row" style={{marginBottom:10}} >
      <div className="col-md-1"style={{textAlign:"left"}} >
      <img className="img-circle"  src={fb_post.avatar} style={{borderRadius:100,width:50,height:50}}/>
      </div>
      <div className="col-md-2" style={{textAlign:"left"}}>

      <p>{fb_post.createdBy}</p>
     <p>
      {fb_post.createdAt}
      </p>
    

      </div>
      <div className="col-md-9">
      </div>
   
</div>
          <div className="row" >

          <FbImageLibrary images={fb_post.images} countFrom={4} />
          </div>
          <div className="row">
          <div class="col-md-12" >
          <div className="col-md-4 ">
          {show && this.mouseEnter()}
  <button type="button" onMouseOver={()=>this.mouseEnter()} class="btn btn-lg btn-default btn-block">Like</button>
  </div>
  <button type="button" class="col-md-4 btn btn-lg btn-default btn-block">Comment</button>
  <button type="button"  style={{marginTop:0}} class="col-md-4 btn btn-lg btn-default btn-block">Share</button>
</div>
          </div>
      </div>

    );
  }
}

export default Facebook_Post;
