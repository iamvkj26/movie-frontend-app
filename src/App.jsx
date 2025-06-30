import { Routes, Route } from "react-router";
import { useFilters } from "./hooks/useFilters";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import CheckBox from "./components/CheckBox";
import All from "./pages/All";

const App = () => {

    const { filters, updateFilter, resetFilters } = useFilters();
    if (!filters) return null;

    return (
        <>
            <Navbar updateFilter={updateFilter} />
            <SearchBar updateFilter={updateFilter} filters={filters} />
            <CheckBox updateFilter={updateFilter} resetFilters={resetFilters} filters={filters} />
            <Routes><Route path="/" element={<All filters={filters} />} /></Routes>
        </>
    );
};

export default App;