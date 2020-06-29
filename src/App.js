import React, { Component } from 'react';
import axios from 'axios';

class App extends Component{
 constructor(){
   super()
     this.state = {
      userTyping: '',
      podcasts: [],
      genre: '',
      isPodcastShown: false,
      chosenPodcast: '',
      from: '',
      to: '',
      isMapShown: false,
      routeType: '',
      minTime: '',
      maxTime: '',
      
     }
 }
 //Function to update user's keystroke to current state
 handleChange = (event) => {
  this.setState({
    [event.target.name]: event.target.value,
  })
}

  //Function to make the Direction API call
  handleSubmit = () => {
    if (this.state.from !== '' && this.state.to !== '') {
      axios({
        url: 'http://www.mapquestapi.com/directions/v2/route',
        method: 'GET',
        responseType: 'JSONP',
        params: {
          key: 'EP7bQzAhNEdKJsfFtJeLQDYa3muNllNO',
          routeType: 'pedestrian',
          from: this.state.from,
          to: this.state.to,
        }
      }).then((response) => {
        const commuteTimeSec = response.data.route.realTime;
        let commuteTimeMin =`${commuteTimeSec / 60}`;
        const roundedTime = Math.round(commuteTimeMin);
        // console.log(roundedTime);
        
        const min = roundedTime - 1;
        const max = roundedTime + 1;
        console.log(min);
        console.log(max);

        this.setState({
          isMapShown: true,
          minTime: min,
          maxTime: max,
        })
      })

      
      console.log(this.state.maxTime);


      axios({
        url: 'https://listen-api.listennotes.com/api/v2/search',
        method: 'GET',
        headers: { 'X-ListenAPI-Key': 'ea2d65fb95fc4f59a943faa7a423b3ad' },
        responseType: 'JSON',
        params: {
          q: 'general', //this.state.genre  here
          type: "episode",
          language: "English",
          len_min:this.state.minTime, //this.state.commuteTime  here
          len_max: this.state.maxTime, //this.state.commuteTime here
        }
      }).then((response) => {
        response = response.data.results;
        this.setState({
          podcasts: response,
        })
      }) 
    }
  }


//----------------------------------
//Function to display chosen Postcast
displayChosenPodcast = (podcast) => {
// console.log(podcast);
  this.setState({
    isPodcastShown: true,
    chosenPodcast: podcast,
  })
}

  render(){
    const chosenPodcast = this.state.chosenPodcast;
    //Assign the mapUrl to a variable
    const mapImage = `https://www.mapquestapi.com/staticmap/v5/map?start=${this.state.from}&end=${this.state.to}&size=400,200@2x&key=GjfNgstNA6zUKUgGcbkAzOwhHGvwyPRl`;
    return (
      <div className="App">
        <h1>Podcast Commuter</h1>
        {/* THIS IS SEARCH AND MAP SECTION */}
        <div className="searchSection">
          <input 
          type="text" 
          value={this.state.from} 
          name="from" 
          onChange={this.handleChange}
          placeholder="Starting Address"/>

          <input 
          type="text" 
          value={this.state.to} 
          name="to" 
          onChange={this.handleChange}
          placeholder="Destination Address"/>

          <button onClick={this.handleSubmit}>Submit</button>
          <h3>Commute Time : </h3>

          {/* Ternary operator to display Map */}
          {this.state.isMapShown ? 
          <img src={mapImage} alt="hello"/>
          : null
          }

          {/* Route Type Options */}
          <div>
          <button>Walk</button>
          </div>
          <div>
          <button>Bike</button>
          </div>
          
        </div>
        



        {/* THIS IS PODCAST SECTION */}
        <ul className="podcastSection">
          {this.state.podcasts.map(podcast => {
            return (
              <li key={podcast.id}>
                <h2>{podcast.podcast_title_original}</h2>
                <img src={podcast.image} alt={podcast.podcast_title_original}/>
                <p>Author: {podcast.publisher_original}</p>
                <a href={podcast.link}>More Info</a>
                <button onClick={() => this.displayChosenPodcast(podcast)}>Choose</button>
              </li>
            )
          })}
        </ul>
          {/* Ternary operator to display chosen podcast */}
        {this.state.isPodcastShown ?

          <div key={chosenPodcast.id} className="chosenPodcast">
            <h1>THIS IS THE CHOSEN PODCAST SECTION!!!</h1>
            <h2>{chosenPodcast.podcast_title_original}</h2>
                <img src={chosenPodcast.image} alt={chosenPodcast.podcast_title_original}/>
                <p>Author: {chosenPodcast.publisher_original}</p>
                <a href={chosenPodcast.link}>More Info</a>
                <button>Choose</button>
                <audio src={chosenPodcast.audio} controls/>
          </div>

        : null}
      </div>
    );
  }
}
export default App;


