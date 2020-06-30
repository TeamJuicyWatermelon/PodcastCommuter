import React, { Component } from "react";
import axios from "axios";
import walkingIcon from "./assets/walkingIcon.png";
import watermelonBikeIcon from "./assets/watermelonBikeIcon.png";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      podcasts: [],
      genre: '',
      isPodcastShown: false,
      chosenPodcast: '',
      from: '',
      to: '',
      isMapShown: false,
      minTime: '',
      maxTime: '',
      podcastGenre: '',
    };
  }

  scrollToSearch = (event) => {
    event.preventDefault();
    console.log("click");
    const searchSection = document.querySelector('.background1');
    searchSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  //Function to update user's input to current address state
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

//Function to display MAP and get commute time lengths for both route types
displayMap = (event) => {
  event.preventDefault();

  if (this.state.from !== '' && this.state.to !== '') {

    const routeType = ['bicycle', 'pedestrian'];
    routeType.map(type => {
      return (
        //Call Mapquest API to determine commute time
        axios({
          url: 'http://www.mapquestapi.com/directions/v2/route',
          method: 'GET',
          responseType: 'JSONP',
          params: {
            key: 'EP7bQzAhNEdKJsfFtJeLQDYa3muNllNO',
            routeType: type,
            from: this.state.from,
            to: this.state.to,
            unit: "k", 
          }
        }).then((response) => {
          console.log(response.data.route);
          //get commute time in seconds
          const commuteTimeSec = response.data.route.realTime;
          //convert commute time to minutes
          let commuteTimeMin =`${commuteTimeSec / 60}`;
          let roundedTime = Math.round(commuteTimeMin);
          // let roundedTime = commuteTimeMin;

          this.setState({
            isMapShown: true,
            [type]: roundedTime,
          })

        })
      )
    })   
  }
}

//Function to call Poscast API
getPodcasts = (transportationType) => {
  // commuteType is the argument from onClick funtions (choose route type section)
  console.log(transportationType);
  let minLen;
  let maxLen;

  if (transportationType === 'bicycle') {
    //set maximum and minimum podcast lengths to call Podcasts

     minLen = this.state.bicycle;
     maxLen = Math.round((this.state.bicycle * 1.1) + 1);
    // minLen = this.state.bicycle - 1;
    // maxLen = this.state.bicycle + 1;
    // minLen = (this.state.bicycle * 0.9);
    // maxLen = (this.state.bicycle * 1.1);
    console.log(minLen, maxLen);
  } else if (transportationType === 'pedestrian') {
    //set maximum and minimum podcast lengths to call Podcasts
    minLen = this.state.pedestrian;
    maxLen = Math.round((this.state.pedestrian * 1.1) + 1);
    console.log(minLen, maxLen);
  }
      //Call Podcast API
      axios({
        url: 'https://listen-api.listennotes.com/api/v2/search',
        method: 'GET',
        headers: { 'X-ListenAPI-Key': 'ea2d65fb95fc4f59a943faa7a423b3ad' },
        responseType: 'JSON',
        params: {
          q: "podcast",
          genre_ids: this.state.podcastGenre,
          type: "episode",
          language: "English",
          len_min: minLen, 
          len_max: maxLen, 
        }
      }).then((response) => {
        response = response.data.results;
        console.log(response);
        this.setState({
          podcasts: response,
        })
      }).catch((err) => {
        console.log(err); //ERROR HANDLING NEEDED HERE!!!
      }) 
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

  render() {
    const chosenPodcast = this.state.chosenPodcast;
    //Assign the mapUrl to a variable
    const mapImage = `https://www.mapquestapi.com/staticmap/v5/map?start=${this.state.from}&end=${this.state.to}&size=400,200@2x&key=GjfNgstNA6zUKUgGcbkAzOwhHGvwyPRl`;

    return (
      <div className="App">
        <div className="flexContainer">
          <header>
            <div className="wrapper">
              <h1>Podcast Commuter</h1>
              <p>Your source for juicy podcasts on the go!</p>
              <ul>
                <li>How it works:</li>
                <li>
                  1. select a cateogory of podcast you're in the mood for!
                </li>
                <li>
                  2. enter your starting address, followed by your destination.
                </li>
                <li>
                  3. let us work some magic and populate the perfect, juciest,
                  most time coordinated podcast just for you and your commute!
                </li>
              </ul>
              <button className="startButton" onClick={this.scrollToSearch}>Let's get started! </button>
              {/* the below can go into a component (renders title, link, and image of podcast) */}
              {/* <div className="podcast">
                <a href={this.state.podCast.audio}>
                  {" "}
                  <h2>{this.state.podCast.podcast_title_original}</h2>
                  <img src={this.state.podCast.image} />
                </a>
              </div> */}
              {/* the above can go into a component */}
            </div>
          </header>
        </div>
        <section className="background1">
          <div className="wrapper">
            <h2>
              Tell us your starting address, where you're headed, and pick a
              podcast!
            </h2>
            <form action="">
              <label htmlFor="">Starting Address</label>
              <input
              value={this.state.from} 
              onChange={this.handleChange}
              name="from"
              type="text" 
              placeholder="Street, city, postal code" />

              <label htmlFor="">Destination</label>
              <input 
              value={this.state.to}
              onChange={this.handleChange}
              name="to"
              type="text" 
              placeholder="Street, city, postal code" />

              <label htmlFor="podcastGenre">Podcast genre</label>
              <select name="podcastGenre" id="podcastGenre" onChange={this.handleChange}>
                <option disabled value="">Choose a podcast category!</option>
                <option value="144">Personal Finance</option>
                <option value="77">Sports</option>  
                <option value="93">Business</option>
                <option value="111">Education</option>
                <option value="100">Arts</option>
                <option value="132">Kids & Family</option>
                <option value="122">Society & Culture</option>
                <option value="133">Comedy</option>
                <option value="168">Fiction</option>
                <option value="117">Government</option>
                <option value="88">Health & Fitness</option>
                <option value="125">History</option>
                <option value="82">Leisure</option>
                <option value="134">Music</option>
                <option value="99">News</option>
                <option value="69">Religion & Spirituality</option>
                <option value="107">Science</option>
                <option value="68">TV & Film</option>
                <option value="127">Technology</option>
                <option value="135">True Crime</option>
              </select>

              <button onClick={this.displayMap}>LET'S GO!</button>
            </form>
          </div>
        </section>
        {/* part 3 */}
        <section className="background2">
          <div className="wrapper">
            <h2>
              Choose your method of transportion, and we will show you your
              route and podcast!
            </h2>

            {/* Ternary operator to display Map */}
          {this.state.isMapShown ? 
          <img src={mapImage} alt="hello"/>
          : null
          }

            <div className="transportationMode">
              <a onClick={() => this.getPodcasts('bicycle')}>
                <img src={watermelonBikeIcon} alt="Transportation via biking" />
              </a>
              {/* will need to convert mins to hrs in case user's commute length is longer than 60 mins */}
              <p>{this.state.bicycle} mins</p> 

              <a onClick={() => this.getPodcasts('pedestrian')}>
                <img src={walkingIcon} alt="Transportation via walking" />
              </a>
              {/* will need to convert mins to hrs in case user's commute length is longer than 60 mins */}
              <p>{this.state.pedestrian} mins</p>
            </div>
          </div>
        </section>
        {/* part 4 */}
        <section className="background3">
          <div id="here" className="wrapper">
            <h2>Pick your podcast!</h2>
            <ul className="podcastSection">
          {/* Map out the state of 'podcasts' array */}
          {this.state.podcasts.map(podcast => {
            return (
              <li key={podcast.id}>
                <h2>{podcast.podcast_title_original}</h2>
                <img src={podcast.image} alt={podcast.podcast_title_original}/>
                <p>Author: {podcast.publisher_original}</p>
                <p>Time: {podcast.audio_length_sec / 60} mins</p>
                <p>Description: {podcast.description_original}</p>
                <a href={podcast.link}>More Info</a>
                <button onClick={() => this.displayChosenPodcast(podcast)}>Choose</button>
              </li>
            )
          })}
        </ul>
        {/* Ternary operator to display chosen podcast */}
        {this.state.isPodcastShown ?

          <div key={chosenPodcast.id} className="chosenPodcast">
            <h2>{chosenPodcast.podcast_title_original}</h2>
                <img src={chosenPodcast.image} alt={chosenPodcast.podcast_title_original}/>
                <p>Author: {chosenPodcast.publisher_original}</p>
                <a href={chosenPodcast.link}>More Info</a>
                <button>Choose</button>
                <audio src={chosenPodcast.audio} controls/>
          </div>

        : null}

          </div>
        </section>
      </div>
    );
  }
}

export default App;
