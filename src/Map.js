import React, { Component } from "react";
import walkingIcon from "./assets/walkingIcon.png";
import watermelonBikeIcon from "./assets/watermelonBikeIcon.png";

class Map extends Component {
  render() {
    //Assign the mapUrl to a variable
    const mapImage = `https://www.mapquestapi.com/staticmap/v5/map?start=${this.props.from}&end=${this.props.to}&size=400,200@2x&key=GjfNgstNA6zUKUgGcbkAzOwhHGvwyPRl&margin=${this.props.margin}`;

    return (
      <section className="background2">
        <div className="wrapper">
          <h2>Choose your method of transportion</h2>

          {/* Ternary operator to display Map */}
          {this.props.isMapShown ? (
            <img src={mapImage} alt="Map of user commute" />
          ) : null}
          <button onClick={this.props.zoomIn}>+</button>
          <button onClick={this.props.zoomOut}>-</button>
          <div className="transportationMode">
            <div className="flexContainer2">
              <ul>
                <li>
                  {" "}
                  <button
                    onClick={() =>
                      this.props.getPodcasts("bicycle", ".background3")
                    }
                  >
                    <img
                      src={watermelonBikeIcon}
                      alt="Transportation via biking"
                    />
                  </button>
                </li>
                {this.props.bicycle / 60 >= 1 ? (
                  <li>
                    Cycling Time: {Math.floor(this.props.bicycle / 60)}
                    hr{" "}
                    {this.props.bicycle -
                      60 * Math.floor(this.props.bicycle / 60)}
                    mins{" "}
                  </li>
                ) : (
                  <li>Cycling Time: {this.props.bicycle} mins</li>
                )}
              </ul>
              {/* will need to convert mins to hrs in case user's commute length is longer than 60 mins */}
              <ul>
                <li>
                  <button
                    onClick={() =>
                      this.props.getPodcasts("pedestrian", ".background3")
                    }
                  >
                    <img src={walkingIcon} alt="Transportation via walking" />
                  </button>
                </li>
                {this.props.pedestrian / 60 >= 1 ? (
                  <li>
                    Walking Time: {Math.floor(this.props.pedestrian / 60)} hr{" "}
                    {this.props.pedestrian -
                      60 * Math.floor(this.props.pedestrian / 60)}
                    mins{" "}
                  </li>
                ) : (
                  <li>Walking Time: {this.props.pedestrian} mins</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Map;
