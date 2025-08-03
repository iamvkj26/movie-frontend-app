import api from "./api";
import retryRequest from "./retryRequest";

const extractErrorMessage = (error) => error.response?.data?.message || error.message || "Something went wrong";

export const login = async (credentials) => {
    try {
        return await api.post("/auth/login", credentials);
    } catch (error) {
        console.error(error.message);
        throw new Error(extractErrorMessage(error));
    };
};

export const postMovieSeries = async (addData) => {
    try {
        return await api.post("/admin/post", addData);
    } catch (error) {
        console.error(error.message);
        throw new Error(extractErrorMessage(error));
    };
};

export const getMovieSeries = async (filters = {}) => {

    const { w = "", s = "", f = "", i = "", g = "" } = filters;

    try {
        const query = new URLSearchParams();

        if (w) query.append("watched", w);
        if (s) query.append("search", s);
        if (f) query.append("format", f);
        if (i) query.append("industry", i);
        if (g) query.append("genre", g);

        const response = await retryRequest(() => api.get(`/movieseries/get?${query.toString()}`));
        return response.data;
    } catch (error) {
        console.error(error.message);
        throw new Error(extractErrorMessage(error));
    };
};

export const updateMovieSeries = async (_id, msName, msAbout, msPoster, msLink, msSeason, msFormat, msIndustry, msReleaseDate, msGenre, msRating, msUploadedBy) => {
    try {
        return await api.patch(`/admin/update/${_id}`, { msName, msAbout, msPoster, msLink, msSeason, msFormat, msIndustry, msReleaseDate, msGenre, msRating, msUploadedBy });
    } catch (error) {
        console.error(error.message);
        throw new Error(extractErrorMessage(error));
    };
};

export const deleteMovieSeries = async (id) => {
    try {
        return await api.delete(`/admin/delete/${id}`);
    } catch (error) {
        console.error(error.message);
        throw new Error(extractErrorMessage(error));
    };
};

export const watchedMovieSeries = async (id) => {
    try {
        return await api.patch(`/admin/watched/${id}`);
    } catch (error) {
        console.error(error.message);
        throw new Error(extractErrorMessage(error));
    };
};