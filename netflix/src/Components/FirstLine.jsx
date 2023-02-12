import { Component } from "react";
import Loading from "./Loading";
import Error from "./Error";

class FirstLine extends Component {
  state = {
    isLoading: true,
    isError: false,
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
        this.setState({ query: data.Search, isLoading: false, isError: false });
      } else {
        console.log("error");
        this.setState({ isLoading: false, isError: true });
      }
    } catch (error) {
      console.log(error);
      this.setState({ isLoading: false, isError: true });
    }
  };

  render() {
    return (
      <>
        {this.state.isLoading && <Loading />}
        {this.state.isError && <Error />}
        {this.state.query.slice(0, 6).map((film) => (
          // eslint-disable-next-line jsx-a11y/alt-text
          <img
            key={film.imdbID}
            src={film.Poster}
            style={{ height: "400px", width: "250px" }}
            className="m-4"
          ></img>
        ))}
      </>
    );
  }
}

export default FirstLine;
