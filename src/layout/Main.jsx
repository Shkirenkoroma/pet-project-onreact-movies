import React from "react";
import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

class Main extends React.Component {
  state = {
    movies: [],
    loading: false,
  };

  componentDidMount() {
    fetch(`https://www.omdbapi.com/?apikey=40751423&s=matrix`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }))
      .catch((error) => {
        console.log(error);
        this.setState({ loading: false });
      });
  }
  searchMovies = (str, type = "all") => {
    this.setState({ loading: false });
    fetch(
      `https://www.omdbapi.com/?apikey=40751423&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }))
      .catch((error) => {
        console.log(error);
        this.setState({ loading: false });
      });
  };

  render() {
    const { movies, loading } = this.state;

    return (
      <main className="container content">
        <Search searchMovies={this.searchMovies} />

        {loading ? <Preloader /> : <Movies movies={movies} />}
      </main>
    );
  }
}
export { Main };
