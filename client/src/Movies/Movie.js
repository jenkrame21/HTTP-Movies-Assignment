import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import MovieCard from "./MovieCard";

function Movie(props, { addToSavedList }) {
  const [movie, setMovie] = useState(null);
  const params = useParams();
  const { id } = props.match.params;

  const fetchMovie = (id) => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err.response));
  };

  const saveMovie = () => {
    addToSavedList(movie);
  };

  const updateMovie = () => {
    // console.log("Update Movie Button Clicked!", props.history);
    props.history.push(`/update-movie/${id}`);
  };

  useEffect(() => {
    fetchMovie(params.id);
  }, [params.id]);

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className="save-wrapper">
      <MovieCard movie={movie} />

      <button className="save-button" onClick={saveMovie}>
        Save
      </button>
      <button className="update-button" onClick={updateMovie}>
        Update
      </button>
    </div>
  );
}

export default Movie;
