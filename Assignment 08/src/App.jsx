import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Apps from "./pages/Apps";
import AppDetails from "./pages/AppDetails";
import Installation from "./pages/Installation";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* All Apps */}
        <Route path="/apps" element={<Apps />} />

        {/* App Details */}
        <Route
          path="/apps/:id"
          element={<AppDetails />}
        />

        {/* Installation */}
        <Route
          path="/installation"
          element={<Installation />}
        />

        {/* 404 */}
        <Route
          path="*"
          element={
            <main className="app-not-found">
              <div className="container">
                <div className="not-found-content">

                  <h1>404</h1>

                  <h2>Oops, Page Not Found!</h2>

                  <p>
                    The page you are looking for is not available.
                  </p>

                  <button
                    className="primary-btn"
                    onClick={() => window.history.back()}
                  >
                    Go Back
                  </button>

                </div>
              </div>
            </main>
          }
        />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;