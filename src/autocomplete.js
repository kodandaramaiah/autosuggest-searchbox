/* import React from "react";
import "./Autocom.css";
import "bootstrap/dist/css/bootstrap.min.css";
class Autocomplate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      suggestions: [],
      text: "",
    };
  }
  onTextchanged = (e) => {
    const { items } = this.props;
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = items.sort().filter((v) => regex.test(v));
    }
    this.setState(() => ({ suggestions, text: value }));
  };

  suggestionSelected(value) {
    this.setState(() => ({
      text: value,
      suggestions: [],
    }));
  }
  renderSuggestions() {
    const { suggestions } = this.state;
    if (suggestions.length == 0) {
      return null;
    }

    return (
      <ul>
        {suggestions.map((item) => (
          <li onClick={() => this.suggestionSelected(item)}>{item}</li>
        ))}
      </ul>
    );
  }

  render() {
    const { text } = this.state;
    return (
      <div className="bgcolor">
        <div>
          <i className="fas fa-search fa-5x mb-5"></i>
          <h2>
            {" "}
            <em>Search state or city name</em>
          </h2>
          <div className="Autocom">
            <input
              value={text}
              onChange={this.onTextchanged}
              type="text"
              placeholder="Enter state or city name...."
            />
            {this.renderSuggestions()}
            <button onClick={this.onTextchanged} className="button">
              search
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Autocomplate;
 */
