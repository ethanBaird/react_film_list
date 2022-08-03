import React, { useState } from "react";
import FilmForm from "../components/FilmForm";
import FilmsList from "../components/FilmsList";

const FilmsBox = () => {
    const [films, setFilms] = useState([
        {
          id: 1,
          name: "Spider-Man: Into the Spider-Verse",
          url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
        },
        {
          id: 2,
          name: "Life Itself",
          url: "https://www.imdb.com/title/tt5989218/?ref_=rlm"
        },
        {
          id: 3,
          name: "Mary Queen of Scots",
          url: "https://www.imdb.com/title/tt2328900/?ref_=rlm"
        },
        {
          id: 4,
          name: "The Lego Movie 2: The Second Part", url: "https://www.imdb.com/title/tt3513498/?ref_=rlm"
        },
        {
          id: 5,
          name: "Captain Marvel",
          url: "https://www.imdb.com/title/tt4154664/?ref_=rlm"
        }
    ]);

    const addFilm = (submittedFilm) => {
        submittedFilm.id = Date.now();
        const updatedFilms = [...films, submittedFilm]
        setFilms(updatedFilms);
    }

    return (
        <>
            <h1>Upcoming Film Releases for UK</h1>
            <div className="wrapper">
            <FilmsList films={films}/>
                <FilmForm onFilmSubmit={(film) => {addFilm(film)}}/>
            </div>
            

            <a href="https://www.imdb.com/calendar/?region=gb">
                <input type='submit' value='see more' className="see-more"/>
            </a>
            
        </>
    )
}

export default FilmsBox;