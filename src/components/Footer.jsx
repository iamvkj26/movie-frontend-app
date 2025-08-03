import { Link } from "react-router";

const Footer = () => {
    return (
        <>
            <footer className="bg-dark border-top py-3">
                <div className="container">
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                        <div>
                            2025 © <Link className="text-primary fw-semibold" to="/">HelloHood</Link> | All Rights Reserved.
                        </div>
                        <div className="d-flex gap-2">
                            <Link className="text-info fw-semibold text-decoration-none" to="/">
                                About
                            </Link>
                            <Link className="text-info fw-semibold text-decoration-none" to="/" >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;