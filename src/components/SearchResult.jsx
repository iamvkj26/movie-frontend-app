const SearchResult = () => {
    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-12">
                        <div className="bg-dark bg-141414 d-flex align-items-center py-3 px-3 rounded">
                            <h6 className="text-light m-0 d-flex align-items-center gap-2">
                                <span className="badge bg-warning text-black">
                                    <i className="fa-solid fa-folder"></i>
                                </span>
                                <strong>
                                    Sorted A-Z and grouped by year (latest first: 2025 → oldest).
                                </strong>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SearchResult;