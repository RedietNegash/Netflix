import React from "react";
import "./Row.css";
import Rows from "./Rows";
import request from "../Request/request";

function RowData() {
  const info = [
    {
      title: "NETFLIX ORIGINALS",
      fetchurl: request.fetchNetflixOriginals,
      isLargeRow: true,
    },
    { title: "Trending Now", fetchurl: request.fetchTrending },
    { title: "TopRatedMovies", fetchurl: request.fetchTopRatedMovies },
    { title: "ActionMovies", fetchurl: request.fetchActionMovies },
    { title: "ComedyMovies", fetchurl: request.fetchComedyMovies },
    { title: "HorrorMovies", fetchurl: request.fetchHorrorMovies },
    { title: "RomanceMovies", fetchurl: request.fetchRomanceMovies },
    { title: "Documentaries", fetchurl: request.fetchDocumentaries },
    { title: "AdventureMovies", fetchurl: request.fetchAdventureMovies },
  ];

  return (
    <div>
      {info.map((row, index) => (
        <Rows
          key={index}
          title={row.title}
          fetchurl={row.fetchurl}
          isLargeRow={index === 0 ? true : false}
        />
      ))}
    </div>
  );
}

export default RowData;
