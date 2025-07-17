import { useState, useRef } from "react";
import { toast } from "react-hot-toast";
import { updateMovieSeries } from "../api/movieseries";
import FormInput from "../components/FormInput";

const EditMovieSeries = ({ refOpenCanvas, editMovieSeries, setEditMoviSeries, handleGetMovieSeries }) => {

    const [loading, setLoading] = useState(false);
    const refCloseCanvas = useRef(null);

    const onChangeEditMovie = (e) => {

        const { name, value } = e.target;

        if (name === "emsSeason" && !/^\d{0,2}(\.\d{0,1})?$/.test(value)) return;
        if (name === "emsRating" && !/^\d{0,1}(\.\d{0,1})?$/.test(value)) return;
        if (name === "emsGenre") {
            setEditMoviSeries((prev) => ({
                ...prev, [name]: value.split(",").map((genre) => genre.trim())
            }));
        } else {
            setEditMoviSeries((prev) => ({
                ...prev, [name]: value
            }));
        };
    };

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
            if (error.status === 400) toast.error("Server cannot process request right now, try again after sometimes.");
            else if (error.status === 409) toast.error(`The '${editMovieSeries.emsName}' already exists.`);
            else toast.error(error.message);

        } finally {
            setLoading(false);
        };
    };

    return (
        <>
            <button ref={refOpenCanvas} className="d-none" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop"></button>

            <div className="offcanvas offcanvas-end" data-bs-backdrop="static" tabIndex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="staticBackdropLabel">Update Movie/Series</h5>
                    <button ref={refCloseCanvas} className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <form className="row" onSubmit={handleUpdateMovieSeries}>
                        <FormInput label="Enter the title..." name="emsName" id="name" value={editMovieSeries.emsName} onChange={onChangeEditMovie} placeholder="Eg: Interstellar" />
                        <FormInput label="Enter the description..." name="emsAbout" id="about" value={editMovieSeries.emsAbout} onChange={onChangeEditMovie} placeholder="A team of explorers travel beyond this galaxy through a newly discovered wormhole to discover whether mankind has a future among the stars." rows={3} isTextarea />
                        <FormInput label="Enter the poster link..." name="emsPoster" id="poster" value={editMovieSeries.emsPoster} onChange={onChangeEditMovie} placeholder="Eg: https://image.tmdb.org/t/p/original/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" />
                        <FormInput label="Enter the ott link..." name="emsLink" id="link" value={editMovieSeries.emsLink} onChange={onChangeEditMovie} placeholder="Eg: https://www.primevideo.com/region/eu/detail/Interstellar/0PUNMGZEWOMYFKR1XIGOLTL2YM" />
                        <FormInput col="col-6" label="Select the format..." type="select" name="emsFormat" id="format" value={editMovieSeries.emsFormat} onChange={onChangeEditMovie} options={["Movie", "Series"]} isSelect />
                        <FormInput col="col-6" label="Select the industry..." type="select" name="emsIndustry" id="industry" value={editMovieSeries.emsIndustry} onChange={onChangeEditMovie} options={["Bollywood", "Hollywood", "Other"]} isSelect />
                        <FormInput label="Enter the genre (comma-separated)..." name="emsGenre" id="genre" value={editMovieSeries.emsGenre.join(", ")} onChange={onChangeEditMovie} placeholder="Eg: Science Fiction, Adventure, Intense, Action" />
                        <FormInput label="Enter the part/season, enter 0 if movie..." name="emsSeason" id="season" value={editMovieSeries.emsSeason} onChange={onChangeEditMovie} placeholder="Eg: 0" maxLength={3} />
                        <FormInput col="col-6" label="Enter the release date..." type="date" name="emsReleaseDate" id="releaseDate" value={editMovieSeries.emsReleaseDate} onChange={onChangeEditMovie} />
                        <FormInput col="col-6" label="Enter the imdb rating..." name="emsRating" id="rating" value={editMovieSeries.emsRating} onChange={onChangeEditMovie} placeholder="Eg: 8.7" maxLength={3} />
                        <FormInput label="Select the person who is uploading the..." type="select" name="emsUploadedBy" id="uploadedBy" value={editMovieSeries.emsUploadedBy} onChange={onChangeEditMovie} options={["Trisha Sharma", "Vijayant Joshi"]} isSelect />
                        <div className="text-center">
                            <button type="submit" className="btn btn-secondary">
                                {loading ? "Updating..." : "Update Movie/Series"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default EditMovieSeries;