
import React from "react";
import { useEffect, useState } from "react";
import ProductCard from "./../components/MovieItem";
import axiosInstance from "../network/axiosConfig";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("https://api.themoviedb.org/3/movie/popular?api_key=e4c22d4d823464fe0ede30b831837a46")
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="row row-cols-md-5 g-4">
        {movies.map((movie) => {
          return (
            <div className="col mb-4" key={movie.id}>
              <ProductCard data={movie} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

