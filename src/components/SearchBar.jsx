import { useState } from "react";

const SearchBar = ({ updateFilter }) => {

    const [search, setSearch] = useState("");
    const handleSearch = () => updateFilter("s", search);

    return (
        <>
            <nav className="navbar navbar-expand-lg search-background">
                <div className="container-fluid">
                    <div className="mx-auto">
                        <div className="h4 text-black mb-3">Search for movies, web series here...</div>
                        <div className="d-flex">
                            <input type="search" className="form-control me-2" placeholder="Search the movies, tv shows..." value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={(e) => {
                                if (e.key === "Enter") handleSearch();
                            }} />
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