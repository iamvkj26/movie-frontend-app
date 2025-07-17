import { useState } from "react";
import { toast } from "react-hot-toast";
import { postMovieSeries } from "../api/movieseries";
import FormInput from "../components/FormInput";

const initialState = { msName: "", msAbout: "", msPoster: "", msLink: "", msSeason: "", msFormat: "", msIndustry: "", msReleaseDate: "", msGenre: [], msRating: "", msUploadedBy: "" };

const AddMovieSeries = () => {

    const [addMovie, setAddMovie] = useState(initialState);
    const [loading, setLoading] = useState(false);

    const onChangeAddMovie = (e) => {
        const { name, value } = e.target;

        if (name === "msSeason" && !/^\d{0,2}(\.\d{0,1})?$/.test(value)) return;
        if (name === "msRating" && !/^\d{0,1}(\.\d{0,1})?$/.test(value)) return;
        if (name === "msGenre") {
            setAddMovie((prev) => ({
                ...prev, [name]: value.split(",").map((genre) => genre.trim())
            }));
        } else {
            setAddMovie((prev) => ({
                ...prev, [name]: value
            }));
        };
    };

    const handleAddMovieSeries = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await postMovieSeries(addMovie);
            if (response.status === 200) {
                toast.success(response.data.message);
                setLoading(false);
                setAddMovie(initialState);
            };
        } catch (error) {
            if (error.status === 400) toast.error("Server busy. Try again later.");
            else if (error.status === 409) toast.error(`The '${addMovie.msName}' already exists.`);
            else toast.error(error.message);
        } finally {
            setLoading(false);
        };
    };

    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="card p-3">
                    <div className="card-body text-center">
                        <h2 className="bg-primary-subtle text-primary-emphasis">Add Movie/Series</h2><hr />
                    </div>
                    <form onSubmit={handleAddMovieSeries}>
                        <div className="row">
                            <FormInput label="Enter the title..." name="msName" id="name" value={addMovie.msName} onChange={onChangeAddMovie} placeholder="Eg: Interstellar" />
                            <FormInput label="Enter the description..." name="msAbout" id="about" value={addMovie.msAbout} onChange={onChangeAddMovie} placeholder="A team of explorers travel beyond this galaxy through a newly discovered wormhole to discover whether mankind has a future among the stars." rows={3} isTextarea />
                            <FormInput label="Enter the poster link..." id="poster" name="msPoster" value={addMovie.msPoster} onChange={onChangeAddMovie} placeholder="Eg: https://image.tmdb.org/t/p/original/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" />
                            <FormInput label="Enter the ott link..." id="link" name="msLink" value={addMovie.msLink} onChange={onChangeAddMovie} placeholder="Eg: https://www.primevideo.com/region/eu/detail/Interstellar/0PUNMGZEWOMYFKR1XIGOLTL2YM" />
                            <FormInput col="col-6" label="Select the format..." type="select" id="format" name="msFormat" value={addMovie.msFormat} onChange={onChangeAddMovie} options={["Movie", "Series"]} isSelect />
                            <FormInput col="col-6" label="Select the industry..." type="select" id="industry" name="msIndustry" value={addMovie.msIndustry} onChange={onChangeAddMovie} options={["Bollywood", "Hollywood", "Other"]} isSelect />
                            <FormInput label="Enter the genre (comma-separated)..." id="genre" name="msGenre" value={addMovie.msGenre.join(", ")} onChange={onChangeAddMovie} placeholder="Eg: Science Fiction, Adventure, Intense, Action" />
                            <FormInput col="col-6" label="Enter the part/season, enter 0 if movie..." id="season" name="msSeason" value={addMovie.msSeason} onChange={onChangeAddMovie} placeholder="Eg: 0" maxLength={3} />
                            <FormInput col="col-6" label="Enter the release date..." type="date" id="releaseDate" name="msReleaseDate" value={addMovie.msReleaseDate} onChange={onChangeAddMovie} />
                            <FormInput col="col-6" label="Enter the imdb rating..." id="rating" name="msRating" value={addMovie.msRating} onChange={onChangeAddMovie} placeholder="Eg: 8.7" maxLength={3} />
                            <FormInput col="col-6" label="Select the person who is uploading the..." type="select" id="uploadedBy" name="msUploadedBy" value={addMovie.msUploadedBy} onChange={onChangeAddMovie} options={["Trisha Sharma", "Vijayant Joshi"]} isSelect />
                            <div className="text-center">
                                <button type="submit" className="btn btn-secondary">
                                    {loading ? "Adding..." : "Add Movie/Series"}
                                </button>
                            </div>
                        </div>
                    </form>
                </div >
            </div >
        </>
    );
};

export default AddMovieSeries;