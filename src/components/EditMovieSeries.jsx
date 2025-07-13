import { useState, useRef } from "react";
import { toast } from "react-hot-toast";
import { updateMovieSeries } from "../api/movieseries";

const EditMovieSeries = ({ refOpenCanvas, editMovieSeries, setEditMoviSeries, handleGetMovieSeries }) => {

    const [loading, setLoading] = useState(false);
    const refCloseCanvas = useRef(null);

    const handleUpdateMovieSeries = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await updateMovieSeries(editMovieSeries._id, editMovieSeries.emsName, editMovieSeries.emsAbout, editMovieSeries.emsPoster, editMovieSeries.emsLink, editMovieSeries.emsSeason, editMovieSeries.emsFormat, editMovieSeries.emsIndustry, editMovieSeries.emsReleaseDate, editMovieSeries.emsGenre, editMovieSeries.emsRating, editMovieSeries.emsUploadedBy);
            if (response.status === 200) {
                toast.success(response.data.message);
                setLoading(false);
                refCloseCanvas.current.click();
                handleGetMovieSeries();
            };
        } catch (error) {
            if (error.status === 400) {
                toast.error("Server cannot or will not process request right now, try again after sometimes");
            } else if (error.status === 409) {
                toast.error(`The '${editMovieSeries.emsName}' already exists.`);
            } else {
                toast.error(error.message);
            };
        } finally {
            setLoading(false);
        };
    };

    const changeUpdateUser = (e) => setEditMoviSeries({ ...editMovieSeries, [e.target.name]: e.target.value });

    return (
        <>
            <button ref={refOpenCanvas} className="d-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop"></button>

            <div className="offcanvas offcanvas-end" data-bs-backdrop="static" tabIndex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="staticBackdropLabel">Update Movie/Series</h5>
                    <button ref={refCloseCanvas} type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <form className="row" onSubmit={handleUpdateMovieSeries}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Enter the title....</label>
                            <input type="text" className="form-control" id="name" name="emsName" value={editMovieSeries.emsName} onChange={changeUpdateUser} placeholder="Eg: Interstellar" autoComplete="off" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="about" className="form-label">Enter the description...</label>
                            <textarea itemType="text" className="form-control" rows="3" id="about" name="emsAbout" value={editMovieSeries.emsAbout} onChange={changeUpdateUser} placeholder="A team of explorers travel beyond this galaxy through a newly discovered wormhole to discover whether mankind has a future among the stars." autoComplete="off" required ></textarea>
                        </div>
                        <div className="mb-3">
                            <div className="mb-3">
                                <label htmlFor="poster" className="form-label">Enter the poster link...</label>
                                <input type="text" className="form-control" id="poster" name="emsPoster" value={editMovieSeries.emsPoster} onChange={changeUpdateUser} placeholder="Eg: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9oW0XQlu1lo1G_49M-YwGzKR6rUg-CtflZj07HfbT8d2GwKWg" autoComplete="off" required />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="link" className="form-label">Enter the ott link...</label>
                            <input type="text" className="form-control" id="link" name="emsLink" value={editMovieSeries.emsLink} onChange={changeUpdateUser} placeholder="Eg: https://www.primevideo.com/region/eu/detail/Interstellar/0PUNMGZEWOMYFKR1XIGOLTL2YM" autoComplete="off" required />
                        </div>
                        <div className="mb-3 col-6">
                            <label htmlFor="format" className="form-label">Select the format...</label>
                            <select className="form-select" id="format" name="emsFormat" value={editMovieSeries.emsFormat} onChange={changeUpdateUser} autoComplete="off" required>
                                <option value="">---Select---</option>
                                <option value="Movie">Movie</option>
                                <option value="Series">Series</option>
                            </select>
                        </div>
                        <div className="mb-3 col-6">
                            <label htmlFor="industry" className="form-label">Select the industry...</label>
                            <select className="form-select" id="industry" name="emsIndustry" value={editMovieSeries.emsIndustry} onChange={changeUpdateUser} autoComplete="off" required>
                                <option value="">---Select---</option>
                                <option value="Bollywood">Bollywood</option>
                                <option value="Hollywood">Hollywood</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="mb-3 col-6">
                            <label htmlFor="genre" className="form-label">Enter the genre...</label>
                            <input type="text" className="form-control" id="genre" name="emsGenre" value={editMovieSeries.emsGenre} onChange={changeUpdateUser} placeholder="Eg: Science Fiction, Adventure, Intense, Action" autoComplete="off" required />
                        </div>
                        <div className="mb-3 col-6">
                            <label htmlFor="releaseDate" className="form-label">Enter the release date...</label>
                            <input type="date" className="form-control" id="releaseDate" name="emsReleaseDate" value={editMovieSeries.emsReleaseDate} onChange={changeUpdateUser} autoComplete="off" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="season" className="form-label">Enter the part/season, enter 0 if movie...</label>
                            <input type="number" className="form-control" id="season" name="emsSeason" value={editMovieSeries.emsSeason} onChange={changeUpdateUser} placeholder="Eg: 0" maxLength={2} autoComplete="off" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="rating" className="form-label">Enter the imdb rating...</label>
                            <input type="text" className="form-control" id="rating" name="emsRating" value={editMovieSeries.emsRating} onChange={changeUpdateUser} placeholder="Eg: 8.7" maxLength={3} autoComplete="off" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="uploadedBy" className="form-label">Select the person who is uploading the...</label>
                            <select className="form-select" id="uploadedBy" name="emsUploadedBy" value={editMovieSeries.emsUploadedBy} onChange={changeUpdateUser} autoComplete="off" required>
                                <option value="">---Select the name---</option>
                                <option value="Trisha Sharma">Trisha Sharma</option>
                                <option value="Vijayant Joshi">Vijayant Joshi</option>
                            </select>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-secondary">
                                {loading ? "Loading" : "Update movie/series"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default EditMovieSeries;