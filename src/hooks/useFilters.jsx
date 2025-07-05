import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

const defaultFilters = { s: "", f: "", i: "" };

export const useFilters = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const [filters, setFilters] = useState(null);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const s = params.get("s") || "";
        const f = params.get("f") || "";
        const i = params.get("i") || "";

        setFilters({ s, f, i });
    }, []);

    useEffect(() => {
        if (!filters) return;

        const params = new URLSearchParams(filters);
        navigate({ search: params.toString() }, { replace: true });
    }, [filters]);

    const updateFilter = (key, value) => {
        setFilters((prev) => ({ ...prev, [key]: value }));
    };

    const resetFilters = () => {
        setFilters({ ...defaultFilters });
    };

    return { filters, updateFilter, resetFilters };
};