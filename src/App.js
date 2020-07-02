import React, { Component } from "react";
import axios from "axios";
import walkingIcon from "./assets/walkingIcon.png";
import watermelonBikeIcon from "./assets/watermelonBikeIcon.png";
import watermelonfavicon from "./assets/watermelonfavicon.png";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      podcasts: [],
      genre: "",
      isPodcastShown: false,
      chosenPodcast: "",
      from: "",
      to: "",
      isMapShown: false,
      minTime: "",
      maxTime: "",
      podcastGenre: "",
      search: "",
      margin: 40,
    };
  }

  scrollToSearch = (section) => {
    // event.preventDefault();
    const searchSection = document.querySelector(section);
    searchSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  toggle = (event) => {
    event.preventDefault();
    if (this.state.margin === 40) {
      this.setState({
        margin: 70,
      });
    } else if (this.state.margin === 70) {
      this.setState({
        margin: 90,
      });
    } else {
      this.setState({
        margin: 40,
      });
    }
  };

  //Function to update user's input to current address state
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    // console.log(event.target.value);
  };

  //Function to display MAP and get commute time lengths for both route types
  displayMap = (event) => {
    event.preventDefault();

    if (this.state.from !== "" && this.state.to !== "") {
      const routeType = ["bicycle", "pedestrian"];
      routeType.map((type) => {
        return (
          //Call Mapquest API to determine commute time
          axios({
            url: "https://www.mapquestapi.com/directions/v2/route",
            method: "GET",
            responseType: "JSONP",
            params: {
              key: "EP7bQzAhNEdKJsfFtJeLQDYa3muNllNO",
              routeType: type,
              from: this.state.from,
              to: this.state.to,
            },
          }).then((response) => {
            // console.log(response.data.route);
            //get commute time in seconds
            const commuteTimeSec = response.data.route.realTime;
            //convert commute time to minutes
            let commuteTimeMin = `${commuteTimeSec / 60}`;
            let roundedTime = Math.round(commuteTimeMin);
            this.setState({
              isMapShown: true,
              [type]: roundedTime,
            });
          })
        );
      });
    }
  };

  //Function to call Poscast API
  getPodcasts = (transportationType, section) => {
    // commuteType is the argument from onClick funtions (choose route type section)
    // console.log(transportationType);
    let minLen;
    let maxLen;

    if (transportationType === "bicycle") {
      //set maximum and minimum podcast lengths to call Podcasts

      minLen = this.state.bicycle;
      maxLen = Math.round(this.state.bicycle * 1.1 + 1);
      // console.log(minLen, maxLen);
    } else if (transportationType === "pedestrian") {
      //set maximum and minimum podcast lengths to call Podcasts
      minLen = this.state.pedestrian;
      maxLen = Math.round(this.state.pedestrian * 1.1 + 1);
      // console.log(minLen, maxLen);
    }

    //Call Podcast API
    axios({
      url: "https://listen-api.listennotes.com/api/v2/search",
      method: "GET",
      headers: { "X-ListenAPI-Key": "ea2d65fb95fc4f59a943faa7a423b3ad" },
      responseType: "JSON",
      params: {
        q: this.state.search + this.state.podcastGenre,
        genre_ids: this.state.podcastGenre,
        type: "episode",
        language: "English",
        len_min: minLen,
        len_max: maxLen,
      },
    })
      .then((response) => {
        response = response.data.results;
        // console.log(response);
        this.setState({
          podcasts: response,
        });
      })
      .catch((err) => {
        console.log(err); //ERROR HANDLING NEEDED HERE!!!
      });
    this.scrollToSearch(section);
  };

  //----------------------------------
  //Function to display chosen Postcast
  displayChosenPodcast = (podcast, section) => {
    this.setState({
      isPodcastShown: true,
      chosenPodcast: podcast,
    });
    this.scrollToSearch(section);
  };

  render() {
    const chosenPodcast = this.state.chosenPodcast;
    //Assign the mapUrl to a variable
    const mapImage = `https://www.mapquestapi.com/staticmap/v5/map?start=${this.state.from}&end=${this.state.to}&size=400,200@2x&key=GjfNgstNA6zUKUgGcbkAzOwhHGvwyPRl&margin=${this.state.margin}`;

    return (
      <div className="App">
        {/* section one */}
        <div className="flexContainer">
          <header>
            <div className="wrapper">
              <h1>Podcast Commuter</h1>
              <div className="flexContainer">
                <p>
                  <img src={watermelonfavicon} alt="watermelon" />
                  Your source for juicy podcasts on the go!
                  <img src={watermelonfavicon} alt="watermelon" />
                </p>
              </div>
              <ul>
                <li>How it works:</li>
                <li>
                  1. enter your starting address, followed by your destination.
                </li>
                <li>
                  2. search a podcast by name, or select a cateogory of podcast
                  you're in the mood for!
                </li>
                <li>
                  3. let us work some magic and populate the perfect, juiciest,
                  most time coordinated podcast just for you and your commute!
                </li>
              </ul>
              <button
                className="startButton"
                onClick={() => this.scrollToSearch(".background1")}
              >
                Let's get started!{" "}
              </button>
            </div>
          </header>
        </div>
        {/* section two */}
        <section className="background1">
          <div className="wrapper">
            <h2>
              Tell us your starting address, where you're headed, and pick a
              podcast!
            </h2>
            <form action="" onSubmit={this.displayMap}>
              <div className="borderBox1">
                <h2>please enter your address</h2>
                <label htmlFor="">Starting Address</label>
                <input
                  value={this.state.from}
                  onChange={this.handleChange}
                  name="from"
                  type="text"
                  placeholder="Street number, street name, city, province"
                  required
                />

                <label htmlFor="">Destination</label>
                <input
                  value={this.state.to}
                  onChange={this.handleChange}
                  name="to"
                  type="text"
                  placeholder="Street number, street name, city, province"
                  required
                />
              </div>
              <div className="borderBox1">
                <h2>
                  please search for a podcast by name, or choose a podcast genre{" "}
                </h2>
                <label htmlFor="">Search for podcast by name</label>
                <input
                  value={this.state.search}
                  onChange={this.handleChange}
                  name="search"
                  type="text"
                  placeholder="Example: My Favorite Murder"
                />
                <button onClick={() => this.scrollToSearch(".background2")}>
                  SELECT
                </button>

                <p>OR</p>
                <label htmlFor="podcastGenre">
                  Search for podcast by genre
                </label>
                <select
                  name="podcastGenre"
                  id="podcastGenre"
                  onChange={this.handleChange}
                >
                  <option value="">Choose a podcast genre</option>
                  <option value="">Back to search by name</option>
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
                {/* the below button will clear the genre of podcast if user decides to change their mind and search for specific podcast instead & also clear the podcast name input field   */}
                <button onClick={() => this.scrollToSearch(".background2")}>
                  SELECT
                </button>
              </div>{" "}
            </form>
          </div>
        </section>
        {/* section 3 */}
        <section className="background2">
          <div className="wrapper">
            <h2>Choose your method of transportion</h2>

            {/* Ternary operator to display Map */}
            {this.state.isMapShown ? (
              <img
                src={mapImage}
                alt="Map of user commute"
                onClick={this.toggle}
              />
            ) : null}
            <button>+</button>
            <button>-</button>
            <div className="transportationMode">
              <div className="flexContainer2">
                <ul>
                  <li>
                    {" "}
                    <button
                      onClick={() =>
                        this.getPodcasts("bicycle", ".background3")
                      }
                    >
                      <img
                        src={watermelonBikeIcon}
                        alt="Transportation via biking"
                      />
                    </button>
                  </li>

                  <li>
                    {this.state.bicycle / 60 >= 1 ? (
                      <li>
                        Cycling Time: {Math.floor(this.state.bicycle / 60)}
                        hr{" "}
                        {this.state.bicycle -
                          60 * Math.floor(this.state.bicycle / 60)}
                        mins{" "}
                      </li>
                    ) : (
                      <li>Cycling Time: {this.state.bicycle} mins</li>
                    )}
                  </li>
                </ul>
                {/* will need to convert mins to hrs in case user's commute length is longer than 60 mins */}
                <ul>
                  <li>
                    <button
                      onClick={() =>
                        this.getPodcasts("pedestrian", ".background3")
                      }
                    >
                      <img src={walkingIcon} alt="Transportation via walking" />
                    </button>
                  </li>

                  <li>
                    {this.state.pedestrian / 60 >= 1 ? (
                      <li>
                        Walking Time: {Math.floor(this.state.pedestrian / 60)}{" "}
                        hr{" "}
                        {this.state.pedestrian -
                          60 * Math.floor(this.state.pedestrian / 60)}
                        mins{" "}
                      </li>
                    ) : (
                      <li>Walking Time: {this.state.pedestrian} mins</li>
                    )}
                  </li>
                </ul>

                {/* will need to convert mins to hrs in case user's commute length is longer than 60 mins */}
                {/* <p></p> */}
              </div>
            </div>
          </div>
        </section>
        {/* section 4 */}
        <section className="background3">
          <div id="here" className="wrapper">
            <h2>Pick your podcast!</h2>
            <ul className="podcastSection">
              <div className="flexContainer3">
                {/* Map out the state of 'podcasts' array */}
                {this.state.podcasts.map((podcast) => {
                  return (
                    <li key={podcast.id}>
                      <h2>{podcast.podcast_title_original}</h2>
                      <img
                        src={podcast.image}
                        alt={podcast.podcast_title_original}
                      />
                      <div className="flexContainer">
                        <p>Author: {podcast.publisher_original}</p>
                        {podcast.audio_length_sec / 60 / 60 >= 1 ? (
                          <p>
                            Time:{" "}
                            {Math.floor(podcast.audio_length_sec / 60 / 60)} hr{" "}
                            {Math.round(podcast.audio_length_sec / 60) -
                              60 *
                                Math.floor(
                                  podcast.audio_length_sec / 60 / 60
                                )}{" "}
                            mins
                          </p>
                        ) : (
                          <p>
                            Time: {Math.round(podcast.audio_length_sec / 60)}{" "}
                            mins
                          </p>
                        )}
                        <a href={podcast.link}>More Info</a>
                        <button
                          onClick={() =>
                            this.displayChosenPodcast(
                              podcast,
                              ".chosenPodcastSection"
                            )
                          }
                        >
                          Choose
                        </button>
                      </div>
                    </li>
                  );
                })}
              </div>
            </ul>
            {/* Ternary operator to display chosen podcast */}
          </div>
          {/* section 5 */}
          <section className="chosenPodcastSection wrapper">
            <h2>Audio Player</h2>
            {this.state.isPodcastShown ? (
              <div key={chosenPodcast.id} className="chosenPodcast">
                <h2>{chosenPodcast.podcast_title_original}</h2>
                <div className="flexContainer2">
                  <img
                    src={chosenPodcast.image}
                    alt={chosenPodcast.podcast_title_original}
                  />
                  <div className="flexContainer">
                    <p>Author: {chosenPodcast.publisher_original}</p>
                    <a href={chosenPodcast.link}>More Information</a>
                    <audio src={chosenPodcast.audio} controls />
                  </div>
                </div>
              </div>
            ) : null}
          </section>
        </section>
        <footer>
          <p>
            this juicy app was created during a not so juicy time in 2020 by
            Cliff, Victor, Anh, and Ro
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
