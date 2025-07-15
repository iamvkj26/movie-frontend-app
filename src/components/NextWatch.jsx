import { Link } from "react-router";
import moment from "moment";

const NextWatch = ({ nextToWatch }) => {
    return (
        <>
            {nextToWatch && (
                <div className="container mt-1">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="bg-141414 py-3 px-3 rounded">
                                <div className="d-flex align-items-center gap-3">
                                    <img className="next-watch-image" src={nextToWatch?.msPoster} alt="poster" />
                                    <div>
                                        <h6 className="text-warning">🎥 Next to Watch</h6>
                                        <h5><strong>{nextToWatch?.msName}</strong></h5>
                                        <h6 className="text-muted small">{nextToWatch?.msAbout?.slice(0, 65)}...</h6>
                                        <p className="small text-secondary">
                                            ⭐ <strong>{nextToWatch?.msRating}</strong> | 🎭 {nextToWatch?.msGenre?.join(", ")}
                                        </p>
                                        <p className="text-danger small">{moment(nextToWatch?.msReleaseDate).format("DD MMMM YYYY")}</p>
                                        <Link className="btn btn-sm btn-watch text-decoration-none gap-1" to={nextToWatch?.msLink} target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-play"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default NextWatch;