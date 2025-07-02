import { Routes, Route } from "react-router";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import All from "./pages/All";
import AddMovieSeries from "./pages/AddMovieSeries";

const App = () => {

    return (
        <>
            <Toaster position="top-right" toastOptions={{ duration: 3000, style: { fontSize: "16px" } }} />
            <Navbar />
            <Routes><Route path="/" element={<All />} /></Routes>
            <Routes><Route path="/addMovieSeries" element={<AddMovieSeries />} /></Routes>
        </>
    );
};

export default App;