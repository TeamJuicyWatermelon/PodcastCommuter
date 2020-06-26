import React, { Component } from 'react';
import axios from 'axios';

class App extends Component{
 constructor(){
   super()
     this.state = {
      userTyping: '',
      podCast: '',
      genres: '',
     }
 }

  componentDidMount() {
    /* Map API */
    axios({
      url: 'http://www.mapquestapi.com/directions/v2/route',
      method: 'GET',
      responseType: 'JSONP',
      params: {
        key: 'EP7bQzAhNEdKJsfFtJeLQDYa3muNllNO',
        from: '483 Queen St W, Toronto, ON',
        to: '152 Spadina Av, Toronto, ON',
      }
    }).then((response) => {
      console.log(response);
    })
    
    axios({
      /* Podcast API */
      url: 'https://listen-api.listennotes.com/api/v2/search',
      method: 'GET',
      headers: { 'X-ListenAPI-Key': 'efedd950b2d84805a5c9ede9b4543e23' },
      responseType: 'JSON',
      params: {
        q: "Personal Finance",
        type: "episode",
        language: "English",
      }
    }).then((response) => {
      console.log(response);
      this.setState({
        podCast: response.data.results[0],
      })
    })

}

  render(){
    return (
      <div className="App">
          <h1>Podcast Commuter</h1>
          <h2>{this.state.podCast.audio}</h2>
          <h2>{this.state.podCast.podcast_title_original}</h2>
      </div>
    );
  }
}

export default App;
