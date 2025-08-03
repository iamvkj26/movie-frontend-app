import { formatDate } from "../../utils/formatDate";

const MovieCardActions = ({ movie, onEdit, deleteId, requestDelete, confirmDelete, cancelDelete, onWatched }) => (
    <div className="d-flex justify-content-center">
        <div className="d-flex gap-3 card-actions">
            <span className="badge">
                <i className="fa-solid fa-pen-to-square text-warning cp" onClick={() => onEdit(movie)}></i>{" "}
            </span>
            {deleteId === movie._id ? (
                <>
                    <span className="badge bg-warning text-dark cp">Confirm delete?</span>
                    <span className="badge bg-success"><i className="fa-solid fa-check cp" onClick={() => confirmDelete(movie._id)}></i></span>
                    <span className="badge bg-secondary"><i className="fa-solid fa-xmark cp" onClick={cancelDelete}></i></span>
                </>
            ) : (
                <span className="badge">
                    <i className="fa-solid fa-trash text-danger cp" onClick={requestDelete}></i>
                </span>
            )}
            <span className="form-check small">
                <input className="form-check-input" type="checkbox" checked={movie.msWatched} onChange={() => onWatched(movie._id)} />
                <label className="form-check-label" title={movie.msWatchedAt ? `Watched on: ${formatDate(movie.msWatchedAt)}` : ""}>
                    {movie.msWatched ? "Watched" : "Mark as Watched"}
                </label>
            </span>
        </div>
    </div>
);

export default MovieCardActions;