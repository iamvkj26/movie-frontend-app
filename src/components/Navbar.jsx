import { Link } from "react-router";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid d-flex justify-content-around w-100">
                    <Link className="navbar-brand hello-hood" to="/">
                        HelloHood
                    </Link>
                    <button className="visually-hidden"></button>
                    <Link className="custom-button" to="/addMovieSeries">
                        <i className="fa fa-film"></i> Add Movie/Series
                    </Link>
                </div>
            </nav>
        </>
    );
};

export default Navbar;