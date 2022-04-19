import React, { useEffect, useState } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import axios from "../network/axiosConfig";

export default function MovieDetails() {
    const params = useParams();
    // const { pathname } = useLocation();
    const [movie, setMovie] = useState({});
    const [genres, setGenres] = useState([]);
    const [companies, setcompanies] = useState([]);
    // const [favorite, setFavorite] = useState(false);
    

    useEffect(() => {
        axios
          .get(`movie/${params.id}`)
          .then((res) => {
            setMovie(res.data);
            setGenres(res.data.genres);
            setcompanies(res.data.production_companies);
          })
          .catch((err) => console.log(err));
      }, []);
    
    return (
        <div className="card mb-3 w-75 mx-auto">
            <div className="row ">
                <div className="col-md-4">
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="img-fluid rounded-start" alt="" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <p className="card-title my-3 h4">{movie.title + " "}
                          
                        </p>

                        <p className="card-text mx-4">{movie.overview}</p>

                        <table className="table">
                            <tbody>
                                <tr><td><b>Rate </b> {" : " + movie.vote_average}</td></tr>
                                <tr><td><b>Production Companies </b>{companies.map((company) => " | " + company.name)}</td></tr>
                                <tr><td><b>Genres </b>{genres.map((genre) => " : " + genre.name)}</td></tr>
                                <tr><td><b>Release Date </b> {" : " + movie.release_date}</td></tr>
                            </tbody>
                        </table>

                        <p className="card-text"><small className="text-muted"></small></p>
                    </div>
                </div>
            </div>
        </div>
    );
}