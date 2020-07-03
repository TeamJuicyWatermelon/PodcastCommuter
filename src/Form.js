import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <section className="formBackground">
        <div className="wrapper">
          <h2>
            Tell us your starting address, where you're headed, and pick a
            podcast!
          </h2>
          <form action="" onSubmit={this.props.displayMap}>
            <div className="borderBox1">
              <h2>Please enter your address</h2>
              <label htmlFor="">Starting Address</label>
              <input
                value={this.props.from}
                onChange={this.props.handleChange}
                name="from"
                type="text"
                placeholder="Street address, city, prov."
                required
              />

              <label htmlFor="">Destination</label>
              <input
                value={this.props.to}
                onChange={this.props.handleChange}
                name="to"
                type="text"
                placeholder="Street address, city, prov."
                required
              />
            </div>
            <div className="borderBox1">
              <h2>
                Please search for a podcast by name, or choose a podcast genre{" "}
              </h2>
              <label htmlFor="">Search for podcast by name</label>
              <input
                value={this.props.search}
                onChange={this.props.handleChange}
                name="search"
                type="text"
                placeholder="Example: My Favorite Murder"
              />
              <button
                onClick={() => this.props.scrollToSearch(".mapBackground")}
              >
                SELECT
              </button>

              <p>OR</p>
              <label htmlFor="podcastGenre">Search for podcast by genre</label>
              <select
                name="podcastGenre"
                id="podcastGenre"
                onChange={this.props.handleChange}
              >
                <option value="">Choose a genre</option>
                <option value="127">Technology</option>
                <option value="135">True Crime</option>
                <option value="134">Music</option>
                <option value="77">Sports</option>
                <option value="99">News</option>
                <option value="100">Arts</option>
                <option value="68">TV & Film</option>
                <option value="88">Health & Fitness</option>
                <option value="93">Business</option>
                <option value="111">Education</option>
                <option value="132">Kids & Family</option>
                <option value="122">Society & Culture</option>
                <option value="144">Personal Finance</option>
                <option value="133">Comedy</option>
                <option value="125">History</option>
                <option value="69">Religion & Spirituality</option>
                <option value="107">Science</option>
                <option value="117">Government</option>
              </select>
              <button
                onClick={() => this.props.scrollToSearch(".mapBackground")}
              >
                SELECT
              </button>
            </div>{" "}
          </form>
        </div>
      </section>
    );
  }
}

export default Form;
