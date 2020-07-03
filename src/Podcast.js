import React, { Component } from "react";

class Podcast extends Component {
  render() {
    const chosenPodcast = this.props.chosenPodcast;
    return (
      <section className="podcastBackground">
        <div id="here" className="wrapper">
          <h2>Pick your podcast</h2>
          <ul className="podcastSection">
            <div className="flexContainer3">
              {/* Map out the state of 'podcasts' array */}
              {this.props.podcasts.map((podcast) => {
                return (
                  <li key={podcast.id}>
                    <h2>{podcast.podcast_title_original}</h2>
                    <img
                      src={podcast.image}
                      alt={podcast.podcast_title_original}
                    />
                    <div className="flexContainer">
                      <p>Episode: {podcast.title_original}</p>
                      <p>Author: {podcast.publisher_original}</p>
                      {podcast.audio_length_sec / 60 / 60 >= 1 ? (
                        <p>
                          Time: {Math.floor(podcast.audio_length_sec / 60 / 60)} hr {Math.round(podcast.audio_length_sec / 60) - 60 * Math.floor(podcast.audio_length_sec / 60 / 60)} mins
                        </p>
                      ) : (
                        <p>
                          Time: {Math.round(podcast.audio_length_sec / 60)} mins
                        </p>
                      )}
                      <a 
                      href={podcast.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      >More Info</a>
                      <button
                        onClick={() =>
                          this.props.displayChosenPodcast(
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
        <div className="chosenPodcastSection wrapper">
          <h2>Audio Player</h2>
          {this.props.isPodcastShown ? (
            <div key={chosenPodcast.id} className="chosenPodcast">
              <h2>{chosenPodcast.podcast_title_original}</h2>
              <div className="flexContainer2">
                <img
                  src={chosenPodcast.image}
                  alt={chosenPodcast.podcast_title_original}
                />
                <div className="flexContainer">
                  <p>Episode: {chosenPodcast.title_original}</p>
                  <p>Author: {chosenPodcast.publisher_original}</p>
                  <a 
                  href={chosenPodcast.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  >More Information</a>
                  <audio src={chosenPodcast.audio} controls />
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </section>
    );
  }
}

export default Podcast;
