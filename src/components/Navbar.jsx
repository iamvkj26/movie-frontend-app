import { Link } from "react-router";

const Navbar = ({ updateFilter }) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link
                        className="navbar-brand f-cursive"
                        to="/"
                        onClick={() => updateFilter("type", "")}>
                        HelloHood
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav d-flex justify-content-around w-100 mb-lg-0">
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    onClick={() => updateFilter("type", "bollywood")}>
                                    Bollywood
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    onClick={() => updateFilter("type", "hollywood")}>
                                    Hollywood
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    onClick={() => updateFilter("type", "other")}>
                                    Others
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;