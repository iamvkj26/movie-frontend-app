import { Link } from "react-router";

const Footer = () => {
    return (
        <>
            <footer className="bg-dark text-light py-3 mt-3 border-top">
                <div className="container">
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                        <div className="mb-2 mb-md-0">
                            2025 © <strong>
                                <Link className="text-light text-decoration-none" to="/" target="_blank">HelloHood</Link>
                            </strong> | All Rights Reserved.
                        </div>
                        <div className="d-flex flex-wrap justify-content-center justify-content-md-end">
                            <Link to="/addMovieSeries" className="text-light text-decoration-none">
                                <strong className="text-info">+ Add Movie/Series</strong>
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;