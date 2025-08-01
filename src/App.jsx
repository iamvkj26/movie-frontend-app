import { Routes, Route } from "react-router";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Login from "./auth/Login";
import GuestRoute from "./routes/GuestRoute";
import AddMovieSeries from "./pages/AddMovieSeries";
import ProtectedRoute from "./routes/ProtectedRoute";
import MovieCardDetails from "./components/card/MovieCardDetails";

const App = () => {

    return (
        <>
            <div className="d-flex flex-column min-vh-100">
                <Toaster position="top-right" toastOptions={{ duration: 3000, style: { fontSize: "16px" } }} />
                <Navbar />
                <main className="flex-grow-1">
                    <Routes>
                        <Route path="/" element={<Index />} />
                        <Route path="/login" element={<GuestRoute><Login /></GuestRoute>} />
                        <Route path="/addMovieSeries" element={<ProtectedRoute><AddMovieSeries /></ProtectedRoute>} />
                        <Route path="/details/:id" element={<MovieCardDetails />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default App;