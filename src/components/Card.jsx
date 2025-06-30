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
                <div className="row">
                    {
                        data?.map((element) => {
                            return (
                                <div className="col-md-3 mt-3" key={element._id}>
                                    <div className="card">
                                        <img src={element.msPoster} className="card-img-top" alt={element.genre} />
                                        <div className="card-body">
                                            <h5 className="card-title fw-medium">{element.msName}</h5>
                                            <h6 className="card-subtitle text-body-secondary">{element.msAbout}</h6>
                                            <p className="card-text">{element.msSeason}</p>
                                            <p className="card-text">{element.msCategory}</p>
                                            <p className="card-text">{element.msType}</p>
                                            <p className="card-text">{element.msYear}</p>
                                            <p className="card-text">{element.msGenre}</p>
                                            <p className="card-text">{element.msRating}</p>
                                            <p className="card-text">{element.msUploadedBy}</p>
                                            <a href={element.msLink} className="btn btn-primary" target="_blank">Link</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default Card;