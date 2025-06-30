import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

const defaultFilters = { search: "", type: "", category: "" };

export const useFilters = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const [filters, setFilters] = useState(null);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const search = params.get("search") || "";
        const type = params.get("type") || "";
        const category = params.get("category") || "";

        setFilters({ search, type, category });
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