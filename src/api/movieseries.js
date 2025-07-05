import api from "./api";

export const postAllMovieSeries = async (addData) => {
    try {
        const response = await api.post("/post", addData);
        return response;
    } catch (error) {
        console.error(error.message);
        throw error;
    };
};

export const getAllMovieSeries = async ({ s = "", f = "", i = "" }) => {
    try {
        const query = new URLSearchParams();
        if (s) query.append("search", s);
        if (f) query.append("format", f);
        if (i) query.append("industry", i);

        const response = await api.get(`/all?${query.toString()}`);
        return response.data;
    } catch (error) {
        console.error(error.message);
        throw error;
    };
};

export const updateMovieSeries = async ({ id, msName, msAbout, msPoster, msLink, msSeason, msFormat, msIndustry, msYear, msGenre, msRating, msUploadedBy }) => {
    try {
        const response = await api.patch(`/update/${id}`, { msName, msAbout, msPoster, msLink, msSeason, msFormat, msIndustry, msYear, msGenre, msRating, msUploadedBy });
        return response;
    } catch (error) {
        console.error(error.message);
        throw error;
    };
};