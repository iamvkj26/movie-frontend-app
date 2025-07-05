import { useState, useEffect } from "react";

const SearchBar = ({ updateFilter, filters }) => {

    const [input, setInput] = useState(filters.s || "");

    useEffect(() => {
        setInput(filters.s || "");
    }, [filters.s]);

    const handleSearch = () => updateFilter("s", input);

    return (
        <>
            <nav className="navbar navbar-expand-lg search-background">
                <div className="container-fluid">
                    <div className="mx-auto">
                        <div className="h4 text-black mb-3">Search for movies, tv shows here...</div>
                        <div className="d-flex">
                            <input type="search" className="form-control me-2" placeholder="Search the movies, tv shows..." aria-label="Search" value={input} onChange={(e) => setInput(e.target.value)} />
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