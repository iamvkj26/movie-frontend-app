import { useState, useRef, useEffect } from "react";
import { getAllMovieSeries } from "../api/movieseries";
import EditMovieSeries from "./EditMovieSeries";

const Card = ({ filters }) => {

    const [data, setData] = useState([]);
    const [editMovieSeries, setEditMoviSeries] = useState({ id: "", emsName: "", emsAbout: "", emsPoster: "", emsLink: "", emsSeason: "", emsCategory: "", emsType: "", emsYear: "", emsGenre: [], emsRating: "", emsUploadedBy: "" });
    const refOpenCanvas = useRef(null);

    const getMovieSeries = async () => {
        try {
            const res = await getAllMovieSeries(filters);
            setData(res?.data);
        } catch (err) {
            console.error(err);
        };
    };

    const updateMovieSeries = (currentMovieSeies) => {
        refOpenCanvas.current.click();
        setEditMoviSeries({ id: currentMovieSeies._id, emsName: currentMovieSeies.msName, emsAbout: currentMovieSeies.msAbout, emsPoster: currentMovieSeies.msPoster, emsLink: currentMovieSeies.msLink, emsSeason: currentMovieSeies.msSeason, emsCategory: currentMovieSeies.msCategory, emsType: currentMovieSeies.msType, emsYear: currentMovieSeies.msYear, emsGenre: currentMovieSeies.msGenre, emsRating: currentMovieSeies.msRating, emsUploadedBy: currentMovieSeies.msUploadedBy });
    };

    useEffect(() => {
        if (!filters) return;
        getMovieSeries();
    }, [filters]);

    return (
        <>
            <div className="container">
                {data &&
                    Object?.entries(data)?.reverse()?.map(([year, movies]) => (
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
                                                <p className="card-text small">{element.msAbout}</p>
                                                <p className="card-text"><strong>Category:</strong> {element.msCategory}</p>
                                                <p className="card-text text-left"><strong>Type:</strong> {element.msType}</p>
                                                <p className="card-text text-right"><strong>Genre:</strong> {element.msGenre?.join(", ")}</p>
                                                <a href={element.msLink} className="btn btn-sm btn-primary mt-2" target="_blank" rel="noopener noreferrer">Watch Now</a>
                                            </div>
                                            <div className="d-flex justify-content-end gap-2 card-actions me-2 mb-2">
                                                <span className="badge text-bg-warning text-light text-141414"><i className="fa-solid fa-pen-to-square" onClick={() => { updateMovieSeries(element) }}></i></span>
                                                <span className="badge text-bg-danger text-light text-141414"><i className="fa-solid fa-trash"></i></span>
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

            <EditMovieSeries refOpenCanvas={refOpenCanvas} editMovieSeries={editMovieSeries} setEditMoviSeries={setEditMoviSeries} getMovieSeries={getMovieSeries} />
        </>
    );
};

export default Card;