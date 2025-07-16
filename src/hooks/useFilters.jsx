import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

const defaultFilters = { w: "false", s: "", f: "", i: "", g: "", };

export const useFilters = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const [filters, setFilters] = useState(defaultFilters);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        setFilters({
            w: params.get("w") || "false",
            s: params.get("s") || "",
            f: params.get("f") || "",
            i: params.get("i") || "",
            g: params.get("g") || ""
        });
        setReady(true);
    }, [location.search]);

    useEffect(() => {
        if (!filters) return;

        const params = new URLSearchParams();
        Object.entries(filters).forEach(([key, value]) => {
            if (value && key) params.set(key, value);
        });

        navigate({ search: params.toString() }, { replace: true });
    }, [filters, navigate]);

    const updateFilter = (key, value) => setFilters((prev) => ({ ...prev, [key]: value }));

    const resetFilters = () => setFilters({ ...defaultFilters });

    return { filters, ready, updateFilter, resetFilters };
};