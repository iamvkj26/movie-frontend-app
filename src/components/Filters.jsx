import { Link } from "react-router";

const Filters = ({ updateFilter, resetFilters }) => {

    const handleReset = () => resetFilters();

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav w-100 d-flex justify-content-evenly flex-wrap">
                            <li className="nav-item">
                                <Link className="nav-link" onClick={() => updateFilter("f", "movie")}><i className="fa-solid fa-film text-danger me-1"></i> Movie</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" onClick={() => updateFilter("f", "series")}><i className="fa-solid fa-tv text-primary me-1"></i> Web Series</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" onClick={() => updateFilter("i", "bollywood")}><i className="fa-solid fa-star text-warning me-1"></i> Bollywood</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" onClick={() => updateFilter("i", "hollywood")}><i className="fa-solid fa-clapperboard text-info me-1"></i> Hollywood</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" onClick={() => updateFilter("i", "other")}><i className="fa-solid fa-globe text-success me-1"></i> Other</Link>
                            </li>
                        </ul>
                    </div>
                    <Link className="nav-link" onClick={handleReset}><i className="fa-solid fa-rotate-left text-secondary me-1"></i> Clear filters</Link>
                </div>
            </nav>
        </>
    );
};

export default Filters;