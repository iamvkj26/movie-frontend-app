import { useState, useEffect } from "react";

const SearchBar = ({ updateFilter, filters }) => {

    const [input, setInput] = useState(filters.search || "");

    useEffect(() => {
        setInput(filters.search || "");
    }, [filters.search]);

    const handleSearch = () => updateFilter("search", input);

    return (
        <>
            <nav className="navbar navbar-expand-lg search-background">
                <div className="container-fluid">
                    <div className="mx-auto">
                        <div className="h4 text-black mb-3">Search for movies, tv shows here...</div>
                        <div className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search the movies, tv shows..." aria-label="Search" value={input} onChange={(e) => setInput(e.target.value)} />
                            <button className="btn btn-dark btn-212529" type="button" onClick={handleSearch}>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default SearchBar;