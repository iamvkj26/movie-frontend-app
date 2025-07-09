import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

const defaultFilters = { s: "", f: "", i: "", g: "", w: "false" };

export const useFilters = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const [filters, setFilters] = useState(null);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const s = params.get("s") || "";
        const f = params.get("f") || "";
        const i = params.get("i") || "";
        const g = params.get("g") || "";
        const w = params.get("w") || "false";

        setFilters({ s, f, i, g, w });
        setReady(true);
    }, [location.search]);

    useEffect(() => {
        if (!filters) return;

        const params = new URLSearchParams();
        if (filters.s) params.set("s", filters.s);
        if (filters.f) params.set("f", filters.f);
        if (filters.i) params.set("i", filters.i);
        if (filters.g) params.set("g", filters.g);

        navigate({ search: params.toString() }, { replace: true });
    }, [filters, navigate]);

    const updateFilter = (key, value) => {
        setFilters((prev) => ({ ...prev, [key]: value }));
    };

    const resetFilters = () => {
        setFilters({ ...defaultFilters });
    };

    return { filters, ready, updateFilter, resetFilters };
};