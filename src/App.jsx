import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Settings from "./pages/Settings/Settings";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import './App.css';

function App() {
    return (
        <Router> {/* Router should wrap everything */}
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </Router>
    );
}

export default App;
