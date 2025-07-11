import api from "./api";

export const postMovieSeries = async (addData) => {
    try {
        const response = await api.post("/post", addData);
        return response;
    } catch (error) {
        console.error(error.message);
        throw error;
    };
};

export const getMovieSeries = async ({ s = "", f = "", i = "", g = "", w = "" }) => {
    try {
        const query = new URLSearchParams();

        if (s) query.append("search", s);
        if (f) query.append("format", f);
        if (i) query.append("industry", i);
        if (g) query.append("genre", g);
        if (w) query.append("watched", w);

        const response = await api.get(`/get?${query.toString()}`);
        return response.data;
    } catch (error) {
        console.error(error.message);
        throw error;
    };
};

export const updateMovieSeries = async (_id, msName, msAbout, msPoster, msLink, msSeason, msFormat, msIndustry, msOrigin, msReleaseDate, msGenre, msRating, msUploadedBy) => {
    try {
        const response = await api.patch(`/update/${_id}`, { msName, msAbout, msPoster, msLink, msSeason, msFormat, msIndustry, msOrigin, msReleaseDate, msGenre, msRating, msUploadedBy });
        return response;
    } catch (error) {
        console.error(error.message);
        throw error;
    };
};

export const deleteMovieSeries = async (id) => {
    try {
        const response = await api.delete(`/delete/${id}`);
        return response;
    } catch (error) {
        console.error(error.message);
        throw error;
    };
};