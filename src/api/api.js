import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4N2UyYzIwNTA5MjliYjUyYjk4YmZmYyIsImVtYWlsIjoiam9obmRvZUBnbWFpbC5jb20iLCJpYXQiOjE3NTMxMDIxMTQsImV4cCI6MTc1MzE4ODUxNH0.Eh2SAz7JNBUIS8W5Vx_ZUOHcuzvnku6YzGoT3J4UwBc"
    }
});

export default api;