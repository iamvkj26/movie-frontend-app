import { useState, useRef } from "react";
import useMovieSeries from "../../hooks/useMovieSeries";
import NextWatch from "../NextWatch";
import MovieCardList from "./MovieCardList";
import EditMovieSeries from "../../pages/EditMovieSeries";

const Card = ({ filters }) => {

    const { movieSeries, nextToWatch, handleGetMovieSeries, handleDeleteMovieSeries, handleWatchedMovieSeries } = useMovieSeries(filters);

    const [editMovieSeries, setEditMoviSeries] = useState({ msName: "", msAbout: "", msPoster: "", msLink: "", msSeason: "", msFormat: "", msIndustry: "", msReleaseDate: "", msGenre: [], msRating: "", msUploadedBy: "" });
    const [deleteMoviSeries, setDeleteMoviSeries] = useState(null);

    const refOpenCanvas = useRef(null);

    const updateMovieSeries = (currentMovieSeies) => {
        setEditMoviSeries({ _id: currentMovieSeies._id, msName: currentMovieSeies.msName, msAbout: currentMovieSeies.msAbout, msPoster: currentMovieSeies.msPoster, msLink: currentMovieSeies.msLink, msSeason: currentMovieSeies.msSeason, msFormat: currentMovieSeies.msFormat, msIndustry: currentMovieSeies.msIndustry, msReleaseDate: currentMovieSeies.msReleaseDate, msGenre: currentMovieSeies.msGenre, msRating: currentMovieSeies.msRating, msUploadedBy: currentMovieSeies.msUploadedBy });
        refOpenCanvas.current.click();
    };

    return (
        <>
            <NextWatch
                nextToWatch={nextToWatch}
            />
            <div className="container">
                <MovieCardList
                    movieSeries={movieSeries}
                    deleteId={deleteMoviSeries}
                    onDelete={setDeleteMoviSeries}
                    confirmDelete={handleDeleteMovieSeries}
                    cancelDelete={() => setDeleteMoviSeries(null)}
                    onWatched={handleWatchedMovieSeries}
                    onEdit={updateMovieSeries}
                />
            </div>
            <EditMovieSeries
                refOpenCanvas={refOpenCanvas}
                editMovieSeries={editMovieSeries}
                handleGetMovieSeries={handleGetMovieSeries}
            />
        </>
    );
};

export default Card;