import React, { Component } from 'react';
import logo from './logo.svg';


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
          avatar: 'https://www.facebook.com/photo.php?fbid=976215022570887&set=a.100620620130336&type=3&theater',
          description: "I'm not feeling good today!",
          images:
['https://goo.gl/JNcoRS','https://goo.gl/fsbwrh','https://goo.gl/U3X1gB','https://goo.gl/JNcoRS','https://goo.gl/fsbwrh','https://goo.gl/U3X1gB'],
        createdAt: Date.now(),
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
