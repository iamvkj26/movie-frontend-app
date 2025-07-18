import useFilters from "../hooks/useFilters";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import Information from "../components/Information";
import FiltersMessage from "../components/FiltersMessage";
import Card from "../components/card/Card";

const All = () => {

    const { filters, ready, updateFilter, resetFilters } = useFilters();
    if (!ready || !filters) return null;

    return (
        <>
            <SearchBar updateFilter={updateFilter} searchValue={filters.s} />
            <Filters updateFilter={updateFilter} resetFilters={resetFilters} />
            <Information />
            <FiltersMessage updateFilter={updateFilter} filters={filters} />
            <Card filters={filters} />
        </>
    );
};

export default All;