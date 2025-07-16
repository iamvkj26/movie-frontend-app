import { Link } from "react-router";

const Footer = () => {
    return (
        <>
            <footer className="bg-dark mt-3 py-3 border-top">
                <div className="container">
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                        <div className="mb-2 mb-md-0">
                            2025 © <Link className="text-primary fw-semibold" to="/">HelloHood</Link> | All Rights Reserved.
                        </div>
                        <div className="d-flex flex-wrap justify-content-center justify-content-md-end">
                            <Link to="/addMovieSeries" className="text-info fw-semibold text-decoration-none">
                                + Add Movie/Series
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;