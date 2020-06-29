import React, { Component } from "react";
import axios from "axios";
import walkingIcon from "./assets/walkingIcon.png";
import watermelonBikeIcon from "./assets/watermelonBikeIcon.png";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userTyping: "",
      podCast: "",
      genres: "",
    };
  }

  componentDidMount() {
    /* Map API */
    axios({
      url: "http://www.mapquestapi.com/directions/v2/route",
      method: "GET",
      responseType: "JSONP",
      params: {
        key: "EP7bQzAhNEdKJsfFtJeLQDYa3muNllNO",
        from: "483 Queen St W, Toronto, ON",
        to: "152 Spadina Av, Toronto, ON",
      },
    }).then((response) => {
      console.log(response);
    });

    axios({
      /* Podcast API */
      url: "https://listen-api.listennotes.com/api/v2/search",
      method: "GET",
      headers: { "X-ListenAPI-Key": "efedd950b2d84805a5c9ede9b4543e23" },
      responseType: "JSON",
      params: {
        q: "Personal Finance",
        type: "episode",
        language: "English",
      },
    }).then((response) => {
      console.log(response);
      this.setState({
        podCast: response.data.results[0],
      });
    });
  }

  render() {
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
              <button>Let's get started! </button>
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
              <input type="text" placeholder="Street, city, postal code" />
              <label htmlFor="">Destination</label>
              <input type="text" placeholder="Street, city, postal code" />
              <label htmlFor="">Podcast genre</label>
              <select name="" id="">
                <option disable value="">
                  Choose a podcast category!
                </option>
              </select>
              <button>LET'S GO!</button>
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
            <div className="transportationMode">
              <a href="#here">
                <img src={watermelonBikeIcon} alt="Transportation via biking" />
              </a>
              <a href="#here">
                <img src={walkingIcon} alt="Transportation via walking" />
              </a>
            </div>
          </div>
        </section>
        {/* part 4 */}
        <section className="background3">
          <div id="here" className="wrapper">
            <h2>Pick your podcast!</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
              nesciunt, facere fugiat exercitationem officia totam error
              perspiciatis placeat fugit eaque aspernatur molestias voluptatem
              necessitatibus repellendus similique quod quae, alias, omnis odio
              dicta autem? Architecto placeat officia, voluptate beatae
              laboriosam inventore nulla a, magnam modi temporibus consectetur
              numquam! Consequatur non deserunt quaerat et enim totam, illo
              sapiente ratione, aperiam ducimus ad!
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
