import { Link } from "react-router";

const CheckBox = ({ updateFilter, resetFilters, filters }) => {

    const selected = filters.category;

    const handleClick = (e) => updateFilter("category", e.target.value);
    const handleReset = () => resetFilters();

    return (
        <>
            <div className="container mt-3">
                <div className="d-flex align-items-center justify-content-between flex-wrap">
                    <div className="d-flex">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="radio" value="movie" checked={selected === "movie"} onChange={handleClick} id="movies" />
                            <label className="form-check-label" htmlFor="movies">Movies</label>
                        </div>
                        <div className="form-check ms-3">
                            <input className="form-check-input" type="radio" name="radio" value="tv-show" checked={selected === "tv-show"} onChange={handleClick} id="tvShows" />
                            <label className="form-check-label" htmlFor="tvShows">TV Shows</label>
                        </div>
                        <div className="form-check ms-3">
                            <input className="form-check-input" type="radio" name="radio" value="other" checked={selected === "other"} onChange={handleClick} id="others" />
                            <label className="form-check-label" htmlFor="others">Others</label>
                        </div>
                    </div>
                    <Link className="nav-link active" onClick={handleReset}>Clear all filters</Link>
                </div>
            </div>
        </>
    );
};

export default CheckBox;