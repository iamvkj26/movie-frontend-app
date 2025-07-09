import { useFilters } from "../hooks/useFilters";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import Card from "../components/Card";
import Information from "../components/Information";
import FiltersMessage from "../components/FiltersMessage";

const All = () => {

    const { filters, ready, updateFilter, resetFilters } = useFilters();
    if (!ready || !filters) return null;

    return (
        <>
            <SearchBar updateFilter={updateFilter} />
            <Filters updateFilter={updateFilter} resetFilters={resetFilters} />
            <Information />
            <FiltersMessage updateFilter={updateFilter} filters={filters} />
            <Card filters={filters} />
        </>
    );
};

export default All;