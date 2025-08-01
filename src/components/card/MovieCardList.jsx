import MovieCard from "./MovieCard";

const MovieCardList = ({ movieSeries, onEdit, onDelete, deleteId, confirmDelete, cancelDelete, onWatched }) => (
    <>
        {Object.keys(movieSeries).length > 0 ? (
            Object.entries(movieSeries).reverse().map(([year, list]) => (
                <div key={year} className="mt-3">
                    <div className="h4">Year: {year}</div>
                    <hr />
                    <div className="card-grid">
                        {list.map(movie => (
                            <MovieCard
                                movie={movie}
                                key={movie._id}
                                onEdit={onEdit}
                                onDelete={onDelete}
                                deleteId={deleteId}
                                confirmDelete={confirmDelete}
                                cancelDelete={cancelDelete}
                                onWatched={onWatched}
                            />
                        ))}
                    </div>
                </div>
            ))
        ) : (
            <div className="text-center mt-5">
                <h5 className="text-muted">🎬 No Movie/Series Found</h5>
            </div>
        )}
    </>
);

export default MovieCardList;