import { formatDate } from "../../utils/formatDate";
import GenreBadge from "../shared/GenreBadge";
import MovieCardActions from "./MovieCardActions";
import MovieCardFooter from "./MovieCardFooter";

const MovieCard = ({ movie, onEdit, onDelete, deleteId, confirmDelete, cancelDelete, onWatched }) => (
    <div className="col-md-3 mt-3">
        <div className="card position-relative">
            <span className="position-absolute top-n10 end-0 badge rounded-pill bg-warning text-black">
                <i className="fa-solid fa-star"></i> {movie.msRating}
            </span>
            <img src={movie.msPoster} className="card-img-top" alt="poster" />
            <div className="card-body">
                <h5 className="card-title fw-medium">
                    <strong>
                        {movie.msName}{movie.msSeason === "0" ? "" : ` - (Season ${movie.msSeason})`}
                    </strong>
                </h5>
                <p className="card-text small clamp-text" title={movie.msAbout}>
                    {movie.msAbout?.slice(0, 105)}...
                </p>
                <p className="card-text small">
                    <strong>Release Date:</strong>{" "}
                    <i className="text-danger">{formatDate(movie.msReleaseDate)}</i>
                </p>
                <p className="card-text small"><strong>F/I:</strong> {movie.msFormat}/{movie.msIndustry}</p>
                <GenreBadge genres={movie.msGenre} />
            </div>
            <MovieCardActions
                movie={movie}
                deleteId={deleteId}
                onEdit={onEdit}
                confirmDelete={confirmDelete}
                cancelDelete={cancelDelete}
                requestDelete={() => onDelete(movie._id)}
            />
            <MovieCardFooter
                movie={movie}
                onWatched={() => onWatched(movie._id)}
            />
        </div>
    </div>
);

export default MovieCard;