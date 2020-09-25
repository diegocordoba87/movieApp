import React, { Component } from "react";
import { getMovies } from "../movies";

class Counter extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete=(movie)=>{
    const movies = this.state.movies.filter(m=> m._id !== movie._id)
    this.setState({movies: movies})
  }

  render() {
      const { length: count} = this.state.movies;
      if(count === 0)
      return <h1>There are no movies to display</h1>
    return (
      <>
        <div className="container text-center">
          <div className="row">
            <div className="col-12 ">
              <h3>There are currently {count} movies</h3>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Rate</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.movies.map((movie) => (
                    <tr key={movie._id}>
                      <td>{movie.title}</td>
                      <td>{movie.genre.name}</td>
                      <td>{movie.numberInStock}</td>
                      <td>{movie.dailyRentalRate}</td>
                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={()=>this.handleDelete(movie)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Counter;
