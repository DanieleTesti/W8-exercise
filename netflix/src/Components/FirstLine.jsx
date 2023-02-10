import { Component } from "react";

class FirstLine extends Component {
  state = {
    query: [],
  };
  componentDidMount = async () => {
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?i=tt3896198&apikey=3c88a308&s=${this.props.title}`
      );
      console.log(response);
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        this.setState({ query: data.Search });
      } else {
        console.log("error");
        this.setState({ isLoading: false });
      }
    } catch (error) {
      console.log(error);
      this.setState({ isLoading: false });
    }
  };

  render() {
    return (
      <>
        {this.state.query.slice(0, 7).map((film) => (
          // eslint-disable-next-line jsx-a11y/alt-text
          <img
            key={film.imdbID}
            src={film.Poster}
            style={{ height: "300px", width: "180px" }}
            className="m-4"
          ></img>
        ))}
      </>
    );
  }
}

export default FirstLine;
