import React, { Component } from "react";
import axios from "axios";
import Header from "./Header";
import Form from "./Form";
import Map from "./Map";
import Podcast from "./Podcast";
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
      // minTime: "",
      // maxTime: "",
      podcastGenre: "",
      search: "",
      margin: 40,
      bicycle: "",
      pedestrian: "",
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

  scrollToSearchBottom = () => {
    // event.preventDefault();
    const searchSection = document.querySelector(".chosenPodcastSection");
    searchSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  resultButton = () => {
    const timer = setTimeout(() => this.scrollToSearchBottom(), 500);
    return () => clearTimeout(timer);
  };

  zoomIn = (event) => {
    event.preventDefault();
    if (this.state.margin === 90) {
      this.setState({
        margin: 70,
      });
    } else if (this.state.margin === 70) {
      this.setState({
        margin: 40,
      });
    } else {
      this.setState({
        margin: 1,
      });
    }
  };

  zoomOut = (event) => {
    event.preventDefault();
    if (this.state.margin === 1) {
      this.setState({
        margin: 40,
      });
    } else if (this.state.margin === 40) {
      this.setState({
        margin: 70,
      });
    } else {
      this.setState({
        margin: 90,
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
    let minLen = "";
    let maxLen = "";

    // if (this.state.bicycle <= 180 || this.state.pedestrian <= 180) {
    if (transportationType === "bicycle" && this.state.bicycle <= 180) {
      //set maximum and minimum podcast lengths to call Podcasts
      minLen = this.state.bicycle;
      maxLen = Math.round(this.state.bicycle * 1.1 + 1);
      // console.log(minLen, maxLen);
    } else if (
      transportationType === "pedestrian" &&
      this.state.pedestrian <= 180
    ) {
      //set maximum and minimum podcast lengths to call Podcasts
      minLen = this.state.pedestrian;
      maxLen = Math.round(this.state.pedestrian * 1.1 + 1);
      // console.log(minLen, maxLen);
    } else {
      alert("ERROR");
    }

    //Call Podcast API

    if (minLen !== "" && maxLen !== "") {
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
          if (response.length < 1) {
            alert("ERROR");
          } else if (response.length >= 0) {
            this.setState({
              podcasts: response,
            });
          }
          // console.log(response);
          // this.setState({
          //   podcasts: response,
          // });
        })
        .catch(() => {
          alert("Oops! Request didn't work! Please try again!");
          // add in sweet alert
        });
      this.scrollToSearch(section);
    }
  };

  //----------------------------------
  //Function to display chosen Postcast
  displayChosenPodcast = (podcast, section) => {
    this.resultButton();
    this.setState({
      isPodcastShown: true,
      chosenPodcast: podcast,
    });
    // this.scrollToSearch(section);
  };

  render() {
    return (
      <div className="App">
        {/* section one */}
        <Header scrollToSearch={this.scrollToSearch} />
        {/* section two */}
        <Form
          scrollToSearch={this.scrollToSearch}
          handleChange={this.handleChange}
          displayMap={this.displayMap}
          from={this.state.from}
          to={this.state.to}
          search={this.state.search}
        />
        {/* section 3 */}
        <Map
          isMapShown={this.state.isMapShown}
          zoomIn={this.zoomIn}
          zoomOut={this.zoomOut}
          getPodcasts={this.getPodcasts}
          bicycle={this.state.bicycle}
          pedestrian={this.state.pedestrian}
          margin={this.state.margin}
          to={this.state.to}
          from={this.state.from}
        />
        {/* section 4 */}
        <Podcast
          chosenPodcast={this.state.chosenPodcast}
          podcasts={this.state.podcasts}
          displayChosenPodcast={this.displayChosenPodcast}
          isPodcastShown={this.state.isPodcastShown}
        />
        <footer>
          <div className="">
            <p>
              Podcast Commuter was created by{" "}
              <a
                href="https://github.com/anhthuydang"
                target="_blank"
                rel="noopener noreferrer"
              >
                Anh Thuy Dang
              </a>{" "}
              &&{" "}
              <a
                href="https://github.com/cliffstonge"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cliff St-Onge
              </a>{" "}
              &&{" "}
              <a
                href="https://github.com/rojhanpaydar"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ro Paydar
              </a>{" "}
              &&{" "}
              <a
                href="https://github.com/VictorKwong"
                target="_blank"
                rel="noopener noreferrer"
              >
                Victor Wong
              </a>
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
