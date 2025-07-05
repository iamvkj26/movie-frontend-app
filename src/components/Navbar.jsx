import { Link } from "react-router";

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="container-fluid d-flex justify-content-around w-100">
                    <Link className="navbar-brand hello-hood" to="/">
                        HelloHood
                    </Link>
                    <Link className="custom-button" to="/addMovieSeries">
                        <i className="fa fa-film"></i> Add Movie/Series
                    </Link>
                </div>
            </nav>
        </>
    );
};

export default Navbar;