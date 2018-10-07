import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'

// import FbImageLibrary from 'react-fb-image-grid'
import Facebook_Post from './Components/Facebook_Post/Facebook_Post';

class App extends Component {
  constructor()
  {
    super();
    this.state=
      { 
       fb_post : {
          createdBy: 'zeeshan',
          avatar: 'https://scontent.fkhi12-1.fna.fbcdn.net/v/t1.0-9/38875568_976215029237553_6527897523057590272_n.jpg?_nc_cat=105&oh=acbcbf58befacea5561035d08caa20f0&oe=5C536B42',
          description: "I'm not feeling good today!",
          images:
['https://goo.gl/JNcoRS','https://goo.gl/fsbwrh','https://goo.gl/U3X1gB','https://goo.gl/JNcoRS','https://goo.gl/fsbwrh','https://goo.gl/U3X1gB'],
        createdAt:"Today 12:00 AM",
        likes: ['zeeshan','osama','owais','manal','kashif']
        }
    }
  }
  
  
  render() {
    const {fb_post} =this.state;

    return (
      <div className="App">
    <Facebook_Post fb_post={fb_post}/>
      </div>
    );
  }
}

export default App;
