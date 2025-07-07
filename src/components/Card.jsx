import { useState, useRef, useEffect } from "react";
import { toast } from "react-hot-toast";
import { getMovieSeries, deleteMovieSeries } from "../api/movieseries";
import EditMovieSeries from "./EditMovieSeries";

const Card = ({ filters }) => {

    const [movieSeries, setMovieSeries] = useState([]);
    const [editMovieSeries, setEditMoviSeries] = useState({ _id: "", emsName: "", emsAbout: "", emsPoster: "", emsLink: "", emsSeason: "", emsFormat: "", emsIndustry: "", emsYear: "", emsGenre: [], emsRating: "", emsUploadedBy: "" });
    const [deleteMoviSeries, setDeleteMoviSeries] = useState(null);

    const refOpenCanvas = useRef(null);

    const handleGetMovieSeries = async () => {
        try {
            const response = await getMovieSeries(filters);
            setMovieSeries(response.data);
        } catch (err) {
            console.error(err);
        };
    };

    const updateMovieSeries = (currentMovieSeies) => {
        refOpenCanvas.current.click();
        setEditMoviSeries({ _id: currentMovieSeies._id, emsName: currentMovieSeies.msName, emsAbout: currentMovieSeies.msAbout, emsPoster: currentMovieSeies.msPoster, emsLink: currentMovieSeies.msLink, emsSeason: currentMovieSeies.msSeason, emsFormat: currentMovieSeies.msFormat, emsIndustry: currentMovieSeies.msIndustry, emsYear: currentMovieSeies.msYear, emsGenre: currentMovieSeies.msGenre, emsRating: currentMovieSeies.msRating, emsUploadedBy: currentMovieSeies.msUploadedBy });
    };

    const handleDeleteMovieSeries = async (id, msName) => {
        try {
            const response = await deleteMovieSeries(id);
            if (response.status === 200) {
                toast.success(`${msName} deleted successfully.`);
                setDeleteMoviSeries(null);
                handleGetMovieSeries();
            };
        } catch (error) {
            if (error.status === 400) {
                toast.error("Server cannot or will not process request right now, try again after sometimes");
            } else {
                toast.error(error.message);
            };
        };
    };

    useEffect(() => {
        if (!filters) return;
        handleGetMovieSeries();
    }, [filters]);

    return (
        <>
            <div className="container">
                {movieSeries &&
                    Object?.entries(movieSeries)?.reverse()?.map(([year, movies]) => (
                        <div key={year} className="mt-3">
                            <h4 className="">Year: {year}</h4>
                            <hr />
                            <div className="row">
                                {movies?.map((element) => (
                                    <div className="col-md-3 mt-3" key={element._id}>
                                        <div className="card position-relative">
                                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-black">
                                                <i className="fa-solid fa-star"></i> {element.msRating}
                                            </span>
                                            <img src={element.msPoster} className="card-img-top" alt="poster" />
                                            <div className="card-body">
                                                <h5 className="card-title fw-medium"><strong>{element.msName}{" - "}{element.msSeason === 0 ? "(Part-1)" : element.msSeason ? `(Season ${element.msSeason})` : "Not Available"}</strong></h5>
                                                <p className="card-text small clamp-text" title={element.msAbout}>{`${element.msAbout?.slice(0, 100)}...`}</p>
                                                <p className="card-text text-center">
                                                    <strong>F/I:</strong>{" "}
                                                    {element.msFormat}/{element.msIndustry}
                                                </p>
                                                <p className="card-text text-center text-danger">
                                                    <strong className="text-light">Genre:</strong>
                                                    <br />
                                                    {element.msGenre?.join(", ")}
                                                </p>
                                            </div>
                                            <div className="d-flex justify-content-end gap-2 card-actions me-2 mb-2">
                                                <span className="badge text-141414">
                                                    <i className="fa-solid fa-pen-to-square cp" onClick={() => { updateMovieSeries(element) }}></i>
                                                </span>
                                                {deleteMoviSeries === element._id ? (
                                                    <div className="d-flex gap-2">
                                                        <span className="badge bg-warning text-dark cp">Confirm delete?</span>
                                                        <span className="badge bg-success">
                                                            <i className="fa-solid fa-check cp" onClick={() => handleDeleteMovieSeries(element._id, element.msName)}></i>
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
                                            <div className="card-footer text-end">
                                                <figcaption className="blockquote-footer mt-1">
                                                    {element.msUploadedBy}
                                                </figcaption>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
            </div>

            <EditMovieSeries refOpenCanvas={refOpenCanvas} editMovieSeries={editMovieSeries} setEditMoviSeries={setEditMoviSeries} handleGetMovieSeries={handleGetMovieSeries} />


        </>
    );
};

export default Card;