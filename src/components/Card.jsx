import { useState, useEffect } from "react";
import { getAllMovieSeries } from "../api/movieseries";

const Card = ({ filters }) => {

    const [data, setData] = useState([]);

    const fetchAllData = async () => {
        try {
            const res = await getAllMovieSeries(filters);
            setData(res?.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        if (!filters) return;
        fetchAllData();
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
                                                <h5 className="card-title fw-medium">{element.msName}</h5>
                                                <p className="card-text small">{element.msAbout}</p>
                                                <p className="card-text"><strong>{element.msSeason === 0 ? "Movie" : "Season"}:</strong>{" "}{element.msSeason === 0 ? "Part-1" : element.msSeason}</p>
                                                <p className="card-text"><strong>Category:</strong> {element.msCategory}</p>
                                                <p className="card-text text-left"><strong>Type:</strong> {element.msType}</p>
                                                <p className="card-text text-right"><strong>Genre:</strong> {element.msGenre?.join(", ")}</p>
                                                <a href={element.msLink} className="btn btn-sm btn-primary mt-2" target="_blank" rel="noopener noreferrer">Watch Now</a>
                                            </div>
                                            <div class="card-footer text-end">
                                                <figcaption class="blockquote-footer mt-1">
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
        </>
    );
};

export default Card;