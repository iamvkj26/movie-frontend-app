import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ updateFilter, filters }) => {

    const [input, setInput] = useState(filters.search || "");

    useEffect(() => {
        setInput(filters.search || "");
    }, [filters.search]);

    const handleSearch = () => updateFilter("search", input);

    return (
        <>
            <nav className="navbar navbar-expand-lg nav-class">
                <div className="container-fluid">
                    <div className="mx-auto">
                        <h4 className="text-secondary mb-3">Search for movies, tv shows here...</h4>
                        <div className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search the movies, tv shows..." aria-label="Search" value={input} onChange={(e) => setInput(e.target.value)} />
                            <button className="btn btn-dark" type="button" onClick={handleSearch}><FontAwesomeIcon icon={faSearch} /></button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default SearchBar;