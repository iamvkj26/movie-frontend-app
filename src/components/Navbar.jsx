import { Link } from "react-router";

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <Link className="navbar-brand hello-hood" to="/">
                        HelloHood
                    </Link>
                    <div className="d-flex align-items-center gap-2">
                        <Link className="text-items text-decoration-none" to="/">
                            About
                        </Link>
                        <Link className="text-items text-decoration-none" to="/">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;