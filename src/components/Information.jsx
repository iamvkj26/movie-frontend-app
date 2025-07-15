import { Link } from "react-router";

const Information = () => {
    return (
        <>
            <div className="container mt-3">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="alert alert-dark position-relative text-center information">
                            <p>
                                <strong className="text-danger">This Movie/Series Web App is for <strong>Personal and Professional</strong> use, </strong>Kindly always use <Link className="text-primary fw-bolder" to="/" target="_blank" rel="noopener noreferrer">HelloHood</Link><span className="text-warning"> for Latest Updates.</span>
                            </p>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Information;