import { useState, useRef, useEffect } from "react";
import moment from "moment";
import { Link } from "react-router";
import { toast } from "react-hot-toast";
import { getMovieSeries, deleteMovieSeries, watchedMovieSeries } from "../api/movieseries";
import EditMovieSeries from "../pages/EditMovieSeries";
import NextWatch from "./NextWatch";

const Card = ({ filters }) => {

    const [movieSeries, setMovieSeries] = useState([]);
    const [editMovieSeries, setEditMoviSeries] = useState({ _id: "", emsName: "", emsAbout: "", emsPoster: "", emsLink: "", emsSeason: "", emsFormat: "", emsIndustry: "", emsReleaseDate: "", emsGenre: [], emsRating: "", emsUploadedBy: "" });
    const [deleteMoviSeries, setDeleteMoviSeries] = useState(null);
    const [nextToWatch, setNextToWatch] = useState(null);
    const refOpenCanvas = useRef(null);

    const handleGetMovieSeries = async () => {
        try {
            const response = await getMovieSeries(filters);
            setMovieSeries(response.data);

            const unwatched = Object.values(response.data).flat().filter(m => !m.msWatched);
            const random = unwatched.length ? unwatched[Math.floor(Math.random() * unwatched.length)] : null;
            setNextToWatch(random);
        } catch (error) {
            toast.error(error.message || "Failed to fetch movie/series.");
        };
    };

    const updateMovieSeries = (currentMovieSeies) => {
        setEditMoviSeries({ _id: currentMovieSeies._id, emsName: currentMovieSeies.msName, emsAbout: currentMovieSeies.msAbout, emsPoster: currentMovieSeies.msPoster, emsLink: currentMovieSeies.msLink, emsSeason: currentMovieSeies.msSeason, emsFormat: currentMovieSeies.msFormat, emsIndustry: currentMovieSeies.msIndustry, emsReleaseDate: currentMovieSeies.msReleaseDate, emsGenre: currentMovieSeies.msGenre, emsRating: currentMovieSeies.msRating, emsUploadedBy: currentMovieSeies.msUploadedBy });
        refOpenCanvas.current.click();
    };

    const handleDeleteMovieSeries = async (id) => {
        try {
            const response = await deleteMovieSeries(id);
            if (response.status === 200) {
                toast.success(response.data.message);
                setDeleteMoviSeries(null);
                handleGetMovieSeries();
            };
        } catch (error) {
            toast.error(error.message || "Error deleting movie/series");
        };
    };

    const handleWatchedMovieSeries = async (id) => {
        try {
            const response = await watchedMovieSeries(id);
            if (response.status === 200) {
                toast.success(response.data.message);
                setDeleteMoviSeries(null);
                handleGetMovieSeries();
            };
        } catch (error) {
            toast.error(error.message || "Error updating movie/series watched status");
        };
    };

    useEffect(() => {
        if (!filters) return;
        handleGetMovieSeries();
    }, [filters]);

    return (
        <>
            <NextWatch nextToWatch={nextToWatch} />

            <div className="container">
                {movieSeries && Object.keys(movieSeries).length > 0 ? (
                    Object?.entries(movieSeries)?.reverse()?.map(([year, moviesseries]) => (
                        <div key={year} className="mt-3">
                            <h4 className="">Year: {year}</h4>
                            <hr />
                            <div className="row">
                                {moviesseries?.map((element) => (
                                    <div className="col-md-3 mt-3" key={element._id}>
                                        <div className="card position-relative">
                                            <span className="position-absolute top-n10 end-0 badge rounded-pill bg-warning text-black">
                                                <i className="fa-solid fa-star"></i> {element.msRating}
                                            </span>
                                            <img src={element.msPoster} className="card-img-top" alt="poster" />
                                            <div className="card-body">
                                                <h5 className="card-title fw-medium"><strong>{element.msName}{element.msSeason === 0 ? "" : element.msSeason ? ` - (Season ${element.msSeason})` : "Not Available"}</strong></h5>
                                                <p className="card-text small clamp-text" title={element.msAbout}>{element.msAbout?.slice(0, 105)}...</p>
                                                <p className="card-text small">
                                                    <strong>Release Date:</strong>{" "}
                                                    <i className="text-danger">{moment(element.msReleaseDate).format("DD-MMMM-YYYY")}</i>
                                                </p>
                                                <p className="card-text small">
                                                    <strong>F/I:</strong>{" "}
                                                    {element.msFormat}/{element.msIndustry}
                                                </p>
                                                <p className="card-text text-center text-danger">
                                                    <strong className="text-light">Genre:</strong>
                                                    <br />
                                                    <i className="fst-italic">{element.msGenre?.join(", ")}</i>
                                                </p>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center px-2 mb-2">
                                                <Link className="d-flex btn btn-watch text-decoration-none gap-1" to={element.msLink} target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-play"></i></Link>
                                                <div className="d-flex gap-2 card-actions">
                                                    <span className="badge text-141414">
                                                        <i className="fa-solid fa-pen-to-square cp" onClick={() => { updateMovieSeries(element) }}></i>
                                                    </span>
                                                    {deleteMoviSeries === element._id ? (
                                                        <div className="d-flex gap-2">
                                                            <span className="badge bg-warning text-dark cp">Confirm delete?</span>
                                                            <span className="badge bg-success">
                                                                <i className="fa-solid fa-check cp" onClick={() => handleDeleteMovieSeries(element._id)}></i>
                                                            </span>
                                                            <span className="badge bg-secondary">
                                                                <i className="fa-solid fa-xmark cp" onClick={() => setDeleteMoviSeries(null)}></i>
                                                            </span>
                                                        </div>
                                                    ) : (
                                                        <span className="badge text-141414">
                                                            <i className="fa-solid fa-trash cp" onClick={() => setDeleteMoviSeries(element._id)}></i>
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="card-footer d-flex justify-content-between align-items-center">
                                                <div className="form-check mt-1">
                                                    <input className="form-check-input" type="checkbox" checked={element.msWatched} onChange={() => handleWatchedMovieSeries(element._id)} />
                                                    <label className="form-check-label text-secondary small" title={element.msWatchedAt ? `Watched on: ${moment(element.msWatchedAt).format("DD MMMM YYYY hh:mm A")}` : ""}>
                                                        {element.msWatched ? "Watched" : "Mark as Watched"}
                                                    </label>
                                                </div>
                                                <div className="blockquote-footer mt-1">{element.msUploadedBy}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))) : (
                    <div className="text-center mt-5">
                        <h5 className="text-muted">🎬 No Movie/Series Found</h5>
                    </div>
                )}
            </div>

            <EditMovieSeries refOpenCanvas={refOpenCanvas} editMovieSeries={editMovieSeries} setEditMoviSeries={setEditMoviSeries} handleGetMovieSeries={handleGetMovieSeries} />
        </>
    );
};

export default Card;