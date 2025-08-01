import { useRef, useState } from "react";
import { useLocation, Link } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { formatDate } from "../../utils/formatDate";
import GenreBadge from "../shared/GenreBadge";
import MovieCardActions from "./MovieCardActions";
import useMovieSeries from "../../hooks/useMovieSeries";
import EditMovieSeries from "../../pages/EditMovieSeries";

const MovieCardDetails = () => {

    const { movie } = useLocation().state;
    const { role } = useAuth();
    const { handleGetMovieSeries, handleDeleteMovieSeries, handleWatchedMovieSeries } = useMovieSeries();

    const [editMovieSeries, setEditMoviSeries] = useState({ msName: "", msAbout: "", msPoster: "", msLink: "", msSeason: "", msFormat: "", msIndustry: "", msReleaseDate: "", msGenre: [], msRating: "", msUploadedBy: "" });
    const [deleteMoviSeries, setDeleteMoviSeries] = useState(null);

    const refOpenCanvas = useRef(null);

    const updateMovieSeries = (currentMovieSeies) => {
        setEditMoviSeries({ _id: currentMovieSeies._id, msName: currentMovieSeies.msName, msAbout: currentMovieSeies.msAbout, msPoster: currentMovieSeies.msPoster, msLink: currentMovieSeies.msLink, msSeason: currentMovieSeies.msSeason, msFormat: currentMovieSeies.msFormat, msIndustry: currentMovieSeies.msIndustry, msReleaseDate: currentMovieSeies.msReleaseDate, msGenre: currentMovieSeies.msGenre, msRating: currentMovieSeies.msRating, msUploadedBy: currentMovieSeies.msUploadedBy });
        refOpenCanvas.current.click();
    };

    if (!movie) return <div className="text-center mt-5">Movie not found.</div>;

    return (
        <>
            <div className="container my-4 position-relative">
                <div className="text-center mb-3">
                    <img src={movie.msPoster} className="img-fluid card-details-img" alt={movie.msName} />
                </div>
                <div className="text-center">
                    <p><strong>{movie.msName}{movie.msSeason === "0" ? "" : ` - (Season ${movie.msSeason})`}</strong></p>
                    <p className="text-muted small">{movie.msAbout}</p>
                    <p>IMDB Rating: <strong className="text-primary">{movie.msRating}/10</strong></p>
                    <p>Release Date: <strong className="text-danger"> {formatDate(movie.msReleaseDate)}</strong></p>
                    <p>F/I: <strong className="text-muted">{movie.msFormat}/{movie.msIndustry}</strong></p>
                    <GenreBadge genres={movie.msGenre} />
                    <hr className="border-danger border-2 opacity-75" />
                    <div className="text-center mb-3">
                        <Link to={movie.msLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                            🔗 Watch Now
                        </Link>
                    </div>
                    {
                        role === "dev" ?
                            <div className="text-center">
                                <hr className="border-danger border-2 opacity-75" />
                                <MovieCardActions
                                    movie={movie}
                                    onEdit={updateMovieSeries}
                                    deleteId={deleteMoviSeries}
                                    onDelete={setDeleteMoviSeries}
                                    requestDelete={() => setDeleteMoviSeries(movie._id)}
                                    confirmDelete={handleDeleteMovieSeries}
                                    cancelDelete={() => setDeleteMoviSeries(null)}
                                    onWatched={handleWatchedMovieSeries}
                                />
                            </div> : <div></div>
                    }
                    <hr className="border-danger border-2 opacity-75" />
                    <div className="mb-3">
                        <iframe width="100%" height="800" src="https://www.youtube.com/embed/ZnapjfATb6w" title="YouTube trailer" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className="text-end blockquote-footer mt-3 mb-3">{movie.msUploadedBy}</div>
                </div>
            </div>
            <EditMovieSeries
                refOpenCanvas={refOpenCanvas}
                editMovieSeries={editMovieSeries}
                handleGetMovieSeries={handleGetMovieSeries}
            />
        </>
    );
};

export default MovieCardDetails;