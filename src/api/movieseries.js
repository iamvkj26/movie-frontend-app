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

export const getAllMovieSeries = async ({ search = "", type = "", category = "" }) => {
    try {
        const query = new URLSearchParams();
        if (search) query.append("search", search);
        if (type) query.append("type", type);
        if (category) query.append("category", category);

        const response = await api.get(`/all?${query.toString()}`);
        return response.data;
    } catch (error) {
        console.error(error.message);
        throw error;
    };
};