const FiltersMessage = ({ filters }) => {

    const { s, f, i, g, w } = filters;

    return (
        <>
            <div className="container mt-1">
                <div className="row">
                    <div className="col-md-12">
                        <div className="bg-141414 py-3 px-3 rounded">
                            <h6 className="text-light m-0 d-flex align-items-center gap-2">
                                <span className="badge bg-warning text-black"><i className="fa-solid fa-folder"></i></span>
                                <strong>
                                    {`Showing ${w === "true" ? "Watched" : "Unwatched"} Movie/Series${g ? ` in the '${g}' genre` : ""}${i ? ` from the '${i}' industry` : ""}${f ? ` in '${f}' format` : ""}${s ? ` matching '${s}'` : ""}, sorted A-Z and grouped by year (latest first).`}
                                </strong>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FiltersMessage;