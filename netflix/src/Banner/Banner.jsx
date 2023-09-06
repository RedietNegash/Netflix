import axios from "../Axios/axios";
import React, { useEffect, useState } from "react";
import request from "../Request/request";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);
  async function fetchBanner() {
    const response = await axios.get(request.fetchNetflixOriginals);
    setMovie(response?.data.results[Math.floor(Math.random() * 20)]);
  }

  useEffect(() => {
    fetchBanner();
  }, []);
  // console.log(movie)

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <section className="">
      <header
        className="banner"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        }}
      >
        <div className="banner__contents">
          <h1 className="banner__title">
            {movie?.title || movie?.name || movie.original_name}
          </h1>

          <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
          </div>
          <div className="banner_static bannerr__buttons">
            <p className="year banner__button">
              {new Date(movie.first_air_date).getFullYear()}
            </p>

            <p className="ranking banner__button">{movie.vote_average}</p>
            <p className="language banner__button">{movie.original_language}</p>
          </div>

          <h3 className="banner__description">
            {truncate(movie?.overview, 160)}
          </h3>
          <div className="banner__fadeBottom"></div>
        </div>
      </header>
    </section>
  );
}

export default Banner;
