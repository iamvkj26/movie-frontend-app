const MovieCardActions = ({ movie, deleteId, onEdit, requestDelete, confirmDelete, cancelDelete }) => (
    <div className="d-flex justify-content-between align-items-center px-2 mb-2">
        <a className="d-flex btn btn-watch text-decoration-none gap-1" href={movie.msLink} target="_blank" rel="noopener noreferrer">
            <i className="fa-solid fa-play"></i>
        </a>
        <div className="d-flex gap-2 card-actions">
            <span className="badge text-141414">
                <i className="fa-solid fa-pen-to-square cp" onClick={() => onEdit(movie)}></i>
            </span>
            {deleteId === movie._id ? (
                <>
                    <span className="badge bg-warning text-dark cp">Confirm delete?</span>
                    <span className="badge bg-success"><i className="fa-solid fa-check cp" onClick={() => confirmDelete(movie._id)}></i></span>
                    <span className="badge bg-secondary"><i className="fa-solid fa-xmark cp" onClick={cancelDelete}></i></span>
                </>
            ) : (
                <span className="badge text-141414">
                    <i className="fa-solid fa-trash cp" onClick={requestDelete}></i>
                </span>
            )}
        </div>
    </div>
);

export default MovieCardActions;