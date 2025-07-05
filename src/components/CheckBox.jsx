import { Link } from "react-router";

const CheckBox = ({ updateFilter, resetFilters, filters }) => {

    const selected = filters.f;

    const handleClick = (e) => updateFilter("f", e.target.value);
    const handleChange = (e) => updateFilter("i", e.target.value);
    const handleReset = () => resetFilters();

    return (
        <>
            <div className="container mt-3">
                <div className="d-flex align-items-center justify-content-between flex-wrap">
                    <div className="d-flex">

                        <div className="form-check ms-3">
                            <input className="form-check-input" type="radio" name="radio" value="movie" checked={selected === "movie"} onChange={handleClick} id="movies" />
                            <label className="form-check-label" htmlFor="movies">Movies</label>
                        </div>
                        <div className="form-check ms-3">
                            <input className="form-check-input" type="radio" name="radio" value="series" checked={selected === "series"} onChange={handleClick} id="series" />
                            <label className="form-check-label" htmlFor="series">Web Series</label>
                        </div>
                        <div className="form-check ms-3">
                            <input className="form-check-input" type="radio" name="radio" value="other" checked={selected === "other"} onChange={handleClick} id="others" />
                            <label className="form-check-label" htmlFor="others">Others</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="radio" value="bollywood" checked={selected === "bollywood"} onChange={handleChange} id="bollywoods" />
                            <label className="form-check-label" htmlFor="bollywoods">Bollywood</label>
                        </div>
                        <div className="form-check ms-3">
                            <input className="form-check-input" type="radio" name="radio" value="hollywood" checked={selected === "hollywood"} onChange={handleChange} id="hollywoods" />
                            <label className="form-check-label" htmlFor="hollywoods">Hollywood</label>
                        </div>
                        <div className="form-check ms-3">
                            <input className="form-check-input" type="radio" name="radio" value="other" checked={selected === "other"} onChange={handleChange} id="other" />
                            <label className="form-check-label" htmlFor="moothervies">Others</label>
                        </div>
                    </div>
                    <Link className="nav-link active" onClick={handleReset}>Clear all filters</Link>
                </div>
            </div>
        </>
    );
};

export default CheckBox;