import { useFilters } from "../hooks/useFilters";
import SearchBar from "../components/SearchBar";
import CheckBox from "../components/CheckBox";
import Card from "../components/Card";

const All = () => {

    const { filters, updateFilter, resetFilters } = useFilters();
    if (!filters) return null;

    return (
        <>
            <SearchBar updateFilter={updateFilter} filters={filters} />
            <CheckBox updateFilter={updateFilter} resetFilters={resetFilters} filters={filters} />
            <Card filters={filters} />
        </>
    );
};

export default All;