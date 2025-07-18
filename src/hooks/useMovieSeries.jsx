import { useEffect, useState } from "react";
import { getMovieSeries, deleteMovieSeries, watchedMovieSeries } from "../api/movieseries";
import { toast } from "react-hot-toast";

const useMovieSeries = (filters) => {

    const [movieSeries, setMovieSeries] = useState([]);
    const [nextToWatch, setNextToWatch] = useState(null);

    const handleGetMovieSeries = async () => {
        try {
            const response = await getMovieSeries(filters);
            setMovieSeries(response.data);
            const unwatched = Object.values(response.data).flat().filter(m => !m.msWatched);
            const random = unwatched.length ? unwatched[Math.floor(Math.random() * unwatched.length)] : null;
            setNextToWatch(random);
        } catch (error) {
            toast.error(error.message || "Failed to fetch movie/series.");
        };
    };

    const handleDeleteMovieSeries = async (id) => {
        try {
            const response = await deleteMovieSeries(id);
            if (response.status === 200) {
                toast.success(response.data.message);
                handleGetMovieSeries();
            };
        } catch (error) {
            toast.error(error.message || "Error deleting movie/series");
        };
    };

    const handleWatchedMovieSeries = async (id) => {
        try {
            const response = await watchedMovieSeries(id);
            if (response.status === 200) {
                toast.success(response.data.message);
                handleGetMovieSeries();
            };
        } catch (error) {
            toast.error(error.message || "Error updating watched status");
        };
    };

    useEffect(() => {
        if (!filters) return;
        handleGetMovieSeries();
    }, [filters]);

    return { movieSeries, nextToWatch, handleGetMovieSeries, handleDeleteMovieSeries, handleWatchedMovieSeries };
};

export default useMovieSeries;