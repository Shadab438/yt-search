import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: " " };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearchSubmit(this.state.query);
    // this.setState({ query: " " });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} className="m-2">
          <div className="form-group">
            <label className="form-label">Search Video</label>
            <input
              type="text"
              value={this.state.query}
              className="form-control"
              onChange={(e) => {
                this.setState({ query: e.target.value });
              }}
            />
          </div>
        </form>
      </>
    );
  }
}

export default Search;
