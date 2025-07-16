import { Link } from "react-router";
import moment from "moment";

const NextWatch = ({ nextToWatch }) => {

    if (!nextToWatch) return null;
    const { msPoster, msName, msAbout, msRating, msGenre, msReleaseDate, msLink } = nextToWatch;

    return (
        <>
            {nextToWatch && (
                <div className="container mt-1">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="bg-141414 py-3 px-3 rounded">
                                <div className="d-flex align-items-center gap-3">
                                    <img className="next-watch-image" src={msPoster} alt="poster" />
                                    <div>
                                        <h6 className="text-warning">🎥 Next to Watch</h6>
                                        <h5><strong>{msName}</strong></h5>
                                        <h6 className="text-muted small">{msAbout?.slice(0, 65)}...</h6>
                                        <p className="text-secondary small">
                                            ⭐ <strong>{msRating}</strong> | 🎭 {msGenre?.join(", ")}
                                        </p>
                                        <p className="text-danger small">{moment(msReleaseDate).format("DD MMMM YYYY")}</p>
                                        <Link className="btn btn-sm btn-watch text-decoration-none gap-1" to={msLink} target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-play"></i></Link>
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